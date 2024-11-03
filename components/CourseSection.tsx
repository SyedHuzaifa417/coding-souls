"use client";

import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  backgroundImage: StaticImageData;
  onContactClick?: () => void;
}

const HeroSection = ({
  title = "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.",
  subtitle = "Lorem Ipsum Dolor Sit Amet.",
  buttonText = "Contact Now",
  backgroundImage,
  onContactClick = () => {},
}: HeroSectionProps) => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Background"
        fill
        priority
        className="object-cover"
        quality={100}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* Content */}
      <div className="relative z-[2] text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">{subtitle}</p>
        <button
          onClick={onContactClick}
          className="px-8 py-3 bg-white text-gray-900 rounded-full font-medium 
                   hover:bg-gray-100 transition-colors duration-200 
                   transform hover:scale-105"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
