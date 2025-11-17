import React, { useState, useEffect } from "react";

interface Star {
  id: number;
  size: number;
  top: string;
  left: string;
  shadow: string;
  duration: string;
}

interface BgStarsProps {
  count?: number;
}

const BgStars: React.FC<BgStarsProps> = ({ count = 120 }) => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate stars only once on mount
    const generatedStars: Star[] = Array.from({ length: count }, (_, i) => {
      const size = Math.random() * 3 + 2;
      return {
        id: i,
        size,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        shadow: `0 0 ${Math.random() * 12 + 8}px rgba(255,255,255,0.7)`,
        duration: `${Math.random() * 4 + 3}s`,
      };
    });
    setStars(generatedStars);
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full animate-glow"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
            backgroundColor: "rgba(255,255,255,0.8)",
            boxShadow: star.shadow,
            animationDuration: star.duration,
          }}
        />
      ))}

      <style>
        {`
          @keyframes glow {  
            0%,100% { opacity: 0.2; transform: scale(0.8); }  
            50% { opacity: 1; transform: scale(1.2); }  
          }
          .animate-glow { animation: glow infinite alternate; }
        `}
      </style>
    </div>
  );
};

export default BgStars;
