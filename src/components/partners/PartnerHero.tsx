import React from "react";

const Hero = () => {
  return (
    <section className="relative">
      <div
        className="w-[25rem] h-[25rem] absolute right-[-10rem] -top-10 rounded-full 
        bg-gradient-to-r from-[#ff7bbc] to-[#9698ff] blur-[80px] -z-10"
      >
        teste
      </div>
      <div className="max-w-[63rem] m-auto ">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-center font-roboto py-8">
          Encontre instituições que estão prontas para nos receber!
        </h1>

        <p className="text-center px-10 sm:px-36 sm:py-10 font-asap text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco
        </p>
      </div>
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
