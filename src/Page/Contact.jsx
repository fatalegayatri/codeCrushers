import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
// import { BiArrowBack } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import contact from "../Assets/contact.png";
import axios from "axios";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name: name,
      email: email,
      message: message,
    };

    try {
      const response = await axios.post(
        "https://getform.io/f/ff8f15b5-7d36-4153-90bd-c47c9c12dd07",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("Success: ", response);
      alert("Your message has been sent successfully!");
    } catch (error) {
      console.error("Error: ", error);
      alert("Sorry, an error occurred while sending your message.");
    }
  };

  return (
    <div>
      <div className="h-screen bg-slate-950 text-center p-5 px-0">
        <div className=" hidden lg:flex flex-col fixed top-[35%] left-0">
          <ul>
            <li className="flex p-4 flex-row justify-center items-center w-[160px] h-[60px]  ml-[-100px] hover:ml-[-1px] duration-300 bg-blue-500">
              <a
                href="https://www.linkedin.com/in/gayatri-fatale-66b85b247/"
                className="flex flex-row justify-between items-center w-full m-auto text-gray-300"
              >
                Linkedin
                <FaLinkedin size={30} />
              </a>
            </li>
            <li className="flex p-4 flex-col justify-center items-center w-[160px] h-[60px]  ml-[-100px] hover:ml-[-10px] duration-300 bg-[#133333]">
              <a
                href="https://github.com/fatalegayatri"
                className="flex flex-row justify-between items-center w-full text-gray-300"
              >
                Github
                <BsGithub size={30} />
              </a>
            </li>
            <li className="flex p-4  flex-col justify-center items-center w-[160px] h-[60px]  ml-[-100px] hover:ml-[-10px] duration-300  bg-red-600">
              <a
                href="fatalegayatri24@gmail.com"
                className="flex flex-row justify-between items-center w-full text-gray-300"
              >
                Email
                <HiOutlineMail size={30} />
              </a>
            </li>
            <li className="flex p-4  flex-col justify-center items-center w-[160px] h-[60px]  ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
              <a
                href=""
                className="flex flex-row justify-between items-center w-full text-gray-300"
              >
                Twitter <FaTwitter size={30} />
              </a>
            </li>
          </ul>
        </div>
        <Link to="/">
          <div className="w-10 ml-4 rounded-full bg-white p-2 h-10 text-center items-center flex justify-center cursor-pointer">
            <BiArrowBack className="text-lg" />
          </div>
        </Link>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl tracking-wide text-white pt-5 font-semibold">
            Let's Talk
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
          <div className="md:w-1/2">
            <img src={contact} alt="" className="w-full" />
          </div>

          <form
            onSubmit={handleSubmit}
            className="max-w-2xl w-full max-h-96 mt-8 flex flex-col p-7 items-center gap-8 justify-between rounded-lg shadow-md md:w-1/2"
          >
            <div className="relative w-full">
              <input
                type="text"
                required
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-100 border-gray-400 py-2 px-4 text-base w-full focus:outline-none rounded-sm border focus:border-b-2 focus:border-b-green-500 transition-colors duration-150 peer focus:border-t-0"
              />
              <label
                htmlFor="name"
                className={`text-gray-400 text-lg font-medium mb-2 absolute left-1 ${
                  name ? "-top-7 text-green-500" : "top-1"
                } transition-all duration-700`}
              >
                Name
              </label>
            </div>
            <div className="relative w-full">
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-100 border-gray-400 py-2 px-4 text-base w-full focus:outline-none rounded-sm border focus:border-b-2 focus:border-b-green-500 transition-colors duration-150 peer focus:border-t-0"
              />
              <label
                htmlFor="email"
                className={`text-gray-400 text-lg font-medium mb-2 absolute left-1 ${
                  email ? "-top-7 text-green-500" : "top-1"
                } transition-all duration-700`}
              >
                Email
              </label>
            </div>
            <div className="relative w-full">
              <textarea
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                className="bg-gray-100 border-gray-400 min-h-30 py-2 px-4 text-base w-full focus:outline-none rounded-sm border focus:border-b-2 focus:border-b-green-500 transition-colors duration-150 peer focus:border-t-0"
              ></textarea>
              <label
                htmlFor="message"
                className={`text-gray-400 text-lg font-medium mb-2 absolute left-1 ${
                  message ? "-top-7 text-green-500" : "top-1"
                } transition-all duration-700`}
              >
                Message
              </label>
            </div>
            <div className="flex flex-row gap-5">
              <button
                className="bg-green-500 text-white rounded-md text-lg font-medium px-7 py-2 hover:bg-green-600 hover:animate-pulse duration-75"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
