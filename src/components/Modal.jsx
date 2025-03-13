import React, { useState, useEffect } from "react";
import { X, ArrowRight, ExternalLink } from "lucide-react";

const ProjectCardModal = ({ title, description, link }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Open Button */}
      <button
        className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition duration-200"
        onClick={() => setIsOpen(true)}
      >
        <span className="text-sm">Details</span>
        <ArrowRight className="w-4 h-4" />
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Content */}
          <div
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-md rounded-xl bg-gray-900 p-6 text-white shadow-xl animate-slide-up sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button (Top Right) */}
            <button
              className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-800 transition duration-200"
              onClick={() => setIsOpen(false)}
              aria-label="Close Modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Title & Description */}
            <h2 className="mb-4 text-2xl font-bold">{title}</h2>
            <p className="mb-6 text-gray-400">{description}</p>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 rounded-md bg-blue-600 px-4 py-2 font-medium hover:bg-blue-700 transition duration-200"
              >
                <span>Live Demo</span>
                <ExternalLink className="h-5 w-5" />
              </a>
              <button
                className="rounded-md bg-gray-800 px-4 py-2 font-medium hover:bg-gray-700 transition duration-200"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCardModal;
