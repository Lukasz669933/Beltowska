"use client";

import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { FaInfoCircle } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";

import { motion } from "framer-motion";
import { onceTrue, slideInFromBottom } from "../utils/motion";
import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact" className="py-12 px-6 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center">
        <h2 className="text-3xl lg:text-4xl font-[900] my-4 mb-12">Kontakt</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <motion.div
            variants={slideInFromBottom(0, 60)}
            initial="hidden"
            whileInView={"visible"}
            viewport={onceTrue}
            className="bg-white h-auto rounded-[10px] text-center shadow-contact p-6 px-10 cursor-pointer py-8 flex items-center justify-center flex-col"
          >
            <HiOutlineMail className="text-6xl text-main " />
            <h3 className="text-3xl font-semibold mt-3">Email</h3>

            <p className="text-gray-800 text-center text-lg my-3">
              Zapytania oraz dokumentację proszę wysyłać na
            </p>

            <a
              href="mailto:biuro@beltowska.pl"
              className="text-lg lowercase hover:text-blue-950 font-medium underline"
            >
              BIURO@BELTOWSKA.PL
            </a>
          </motion.div>
          <motion.div
            variants={slideInFromBottom(0.2, 60)}
            initial="hidden"
            whileInView={"visible"}
            viewport={onceTrue}
            className="bg-white h-auto rounded-[10px] text-center shadow-contact p-6 px-10 cursor-pointer py-8 flex items-center justify-center flex-col"
          >
            <FiPhoneCall className="text-6xl text-main " />
            <h3 className="text-3xl font-semibold mt-3">Telefon</h3>

            <p className="text-gray-800 text-center text-lg my-3">
              Zapraszam do kontaktu telefonicznego
            </p>

            <a
              href="tel:508570286"
              className="text-lg hover:text-blue-950 font-medium underline"
            >
              {" "}
              508 570 286
            </a>
          </motion.div>
          <motion.div
            variants={slideInFromBottom(0.9, 60)}
            initial="hidden"
            whileInView={"visible"}
            viewport={onceTrue}
            className="bg-white h-auto row-span-2 rounded-[10px] text-center shadow-contact p-6 px-10 cursor-pointer py-8 flex items-center justify-center flex-col"
          >
            <IoCalendarOutline className="text-6xl text-main " />
            <h3 className="text-3xl font-semibold mt-3">Godziny Otwarcia</h3>

            <p className="text-gray-800 text-center text-lg my-3">
              Staram się być dla was dostępna cały rok
            </p>
            <p className="text-gray-800 text-center text-xl">Godziny pracy</p>
            <p className="text-gray-800 text-center text-lg my-3 font-semibold">
              Poniedziałek-Piątek
              <br />
              9:00 - 17:00
              <br />
              Sobota i Niedziela
              <br />
              Nieczynne
            </p>
          </motion.div>
          <motion.div
            variants={slideInFromBottom(0.5, 60)}
            initial="hidden"
            whileInView={"visible"}
            viewport={onceTrue}
            className="bg-white h-auto rounded-[10px] text-center shadow-contact p-6 px-10 cursor-pointer py-8 flex items-center justify-center flex-col"
          >
            <MdLocationPin className="text-6xl text-main " />
            <h3 className="text-3xl font-semibold mt-3">Adres</h3>

            <p className="text-gray-800 text-center text-lg my-2">
              Biuro znajduje się
            </p>
            <p className="text-gray-800 text-center text-xl my-2">
              ul. Grel Boczna 40
              <br /> 34-400 Nowy Targ
            </p>
            <div className="flex gap-4 items-center justify-center">
              <a href="https://maps.apple.com/?address=Grel%20Boczna%2040,%2034-400%20Nowy%20Targ,%20Poland&ll=49.482962,20.002036&q=Grel%20Boczna%2040&t=h">
                <Image
                  width={100}
                  height={100}
                  src="/amap.png"
                  alt=""
                  className="w-[50px] h-[65px] object-cover"
                />
              </a>
              <a href="https://www.google.com/maps/place/Grel+Boczna+40,+34-400+Nowy+Targ,+Poland/@49.4834684,20.0000435,16z/data=!4m6!3m5!1s0x4715e5f976191237:0xfbf0af8066d34a65!8m2!3d49.4838267!4d19.9988899!16s%2Fg%2F11hsv43v8s">
                <Image
                  width={100}
                  height={100}
                  src="/gmap.png"
                  alt=""
                  className="w-[50px] h-[50px] object-cover"
                />
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={slideInFromBottom(0.7, 60)}
            initial="hidden"
            whileInView={"visible"}
            viewport={onceTrue}
            className="bg-white h-auto rounded-[10px] text-center shadow-contact p-6 px-10 cursor-pointer py-8 flex items-center justify-center flex-col"
          >
            <FaInfoCircle className="text-6xl text-main " />
            <h3 className="text-3xl font-semibold mt-3">Dane </h3>
            <div className="flex flex-col items-center text-center justify-start gap-1 my-1">
              <p className="text-gray-800 text-md text-left font-semibold">
                Numer NIP
              </p>
              <p className="text-gray-800 text-md">7352546374</p>
            </div>
            <div className="flex flex-col items-center justify-start gap-1 my-1 text-center">
              <p className="text-gray-800 text-md text-left font-semibold">
                Numer REGON
              </p>
              <a href="" className="text-gray-800 text-md">
                369271351
              </a>
            </div>
          </motion.div>
        </div>{" "}
        <motion.div
          variants={slideInFromBottom(0.8, 70)}
          initial="hidden"
          whileInView={"visible"}
          viewport={onceTrue}
          className="text-center mt-8"
        >
          <p className="text-2xl font-semibold mt-7 mb-4">
            Gotowy do kontaktu?
          </p>
          <a
            href="tel:508570286"
            className="font-semibold btnn uppercase mx-auto text-center px-7 py-3 transition-all duration-100 ease-linear bg-white border-main border hover:bg-main hover:text-white  rounded-md inline-block text-main"
          >
            Zadzwoń
          </a>{" "}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
