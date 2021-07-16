import React, { useState } from "react";
import axios from "axios";

function Upload() {
  const [file, setFile] = useState();
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});

  const SelectFile = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const UploadFile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
    } catch (err) {}
  };
  return (
    <div>
      <form onSubmit={UploadFile}>
        <div>
          <input type="file" id="customFile" onChange={SelectFile} />
          <input type="submit" value="Upload" />
        </div>
      </form>
    </div>
  );
}

export default Upload;
