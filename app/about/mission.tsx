"use client";

import { motion } from "framer-motion";
import { FaLightbulb, FaShieldAlt, FaStar,} from 'react-icons/fa';
import {FaUserGroup} from 'react-icons/fa6';

function MissionSection(){

   const missionVisionSectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15, // Stagger elements within this section
      },
    },
  };

  const missionVisionItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
     transition: { ease: "easeInOut", duration: 0.5 },
    },
  };

  const imageAndValuesContainerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeOut",
        duration: 0.7,
        staggerChildren: 0.1, 
        when: "beforeChildren",
      },
    },
  };

  const coreValueItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };
return (
    <motion.section
      className="py-5 md:py-14 bg-[#F4FCFF] px-4 sm:px-6 lg:px-16"
      variants={missionVisionSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 lg:gap-16">
          {/* Left Column - Mission & Vision */}
          <motion.div className="w-full md:w-1/2">
            <motion.h2
              className="text-3xl  md:text-4xl lg:text-5xl font-bold my-4 py-2 leading-tight  bg-gradient-to-l from-purple-500 to-pink-500 bg-clip-text text-transparent"
              variants={missionVisionItemVariants}
            >
              Our Mission & Vision
            </motion.h2>

            <motion.div
              className="mb-6 sm:mb-4 p-4 sm:p-6 bg-[#E3F4FF] hover:bg-[#afdfff] rounded-xl border-l-4 border-pink-500 hover:scale-105 transition-all duration-500"
              variants={missionVisionItemVariants}
            >
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
                Mission
              </h3>
              <p className="text-md sm:text-lg md:text-xl lg:text-xl mb-4 text-gray-700 leading-relaxed">
                To democratize artificial intelligence by creating accessible,
                powerful, and ethical AI solutions that solve real-world
                business challenges and drive meaningful transformation across
                industries.
              </p>
            </motion.div>

            <motion.div
              className="p-4 sm:p-6 bg-[#E3F4FF] rounded-xl hover:bg-[#afdfff] hover:shadow-xl hover:scale-105 transition-all duration-500 border-l-4 border-indigo-500"
              variants={missionVisionItemVariants}
            >
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
                Vision
              </h3>
              <p className="text-md sm:text-lg md:text-xl lg:text-xl mb-4 text-gray-700 leading-relaxed">
                To be the global leader in human-centered AI, building a future
                where advanced technology enhances human potential, creates
                sustainable business growth, and contributes positively to
                society.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Image & Core Values */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col items-center md:items-start"
            variants={imageAndValuesContainerVariants}
          >
            <motion.div
              className="relative w-full max-w-sm sm:max-w-md md:max-w-none mt-3"
              variants={missionVisionItemVariants}
            >
              <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-pink-100 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-purple-100 rounded-full z-0"></div>
              <img
                src="/about/ourmis.png"
                alt="Our Team Collaboration"
                className="rounded-xl shadow-lg relative z-10 w-full h-auto object-cover"
              />
            </motion.div>

            <motion.div
              className="mt-8 md:mt-12 bg-gray-50 p-6 rounded-xl shadow-sm w-full max-w-sm sm:max-w-md md:max-w-none"
              variants={missionVisionItemVariants}
            >
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
                Our Core Values
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    value: "Innovation",
                    icon: <FaLightbulb className="text-lg sm:text-xl" />,
                  },
                  {
                    value: "Integrity",
                    icon: <FaShieldAlt className="text-lg sm:text-xl" />,
                  },
                  {
                    value: "Collaboration",
                    icon: <FaUserGroup className="text-lg sm:text-xl" />,
                  },
                  {
                    value: "Excellence",
                    icon: <FaStar className="text-lg sm:text-xl" />,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 sm:gap-3"
                    variants={coreValueItemVariants}
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                      {item.icon}
                    </div>
                    <span className="font-medium text-gray-800 text-sm sm:text-base">
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default MissionSection;