import React from "react";
import homebg from "../Assets/homebg.png";

export const Hero = () => {
  return (
    <section className="h-screen w-screen flex items-center justify-center relative">
      <img
        src={homebg}
        alt=""
        className="h-screen absolute top-0 left-0 z-0 right-0 w-screen"
      />
      <span className="w-full relative bg-opacity-80">
        <div className="container w-full mx-auto mt-6 px-4 py-5 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-full m-auto flex justify-center items-center flex-col">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white w-auto text-center mb-6">
              We help businesses and startups succeed by delivering exceptional
              software solutions.
            </h1>
            <p className="text-gray-300 text-center md:text-center text-sm sm:text-lg mb-6 lg:w-3/5 xl:w-1/2">
              We take pride in developing software that is not only visually
              appealing but also highly scalable to meet the demands of our
              clients.
            </p>
            <button className="bg-black text-base md:text-xl inline w-28 md:w-auto md:text-center text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-4 rounded hover:cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </span>
    </section>
  );
};
