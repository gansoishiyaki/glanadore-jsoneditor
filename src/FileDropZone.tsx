import { useState } from "react";

interface FileDropZoneProps {
  setFile: (file: File) => void;
}

export default function FileDropZone(props: FileDropZoneProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragging(false)
    props.setFile(event.dataTransfer.files[0])
  }

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      props.setFile(files[0])
    }
  };

  return (
    <div>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        style={{ border: isDragging ? "2px dashed red" : "2px dashed gray" }}
      >
        {isDragging ? "Drop here" : "Drag files here"}
      </div>
      <input type="file" onChange={handleFileSelect} className="btn btn-blue"/>
    </div>
  );
}