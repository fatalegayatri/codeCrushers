import React from "react";
import logo from "../Assets/logo.jpeg";
import { AiFillMail } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import { IoIosContact } from "react-icons/io";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <header className="fixed top-0 right-0 left-0 w-100 z-40">
        <nav
          className={`text-base p-3 bg-white text-black-400 flex items-center border-b-2 justify-center md:justify-between  flex-wrap sm:flex-nowrap ${
            scrolled ? "hidden" : ""
          }`}
        >
          <div className="md:lg:flex lg:m-1 text-sm sm:">
            <h2 className="font-medium">
              Building Better Software Together
              <span className="cursor-pointer font-semibold text-green-400 underline underline-offset-1">
                <Link to="/"> Get started</Link>
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-2 justify-center lg:ml-32 lg:justify-end font-medium flex-wrap">
            <div className="gap-3 items-center justify-between border-r-2 border-r-slate-300 hidden lg:flex">
              <AiFillMail className="text-2xl" />
              <h2 className="font-medium mr-3">support@codecrushers.com</h2>
            </div>
            <div className="gap-3 items-center  justify-between border-r-2 border-r-slate-300 hidden lg:flex">
              <IoMdCall className="text-2xl" />
              <h2 className="pr-3">804476055</h2>
            </div>
            <Link
              to="/contact"
              className="flex items-center capitalize hover:text-green-500 cursor-pointer justify-between flex-1 lg:flex gap-1 lg:gap-3"
            >
              <IoIosContact className=" text-xl md:text-2xl md:" />
              Contact us
            </Link>
          </div>
        </nav>
        <nav
          className={`font-medium z-50 text-xl p-3 w-full bg-white text-black-400 flex flex-wrap items-center justify-between shadow-md ${
            scrolled ? "fixed top-0 left-0 right-0" : ""
          }`}
        >
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="CodeCrushersLogo"
              className=" rounded-full w-11 md:w-12"
            />
            <h1>CodeCrushers</h1>
          </div>
          <div className="flex items-center gap-3 ml-auto mr-2 lg:mr-5 justify-end">
            <ul className="flex gap-3 items-center">
              <li className="hidden sm:block">Menu</li>
              <li>
                <BiMenuAltRight className="text-2xl cursor-pointer" />
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};
