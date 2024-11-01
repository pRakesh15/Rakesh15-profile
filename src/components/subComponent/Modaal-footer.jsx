import React from "react";
import { FloatingDock } from "../ui/floating-dock";
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandGithub, IconBrandX } from "@tabler/icons-react";
 // Only needed if you use Next.js for the image; otherwise, replace with an img tag

export function FloatingDockDemo() {
  const links = [
    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://facebook.com",
    },
    {
      title: "Twitter/X",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://twitter.com",
    },
    {
      title: "Resume",
      icon: (
        <div className="h-full w-full text-neutral-500 dark:text-neutral-300 flex items-center justify-center">
          {/* You can use an SVG, local image, or create an SVG component here */}
          <span>📄</span>
        </div>
      ),
      href: "/resume.pdf", // Link to the resume file
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://instagram.com",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://linkedin.com",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com",
    },
  ];

  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links} />
    </div>
  );
}
