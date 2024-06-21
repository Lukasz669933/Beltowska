"use client";
import React from "react";
import { motion } from "framer-motion";
import { onceTrue, slideInFromLeft, slideInFromRight } from "../utils/motion";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="py-12 px-6 sm:px-6 lg:px-8 lg:py-16">
      <div className="max-w-screen-xl mx-auto lg:flex lg:items-center">
        {/* Text Section */}
        <motion.div
          variants={slideInFromLeft(0.3)}
          initial="hidden"
          whileInView={"visible"}
          viewport={onceTrue}
          className="lg:w-1/2 mb-8 lg:mb-0"
        >
          <button className="font-semibold uppercase  px-7 py-3 bg-main rounded-md inline-block text-white">
            O mnie
          </button>
          <h2 className="text-3xl lg:text-4xl font-[900] my-4">
            Dlaczego warto wybrać mnie?
          </h2>
          <p className="mt-3 text-lg leading-7 text-gray-600">
            Jako rzeczoznawca majątkowy z Nowego Targu, z tytułem magistra
            ekonomii z Uniwersytetu Ekonomicznego w Krakowie i dodatkowymi
            studiami podyplomowymi w Katowicach, oferuję wyceny nieruchomości
            oparte na solidnym wykształceniu i praktyce. Posiadam uprawnienia
            zawodowe nr 7112, nadane przez Ministra Infrastruktury, co pozwala
            mi na profesjonalne określanie wartości nieruchomości. Pracuję
            zgodnie z Powszechnymi Krajowymi Zasadami Wyceny, zapewniając
            dokładność i rzetelność. Moje usługi są kompleksowe, obejmujące
            również ubezpieczenie odpowiedzialności cywilnej oraz ciągłe
            podnoszenie kwalifikacji, co potwierdza ukończenie szkolenia w
            Związku Banków Polskich.
          </p>
        </motion.div>
        {/* Image Section */}
        <motion.div
          variants={slideInFromRight()}
          initial="hidden"
          whileInView={"visible"}
          viewport={onceTrue}
          className="lg:w-1/2 lg:mr-12 mb-8 lg:mb-0 relative flex items-center justify-center"
        >
          <div className="w-[400px] h-[450px]">
            <Image
              className="h-full w-full object-cover rounded-lg"
              src="/aboutImage.jpg"
              alt="About Image"
              width={500}
              height={500}
            />
          </div>
          <Image
            src="/about-bg.png"
            alt=""
            className="w-[130px] h-[130px] object-cover absolute top-[-30px] right-[-30px] lg:right-[30px] z-[-1]"
            width={150}
            height={150}
          />
          <Image
            src="/about-bg.png"
            alt=""
            className="w-[130px] h-[130px] object-cover absolute bottom-[-30px] left-[-30px] lg:left-[30px] z-[-1]"
            width={150}
            height={150}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
