import React, { useState, useEffect, useRef } from "react";
import BgStars from "../Home-Animation/BgStars";
import { projectItems } from "../Database/Data/ProjectData";
import FlipCard from "../Project-Animation/FlipCard";
import FadeUp from "../Home-Animation/FadeUp";
import ScrollbarStyles from "../Project-Animation/ScrollbarStyles";

const Project: React.FC = () => {
  const [descVisible, setDescVisible] = useState(false);
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const descRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Animate description when it enters view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setDescVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (descRef.current) observer.observe(descRef.current);

    return () => {
      if (descRef.current) observer.unobserve(descRef.current);
    };
  }, []);

  // Animate each FlipCard when it enters view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting && !visibleIndexes.includes(idx)) {
            setVisibleIndexes((prev) => [...prev, idx]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = containerRef.current?.querySelectorAll(".fade-item");
    items?.forEach((item) => observer.observe(item));

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, [visibleIndexes]);

  return (
    <section
      id="project"
      className="min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-950 text-white px-8 py-12 flex flex-col items-center relative overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <BgStars />

      <h2 className="text-4xl font-bold mb-9 mt-25 text-blue-400 z-10">
        Projects
      </h2>

      {/* FadeUp animated description */}
      <FadeUp visible={descVisible}>
        <div
          ref={descRef}
          style={{
            maxWidth: "48rem",
            textAlign: "center",
            color: "#d1d5db",
            marginBottom: "2.5rem",
          }}
        >
          <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vivamus lacinia odio vitae vestibulum vestibulum. 
            Cras venenatis euismod malesuada. 
            Integer nec odio quis nisl faucibus commodo et sed justo. 
            Sed sit amet purus eget nulla ultrices tincidunt non a arcu.
          </p>
        </div>
      </FadeUp>

      {/* Single row scrollable FlipCards */}
      <div
        ref={containerRef}
        className="w-full max-w-[1400px] overflow-x-auto overflow-y-hidden scroll-smooth z-10"
      >
        <div className="grid grid-flow-col auto-cols-[320px] gap-6 px-6 sm:px-12">
          {projectItems.map((project, idx) => (
            <div key={idx} className="fade-item" data-index={idx}>
              <FadeUp visible={visibleIndexes.includes(idx)} delay={idx * 100}>
                <FlipCard project={project} />
              </FadeUp>
            </div>
          ))}
        </div>
      </div>
      <ScrollbarStyles />
    </section>
  );
};

export default Project;