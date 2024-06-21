"use client";

import React from "react";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaFilePen } from "react-icons/fa6";

import { motion } from "framer-motion";
import { onceTrue, slideInFromBottom } from "../utils/motion";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      icon: (
        <MdOutlineRealEstateAgent className="text-main group-hover:text-white w-20 h-20 mx-auto" />
      ),
      title: "Wyceny",
      description:
        "Oferuję kompleksowe usługi rzeczoznawcze w Nowym Targu, obejmujące wyceny nieruchomości różnego typu: od niezabudowanych działek, przez domy i mieszkania, po obiekty komercyjne i przemysłowe. Specjalizuję się również w ocenie wartości nieruchomości rolnych, leśnych, zabytkowych oraz o specjalnym przeznaczeniu. Zapewniam profesjonalizm i dokładność, dostosowując usługi do indywidualnych potrzeb klienta.",
    },
    {
      icon: (
        <AiOutlineDollarCircle className="text-main group-hover:text-white w-20 h-20 mx-auto" />
      ),
      title: "Analizy",
      description:
        "Szeroki zakres usług wyceny praw majątkowych i ograniczonych praw rzeczowych, w tym praw użytkowania, służebności, oraz spółdzielczych praw do lokali. Moje usługi obejmują również dogłębne analizy rynku nieruchomości, opłacalności inwestycji oraz skutków prawnych i finansowych zmian w planowaniu przestrzennym. Dostarczam kompleksowe rozwiązania dla Twoich potrzeb inwestycyjnych i prawnych, bazując na aktualnej wiedzy i przepisach.",
    },
    {
      icon: (
        <FaFilePen className="text-main group-hover:text-white w-20 h-20 mx-auto" />
      ),
      title: "Sprawozdania",
      description:
        "Kompleksowe wyceny nieruchomości dla szerokiej gamy potrzeb zobowiązaniowych, w tym dla zabezpieczenia wierzytelności, negocjacji, postępowań spadkowych, czy sprawozdań finansowych. Moje usługi obejmują również ustalanie opłat adiacenckich, cywilno-prawnych, za użytkowanie wieczyste, a także ocenę kosztów i efektywności inwestycji. Dostosowuję swoje usługi do indywidualnych wymagań klienta, zapewniając dokładność i rzetelność w każdym przypadku.",
    },
  ];

  return (
    <div id="services" className="py-12 px-6 sm:px-6 lg:px-8 lg:py-26">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center">
        <motion.button
          variants={slideInFromBottom(0, 40)}
          initial="hidden"
          whileInView={"visible"}
          viewport={onceTrue}
          className="font-semibold uppercase mx-auto text-center px-7 py-3 bg-main rounded-md inline-block text-white"
        >
          Usługi
        </motion.button>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-6  relative">
          {services.map((service, index) => (
            <motion.div
              variants={slideInFromBottom(index / 3, 60)}
              initial="hidden"
              whileInView={"visible"}
              viewport={onceTrue}
              key={index}
              className="bg-white flex flex-col gap-5 cursor-pointer group rounded-lg p-8 py-10 shadow-lg hover:bg-main transition duration-300 ease-in-out"
            >
              {service.icon}

              <h3 className="text-2xl text-main group-hover:text-white font-bold text-center mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center group-hover:text-gray-100">
                {service.description}
              </p>
            </motion.div>
          ))}

          <Image
            width={150}
            height={150}
            src="/about-bg.png"
            alt=""
            className="w-[130px] h-[130px] object-cover absolute top-[-50px] right-[-50px] z-[-1]"
          />
          <Image
            width={150}
            height={150}
            src="/about-bg.png"
            alt=""
            className="w-[130px] h-[130px] object-cover absolute bottom-[-50px] left-[-50px] z-[-1]"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
