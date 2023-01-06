import React from "react";
import RubikCube from "../rubikCube/rubikCube";

const Hero = () => {
  return (
    <section className="h-screen">
      <h1 className="max-w-[50rem] m-auto uppercase text-9xl font-bold text-center font-asap py-8">
        the magic of play!
      </h1>

      <RubikCube />
    </section>
  );
};

export default Hero;
