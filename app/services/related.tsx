"use client";

import { motion, Variants } from "framer-motion"; // <-- Import Variants here
import { LuChartLine } from "react-icons/lu";
import { PiBrainThin } from "react-icons/pi";
import { RiRobot2Line } from "react-icons/ri";
import React, { JSX } from "react";

function RelatedSection() {
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

  // Add type annotation to containerVariants
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  // Add type annotation to leftColumnVariants
  const leftColumnVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeOut",
        duration: 0.7,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  // Add type annotation to rightColumnVariants
  const rightColumnVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeOut",
        duration: 0.7,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  // Add type annotation to formItemVariants
  const formItemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Add type annotation to contactInfoItemVariants
  const contactInfoItemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeOut",
        duration: 0.5,
      },
    },
  };

  type Service = {
    icon: JSX.Element;
    title: string;
    description: string;
    link: string;
  };

  const services: Service[] = [
    {
      icon: <PiBrainThin className="w-8 h-8 text-blue-500" />,
      title: "Machine Learning Solutions",
      description:
        "Custom ML models to extract insights from your data and automate complex decision processes.",
      link: "#",
    },
    {
      icon: <RiRobot2Line className="w-8 h-8 text-blue-500" />,
      title: "Process Automation",
      description:
        "Streamline operations with intelligent automation that adapts to changing business conditions.",
      link: "#",
    },
    {
      icon: <LuChartLine className="w-8 h-8 text-blue-500" />,
      title: "Data Analytics",
      description:
        "Transform raw data into actionable intelligence with our advanced analytics capabilities.",
      link: "#",
    },
  ];

  return (
    <motion.section
      className="bg-blue-100 py-16 px-4 sm:px-6 lg:px-16 relative"
      variants={missionVisionSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="absolute left-2 top-1/2 flex max-lg:hidden opacity-100 flex-col gap-4">
        <img src="/sevice/earth2.png" alt="Image 1" className="w-64" />
      </div>
      <div className="absolute right-2 top-56 flex max-lg:hidden opacity-20 flex-col gap-4">
        <img src="/sevice/star.png" alt="Image 1" className="w-20" />
      </div>
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-5 md:mb-12 px-4">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500"
            variants={missionVisionItemVariants}
          >
            Related Services
          </motion.h2>
          <motion.p
            className="text-gray-500 max-w-xl md:max-w-3xl lg:max-w-4xl text-md md:text-lg lg:text-xl mx-auto mb-12"
            variants={missionVisionItemVariants}
          >
            Explore our other AI solutions that complement our Strategy
            Consulting services.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          className="md:w-3/4 mx-auto grid gap-6 px-6 md:grid-cols-3"
          variants={missionVisionSectionVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              variants={missionVisionItemVariants}
            >
              <div className="mb-4 bg-indigo-100 w-fit p-2 rounded-lg">
                {service.icon}
              </div>
              <h3 className="text-xl text-gray-600 font-normal mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-xs md:text-base mb-4">
                {service.description}
              </p>
              <a
                href={service.link}
                className="text-blue-600 hover:underline"
              >
                Learn more
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default RelatedSection;