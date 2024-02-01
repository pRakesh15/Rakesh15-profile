import React, { useRef, useState } from "react";
import { FaPlay, FaDiscord, FaWhatsapp, FaPause } from "react-icons/fa";

const Navbar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
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

  return (
    <div className="w-full h-[55px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[5px]">
        {/* avatar logo and name */}
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
          <span className="font-bold ml-[5px] hidden md:block text-gray-300  hover:text-gray-400">
            Rakesh Pradhan
          </span>
        </a>
        {/* skills projects contacts */}
        <div
          className="w-[500px] h-full flex flex-row items-center justify-between
         md:mr-20"
        >
          <div className="flex items-center w-full h-auto justify-between border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#skills" className="cursor-pointer  hover:text-gray-400">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer  hover:text-gray-400">
              Projects
            </a>
            <a href="#contact" className="cursor-pointer  hover:text-gray-400">
              Contact
            </a>
            <a href="#contact" className="cursor-pointer  hover:text-gray-400">
            Blog
          </a>
          </div>
        </div>
        {/* for music play and pus */}
        <div className="flex flex-row gap-5">
          <audio
            ref={musicRef}
            src="backgroundmusic.m4a"
            controls={false}
            loop
          />

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
