import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { contactData } from "../Database/Data/contactData";

const GlowingSocials: React.FC<{ className?: string }> = ({ className }) => {
  const socialIcons = [
    { key: "github", icon: FaGithub, label: "GitHub", url: contactData.socials.github },
    { key: "instagram", icon: FaInstagram, label: "Instagram", url: contactData.socials.instagram },
    { key: "linkedin", icon: FaLinkedin, label: "LinkedIn", url: contactData.socials.linkedin },
    { key: "facebook", icon: FaFacebook, label: "Facebook", url: contactData.socials.facebook || "#" },
  ];

  return (
    <div className={`flex justify-center gap-4 ${className}`}>
      {socialIcons.map(({ key, icon: Icon, label, url }) => (
        <a
          key={key}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          {/* Icon wrapper with hover scaling */}
          <span
            className="transition-transform duration-300 group-hover:scale-125"
            style={{
              color:
                key === "linkedin"
                  ? "#0A66C2"
                  : key === "github"
                  ? "#ffffff"
                  : key === "instagram"
                  ? "#E1306C"
                  : "#1877F2",
              filter: "drop-shadow(0 0 8px rgba(255,255,255,0.5))",
              fontSize: "1.5rem", // default smaller size
              display: "inline-block",
            }}
          >
            <Icon />
          </span>

          {/* Hover label */}
          <span
            className="absolute bottom-[-28px] left-1/2 -translate-x-1/2 text-xs text-white
                       bg-gray-800 px-2 py-1 rounded-md opacity-0 pointer-events-none
                       transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-1 shadow-lg whitespace-nowrap"
          >
            {label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default GlowingSocials;
