'use client';

import { useState } from 'react';
import '../globals.css';
import './gallery.css';
import Link from 'next/link';

const mediaFiles = [
  '/media/WhatsApp Image 2025-05-14 at 10.19.54 (3).jpeg',
  '/media/WhatsApp Image 2025-05-14 at 10.19.54 (4).jpeg',
  '/media/WhatsApp Image 2025-05-14 at 10.19.54 (5).jpeg',
  '/media/WhatsApp Video 2025-05-14 at 10.19.55 (1).mp4',
  '/media/WhatsApp Video 2025-05-14 at 10.19.55 (2).mp4',
  '/media/WhatsApp Video 2025-05-14 at 10.19.55.mp4'
];

export default function Gallery() {
  const [preview, setPreview] = useState(null);

  return (
    <div className="gallery-container">
      <div className="left-sidebar scroll-aware fixed-sidebar">
        <Link href="/" className="nav-button highlight-button">The Apology - Go back</Link>
      </div>

      <div className="gallery-rows">
            <div className="media-row">
                {mediaFiles.slice(0, 3).map((file, index) => (
                <img
                    key={index}
                    src={file}
                    className="gallery-item"
                    onClick={() => setPreview(file)}
                    alt={`Memory ${index + 1}`}
                />
                ))}
            </div>
            <div className="media-row">
                {mediaFiles.slice(3, 6).map((file, index) => (
                <video
                    key={index}
                    className="gallery-item"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={file} type="video/mp4" />
                </video>
                ))}
            </div>
            </div>

      {preview && (
        <div className="lightbox" onClick={() => setPreview(null)}>
          <img src={preview} alt="Preview" className="lightbox-image" />
        </div>
      )}
    </div>
  );
}