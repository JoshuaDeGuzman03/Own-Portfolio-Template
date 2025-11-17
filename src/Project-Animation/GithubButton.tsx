import React from "react";

interface GitHubButtonProps {
  link: string;
}

const GitHubButton: React.FC<GitHubButtonProps> = ({ link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        marginTop: "auto",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.5rem 0.75rem",
        background: "linear-gradient(135deg, #6e40c9, #1d4ed8)",
        color: "#fff",
        borderRadius: "9999px", // pill shape
        fontWeight: 600,
        fontSize: "0.875rem",
        boxShadow: "0 4px 15px rgba(0,0,0,0.25)",
        textDecoration: "none",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.35)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.25)";
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        width="16"
        height="16"
        style={{ marginRight: "0.5rem" }}
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.112.793-.262.793-.582 0-.288-.01-1.05-.016-2.06-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.997.108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.933 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.045.138 3.004.404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.873.118 3.176.77.84 1.232 1.91 1.232 3.22 0 4.61-2.807 5.63-5.48 5.924.43.372.815 1.104.815 2.227 0 1.607-.015 2.903-.015 3.293 0 .322.19.698.8.58C20.565 21.796 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
      GitHub
    </a>
  );
};

export default GitHubButton;
