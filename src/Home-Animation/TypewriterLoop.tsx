import React from "react";
import Typewriter from "typewriter-effect";

interface TypewriterLoopProps {
  strings: string[];
  className?: string;
  delay?: number;
  deleteSpeed?: number;
}

const TypewriterLoop: React.FC<TypewriterLoopProps> = ({
  strings,
  className = "",
  delay = 75,
  deleteSpeed = 50,
}) => {
  return (
    <span className={className}>
      <Typewriter
        options={{
          strings,
          autoStart: true,
          loop: true,
          cursor: "|",
          delay,
          deleteSpeed,
        }}
      />
    </span>
  );
};

export default TypewriterLoop;
