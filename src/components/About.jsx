import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full text-white">
      <div className="max-w-screen-lg mx-auto p-8 flex flex-col justify-center w-full h-full space-y-8 mt-36">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </h2>
        </div>

        {/* Section Content */}
        <div className="mt-12 space-y-6 text-justify">
          <p className="text-xl font-sawarabi">
            I am a dedicated developer with a passion for creating responsive,
            user-focused websites and applications. I take pride in transforming
            ideas into functional, seamless experiences that meet both user
            needs and business objectives. I approach every project with
            attention to detail, ensuring high-quality results and continuous
            improvement in my work.
          </p>

          <p className="text-xl font-sawarabi">
            I believe in maintaining a balance between creativity and precision,
            which allows me to deliver solutions that are both innovative and
            practical. My ability to adapt to new challenges and collaborate
            effectively with teams has helped me succeed in various projects.
            Feel free to explore my portfolio to learn more about my work, and
            don’t hesitate to reach out for potential collaborations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
