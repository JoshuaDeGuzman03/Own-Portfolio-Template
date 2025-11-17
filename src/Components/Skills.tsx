import React, { useState, useEffect, useRef } from "react";
import BgStars from "../Home-Animation/BgStars";
import Icons, { skills } from "../Skills-Animation/Icons";
import SkillsHeader from "../Skills-Animation/SkillsHeader";

const categories = ["All", "Languages", "Web Languages", "Frameworks", "Databases"];

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-950 flex flex-col items-center justify-center px-6 py-12 text-white relative overflow-hidden"
    >
      {/* Header */}
      <SkillsHeader visible={visible} />

      {/* Background Stars */}
      <BgStars />

      {/* Category Tabs */}
      <div className={`flex flex-wrap justify-center gap-4 mb-12 z-10 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${selectedCategory === cat
                ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg"
                : "bg-gray-800 text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:text-white"
              }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Icons */}
      <Icons visible={visible} filteredSkills={filteredSkills} />

      <style>
        {`
          @keyframes pulse-slow {
            0%,100% { opacity: 0.05; }
            50% { opacity: 0.15; }
          }
          @keyframes glow {
            0%,100% { opacity: 0.2; transform: scale(0.8); }
            50% { opacity: 1; transform: scale(1.2); }
          }
          .animate-pulse-slow { animation: pulse-slow 8s infinite; }
          .animate-glow { animation: glow infinite alternate; }
          .group-hover\\:rotate-y-12:hover { transform: rotateY(12deg); }
        `}
      </style>
    </section>
  );
};

export default Skills;
