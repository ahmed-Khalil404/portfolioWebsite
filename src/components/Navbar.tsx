import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Navbar: React.FC = () => {
  const linkStyle = {
    color: "white",
    fontSize: "1.2rem", // Larger initial font size
    transition: "all 0.3s ease", // Smooth transition on hover
  };

  const hoverStyle = {
    scale: 1.1, // Scale up on hover
    fontSize: "1.4rem", // Increase font size on hover
  };

  return (
    <header className="bg-green-600 md:sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-5">
        <div className="flex items-center">
          <a href="#about" className="text-white text-2xl font-bold">
            Welcome 😊
          </a>
        </div>
        <nav className="flex-grow text-white flex justify-center space-x-6">
          <motion.a
            href="#experiences"
            style={linkStyle}
            whileHover={hoverStyle}
          >
            Experiences
          </motion.a>
          <motion.a
            href="#skills"
            style={linkStyle}
            whileHover={hoverStyle}
          >
            Skills
          </motion.a>
          <motion.a
            href="#testimonials"
            style={linkStyle}
            whileHover={hoverStyle}
          >
            Testimonials
          </motion.a>
        </nav>
        <motion.a
          href="#contact"
          className="inline-flex items-center bg-green-700 border-0 py-2 px-4 focus:outline-none hover:bg-green-800 rounded text-white text-base transition duration-300 ease-in-out"
          whileHover={{ scale: 1.1 }}
        >
          Contact me  <ArrowRightIcon className="w-4 h-4 ml-1" />
        </motion.a>
      </div>
    </header>
  );
};

export default Navbar;
