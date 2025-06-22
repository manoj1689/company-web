"use client"; // Ensure this is at the very top if it's a client component

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { Star } from "lucide-react";
import { MotionProps } from "framer-motion";

interface FloatBox {
  icon: IconType;
  title: string;
  subtitle?: string;
  position:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "center-left"
    | "center-right"
    | "Top-right" // Typo, should ideally be consistent casing if possible
    | "TOP-left"; // Typo, should ideally be consistent casing if possible

  motionProps?: MotionProps;
  iconColor?: string;
  iconsize?: string;
  bgcolor?: string;
}

const avatars = ["user1.png", "user2.png", "user3.png", "total.png"];

const AvatarStack = () => (
  <div className="flex">
    {avatars.map((img, i) => (
      <img
        key={i}
        src={`/landing/headerUsers/${img}`}
        alt={`user-${i}`}
        className={`w-14 h-14 rounded-full border-2 border-white object-cover ${
          i === 0 ? "ml-0" : i === 1 ? "-ml-4" : i === 2 ? "-ml-6" : "-ml-8"
        }`}
      />
    ))}
  </div>
);

const vectors = [
  {
    src: "/watermark/Vector.png",
    className: " top-4 left-1/3 w-24 h-24 md:w-32 md:h-32",
    size: "75px",
  },
  {
    src: "/watermark/Vector-1.png",
    className: "left-1/2 top-32 w-24 h-24 md:w-32 md:h-32 ", //top hafl left wala
    size: "100px",
  },
  {
    src: "/watermark/Vector-2.png",
    className: "top-1/2 left-1/2 w-24 h-24 md:w-32 md:h-32 ",
    size: "75px",
  },
  {
    src: "/watermark/Vector-3.png",
    className: "top-1/3 left-32 w-24 h-24 md:w-32 md:h-32 ",
    size: "45px",
  },
  {
    src: "/watermark/Vector-3.png",
    className: "top-10 left-0 w-24 h-24 md:w-56 md:h-56 ", //left wala watermark top
    size: "170px",
  },
  {
    src: "/watermark/Vector-4.png",
    className: "top-5 right-0 w-24 h-24 md:w-48 md:h-48 ", //niche corner wala
    size: "140px",
  },
  {
    src: "/watermark/Vector-6.png",
    className: "bottom-40 left-10 w-24 h-24 md:w-44 md:h-44 ", //niche corner wala
    size: "100px",
  },
  {
    src: "/watermark/Vector-6.png",
    className: "bottom-52 right-5 w-24 h-24 md:w-32 md:h-32 ", //niche corner wala
    size: "100px",
  },
];

const Rating = () => (
  <div className="text-sm text-gray-600">
    <div className="font-semibold">500+ Happy Clients</div>
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className="w-3 sm:w-4 h-3 sm:h-4 fill-yellow-400 text-yellow-400"
        />
      ))}
      <span className="ml-1 text-xs sm:text-sm">4.9/5</span>
    </div>
  </div>
);

const getPositionClasses = (position: string) => {
  // These should be the *final, resting* positions.
  // The Framer Motion `y` animation will be relative to these.
  switch (position) {
    case "top-left":
      return "top-40 left-4";
    case "top-right":
      return "top-44 right-5";
    case "bottom-left":
      return "bottom-32 left-4";
    case "bottom-right":
      return "bottom-4 right-4";
    case "center-right":
      return "bottom-20 right-4";
    case "center-left":
      return "top-20 left-4";
    // Consistent casing is recommended for positions
    case "Top-right":
      return "top-40 right-10";
    case "TOP-left":
      return "top-32 -left-16";
    default:
      return "top-4 right-4";
  }
};

const HeroContent = ({
  badge,
  title,
  colorTitle,
  subtitle,
  image,
  floatBoxes = [],
}: {
  badge: string;
  title: string;
  colorTitle: string;
  subtitle: string;
  image: string;
  floatBoxes?: FloatBox[];
}) => (
  <section className="py-16 sm:py-12 px-4 sm:px-6 lg:px-16 container mx-auto relative overflow-hidden">
    {vectors.map((vector, idx) => (
      <div
        key={idx}
        className={`absolute bg-no-repeat bg-contain opacity-100 pointer-events-none ${vector.className}`}
        style={{
          backgroundImage: `url('${vector.src}')`,
          backgroundSize: vector.size,
        }}
      ></div>
    ))}

    <div className="">
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center ">
        <div className="space-y-4 sm:space-y-12 ">
          <p className="text-orange-500 text-xs sm:text-sm text-start bg-[#FF5D5D1A] w-fit px-4 py-1 rounded-xl font-medium">
            {badge}
          </p>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-start font-bold leading-tight">
            {title}{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {colorTitle}
            </span>
          </h1>
          <p className="text-gray-600 text-md sm:text-lg md:text-xl lg:text-xl text-left mx-auto ">
            {subtitle}
          </p>
          <div className="flex items-center space-x-4 sm:space-x-6">
            <AvatarStack />
            <Rating />
          </div>
        </div>

        <div className="relative z-10 w-full max-sm:hidden">
          <div className="relative w-full mx-auto">
            {/* Using motion.img for the main image for better control during load */}
            <motion.img
              src={image}
              alt="Hero"
              width={500}
              height={600}
              className="rounded-full w-full h-auto"
              // Optional: Add a subtle fade-in or scale from its natural state if desired
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />

            {floatBoxes.map((box, i) => {
              const Icon = box.icon;
              const motionDefaults = {
                // The animation will cause a relative shift from the *current* position.
                // So, if we want it to float around its static position, start at 0.
                y: [0, -10, 0], // Floats up 10px then returns
                rotate: [0, 0.5, -0.5, 0], // Subtle rotation
              };
              const transitionDefaults = {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror" as const,
              };

              // Determine the icon size to pass to the React Icon 'size' prop
              // Default to '40' (which corresponds to w-10 h-10) if not provided.
              const iconSizeValue = box.iconsize ? parseInt(box.iconsize) : 40;

              return (
                <motion.div
                  key={i}
                  // Crucial Fix: Ensure the initial state is the neutral position (no offset)
                  initial={{ y: 0, rotate: 0, opacity: 1 }} // Starts fully visible and at its defined 'top/left/right/bottom' position
                  animate={box.motionProps?.animate || motionDefaults}
                  transition={box.motionProps?.transition || transitionDefaults}
                  className={`absolute ${getPositionClasses(
                    box.position
                  )} ${
                    box.bgcolor || "bg-white"
                  } shadow-md px-4 py-2 rounded-xl flex items-center gap-2 text-sm `}
                >
                  <Icon
                    className={`${box.iconColor || "text-orange-300"} shrink-0`}
                    size={iconSizeValue}
                  />
                  <div>
                    <div className=" font-semibold text-lg text-gray-700">
                      {box.title}
                    </div>
                    {box.subtitle && (
                      <div className="text-gray-500 text-xs">
                        {box.subtitle}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroContent;