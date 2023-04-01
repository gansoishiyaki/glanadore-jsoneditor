import React from 'react';
import './App.css';
import { useState } from "react";
import FileDropZone from "./FileDropZone";

export default function App() {
  const [data, setData] = useState<any>(null)
  const [type, setType] = useState(String)
  const [showDropZone, setShowDropZone] = useState(true)

  const setFile = (file: File) => {
    if (file.type != 'application/json') {
      console.error('Invalid file type. Please drop a JSON file.');
      return;
    }

    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (event) => {
      const fileContent = event.target?.result as string;
      // JSONファイルの内容をパースする
      const jsonData = JSON.parse(fileContent);
      setShowDropZone(false);
      setData(jsonData);
      setType(file.name.replace('.json', ''));
    };
  };

  return (
    <div>
      { showDropZone && <FileDropZone setFile={setFile}/> }
    </div>
  )
}
