import React, { useEffect, useState, useRef } from "react";
import { ContactInfo } from "../Database/Data/contactInfo";
import BgStars from "../Home-Animation/BgStars";
import FadeUp from "../Home-Animation/FadeUp";
import TypewriterLoop from "../Home-Animation/TypewriterLoop";
import AvailableBadge from "../Home-Animation/AvailableBadge";

const Home: React.FC = () => {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Intersection observer to trigger animation when home section is visible
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

    if (mainContainerRef.current) observer.observe(mainContainerRef.current);

    return () => {
      if (mainContainerRef.current) observer.unobserve(mainContainerRef.current);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-950 overflow-hidden px-6 pt-32 pb-12">
      {/* Background Stars */}
      <BgStars />

      {/* Main Container */}
      <div
        ref={mainContainerRef}
        className={`relative z-10 p-6 rounded-xl w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center
          bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-950 mt-25 shadow-md transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
        `}
      >
        {/* Profile Image */}
        <div
          className={`flex justify-center md:justify-start mb-6 md:mb-0 md:mr-8 overflow-hidden 
            rounded-xl transform transition-all duration-700
            ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-40"}
          `}
        >
          <div className="relative group rounded-xl">
            <img
              src={ContactInfo.profileImage}
              alt="Profile"
              className="w-48 md:w-64 lg:w-80 rounded-xl shadow-md object-contain transition-transform duration-500 transform group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(86,56,176,0.6)]"
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="text-center md:text-left flex-1 space-y-4">
          {/* Hi, I am + Name + Typewriter */}
          <div className="flex flex-col items-center md:items-start space-y-5 mb-2">
            <FadeUp visible={visible}>
              <p className="text-lg md:text-xl font-medium text-gray-400">Hi, I am</p>
            </FadeUp>

            <FadeUp visible={visible} delay={150}>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {ContactInfo.name}
              </h1>
            </FadeUp>

            {/* Role/Title Typewriter */}
            <FadeUp visible={visible} delay={250}>
              <TypewriterLoop
                strings={["Full Stack Developer", "Software Engineer"]}
                className="text-blue-400 font-semibold text-xl md:text-2xl mt-2"
              />
            </FadeUp>
          </div>

          {/* Description */}
          <FadeUp visible={visible} delay={400}>
            <p className="text-gray-400 leading-relaxed text-justify">
              {ContactInfo.description}
            </p>
          </FadeUp>

          {/* CV Button + Available Badge */}
          <FadeUp visible={visible} delay={650}>
            <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
              <a
                href={ContactInfo.cvLink}
                download="Dummy-CV.pdf"
                className="relative inline-flex items-center gap-3 px-6 py-3 text-lg font-semibold rounded-full shadow-lg overflow-hidden transition-transform duration-300 transform-gpu group hover:-translate-y-1 hover:scale-105"
                style={{
                  background: "linear-gradient(270deg, #2a1a70, #5638b0, #2a1a70)",
                  backgroundSize: "400% 400%",
                  color: "#f0f0f0",
                  boxShadow: "0 0 12px rgba(86, 56, 176, 0.6), 0 0 18px rgba(42, 26, 112, 0.4)",
                }}
              >
                Download CV
              </a>

              {/* Cosmic Badge next to CV button */}
              <AvailableBadge text="Available for Opportunities" />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default Home;
