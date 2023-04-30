import React from "react";
import { IoLocation } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { AiFillMail } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="bg-slate-800 h-auto flex flex-wrap  sm:gap-8 p-6 text-slate-50 px-10 gap-2 sm:flex-row md:flex-row">
      <div className="m-auto w-full flex flex-wrap justify-between ">
        <div className="flex flex-col text-left w-full sm:w-1/2 md:w-1/4">
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="flex flex-col justify-between">
            <li className="flex items-center gap-2 m-1">
              <IoLocation />
              <p>Balepir, Beed 431122</p>
            </li>
            <li className="flex items-center gap-2 m-1">
              <IoMdCall />
              <p>(+91) 9369535021</p>
            </li>
            <li className="flex items-center gap-2 m-1">
              <AiFillMail />
              <p>codecrusher12@gmail.com</p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-full sm:w-1/4 md:w-1/6">
          <h3 className="text-lg font-semibold my-3">Quick Links</h3>
          <ul className="flex flex-col justify-between">
            <li className="m-1">
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li className="mt-0.5">
              <a href="/about" className="hover:text-white">
                About
              </a>
            </li>
            <li className="mt-0.5">
              <a href="/services" className="hover:text-white">
                Services
              </a>
            </li>
            <li className="mt-0.5">
              <a href="/blog" className="hover:text-white">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-full sm:w-1/4 md:w-1/6">
          <h3 className="text-lg font-semibold my-3">Services</h3>
          <ul className="flex flex-col">
            <li className="m-0.5">
              <a href="/free-course" className="hover:text-white">
                Free Course
              </a>
            </li>
            <li className="m-0.5">
              <a href="/notes" className="hover:text-white">
                Notes
              </a>
            </li>
            <li className="m-0.5">
              <a href="/our-content" className="hover:text-white">
                Our Content
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-full sm:w-1/4 md:w-1/6">
          <h3 className="text-lg font-semibold my-3">Follow Us</h3>
          <ul className="flex flex-col">
            <li className="m-0.5">
              <a href="/facebook" className="hover:text-white">
                Facebook
              </a>
            </li>
            <li className="m-0.5">
              <a href="/" className="hover:text-white"></a>
            </li>
            <li className="m-0.5">
              <a href="/twitter" className="hover:text-white">
                Twitter
              </a>
            </li>
            <li className="m-0.5">
              <a href="/instagram" className="hover:text-white">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
