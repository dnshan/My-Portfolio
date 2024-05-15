import React from 'react';
import logo from "../assets/Dn.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-1 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/dinushanadeeshanse/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/dnshan" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/your-instagram-username" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
