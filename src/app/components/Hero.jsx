"use client";

import React from "react";
import { motion } from "framer-motion";
import { onceTrue, slideInFromLeft, slideInFromRight } from "../utils/motion";

const Hero = () => {
  return (
    <div
      id="hero"
      className="py-12 px-6 sm:px-6 lg:px-8 lg:py-16 flex items-center justify-center min-h-[80vh]"
    >
      <div className="max-w-screen-xl mx-auto lg:flex lg:items-center relative">
        {/* Image Section */}
        <div className=" lg:w-1/2  lg:mr-12">
          <div className="w-[300px] h-[300px]">
            <motion.img
              variants={slideInFromLeft(0.3)}
              initial="hidden"
              whileInView={"visible"}
              viewport={onceTrue}
              className="h-full w-full object-cover rounded-full border-[12px] border-white"
              src="/hero.jpg"
              alt="Image"
            />
          </div>
          <motion.div
            variants={slideInFromLeft(0)}
            initial="hidden"
            whileInView={"visible"}
            viewport={onceTrue}
            className="absolute w-[1020px] h-[330px] top-[-2%] left-[-700px] md:top-[10%] rounded-r-full md:left-[-66%] z-[-1] bg-main"
          ></motion.div>
        </div>
        {/* Text Section */}
        <motion.div
          variants={slideInFromRight(0.5)}
          initial="hidden"
          whileInView={"visible"}
          viewport={onceTrue}
          className="mt-10 lg:mt-0 lg:w-1/2 text-center sm:text-left"
        >
          <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            Rzeczoznawca Majątkowy <br /> Natalia Bełtowska
          </h2>
          <p className="mt-3 text-lg leading-7 text-gray-600">
            Ekspertyza i Doświadczenie w Twoim Zasięgu
          </p>
          <p className="mt-3 max-w-2xl text-lg leading-7 text-gray-600">
            W tym miejscu skupiamy się na dostarczeniu wartościowej usługi
            wyceny nieruchomości, podkreślając profesjonalizm i bogate
            doświadczenie w Nowym Targu i okolicach. <br />
            Zapewniam kompleksowe usługi wyceny, dostosowane do indywidualnych
            potrzeb każdego klienta, z naciskiem na precyzję, rzetelność i
            zgodność z aktualnymi standardami rynkowymi.
          </p>
          <div className="mt-8 uppercase">
            <a
              href="#contact"
              className="mr-4 btnn inline-block bg-main  text-white font-semibold py-3 px-6 rounded-lg"
            >
              Kontakt
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
