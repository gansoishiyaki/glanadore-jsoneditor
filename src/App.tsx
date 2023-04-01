import './App.css';
import { useState } from "react";
import FileDropZone from "./FileDropZone";
import CardList from './card/CardList';

export default function App() {
  const [data, setData] = useState<any[]>([])
  const [type, setType] = useState("")
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
      setData(jsonData.list);
      setType(file.name.replace('.json', ''));
      console.log(file.name);
    };
  };

  return (
    <div>
      { showDropZone && <FileDropZone setFile={setFile}/> }
      { type == "cards" && <CardList data={data}/> }
    </div>
  )
}
