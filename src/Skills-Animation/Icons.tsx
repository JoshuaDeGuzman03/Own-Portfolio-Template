import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaAngular,
} from "react-icons/fa";
import {
  SiJavascript,
  SiCplusplus,
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiFirebase,
} from "react-icons/si";

export const skills = [
  { icon: <FaPython />, name: "Python", category: "Languages", color: "text-blue-400" },
  { icon: <FaJava />, name: "Java", category: "Languages", color: "text-red-500" },
  { icon: <SiCplusplus />, name: "C++", category: "Languages", color: "text-blue-700" },
  { icon: <SiJavascript />, name: "JavaScript", category: "Web Languages", color: "text-yellow-400" },
  { icon: <SiTypescript />, name: "TypeScript", category: "Web Languages", color: "text-blue-500" },
  { icon: <FaHtml5 />, name: "HTML5", category: "Web Languages", color: "text-orange-500" },
  { icon: <FaCss3Alt />, name: "CSS3", category: "Web Languages", color: "text-blue-500" },
  { icon: <FaReact />, name: "React.js", category: "Frameworks", color: "text-cyan-400" },
  { icon: <FaAngular />, name: "Angular", category: "Frameworks", color: "text-red-600" },
  { icon: <FaNodeJs />, name: "Node.js", category: "Frameworks", color: "text-green-500" },
  { icon: <SiMysql />, name: "MySQL", category: "Databases", color: "text-blue-600" },
  { icon: <SiPostgresql />, name: "PostgreSQL", category: "Databases", color: "text-blue-700" },
  { icon: <SiFirebase />, name: "Firebase", category: "Databases", color: "text-yellow-400" },
];

interface IconsProps {
  visible: boolean;
  filteredSkills: typeof skills;
}

const floatDurations = [3, 4, 5];

const Icons: React.FC<IconsProps> = ({ visible, filteredSkills }) => {
  return (
    <div className="relative w-full max-w-5xl flex flex-wrap justify-center gap-6 z-10 px-2">
      {filteredSkills.map((skill, index) => {
        const floatDuration = floatDurations[Math.floor(Math.random() * floatDurations.length)];
        const floatDelay = Math.random() * 2;

        return (
          <div
            key={skill.name}
            className={`relative group flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg transition-transform duration-500 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl`}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: `${index * 0.1}s`,
              transitionProperty: "opacity, transform",
              animation: visible ? `float ${floatDuration}s ease-in-out ${floatDelay}s infinite alternate` : "none",
              minWidth: "100px", // optional: keeps icons aligned
            }}
          >
            <div
              className={`text-4xl md:text-5xl ${skill.color} transform transition-transform duration-500 group-hover:rotate-12 group-hover:shadow-[0_0_20px] group-hover:shadow-cyan-400`}
            >
              {skill.icon}
            </div>
            <div className="mt-2 text-center text-xs text-gray-300">
              <p className="font-semibold">{skill.name}</p>
              <p className="text-[10px] mt-1">{skill.category}</p>
            </div>
          </div>
        );
      })}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            100% { transform: translateY(-10px); }
          }
        `}
      </style>
    </div>
  );
};

export default Icons;
