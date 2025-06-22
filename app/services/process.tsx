"use client";

import { motion, Variants } from "framer-motion"; // <-- Import Variants here
import { FaRegLightbulb } from "react-icons/fa";
import { GrPowerCycle } from "react-icons/gr";
import { HiMiniCpuChip } from "react-icons/hi2";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineFullscreen } from "react-icons/md";
import { PiIntersectSquareFill } from "react-icons/pi";

function ProcessSection() {
  // Add type annotation to missionVisionSectionVariants
  const missionVisionSectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  // Add type annotation to missionVisionItemVariants
  const missionVisionItemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.6,
      },
    },
  };

  const steps = [
    {
      title: "Discovery & Assessment",
      description:
        "We evaluate your current capabilities, data assets, business objectives, and competitive landscape to identify AI opportunities.",
      duration: "2-3 Weeks",
      position: "left",
      icon: <IoSearchSharp />,
    },
    {
      title: "Strategy Development",
      description:
        "Our team develops a comprehensive AI roadmap with prioritized initiatives, resource requirements, and implementation timelines.",
      duration: "3-4 Weeks",
      position: "right",
      icon: <FaRegLightbulb />,
    },
    {
      title: "Technology Selection",
      description:
        "We identify and evaluate the optimal AI technologies and platforms to support your strategic objectives.",
      duration: "2-3 Weeks",
      position: "left",
      icon: <HiMiniCpuChip />,
    },
    {
      title: "Pilot Implementation",
      description:
        "We implement a proof-of-concept for a high-priority initiative to validate the approach and demonstrate value.",
      duration: "4-6 Weeks",
      position: "right",
      icon: <PiIntersectSquareFill />,
    },
    {
      title: "Scaling & Integration",
      description:
        "Following successful pilot validation, we scale the solution and integrate it with existing systems and processes.",
      duration: "8-12 Weeks",
      position: "left",
      icon: <MdOutlineFullscreen />,
    },
    {
      title: "Continuous Optimization",
      description:
        "We monitor performance, gather feedback, and continuously refine the AI solution to maximize business value.",
      duration: "Ongoing",
      position: "right",
      icon: <GrPowerCycle />,
    },
  ];

  return (
    <motion.section
      className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-16 relative"
      variants={missionVisionSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="absolute right-4 top-1/2 flex max-lg:hidden opacity-30 flex-col gap-4">
        <img src="/sevice/ques2.png" alt="Image 1" className="w-56 " />
      </div>

      <div className="absolute left-4 top-1/2 flex max-lg:hidden opacity-100 flex-col gap-4">
        <img src="/sevice/quess.png" alt="Image 1" className="w-40 " />
      </div>
      <div className="absolute left-4 top-10 flex max-lg:hidden opacity-100 flex-col gap-4">
        <img src="/sevice/earth.png" alt="Image 1" className="w-48 " />
      </div>

      <div className="absolute right-10 top-3/4 flex max-lg:hidden opacity-50 flex-col gap-4">
        <img src="/watermark/Vector.png" alt="Image 1" className="w-32 " />
      </div>
      <div className="absolute left-4 top-3/4 flex max-lg:hidden opacity-50 flex-col gap-4">
        <img src="/watermark/Vector-3.png" alt="Image 1" className="w-32 " />
      </div>
      <div className="absolute right-4 top-10 flex max-lg:hidden opacity-50 flex-col gap-4">
        <img src="/watermark/Vector-3.png" alt="Image 1" className="w-32" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold my-4 leading-tight text-center bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text mb-4"
          variants={missionVisionItemVariants}
        >
          Implementation Process
        </motion.h2>
        <motion.p
          className="text-gray-500 max-w-xl md:max-w-3xl lg:max-w-4xl text-md md:text-lg lg:text-xl mx-auto mb-12"
          variants={missionVisionItemVariants}
        >
          Our structured methodology ensures successful AI strategy development
          and implementation.
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-0.5 h-full w-1 bg-gradient-to-b from-pink-400 to-purple-500"></div>

          {/* Steps */}
          <ul className="space-y-16 relative z-10">
            {steps.map((step, index) => (
              <motion.li
                key={index}
                className="relative flex flex-col md:flex-row md:items-center"
                variants={missionVisionItemVariants}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-pink-400 to-purple-500 rounded-full text-xl text-white absolute left-7 md:left-1/2 transform md:-translate-x-6 -translate-x-5 -translate-y-1/2 z-20"
                  style={{ top: "1.25rem" }}
                >
                  {step.icon}
                </div>

                {/* Mobile View */}
                <div className="ml-16 md:hidden">
                  <h3 className="text-xl font-normal text-neutral-700">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{step.description}</p>
                  <p className="text-sm text-pink-500 mt-1">{step.duration}</p>
                </div>

                {/* Desktop View: Left */}
                {step.position === "left" && (
                  <div className="hidden md:block w-full md:w-1/2 md:pr-16 text-right">
                    <h3 className="text-xl font-normal text-neutral-700">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{step.description}</p>
                    <p className="text-sm text-pink-500 mt-1">{step.duration}</p>
                  </div>
                )}

                {/* Desktop View: Right */}
                {step.position === "right" && (
                  <div className="hidden md:block w-full md:w-1/2 md:pl-14 text-left md:ml-auto">
                    <h3 className="text-xl font-normal text-neutral-700">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{step.description}</p>
                    <p className="text-sm text-pink-500 mt-1">{step.duration}</p>
                  </div>
                )}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}

export default ProcessSection;