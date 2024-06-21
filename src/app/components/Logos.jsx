import Image from "next/image";
import React from "react";

const Logos = () => {
  return (
    <section className="mx-5 md:mx-10">
      <h2 className="text-3xl lg:text-4xl font-[900] my-4 mb-12 w-full px-6 lg:px-8 text-center">
        Polecana przez Najlepszych
      </h2>
      <div className="max-w-screen-xl bg-main/20 rounded-lg  py-8 px-6 sm:px-6 lg:px-8 lg:py-12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 place-items-center lg:grid-cols-4">
        <div className="w-full px-4 flex items-center justify-center  ">
          <Image
            width={500}
            height={300}
            src="/logo1.svg"
            alt="Logo 1"
            className="w-full hover:scale-110 max-w-[200px] sm:max-w-[300px] cursor-pointer max-h-24 h-full object-contain transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="w-full px-4 flex items-center justify-center  ">
          <Image
            width={500}
            height={300}
            src="/logo2.png"
            alt="Logo 2"
            className="w-full hover:scale-110 max-w-[200px] sm:max-w-[300px] cursor-pointer max-h-24 h-full object-contain transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="w-full px-4 flex items-center justify-center  ">
          <Image
            width={500}
            height={300}
            src="/logo5.png"
            alt="Logo 3"
            className="w-full hover:scale-110 max-w-[200px] sm:max-w-[300px] cursor-pointer max-h-24 h-full object-contain transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="w-full px-4 flex items-center justify-center  ">
          <Image
            width={500}
            height={300}
            src="/logo4.png"
            alt="Logo 4"
            className="w-full hover:scale-110 max-w-[200px] sm:max-w-[300px] cursor-pointer max-h-24 h-full object-contain transition-all duration-300 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default Logos;
