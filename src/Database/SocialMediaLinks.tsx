import React from "react";
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

interface SocialMediaLinksProps {
  className?: string; // Allow styling when reused
}

const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({ className }) => {
  const iconClass =
    "text-gray-300 hover:text-blue-400 transition-all duration-300 text-xl group-hover:scale-125";

  // Labels for tooltips
  const links = [
    { icon: <FaGithub />, label: "GitHub", url: "#" },
    { icon: <FaInstagram />, label: "Instagram", url: "#" },
    { icon: <FaFacebook />, label: "Facebook", url: "#" },
    { icon: <FaLinkedin />, label: "LinkedIn", url: "#" },
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {links.map((item, i) => (
        <a
          key={i}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          {/* Icon */}
          <span className="transform transition-transform duration-300 group-hover:scale-125">
            {React.cloneElement(item.icon as any, { className: iconClass })}
          </span>

          {/* Tooltip */}
          <span
            className="
              absolute bottom-[-28px] left-1/2 -translate-x-1/2 
              text-xs text-white bg-gray-800 px-2 py-1 rounded-md opacity-0 
              pointer-events-none transition-all duration-300 group-hover:opacity-100
              group-hover:translate-y-1 shadow-lg whitespace-nowrap
            "
          >
            {item.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
