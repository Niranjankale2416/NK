import React, { useState } from "react";
import { FiX } from "react-icons/fi"; // For close icon (optional)

const CertificateCard = ({ title, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  const imagePath = `${import.meta.env.BASE_URL}Certificate/${image}`;

  return (
    <>
      {/* Thumbnail Card */}
      <div
        onClick={() => setIsOpen(true)}
        className="w-full max-w-sm bg-white/5 p-3 rounded-xl border border-white/10 hover:border-purple-500 transition-all duration-300 shadow-md cursor-pointer relative group"
      >
        <img
          src={imagePath}
          alt={title}
          className="w-full h-48 object-contain rounded-md mb-2"
          loading="lazy"
        />
        {/* Optional Zoom Icon on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 rounded-md">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M15 10l4.553-4.553a1 1 0 10-1.414-1.414L13.586 8.586A2 2 0 0012 8H8a2 2 0 00-2 2v4a2 2 0 002 2h1" />
            <path d="M10 14l-4.553 4.553a1 1 0 101.414 1.414L10.414 15.414A2 2 0 0012 16h4a2 2 0 002-2v-4a2 2 0 00-2-2h-1" />
          </svg>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="relative max-w-6xl w-full max-h-full overflow-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white bg-slate-700 hover:bg-slate-600 rounded-full p-2 z-50"
              title="Close"
            >
              <FiX className="h-6 w-6" />
            </button>

            {/* Full Certificate */}
            <img
              src={imagePath}
              alt={title}
              className="w-full h-auto object-contain rounded-md"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CertificateCard;
