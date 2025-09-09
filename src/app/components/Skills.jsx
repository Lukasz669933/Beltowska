"use client";
import { Circle } from "rc-progress";
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { onceTrue } from "../utils/motion";

const Skills = () => {
  const skills = [
    { title: "Wycen domów", percent: 55 },
    { title: "Wycen działek", percent: 67 },
    { title: "Wycen bankowych", percent: 37 },
    { title: "Innych wycen", percent: 58 },
  ];

  return (
    <div id="skills" className="py-8 px-6 sm:px-6 lg:px-8 lg:py-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <motion.div
              initial={{
                scale: 0.1,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={onceTrue}
              key={index}
              className="relative bg-white shadow-xl rounded-full p-3 cursor-pointer"
            >
              <div
                className={`relative w-[130px] h-[130px] lg:w-[200px] lg:h-[200px] rounded-full overflow-hidden border-2 border-gray-300`}
              >
                <Circle
                  percent={skill.percent}
                  strokeWidth={4}
                  strokeColor="#1e52b2"
                />
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-xl lg:text-3xl text-center font-semibold">
                    <CountUp start={0} end={skill.percent} delay={0} />
                  </span>
                  <h2 className="text-center text-xs px-4 lg:text-md">
                    {skill.title}
                  </h2>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
