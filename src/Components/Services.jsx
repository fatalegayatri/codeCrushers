import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { FaBlogger } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";

export const Services = () => {
  return (
    <div className="bg-gray-100 h-auto w-100 mb-8">
      <section className="h-auto bg-slate-900 p-8 py-8">
        <div className="text-white font-bold text-5xl text-center pb-8 capitalize mb-12">
          <h1> Our Services </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <AiFillYoutube className="text-4xl text-red-600 mb-4" />
            <h4 className="font-bold text-lg text-green-500 mb-2">
              YouTube Video
            </h4>
            <p className="text-gray-700">
              We offer comprehensive video tutorials on coding and programming
              to help you enhance your skills.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <FaBlogger className="text-4xl text-red-600 mb-4" />
            <h4 className="font-bold text-lg text-green-500 mb-2">Blog</h4>
            <p className="text-gray-700">
              Our blog features articles, tips, and tricks on programming,
              software development, and more.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <CgNotes className="text-4xl text-red-600 mb-4" />
            <h4 className="font-bold text-lg text-green-500 mb-2">Notes</h4>
            <p className="text-gray-700">
              We offer detailed and informative notes on various programming
              languages and software development topics.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <AiFillYoutube className="text-4xl text-red-600 mb-4" />
            <h4 className="font-bold text-lg text-green-500 mb-2">
              YouTube Video
            </h4>
            <p className="text-gray-700">
              We offer comprehensive video tutorials on coding and programming
              to help you enhance your skills.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <FaBlogger className="text-4xl text-red-600 mb-4" />
            <h4 className="font-bold text-lg text-green-500 mb-2">Blog</h4>
            <p className="text-gray-700">
              Our blog features articles, tips, and tricks on programming,
              software development, and more.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <CgNotes className="text-4xl text-red-600 mb-4" />
            <h4 className="font-bold text-lg text-green-500 mb-2">Notes</h4>
            <p className="text-gray-700">
              We offer detailed and informative notes on various programming
              languages and software development topics.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
