const formidable = require('formidable');
const pdfParse = require('pdf-parse');
const mammoth = require('mammoth');
const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');
const os = require('os');

// Disable default body parser for file uploads
export const config = {
  api: {
    bodyParser: false,
    responseLimit: false,
  },
};

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let uploadedFilePath = null;

  try {
    const tmpDir = os.tmpdir();
    
    const form = formidable({
      maxFileSize: 50 * 1024 * 1024, // 50MB limit
      keepExtensions: true,
      uploadDir: tmpDir,
      multiples: false,
    });

    console.log('Starting file parse...');
    
    const parseResult = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          console.error('Formidable parse error:', err);
          reject(err);
          return;
        }
        console.log('Parse successful, files:', Object.keys(files));
        resolve({ fields, files });
      });
    });

    const { files } = parseResult;
    
    // Handle both formidable v2 and v3 formats
    let file = files.file;
    if (Array.isArray(file)) {
      file = file[0];
    }
    
    if (!file) {
      console.log('No file found. Files object keys:', Object.keys(files));
      return res.status(400).json({ 
        error: 'No file uploaded',
        received: Object.keys(files)
      });
    }

    uploadedFilePath = file.filepath || file.path;
    const fileName = file.originalFilename || file.name || 'unknown';
    const fileExt = path.extname(fileName).toLowerCase();
    
    console.log('File received:', { 
      uploadedFilePath, 
      fileName, 
      fileExt, 
      fileSize: file.size,
      exists: fs.existsSync(uploadedFilePath)
    });

    let extractedText = '';
    
    // Check if file exists
    if (!fs.existsSync(uploadedFilePath)) {
      return res.status(400).json({ 
        error: 'File not found after upload',
        details: 'The uploaded file could not be accessed. Please try again.'
      });
    }

    try {
      // PDF files
      if (fileExt === '.pdf') {
        try {
          const dataBuffer = fs.readFileSync(uploadedFilePath);
          const pdfData = await pdfParse(dataBuffer);
          extractedText = pdfData.text;
        } catch (err) {
          throw new Error(`Failed to read PDF: ${err.message}`);
        }
      }
      
      // Word documents (.docx, .doc)
      else if (fileExt === '.docx' || fileExt === '.doc') {
        try {
          const dataBuffer = fs.readFileSync(uploadedFilePath);
          const result = await mammoth.extractRawText({ buffer: dataBuffer });
          extractedText = result.value;
        } catch (err) {
          throw new Error(`Failed to read Word document: ${err.message}`);
        }
      }
      
      // Excel spreadsheets (.xlsx, .xls)
      else if (fileExt === '.xlsx' || fileExt === '.xls') {
        try {
          const workbook = xlsx.readFile(uploadedFilePath);
          let allText = '';
          workbook.SheetNames.forEach(sheetName => {
            const sheet = workbook.Sheets[sheetName];
            const sheetText = xlsx.utils.sheet_to_csv(sheet);
            allText += `\n\n=== Sheet: ${sheetName} ===\n${sheetText}`;
          });
          extractedText = allText;
        } catch (err) {
          throw new Error(`Failed to read Excel file: ${err.message}`);
        }
      }
      
      // CSV files
      else if (fileExt === '.csv') {
        try {
          extractedText = fs.readFileSync(uploadedFilePath, 'utf-8');
        } catch (err) {
          throw new Error(`Failed to read CSV file: ${err.message}`);
        }
      }
      
      // Plain text files (.txt, .md, .rtf)
      else if (['.txt', '.md', '.rtf'].includes(fileExt)) {
        try {
          extractedText = fs.readFileSync(uploadedFilePath, 'utf-8');
        } catch (err) {
          throw new Error(`Failed to read text file: ${err.message}`);
        }
      }
      
      // Code files
      else if (['.py', '.js', '.java', '.cpp', '.c', '.h', '.r', '.html', '.css', '.ipynb'].includes(fileExt)) {
        try {
          extractedText = fs.readFileSync(uploadedFilePath, 'utf-8');
          // For Jupyter notebooks, extract only text content
          if (fileExt === '.ipynb') {
            try {
              const notebook = JSON.parse(extractedText);
              let notebookText = '';
              notebook.cells?.forEach((cell, idx) => {
                notebookText += `\n\n=== Cell ${idx + 1} (${cell.cell_type}) ===\n`;
                if (Array.isArray(cell.source)) {
                  notebookText += cell.source.join('');
                } else {
                  notebookText += cell.source;
                }
              });
              extractedText = notebookText;
            } catch (e) {
              // If JSON parsing fails, keep raw text
            }
          }
        } catch (err) {
          throw new Error(`Failed to read code file: ${err.message}`);
        }
      }
      
      // PowerPoint files (.pptx, .ppt) - basic extraction
      else if (fileExt === '.pptx' || fileExt === '.ppt') {
        // For now, return a message indicating limited support
        extractedText = `[PowerPoint file: ${fileName}]\nNote: Text extraction from PowerPoint files is limited. Please export to PDF for better results.`;
      }
      
      // ODT/ODP/ODS files
      else if (['.odt', '.odp', '.ods'].includes(fileExt)) {
        extractedText = `[OpenDocument file: ${fileName}]\nNote: Please convert to PDF, DOCX, or XLSX for better text extraction.`;
      }
      
      // Image files - note that we can't extract text without OCR
      else if (['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.tif'].includes(fileExt)) {
        extractedText = `[Image file: ${fileName}]\nNote: This is an image file. To extract text from images, please use an OCR tool first or describe the image content in your question.`;
      }
      
      else {
        if (fs.existsSync(uploadedFilePath)) {
          fs.unlinkSync(uploadedFilePath);
        }
        return res.status(400).json({ 
          error: `Unsupported file type: ${fileExt}`,
          message: 'Supported types: PDF, Word (.docx/.doc), Excel (.xlsx/.xls), CSV, Text (.txt/.md/.rtf), Code files (.py/.js/.java/.cpp/.c/.r/.html/.css/.ipynb), and PowerPoint (.pptx/.ppt)'
        });
      }

      // Cleanup uploaded file
      if (fs.existsSync(uploadedFilePath)) {
        fs.unlinkSync(uploadedFilePath);
      }
      
      console.log('Successfully extracted text, length:', extractedText.length);

      // Return extracted text
      return res.status(200).json({
        success: true,
        text: extractedText,
        fileName: fileName,
        fileSize: file.size,
        fileType: fileExt,
      });

    } catch (extractError) {
      // Cleanup on error
      if (uploadedFilePath && fs.existsSync(uploadedFilePath)) {
        fs.unlinkSync(uploadedFilePath);
      }
      throw extractError;
    }

  } catch (error) {
    console.error('Upload error:', error);
    console.error('Error stack:', error.stack);
    
    // Cleanup on outer error
    if (uploadedFilePath && fs.existsSync(uploadedFilePath)) {
      try {
        fs.unlinkSync(uploadedFilePath);
      } catch (cleanupError) {
        console.error('Cleanup error:', cleanupError);
      }
    }
    
    return res.status(500).json({ 
      error: 'Failed to process file', 
      details: error.message,
      type: error.name
    });
  }
};
