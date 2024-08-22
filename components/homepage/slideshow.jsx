"use client";

import React from "react";

import Image from "next/image";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import images from "@/constants/images";
const { image1, image2, image3, image4 } = images;

const Slideshow = () => {
  const imageslides = [image1, image2, image3, image4];

  const zoomInProperties = {
    scale: 1.4,
    duration: 5000,
    transitionDuration: 500,
    infinity: true,

    prevArrow: (
      <div className="ml-10 top-40 md:top-72 group z-99">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
              <FaArrowCircleLeft className="h-8 w-8  text-white text-3xl cursor-pointer group-hover:text-accent z-40" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Prev</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    ),
    nextArrow: (
      <div className="ml-10 top-40 md:top-72">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
              <FaArrowCircleRight className="h-8 w-8  text-white text-9xl cursor-pointer group-hover:text-accent" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Next</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    ),
  };
  return (
    <div className="w-full h-3/5 relative">
      <Zoom {...zoomInProperties}>
        {imageslides.map((each, index) => (
          <div
            key={index}
            className="flex justify-center md:items-center items-start w-screen h-screen relative"
          >
            <Image
              className="w-screen h-full ease-out"
              src={each}
              alt="slide image"
              quality={100}
              fill
              objectFit="cover"
            />
          </div>
        ))}
      </Zoom>
      <div className="absolute left-0 w-1/2 h-screen top-0 inset-x-1/4 bg-opacity-60 text-white z-10 bg-black flex justify-center items-center shadow-md">
        <div>
          <h1 className="flex justify-center items-center">Hello creativity</h1>
          <div className="flex justify-center space-x-4 ">
            <button className="px-6 py-3 text-lg font-semibold bg-white text-black hover:bg-opacity-80 hover:bg-accent hover:text-white transition duration-300">
              Contact Us
            </button>
            <button className="px-6 py-3 text-lg font-semibold border border-white bg-transparent text-white hover:bg-accent hover:text-white transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
