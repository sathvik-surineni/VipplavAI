import React, { useState } from 'react';
import axios from 'axios';

const TeluguOCR = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [extractedText, setExtractedText] = useState('');
  const [pageImage, setPageImage] = useState('');
  const [jsonFile, setJsonFile] = useState('');

  const handleFileChange = (event) => {
    setPdfFile(event.target.files[0]);
  };

  const uploadPdf = async () => {
    const formData = new FormData();
    formData.append('pdf', pdfFile);

    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/Vipplav/telugu_ocr_test/upload_pdf',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      const [imagePath, text, pageNum] = response.data;
      setPageImage(imagePath);
      setExtractedText(text);
      setPageNumber(pageNum);
    } catch (error) {
      console.error('Error uploading PDF:', error);
    }
  };

  const saveAndNext = async () => {
    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/Vipplav/telugu_ocr_test/save_and_next',
        { page_num: pageNumber, text: extractedText }
      );
      const [text, pageNum, imagePath, jsonFilePath] = response.data;
      setExtractedText(text);
      setPageNumber(pageNum);
      setPageImage(imagePath);
      setJsonFile(jsonFilePath);
    } catch (error) {
      console.error('Error saving and going to next page:', error);
    }
  };

  const skipPage = async () => {
    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/Vipplav/telugu_ocr_test/skip_page',
        { page_num: pageNumber }
      );
      const [text, pageNum, imagePath] = response.data;
      setExtractedText(text);
      setPageNumber(pageNum);
      setPageImage(imagePath);
    } catch (error) {
      console.error('Error skipping page:', error);
    }
  };

  const updatePageButtons = async () => {
    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/Vipplav/telugu_ocr_test/update_page_buttons'
      );
      // Handle the response if needed
    } catch (error) {
      console.error('Error updating page buttons:', error);
    }
  };

  return (
    <div>
      <h1>Telugu OCR</h1>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button onClick={uploadPdf}>Upload PDF</button>
      <div>
        <h2>Extracted Text</h2>
        <textarea
          value={extractedText}
          onChange={(e) => setExtractedText(e.target.value)}
        />
      </div>
      <div>
        <h2>Page Image</h2>
        {pageImage && <img src={pageImage} alt="Page" />}
      </div>
      <div>
        <h2>Page Number</h2>
        <input
          type="number"
          value={pageNumber}
          onChange={(e) => setPageNumber(e.target.value)}
        />
      </div>
      <button onClick={saveAndNext}>Save and Next</button>
      <button onClick={skipPage}>Skip Page</button>
      <button onClick={updatePageButtons}>Update Page Buttons</button>
      {jsonFile && (
        <div>
          <h2>Download JSON</h2>
          <a href={jsonFile} download>
            Download JSON
          </a>
        </div>
      )}
    </div>
  );
};

export default TeluguOCR;
