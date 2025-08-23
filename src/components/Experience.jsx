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
  const experiences = [
    {
      id: 1,
      company: "Kuberox Technologies",
      position: "Intern",
      duration: "Apr 2025 -- Present",
      description: "Red Hat Linux training, infrastructure operations with Nutanix, OpenShift cluster deployment, and VM automation with cron scripting."
    },
    {
      id: 2,
      company: "Aroha Group",
      position: "Software Developer Intern",
      duration: "Jan 2025 -- Apr 2025",
      description: "Frontend development for Job Portal application using React.js and Tailwind CSS with focus on responsive UI components."
    }
  ];

  // const techs = [
  //   {
  //     id: 1,
  //     src: html,
  //     title: "HTML",
  //     style: "shadow-orange-500",
  //   },
  //   {
  //     id: 2,
  //     src: css,
  //     title: "CSS",
  //     style: "shadow-blue-500",
  //   },
  //   {
  //     id: 3,
  //     src: javascript,
  //     title: "Javascript",
  //     style: "shadow-yellow-500",
  //   },
  //   {
  //     id: 4,
  //     src: tailwind,
  //     title: "Tailwind",
  //     style: "shadow-sky-300",
  //   },
  //   {
  //     id: 5,
  //     src: github,
  //     title: "Git",
  //     style: "shadow-gray-400",
  //   },
  //   {
  //     id: 6,
  //     src: react,
  //     title: "React",
  //     style: "shadow-blue-500",
  //   },
  //   {
  //     id: 7,
  //     src: java,
  //     title: "Java",
  //     style: "shadow-orange-500",
  //   },
  //   {
  //     id: 8,
  //     src: firebase,
  //     title: "Firebase",
  //     style: "shadow-orange-300",
  //   },
  //   {
  //     id: 9,
  //     src: bootstrap,
  //     title: "Bootstrap",
  //     style: "shadow-purple-500",
  //   },
  //   {
  //     id: 10,
  //     src: sql,
  //     title: "SQL",
  //     style: "shadow-sky-300",
  //   },
  //   {
  //     id: 11,
  //     src: cplus,
  //     title: "C++",
  //     style: "shadow-blue-400",
  //   },
  //   {
  //     id: 12,
  //     src: javascript, // placeholder
  //     title: "Flask",
  //     style: "shadow-green-500",
  //   },
  //   {
  //     id: 13,
  //     src: github, // placeholder
  //     title: "Red Hat Linux",
  //     style: "shadow-red-500",
  //   },
  //   {
  //     id: 14,
  //     src: bootstrap, // placeholder
  //     title: "OpenShift",
  //     style: "shadow-red-400",
  //   },
  //   {
  //     id: 15,
  //     src: sql, // placeholder (similar to database)
  //     title: "MariaDB",
  //     style: "shadow-blue-600",
  //   },
  // ];
  return (
    <section id="experience" className="section-padding bg-gray-950/30">
      <div className="container-custom">
        {/* Experience Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              My journey in software development and system administration
            </p>
          </div>

          <div className="flex flex-row gap-8 flex-wrap justify-center ">
            {experiences.map((exp) => (
              <div key={exp.id} className="card-professional p-6 group flex-1 min-w-80 max-w-md ">
                <div className="flex flex-col gap-4 group-hover:cursor-pointer">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                      {exp.position}
                    </h3>
                    <p className="text-blue-400 font-semibold mb-1">
                      {exp.company}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {exp.duration}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Core technologies I work with
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center ">
            {["React.js", "Flask", "Tailwind CSS", "Red Hat Linux", "OpenShift", "JavaScript", "Python", "Java", "Firebase", "Git", "HTML", "CSS", "Bootstrap", "SQL", "C++"].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:border-blue-400/50 transition-colors duration-300 hover:cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
