import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const contactLinks = [
    {
      icon: <FaEnvelope size={24} />,
      href: "mailto:chayanka2318@gmail.com",
      label: "Email",
      color: "hover:text-red-400 hover:shadow-red-400/25"
    },
    {
      icon: <FaLinkedin size={24} />,
      href: "https://www.linkedin.com/in/chayanka/",
      label: "LinkedIn",
      color: "hover:text-blue-400 hover:shadow-blue-400/25"
    },
    {
      icon: <FaGithub size={24} />,
      href: "https://github.com/chayanka18",
      label: "GitHub",
      color: "hover:text-gray-300 hover:shadow-gray-300/25"
    },
    {
      icon: <FaInstagram size={24} />,
      href: "https://www.instagram.com/___chayanka__/",
      label: "Instagram",
      color: "hover:text-pink-400 hover:shadow-pink-400/25"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-950/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Feel free to reach out to me through any of the platforms below. 
            I'm always open to discussing new opportunities and collaborations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group bg-gray-800/30 border border-gray-700/50 rounded-xl p-5 text-center backdrop-blur-sm transition-all duration-300 hover:bg-gray-700/40 hover:scale-105"
              >
                <div className="w-14 h-14 mx-auto mb-3 bg-gray-700/50 rounded-lg flex items-center justify-center group-hover:bg-blue-600/20 transition-colors duration-300">
                  <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {link.icon}
                  </div>
                </div>
                <h3 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                  {link.label}
                </h3>
              </a>
            ))}
          </div>
          
          {/* Additional contact info */}
          <div className="mt-16 text-center">
            <div className="bg-gray-800/20 border border-gray-700/30 rounded-2xl backdrop-blur-sm p-10 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Let's Work <span className="gradient-text">Together</span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I'm open to new opportunities and collaborations. 
                Feel free to reach out if you'd like to work together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:chayanka2318@gmail.com"
                  className="btn-primary"
                >
                  Send Me an Email
                </a>
                {/* <a
                  href="https://drive.google.com/drive/u/0/folders/12YaaZ7sVG-7x2N9FJGGH9muChd06ZihU"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  Download Resume
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
