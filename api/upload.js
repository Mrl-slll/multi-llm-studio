const formidable = require('formidable');
const pdfParse = require('pdf-parse');
const mammoth = require('mammoth');
const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

// Disable default body parser for file uploads
export const config = {
  api: {
    bodyParser: false,
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

  try {
    const form = formidable({
      maxFileSize: 50 * 1024 * 1024, // 50MB limit
      keepExtensions: true,
    });

    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve([fields, files]);
      });
    });

    const file = files.file?.[0] || files.file;
    
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const filePath = file.filepath || file.path;
    const fileName = file.originalFilename || file.name || 'unknown';
    const fileExt = path.extname(fileName).toLowerCase();
    
    console.log('Upload debug:', { filePath, fileName, fileExt, fileExists: fs.existsSync(filePath) });

    let extractedText = '';
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return res.status(400).json({ 
        error: 'File not found after upload',
        details: 'The uploaded file could not be accessed. Please try again.'
      });
    }

    try {
      // PDF files
      if (fileExt === '.pdf') {
        try {
          const dataBuffer = fs.readFileSync(filePath);
          const pdfData = await pdfParse(dataBuffer);
          extractedText = pdfData.text;
        } catch (err) {
          throw new Error(`Failed to read PDF: ${err.message}`);
        }
      }
      
      // Word documents (.docx, .doc)
      else if (fileExt === '.docx' || fileExt === '.doc') {
        try {
          const dataBuffer = fs.readFileSync(filePath);
          const result = await mammoth.extractRawText({ buffer: dataBuffer });
          extractedText = result.value;
        } catch (err) {
          throw new Error(`Failed to read Word document: ${err.message}`);
        }
      }
      
      // Excel spreadsheets (.xlsx, .xls)
      else if (fileExt === '.xlsx' || fileExt === '.xls') {
        try {
          const workbook = xlsx.readFile(filePath);
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
          extractedText = fs.readFileSync(filePath, 'utf-8');
        } catch (err) {
          throw new Error(`Failed to read CSV file: ${err.message}`);
        }
      }
      
      // Plain text files (.txt, .md, .rtf)
      else if (['.txt', '.md', '.rtf'].includes(fileExt)) {
        extractedText = fs.readFileSync(filePath, 'utf-8');
      }
      
      // Code files
      else if (['.py', '.js', '.java', '.cpp', '.c', '.h', '.r', '.html', '.css', '.ipynb'].includes(fileExt)) {
        extractedText = fs.readFileSync(filePath, 'utf-8');
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
        fs.unlinkSync(filePath);
        return res.status(400).json({ 
          error: `Unsupported file type: ${fileExt}`,
          message: 'Supported types: PDF, Word (.docx/.doc), Excel (.xlsx/.xls), CSV, Text (.txt/.md/.rtf), Code files (.py/.js/.java/.cpp/.c/.r/.html/.css/.ipynb), and PowerPoint (.pptx/.ppt)'
        });
      }

      // Cleanup uploaded file
      fs.unlinkSync(filePath);

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
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
      throw extractError;
    }

  } catch (error) {
    console.error('Upload error:', error);
    console.error('Error stack:', error.stack);
    return res.status(500).json({ 
      error: 'Failed to process file', 
      details: error.message,
      type: error.name
    });
  }
};
