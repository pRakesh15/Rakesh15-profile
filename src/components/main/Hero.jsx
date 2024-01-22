import React from "react";
import HeroContent from "../subComponent/HeroContent";
function Hero() {
  return (
    <div id="about-me" className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-300px] h-full w-full left-0 z-[1] object-cover opacity-70"
      >
      <source src="/blackhole.webm" type="video/webm"/>
      </video>
      <HeroContent/>
    </div>
  );
}

export default Hero;
