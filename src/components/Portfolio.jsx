import React from "react";
import gemini from "../assets/projects/gemini.png";
import boot from "../assets/projects/boot.png";
import gemma from "../assets/projects/gemma.png";
import memory from "../assets/projects/memory.png";
import stop from "../assets/projects/stop.png";
import tic from "../assets/projects/tic.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "Internal Server Management Dashboard",
      technologies: "React.js, Flask, Python, MariaDB, Docker, Kubernetes",
      description: "Enterprise-grade full-stack web application for managing VMware ESXi virtual machines and HP iLO server hardware with real-time monitoring, Google OAuth 2.0 authentication, and Kubernetes deployment.",
      src: gemini, // placeholder image
      code: "#", // private project
      demo: "#",
    },
    {
      id: 2,
      title: "OpenShift Container Platform Deployment",
      technologies: "OCP 4.x, UPI, Disconnected Setup, Agent-based Installation, Linux",
      description: "Deployed OpenShift Container Platform clusters in connected and disconnected environments using UPI with custom mirror registry, ImageSetConfig, and operator mirroring for air-gapped setups.",
      src: boot, // placeholder image
      code: "#", // enterprise project
      demo: "#",
    },
    {
      id: 3,
      title: "GeminiClone",
      technologies: "React.js, Vite, JavaScript, CSS, API Integration",
      description: "Responsive AI chat interface clone featuring real-time conversation capabilities, external API integration, and performance optimizations for smooth user experience.",
      src: gemini,
      code: "https://github.com/chayanka18/Gemini-clone",
      demo: "https://gemini-clone-x.vercel.app/",
    },
    {
      id: 4,
      title: "Gemini Jewelry E-commerce",
      technologies: "Java, Firebase, Razorpay, Android Development",
      description: "Comprehensive e-commerce mobile application for jewelry retail with secure Razorpay payment processing, Firebase backend, and real-time inventory management.",
      src: gemma,
      code: "https://github.com/chayanka18/Gemma",
      demo: "https://github.com/chayanka18/Gemma",
    },
  ];
  return (
    <section
      id="portfolio"
      className="section-padding bg-gray-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-purple-900/5"></div>
      
      <div className="container-custom relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Recent web applications and interactive projects
          </p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, technologies, description }) => (
            <div
              key={id}
              className="bg-gray-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group transform hover:scale-105"
            >
              <div className="p-6 group-hover:cursor-pointer">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {title}
                </h3>
                
                <p className="text-blue-400 text-sm font-medium mb-3">
                  {technologies}
                </p>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
