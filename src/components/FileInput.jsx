import React, { useState } from 'react';

function FileInput() {
  const [files, setFiles] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    setFiles([...files, ...droppedFiles]);
  };

  const handleInputChange = (e) => {
    const selectedFiles = e.target.files;
    setFiles([...files, ...selectedFiles]);
  };


  const submitFunc = (e)=>{
    e.preventDefault();
    console.log("submit====",files);
  }
  console.log("submit====",files);
  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      style={{ width: '300px', height: '200px', border: '1px solid black' }}
    >
      <input type="file" onChange={handleInputChange} multiple />
      <div>
        {files.map((file, index) => (
          <div key={index}>{file.name}</div>
        ))}
      </div>
    </div>
  );
}
export default FileInput