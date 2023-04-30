import React, { useState, useEffect } from "react";
import portfoliomo from "../Assets/portfoliomo.png";
import portfolio from "../Assets/portfolio.png";

import { Link } from "react-router-dom";

export const Project = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <section className="bg-gray-950 h-auto mt-0 pt-4 w-100 pb-9">
        <div className="flex flex-col md:flex-row justify-between items-center py-8">
          <div className="flex justify-between items-center w-full gap-2 md:  flex-col sm:flex-row ">
            <p className="text-gray-700  sm:ml-11 font-lg mt-5">Our Work</p>
            <h1 className="tracking-wider mt-5  sm:ml-11 md:text-5xl  mr-4 md: font-semibold text-white space-x-0">
              Recent Projects
            </h1>
            <Link to="/project">
              <button className="rounded-s-sm mt-5 mr-7 font-medium  py-2 px-4 border-white border-solid border-2 capitalize bg-slate-950 text-base text-white text-center transition-colors duration-300 hover:bg-white hover:text-black  hover:border-black hover:animate ">
                See More
              </button>
            </Link>
          </div>
        </div>

        <img
          src={isMobile ? portfoliomo : portfolio}
          alt=""
          className={`text-center m-auto mt-3 w-10/12 md:w-auto h-3/4  ${
            isMobile ? "h-4/5" : ""
          }`}
        />
      </section>
    </div>
  );
};
