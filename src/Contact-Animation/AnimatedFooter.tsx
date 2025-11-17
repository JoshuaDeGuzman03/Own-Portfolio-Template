import React from "react";

const AnimatedFooter: React.FC = () => {
  return (
    <footer className="w-full text-center py-6 relative z-10 mt-auto">
      <p className="animate-fade-up text-white font-semibold text-lg">
        &copy; 2025 John Doe
      </p>
      <p className="italic animate-fade-up delay-200 text-white text-sm">
        “Strive for progress, not perfection.”
      </p>

      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 1s forwards;
        }
        .animate-fade-up.delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </footer>
  );
};

export default AnimatedFooter;
