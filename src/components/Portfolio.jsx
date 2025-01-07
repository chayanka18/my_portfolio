import React from "react";
import gemini from "../assets/portfolio/gemini.png";
import boot from "../assets/portfolio/boot.png";
import gemma from "../assets/portfolio/gemma.png";
import memory from "../assets/portfolio/memory.png";
import stop from "../assets/portfolio/stop.png";
import tic from "../assets/portfolio/tic.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: gemini,
      code: "https://github.com/chayanka18/Gemini-clone",
      demo: "https://gemini-clone-x.vercel.app/",
    },
    {
      id: 2,
      src: boot,
      code: "https://github.com/chayanka18/Bootstrap_iCoder",
      demo: "https://chayanka18.github.io/Bootstrap_iCoder/",
    },
    {
      id: 3,
      src: gemma,
      code: "https://github.com/chayanka18/Gemma",
      demo: "https://drive.google.com/file/d/1KkP6tdeonk6hvViGldc6m9eyEYV7E5DN/view",
    },
    {
      id: 4,
      src: memory,
      code: "https://github.com/chayanka18/MemoryGame",
      demo: "https://chayanka18.github.io/MemoryGame/",
    },
    {
      id: 5,
      src: stop,
      code: "https://github.com/chayanka18/Stopwatch",
      demo: "https://chayanka18.github.io/Stopwatch/",
    },
    {
      id: 6,
      src: tic,
      code: "https://github.com/chayanka18/tic-tac-toe",
      demo: "https://chayanka18.github.io/tic-tac-toe/",
    },
  ];
  return (
    <div
      id="portfolio"
      className=" w-full text-white flex items-center justify-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full mt-36">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.5)] transition duration-300 hover:scale-105"
            >
              <img src={src} alt="" className="h-4/6 rounded-md" />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105 text-white rounded-lg hover:shadow-[0_0_20px_5px_rgba(139,92,246,0.8)]"
                  onClick={() => window.open(demo, "_blank")}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105 text-white rounded-lg hover:shadow-[0_0_20px_5px_rgba(139,92,246,0.8)]"
                  onClick={() => window.open(code, "_blank")}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
