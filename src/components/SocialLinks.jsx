import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const SocialLinks = () => {
  const links = [
    {
      id: 1,
      icon: <FaLinkedin size={20} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/chayanka/",
      color: "hover:bg-blue-600",
    },
    {
      id: 2,
      icon: <FaGithub size={20} />,
      label: "GitHub",
      href: "https://github.com/chayanka18",
      color: "hover:bg-gray-600",
    },
    {
      id: 3,
      icon: <HiOutlineMail size={20} />,
      label: "Email",
      href: "mailto:chayanka22318@gmail.com",
      color: "hover:bg-red-600",
    },
    // {
    //   id: 4,
    //   icon: <BsFillPersonLinesFill size={20} />,
    //   label: "Resume",
    //   href: "https://drive.google.com/drive/u/0/folders/12YaaZ7sVG-7x2N9FJGGH9muChd06ZihU",
    //   color: "hover:bg-purple-600",
    // },
  ];

  return (
    <div className="hidden lg:flex flex-col fixed top-1/2 left-6 transform -translate-y-1/2 z-50">
      <div className="flex flex-col gap-3">
        {links.map(({ id, icon, label, href, color }) => (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noreferrer"
            className={`group flex items-center justify-center w-10 h-10 bg-gray-800/70 backdrop-blur-sm border border-gray-700/50 rounded-lg text-gray-300 transition-all duration-300 ${color} hover:border-gray-500/50 hover:shadow-lg hover:scale-110`}
            title={label}
          >
            <span className="transition-transform duration-300 group-hover:scale-110">
              {icon}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};
