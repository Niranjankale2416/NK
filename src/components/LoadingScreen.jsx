import React from "react";

const LoadingScreen = ({ primaryColor = "#6366f1", secondaryColor = "#a855f7" }) => {
  return (
    <div className="min-h-screen bg-[#030014] flex items-center justify-center">
      {/* Glowing Background Effect */}
      <div className="relative">
        <div
          className="absolute -inset-4 rounded-full opacity-30 blur-3xl animate-pulse"
          style={{ background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})` }}
        ></div>

        {/* Loading Content */}
        <div className="relative flex flex-col items-center gap-4 p-8 animate-fade-in">
          {/* Spinning Loader */}
          <div
            className="w-12 h-12 rounded-full border-4 border-t-transparent animate-spin"
            style={{ borderColor: `${primaryColor} transparent ${primaryColor} ${primaryColor}` }}
          ></div>

          {/* Loading Text */}
          <div className="relative">
            <div
              className="absolute -inset-1 rounded blur opacity-20"
              style={{ background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})` }}
            ></div>
            <span className="relative text-gray-200 text-sm" aria-live="polite">
              Loading...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
