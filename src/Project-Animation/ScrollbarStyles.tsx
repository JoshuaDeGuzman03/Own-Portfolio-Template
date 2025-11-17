import React from "react";

const ScrollbarStyles: React.FC = () => {
  return (
    <style>{`
      /* Horizontal Scrollbar Styles */
      * {
        scrollbar-width: thin;
        scrollbar-color: #1f2937 #111827;
      }
      *::-webkit-scrollbar {
        height: 8px;
      }
      *::-webkit-scrollbar-track {
        background: #111827;
        border-radius: 4px;
      }
      *::-webkit-scrollbar-thumb {
        background-color: #1f2937;
        border-radius: 4px;
      }
      *::-webkit-scrollbar-thumb:hover {
        background-color: #2563eb;
      }
    `}</style>
  );
};

export default ScrollbarStyles;
