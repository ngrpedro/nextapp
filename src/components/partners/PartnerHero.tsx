import React from "react";

const Hero = () => {
  return (
    <section className="relative">
      <div className="max-w-[63rem] m-auto mt-10">
        <h1 className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
          <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-700 via-indigo-700 to-sky-600">
            Nossos
          </span>{" "}
          <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-700 via-pink-700 to-red-700">
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
        <button className="btn btn-wide normal-case text-lg font-normal bg-pink-600 border-none hover:bg-pink-500">
          Seja nosso parceiro
        </button>
      </div>
    </section>
  );
};

export default Hero;
