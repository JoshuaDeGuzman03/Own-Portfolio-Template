import React from "react";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number; // in ms
  visible?: boolean;
}

const FadeUp: React.FC<FadeUpProps> = ({ children, delay = 0, visible = false }) => {
  return (
    <div
      className={`transform transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeUp;
