import React, { useState, useRef, useEffect } from "react";
import { projectItems } from "../Database/Data/ProjectData";
import { techColors } from "../Database/Data/TechColors";
import GitHubButton from "../Project-Animation/GithubButton";

interface FlipCardProps {
  project: typeof projectItems[0];
}

const FlipCard: React.FC<FlipCardProps> = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Fade-up animation on scroll
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

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleClick = () => setIsFlipped((prev) => !prev);

  return (
    <div
      ref={ref}
      className={`w-80 h-120 p-2 perspective cursor-pointer transition-transform duration-300 transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } hover:scale-105 hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]`}
      onClick={handleClick}
    >
      <div
        className={`w-full h-full relative transform-style preserve-3d transition-transform duration-700 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* FRONT */}
        <div className="absolute w-full h-full bg-gray-800 rounded-2xl shadow-xl backface-hidden flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center p-4 gap-3">
            <h3 className="text-center text-blue-400 font-bold text-lg">
              {project.title}
            </h3>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <p className="text-gray-300 text-justify text-sm px-2">
              {project.shortDesc}
            </p>
          </div>

          {/* TECH STACK */}
          <div className="flex flex-wrap justify-center gap-1 pb-2">
            {project.techStack?.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 rounded-full text-white"
                style={{ backgroundColor: techColors[tech] ?? "#6b7280" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* BACK */}
<div className="absolute w-full h-full bg-gray-900 rounded-2xl shadow-xl backface-hidden rotate-y-180 flex flex-col p-4">
  <div className="flex-1 flex flex-col items-center justify-center gap-3">
    <h3 className="text-blue-400 font-semibold text-base text-center">
      {project.title}
    </h3>
    {/* Add this paragraph to show fullDesc */}
    <p className="text-gray-300 text-justify text-sm px-2">
      {project.fullDesc ?? project.shortDesc}
    </p>
  </div>

  {project.githubLink && (
    <div className="pb-2">
      <GitHubButton link={project.githubLink} />
    </div>
  )}
</div>
      </div>

      <style>{`
        .perspective {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .transform-style {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default FlipCard;
