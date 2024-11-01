import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

// import { motion } from "framer-motion";
import { FloatingDock } from "../ui/floating-dock";

export function AnimatedModalDemo() {
  const links = [
    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.facebook.com/profile.php?id=100066305690629",
    },
    {
      title: "Twitter/X",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/PradhanaRakesh",
    },
    {
      title: "Resume",
      icon: (
        <div className="h-full w-full text-neutral-500 dark:text-neutral-300 flex items-center justify-center">
          {/* You can use an SVG, local image, or create an SVG component here */}
          <span>📄</span>
        </div>
      ),
      href: "https://res.cloudinary.com/dcycd6p6i/image/upload/v1730478444/Rakesh_Pradhan_fullStackDEV_page-0001_fnay7k.jpg", // Link to the resume file
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/mr_yiconic_15/",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
     href:"https://www.linkedin.com/in/rakesh-pradhan-664808253/"
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/pRakesh15",
    },
  ];
  return (
    (<div className="py-1 button-primary text-white cursor-pointer rounded-lg max-w-[160px]">
      <Modal>
        <ModalTrigger className="flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            More About Me!
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            👨‍💻
          </div>
        </ModalTrigger>
    
        <ModalBody>
          <ModalContent>
            {/* Add Profile Section */}
            <div className="p-6 -mt-12 relative">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                {/* Left Side - Profile Picture */}
                <div className="flex-shrink-0">
                  <img
                    src="/profile.png"
                    alt="Profile"
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-xl hover:scale-105 transition-transform"
                  />
                </div>
    
                {/* Right Side - Content */}
                <div className="flex-grow pt-4 text-center md:text-start">
                  {/* Name with Gradient */}
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                    Rakesh Pradhan
                  </h2>
    
                  {/* Title */}
                  <p className="text-gray-600 text-md md:text-lg mb-4 font-medium ">
                    Email: {" "} <span className="hover:text-blue-600">rp5865442@gmail.com</span>
                  </p>
    
                  {/* About Me */}
                  <div className="bg-transparent rounded-lg p-4 mb-4 shadow-inner">
                    <p className="text-white leading-relaxed text-sm md:text-base">
                      I'm a passionate software developer who loves creating beautiful and functional web applications. 
                      In my free time, you'll find me either immersed in cricket matches or playing BGMI with friends. 
                      I believe in continuous learning and enjoy exploring new technologies to expand my skill set.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ModalContent>
    
          <ModalFooter className="gap-4">
            {/* Floating Dock Footer */}
            <FloatingDock
              items={links}
              mobileClassName="translate-y-10 md:translate-y-20"
            />
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
    )
  );
}
