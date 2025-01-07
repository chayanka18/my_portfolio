import React from "react";
import profile from "../assets/myimage.jpg";
import { TiArrowRightThick } from "react-icons/ti";

const Home = () => {
  return (
    <div
      id="home"
      className="w-full text-white flex items-center justify-center lg:pt-40 md:pt-25 pt-20" // Added pt-20 for padding top
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-6 md:flex-row">
        <div className="flex flex-col justify-center mt-20 md:mt-0">
          <h2 className="text-4xl sm:text-7xl font-bold sm:mt-5 text-white">
            I'm a Software Developer
          </h2>
          <p className="text-gray-300 py-4 max-w-md text-left font-semibold ">
            focused on building responsive websites and applications. I enjoy
            turning ideas into functional designs and am always learning new
            technologies to improve my work. Feel free to explore my projects
            and reach out
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#93186e] to-[#7a2a83]">
              <a href="#portfolio">Portfolio</a>

              <span className="group-hover:rotate-90 duration-300">
                <TiArrowRightThick size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        <div className="mt-10 md:mt-0 md:w-3/5 lg:w-2/5 w-4/5 sm:w-2/5">
          <img
            src={profile}
            alt="my-profile"
            className="rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
