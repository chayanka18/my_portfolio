import React from "react";
import profile from "../assets/myimage.jpg";
import { TiArrowRightThick } from "react-icons/ti";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-950 py-10"
    >
      <div className="container-custom">
        <div className="flex flex-col items-center justify-center md:flex-row gap-8">
          {/* Text Content */}
          <div className="flex flex-col justify-center flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text">Chayanka Karkera</span>
            </h1>
            
            <p className="text-lg text-gray-300 font-medium mb-3">
              Frontend Developer & System Administrator
            </p>
            
            <p className="text-gray-400 text-base leading-relaxed max-w-xl mb-6">
              I specialize in creating dynamic frontend applications with React.js 
              and modern web technologies. I also have experience in full stack 
              development using Flask for backend services and automation solutions 
              with cron jobs. Certified in Red Hat System Administration with expertise 
              in cloud technologies and system automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start mt-8">
              <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 transform">
                <a href="#portfolio" className="flex items-center justify-center relative z-10">
                  <span className="mr-2">View My Work</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    <TiArrowRightThick size={20} />
                  </span>
                </a>
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group relative overflow-hidden border-2 border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm bg-gray-800/20 hover:bg-gray-700/30">
                <a href="#contact" className="relative z-10 block">Get In Touch</a>
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 max-w-xs">
            <div className="relative float-animation glowing-border">
              <img
                src={profile}
                alt="Chayanka Karkera"
                className="w-full rounded-2xl object-cover shadow-xl transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
