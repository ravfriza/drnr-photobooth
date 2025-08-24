"use client";
import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Camera, X, Download, Trash2 } from "lucide-react";

// Constants for better maintainability
const WEBCAM_CONFIG = {
  width: 1280,
  height: 720,
  aspectRatio: 16 / 9,
  quality: 0.92,
} as const;

interface Photo {
  id: string;
  url: string;
  timestamp: Date;
}

export default function WebcamComponent() {
  const webcamRef = useRef<Webcam>(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [photoCollection, setPhotoCollection] = useState<Photo[]>([]);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const videoConstraints = {
    width: WEBCAM_CONFIG.width,
    height: WEBCAM_CONFIG.height,
    aspectRatio: WEBCAM_CONFIG.aspectRatio,
    facingMode: "user",
  };

  const capture = useCallback(async () => {
    if (!webcamRef.current) return;
    
    setIsCapturing(true);
    setCameraError(null);
    
    try {
      const imageSrc = webcamRef.current.getScreenshot({
        width: WEBCAM_CONFIG.width,
        height: WEBCAM_CONFIG.height,
      });
      
      if (!imageSrc) {
        throw new Error("Failed to capture image");
      }
      
      const newPhoto: Photo = {
        id: `photo-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        url: imageSrc,
        timestamp: new Date(),
      };
      
      setPhotoCollection((prevPhotos) => [...prevPhotos, newPhoto]);
      
      // Visual feedback
      setTimeout(() => setIsCapturing(false), 300);
    } catch (error) {
      console.error("Camera capture error:", error);
      setCameraError("Failed to capture photo. Please try again.");
      setIsCapturing(false);
    }
  }, []);

  const deletePhoto = useCallback((photoId: string) => {
    setPhotoCollection((prevPhotos) => 
      prevPhotos.filter((photo) => photo.id !== photoId)
    );
    if (selectedPhoto === photoId) {
      setSelectedPhoto(null);
    }
  }, [selectedPhoto]);

  const clearAllPhotos = useCallback(() => {
    setPhotoCollection([]);
    setSelectedPhoto(null);
  }, []);

  const downloadPhoto = useCallback((photo: Photo) => {
    const link = document.createElement("a");
    link.href = photo.url;
    link.download = `photobooth-${photo.timestamp.getTime()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const handleUserMediaError = useCallback(() => {
    setCameraError("Unable to access camera. Please check permissions.");
  }, []);

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Camera Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Camera</h2>
          
          {/* Webcam Container */}
          <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
            <Webcam
              audio={false}
              ref={webcamRef}
              mirrored={true}
              screenshotFormat="image/jpeg"
              screenshotQuality={WEBCAM_CONFIG.quality}
              videoConstraints={videoConstraints}
              onUserMediaError={handleUserMediaError}
              className="w-full h-full object-cover"
            />
            
            {/* Camera Error Overlay */}
            {cameraError && (
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <Camera className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>{cameraError}</p>
                </div>
              </div>
            )}
            
            {/* Capture Flash Effect */}
            {isCapturing && (
              <div className="absolute inset-0 bg-white animate-pulse" />
            )}
          </div>
          
          {/* Capture Button */}
          <div className="flex justify-center">
            <Button
              onClick={capture}
              disabled={isCapturing || !!cameraError}
              size="lg"
              className="group"
              aria-label="Capture photo"
            >
              <Camera className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              {isCapturing ? "Capturing..." : "Capture Photo"}
            </Button>
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">
              Photos ({photoCollection.length})
            </h2>
            {photoCollection.length > 0 && (
              <Button
                onClick={clearAllPhotos}
                variant="outline"
                size="sm"
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Clear All
              </Button>
            )}
          </div>
          
          {/* Photo Grid */}
          {photoCollection.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {photoCollection.map((photo) => (
                <div
                  key={photo.id}
                  className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                  onClick={() => setSelectedPhoto(photo.id)}
                >
                  <img
                    src={photo.url}
                    alt={`Captured photo from ${photo.timestamp.toLocaleTimeString()}`}
                    className="w-full h-full object-cover aspect-square"
                  />
                  
                  {/* Photo Actions Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={(e) => {
                          e.stopPropagation();
                          downloadPhoto(photo);
                        }}
                        aria-label="Download photo"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={(e) => {
                          e.stopPropagation();
                          deletePhoto(photo.id);
                        }}
                        aria-label="Delete photo"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <Camera className="w-12 h-12 mx-auto text-gray-400 mb-3" />
              <p className="text-gray-500">No photos captured yet</p>
              <p className="text-sm text-gray-400 mt-1">
                Click the capture button to take your first photo
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Photo Preview Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={photoCollection.find((p) => p.id === selectedPhoto)?.url}
              alt="Photo preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <Button
              className="absolute top-4 right-4"
              size="sm"
              variant="secondary"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhoto(null);
              }}
              aria-label="Close preview"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}