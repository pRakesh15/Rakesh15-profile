import { Coffee } from "lucide-react";
import React, { useRef, useState } from "react";
import {
  FaPlay,
  FaDiscord,
  FaWhatsapp,
  FaPause,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const musicRef = useRef(null);

  const handleTogglePlay = () => {
    if (musicRef.current) {
      if (isPlaying) {
        musicRef.current.pause();
      } else {
        musicRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-[55px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[5px]">
        {/* Logo and name */}
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <img
            src="/Rakeshlogo.png"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-spin-slow "
          />
          <span className="font-bold ml-[5px] text-gray-300 hover:text-gray-400 hidden md:block">
            Rakesh Pradhan
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="w-[500px] h-full flex-row items-center justify-between hidden md:flex">
          <div className="flex items-center w-full h-auto justify-between border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#skills" className="cursor-pointer hover:text-gray-400">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer hover:text-gray-400">
              Projects
            </a>
            <a href="#contact" className="cursor-pointer hover:text-gray-400">
              Contact
            </a>

          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={handleToggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="text-white" />
            ) : (
              <FaBars className="text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-[55px] left-0 w-full bg-gray-700 backdrop-blur-md z-40 px-10 py-5 flex flex-col items-center space-y-4 md:hidden">
            <a
              href="#about"
              className="cursor-pointer text-gray-200 hover:text-gray-400"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="cursor-pointer text-gray-200 hover:text-gray-400"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="cursor-pointer text-gray-200 hover:text-gray-400"
            >
              Contact
            </a>

            <div className="flex flex-row gap-5 mt-4">
              <a
                href="https://payment-gatway-web.vercel.app/coffee"
                target="_blank"
              >
                <Coffee className="text-yellow-400  cursor-pointer" />
              </a>
              <a href="https://wa.me/+916372700872" target="_blank">
                <FaWhatsapp className="text-green-600 text-lg cursor-pointer" />
              </a>
              <a href="https://discord.gg/q2ya7DDU" target="_blank">
                <FaDiscord className="text-[#7A79C1] text-lg cursor-pointer" />
              </a>
              <button onClick={handleTogglePlay}>
                {isPlaying ? (
                  <FaPause className="text-[#7D2935] cursor-pointer" />
                ) : (
                  <FaPlay className="text-[#7D2935] cursor-pointer" />
                )}
              </button>
            </div>
          </div>
        )}

        {/* Music Control & Icons for Desktop */}
        <div className="hidden md:flex flex-row gap-5">
          <audio
            ref={musicRef}
            src="backgroundmusic.m4a"
            controls={false}
            loop
          />
          <a
            href="https://payment-gatway-web.vercel.app/coffee"
            target="_blank"
          >
            <Coffee className="text-yellow-400 text-lg cursor-pointer" />
          </a>
          <a href="https://wa.me/+916372700872" target="_blank">
            <FaWhatsapp className="text-green-600 text-lg cursor-pointer" />
          </a>
          <a href="https://discord.gg/q2ya7DDU" target="_blank">
            <FaDiscord className="text-[#7A79C1] text-lg cursor-pointer" />
          </a>
          <button onClick={handleTogglePlay}>
            {isPlaying ? (
              <FaPause className="text-[#7D2935] cursor-pointer" />
            ) : (
              <FaPlay className="text-[#7D2935] cursor-pointer" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
