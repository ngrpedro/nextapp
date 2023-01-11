import React from "react";

const Hero = () => {
  return (
    <section className="relative">
      <div className="max-w-[63rem] m-auto mt-10">
        <h1 className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
          <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500">
            Nossos
          </span>{" "}
          <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500">
            parceiros
          </span>
        </h1>

        <p className="text-center px-10 sm:px-36 sm:py-10 font-asap text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco
        </p>
      </div>
      <div className="flex items-center justify-center py-6">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold text-center py-2 px-8 rounded transition-colors">
          Seja um de nosso parceiros
        </button>
      </div>
    </section>
  );
};

export default Hero;
