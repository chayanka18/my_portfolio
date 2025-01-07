import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="w-full p-4 text-white bg-gray-900 mt-20">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto ">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">
            Feel free to reach out to me through any of the platforms below.
          </p>
        </div>

        <div className="flex justify-center items-center space-x-8">
          <a
            href="mailto:chayanka2318@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-gray-400 hover:scale-105 duration-200"
          >
            <FaEnvelope size={30} />
          </a>
          <a
            href="https://www.instagram.com/___chayanka__/"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-gray-400 hover:scale-105 duration-200"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/chayanka/"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-gray-400 hover:scale-105 duration-200"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/chayanka18 "
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-gray-400 hover:scale-105 duration-200"
          >
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
