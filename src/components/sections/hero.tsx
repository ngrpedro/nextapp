import React from "react";
import RubikCube from "../rubikCube/rubikCube";

const Hero = () => {
  return (
    <section className="relative">
      <div
        className="w-[25rem] h-[25rem] absolute right-[-10rem] -top-10 rounded-full 
        bg-gradient-to-r from-[#ff7bbc] to-[#9698ff] blur-[80px] -z-10"
      >
        teste
      </div>
      <h1 className="max-w-[52rem] m-auto text-2xl sm:text-4xl md:text-6xl font-bold text-center font-asap py-8">
        Encontre profissionais de saúde que estão prontos para nos receber!
      </h1>

      <p className="text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing.
      </p>
      <div className="flex items-center justify-center py-6">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold text-center py-2 px-8 rounded transition-colors">
          Começar
        </button>
      </div>
      <div
        className="w-[25rem] h-[25rem] absolute left-[-9.5rem] rounded-full top-28
        bg-gradient-to-r from-[#fff396] to-[#7bff91] blur-[80px] -z-10"
      >
        teste
      </div>

      {/* <RubikCube /> */}
    </section>
  );
};

export default Hero;
