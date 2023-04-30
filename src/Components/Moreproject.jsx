import React from "react";
import gccclub from "../Assets/gccclub.png";
import portfolio from "../Assets/portfolio.png";
import project from "../Assets/project.png";
import foodweb from "../Assets/foodweb.png";
import { Projectcards } from "./Projectcards";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export const Moreproject = () => {
  return (
    <div id="projects" className="p-10 min-h-screen bg-gray-900  ">
      <Link to="/">
        <div className="w-10 rounded-full bg-white p-2 h-10 text-center items-center flex justify-center cursor-pointer">
          <BiArrowBack className="text-lg" />
        </div>
      </Link>
      <div className=" flex items-center  justify-between flex-col gap-5 ">
        <div className="text-center">
          <h1 className="text-2xl text-green-500  text-center  font-semibold capitalize ">
            {" "}
            Our Projects
          </h1>
          <p className=" capitalize text-3xl  md:text-4xl  text-gray-100 ">
            Project details goes here ...
          </p>
          <p className="text-gray-50 mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed cumque
            nobis voluptatem nisi?
          </p>
          <div />
        </div>
        <div className="flex flex-row gap-8 items-center justify-between  mx-auto mt-6 ">
          <div className="flex gap-8 items-center w-full  flex-wrap lg:  flex-col md:flex-row ">
            <Projectcards
              img={gccclub}
              title={"GCC Club"}
              link={"https://gccclub.vercel.app/"}
            />
            <Projectcards
              img={project}
              title={"College "}
              link={"https://libarary.vercel.app/"}
            />
            <Projectcards img={foodweb} title={"Foodies"} />
            <Projectcards
              img={portfolio}
              title={"Portfolio"}
              link={"https://gayatrifatale.vercel.app/"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
