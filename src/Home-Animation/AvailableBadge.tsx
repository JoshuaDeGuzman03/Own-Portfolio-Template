import React from "react";

interface AvailableBadgeProps {
  text?: string;
  className?: string;
}

const AvailableBadge: React.FC<AvailableBadgeProps> = ({
  text = "Available for Opportunities",
  className = "",
}) => {
  return (
    <div className={`relative inline-block group ${className}`}>
      <span
        className="relative z-10 px-5 py-2 font-semibold rounded-full shadow-md cursor-pointer overflow-hidden transition-transform duration-300 transform-gpu
          group-hover:-translate-y-1 group-hover:scale-105"
        style={{
          background: "linear-gradient(270deg, #2a1a70, #5638b0, #2a1a70)", // darker but shiny
          backgroundSize: "400% 400%",
          color: "#f0f0f0", // bright but not pure white
          boxShadow: "0 0 12px rgba(86, 56, 176, 0.6), 0 0 18px rgba(42, 26, 112, 0.4)",
        }}
      >
        {text}
      </span>

      {/* Gentle animated gradient behind */}
      <span
        className="absolute inset-0 rounded-full blur-md opacity-40 animate-gradient-shift"
        style={{
          background: "linear-gradient(270deg, #2a1a70, #5638b0, #2a1a70)",
          backgroundSize: "400% 400%",
        }}
      ></span>

      <style>
        {`
          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-shift {
            animation: gradient-shift 15s ease infinite;
          }
        `}
      </style>
    </div>
  );
};

export default AvailableBadge;
