import React, { useState, useRef, useEffect } from "react";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import BgStars from "../Home-Animation/BgStars";
import { contactData } from "../Database/Data/contactData";
import GlowingSocials from "../Contact-Animation/GlowingSocials";
import AnimatedFooter from "../Contact-Animation/AnimatedFooter";

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  value: React.ReactNode;
  delay?: number;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, value, delay = 0 }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <div
      ref={ref}
      className={`
        bg-gray-900/40 border border-gray-700/50 backdrop-blur-xl rounded-2xl p-6 flex flex-col items-center shadow-xl 
        transform transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        hover:-translate-y-3 hover:scale-105 hover:shadow-blue-500/40
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-4xl mb-3 transition-transform duration-500 hover:scale-125">{icon}</div>
      <h3 className="text-lg font-semibold text-blue-400 mb-1">{title}</h3>
      <div className="text-gray-300 text-center break-words">{value}</div>
    </div>
  );
};

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [socialsVisible, setSocialsVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current || !socialsRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) setSectionVisible(true);
            if (entry.target === socialsRef.current) setSocialsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(sectionRef.current);
    observer.observe(socialsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen text-white bg-gradient-to-br from-gray-950 via-gray-900 to-black flex flex-col items-center">
      <BgStars />

      {/* HEADER */}
      <div className="text-center mb-10 mt-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold mb-4 mt-20 tracking-wide drop-shadow-[0_0_20px_rgba(56,189,248,0.7)] animate-glow">
          <span className="text-white">Contact </span>
          <span className="text-blue-500">Me</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Fresh graduate eager to contribute and grow. Reach me through the details below or connect with me on socials.
        </p>
      </div>

      {/* INFO CARDS */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl justify-center mb-12 px-4 sm:px-6 lg:px-8">
        <InfoCard
          icon={<HiOutlineMail className="text-blue-400" />}
          title="Email"
          value={<a href={`mailto:${contactData.email}`} className="hover:text-blue-300 transition">{contactData.email}</a>}
          delay={0}
        />
        <InfoCard
          icon={<HiOutlinePhone className="text-purple-400" />}
          title="Phone"
          value={<a href={`tel:${contactData.phone}`} className="hover:text-purple-300 transition">{contactData.phone}</a>}
          delay={100}
        />
        <InfoCard
          icon={<HiOutlineLocationMarker className="text-green-400" />}
          title="Location"
          value={contactData.location}
          delay={200}
        />
      </div>

      {/* PROJECT / EXPERIENCE */}
      <div
            ref={sectionRef}
        className={`max-w-4xl mx-auto text-center text-gray-200 space-y-4 px-4 sm:px-6 lg:px-8 mb-12 transition-all duration-700 transform 
        ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
>
        <p className="text-lg sm:text-lg">🎓 Lorem Ipsum University, Class of 2025</p>
        <p className="text-lg sm:text-lg">💻 Built a demo portfolio project showcasing web development skills</p>
        <p className="text-lg sm:text-lg">🍎 Sample Algorithm Project: Object Detection (Thesis) using machine learning techniques</p>
        <p className="text-lg sm:text-lg">
    ⚡ Passionate about building scalable web and full-stack applications. Enjoys experimenting with AI, data science, and cybersecurity. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        </div>


      {/* SOCIALS */}
      <div
        ref={socialsRef}
        className={`text-center mb-12 transition-all duration-700 transform 
          ${socialsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <p className="text-lg font-semibold mb-2">Socials</p>
        <GlowingSocials />
      </div>

      {/* FOOTER */}
      <div className="w-full mt-auto">
        <AnimatedFooter />
      </div>

      <style>{`
        @keyframes glow { 
          0%,100% { opacity: 0.7; transform: scale(1); } 
          50% { opacity: 1; transform: scale(1.05); } 
        }
        .animate-glow { animation: glow 2s infinite alternate; }
      `}</style>
    </section>
  );
};

export default Contact;
