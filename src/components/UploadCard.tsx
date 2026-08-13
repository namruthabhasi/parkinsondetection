import React, { useState, useRef } from 'react';
import { UploadCloud, Image as ImageIcon, CheckCircle, RefreshCw, ArrowRight } from 'lucide-react';
import './UploadCard.css';

interface UploadCardProps {
  onFileSelect: (file: File) => void;
  isAnalyzing?: boolean;
}

export const UploadCard: React.FC<UploadCardProps> = ({ onFileSelect, isAnalyzing = false }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (!file.type.match('image/(png|jpeg|jpg)')) {
      alert('Please select a PNG, JPG, or JPEG image file.');
      return;
    }
    setSelectedFile(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = () => {
    if (selectedFile) {
      onFileSelect(selectedFile);
    }
  };

  return (
    <div className="upload-card-wrapper card">
      <div className="upload-card-header">
        <h2 className="upload-title">Analyze a Spiral</h2>
        <p className="upload-subtitle">Upload a spiral drawing to begin the AI analysis.</p>
      </div>

      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleInputChange} 
        accept="image/png, image/jpeg, image/jpg"
        style={{ display: 'none' }}
      />

      {!selectedFile ? (
        <div 
          className={`drop-zone ${isDragOver ? 'drag-over' : ''}`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="upload-icon-container">
            <UploadCloud size={32} className="upload-icon" />
          </div>
          <h3 className="drop-title">Upload Spiral Drawing</h3>
          <p className="drop-desc">Drag & drop your image here or browse from your device</p>
          
          <button 
            type="button" 
            className="btn-secondary upload-browse-btn"
            onClick={(e) => {
              e.stopPropagation();
              fileInputRef.current?.click();
            }}
          >
            <ImageIcon size={16} />
            <span>Choose Image</span>
          </button>
          
          <span className="file-format-note">Supported formats: PNG, JPG, or JPEG</span>
        </div>
      ) : (
        <div className="preview-container-box">
          <div className="preview-image-wrapper">
            {previewUrl && <img src={previewUrl} alt="Uploaded Spiral Preview" className="preview-img" />}
          </div>
          
          <div className="preview-info-col">
            <div className="file-meta">
              <CheckCircle size={18} className="success-icon" />
              <div className="file-text-meta">
                <span className="file-name">{selectedFile.name}</span>
                <span className="file-size">{(selectedFile.size / 1024).toFixed(1)} KB</span>
              </div>
            </div>

            <div className="preview-action-row">
              <button type="button" className="btn-secondary" onClick={handleReset} disabled={isAnalyzing}>
                <RefreshCw size={15} />
                <span>Choose Different Image</span>
              </button>

              <button type="button" className="btn-accent" onClick={handleSubmit} disabled={isAnalyzing}>
                <span>Analyze Image</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
