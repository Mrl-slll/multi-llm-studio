const formidable = require('formidable');
const pdfParse = require('pdf-parse');
const fs = require('fs');

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
      maxFileSize: 10 * 1024 * 1024, // 10MB limit
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

    const filePath = file.filepath;
    const mimeType = file.mimetype;
    const fileName = file.originalFilename || 'unknown';

    let extractedText = '';

    // Handle PDF files
    if (mimeType === 'application/pdf' || fileName.toLowerCase().endsWith('.pdf')) {
      const dataBuffer = fs.readFileSync(filePath);
      const pdfData = await pdfParse(dataBuffer);
      extractedText = pdfData.text;
    }
    // Handle plain text files
    else if (mimeType === 'text/plain' || fileName.toLowerCase().endsWith('.txt')) {
      extractedText = fs.readFileSync(filePath, 'utf-8');
    }
    // Handle markdown files
    else if (fileName.toLowerCase().endsWith('.md')) {
      extractedText = fs.readFileSync(filePath, 'utf-8');
    }
    else {
      // Cleanup
      fs.unlinkSync(filePath);
      return res.status(400).json({ 
        error: 'Unsupported file type. Please upload PDF, TXT, or MD files.' 
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
    });

  } catch (error) {
    console.error('Upload error:', error);
    return res.status(500).json({ 
      error: 'Failed to process file', 
      details: error.message 
    });
  }
};
