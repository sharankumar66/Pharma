import React, { useState, useRef} from 'react';
import Papa from 'papaparse';
import * as XLSX from 'xlsx';

const FileUpload = ({ onDataLoaded }) => {
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileType = file.type;
    if (fileType.includes('csv')) {
      handleCSVUpload(file);
    } else if (fileType.includes('sheet') || fileType.includes('excel')) {
      handleExcelUpload(file);
    } else {
      setError('Unsupported file type.');
    }
  };

  const handleCSVUpload = (file) => {
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        onDataLoaded(results.data);
        setError(null);
      },
      error: (err) => {
        setError(err.message);
      },
    });
  };

  const handleExcelUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      onDataLoaded(json);
      setError(null);
    };
    reader.readAsArrayBuffer(file);
  };
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };


  return (
    <div className="flex flex-col items-center p-4  border-dashed border-2 border-gray-400 rounded-lg bg-gray-200 shadow-lg">
      <input
        type="file"
        accept=".csv, .xlsx, .xls"
        onChange={handleFileChange}
        ref={fileInputRef}
        className="hidden"
      />
      <div className="p-2 text-base md:text-">Just import purchase Bill (csv),<br/>We will list down all items for you</div>
      <button
        type="button"
        onClick={triggerFileInput}
        className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      >
        Upload File
      </button>
      {error && (
        <p className="text-red-500 font-medium mt-2">{error}</p>
      )}
    </div>
  );
};

export default FileUpload;
