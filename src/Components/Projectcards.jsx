import React from "react";
import { Link } from "react-router-dom";

export const Projectcards = ({ img, title, link }) => {
  return (
    <div className="w-64 bg-gray-100 rounded-lg overflow-hidden shadow-md  hover:shadow-lg transition duration-300  hover:translate-y-2 hover:scale-105  hover:duration-700">
      <div className="h-40 ">
        <img src={img} alt="" className="h-full object-cover" />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        </p>
        <Link to={link} target="_blank">
          <button className="bg-green-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-green-600 transition duration-300">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};
