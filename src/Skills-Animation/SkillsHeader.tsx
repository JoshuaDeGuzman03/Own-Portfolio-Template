import React from "react";

interface SkillsHeaderProps {
  visible: boolean;
}

const SkillsHeader: React.FC<SkillsHeaderProps> = ({ visible }) => {
  return (
    <>
      <h2
        className={`text-5xl font-bold mb-6 text-blue-400 drop-shadow-lg z-10 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        Skills
      </h2>
      <p
        className={`mb-10 text-justify text-gray-300 max-w-2xl z-10 transition-all duration-1000 ease-out transform`}
        style={{
          fontFamily: "'Poppins', sans-serif",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-2.5rem)",
          transitionDelay: "0.15s",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </>
  );
};

export default SkillsHeader;
