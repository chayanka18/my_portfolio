import React from "react";
import bootstrap from "../assets/BootStrap (2).png";
import cplus from "../assets/c++.png";
import css from "../assets/css.png";
import firebase from "../assets/firebase.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import sql from "../assets/sql.png";
import tailwind from "../assets/tailwind.png";
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-300",
    },
    {
      id: 5,
      src: github,
      title: "Git",
      style: "shadow-gray-400",
    },
    {
      id: 6,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 7,
      src: java,
      title: "Java",
      style: "shadow-orange-500",
    },
    {
      id: 8,
      src: cplus,
      title: "C++",
      style: "shadow-blue-400",
    },
    {
      id: 9,
      src: react,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 10,
      src: sql,
      title: "SQL",
      style: "shadow-sky-300",
    },
    {
      id: 11,
      src: firebase,
      title: "Firebase",
      style: "shadow-orange-300",
    },
  ];
  return (
    <div name="experience" className="w-full text-white py-10">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full mt-36">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I have worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
