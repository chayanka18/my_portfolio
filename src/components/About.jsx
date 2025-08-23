import React from "react";
import { FiCode, FiUsers, FiTarget } from "react-icons/fi";

const About = () => {
  const highlights = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable and scalable code with best practices"
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Collaboration",
      description: "Effective teamwork and communication in development projects"
    },
    {
      icon: <FiTarget className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Analytical thinking to deliver innovative solutions"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-950/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed text-justify">
              <p>
                I am a dedicated developer with a passion for creating responsive,
                user-focused websites and applications. I take pride in transforming
                ideas into functional, seamless experiences that meet both user
                needs and business objectives.
              </p>

              <p>
                My approach combines creativity with precision, ensuring high-quality
                results and continuous improvement. I believe in maintaining a balance
                between innovation and practicality, which allows me to deliver
                solutions that are both effective and maintainable.
              </p>

              <p>
                Currently, I'm expanding my expertise in cloud technologies and
                system administration while staying updated with the latest
                development frameworks and best practices.
              </p>
            </div>

            {/* <div className="flex flex-wrap gap-3 pt-6">
              {["React.js", "Flask", "Tailwind CSS", "Red Hat Administration", "Cloud Technologies", "JavaScript", "Python", "Git"].map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:border-blue-400/50 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div> */}
          </div>

          {/* Highlights */}
          <div className="space-y-6 ">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="card-professional group p-6"
              >
                <div className="flex items-start space-x-4 group-hover:cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl 
                                flex items-center justify-center text-blue-400 border border-blue-500/30">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
