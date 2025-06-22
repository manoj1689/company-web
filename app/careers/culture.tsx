"use client";

import { motion, Variants } from "framer-motion"; // <-- Import Variants here
import { FaRegLightbulb, FaRegHeart } from "react-icons/fa";
import { FiUsers, FiBookOpen } from "react-icons/fi";
import React from "react";

function CultureSection() {
  // Add type annotation to sectionVariants
  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  // Add type annotation to navVariants
  const navVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeOut",
        duration: 0.5,
      },
    },
  };

  // Add type annotation to textContainerVariants
  const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Add type annotation to textItemVariants
  const textItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.6,
      },
    },
  };

  // Add type annotation to imageVariants
  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeOut",
        duration: 0.7,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.section
      className="py-16 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-purple-50 to-pink-50 relative"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Top Left Vector 2 */}
      <div className="absolute left-2 top-2 md:left-10 md:top-10 flex flex-col gap-2 md:gap-4">
        <img
          src="/watermark/Vector-2.png"
          alt="Image 1"
          className="w-16 md:w-20 lg:w-24"
        />
      </div>

      {/* Top Right Vector 3 */}
      <div className="absolute right-2 top-2 md:right-10 md:top-10 flex flex-col gap-2 md:gap-4">
        <img
          src="/watermark/Vector-3.png"
          alt="Image 2"
          className="w-16 md:w-24 lg:w-30"
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-10 md:mb-16"
          variants={textContainerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500"
            variants={textItemVariants}
          >
            Our Culture
          </motion.h2>
          <motion.p
            className="text-neutral-600 max-w-3xl mx-auto text-md sm:text-lg md:text-xl lg:text-xl"
            variants={textItemVariants}
          >
            At EramLabs, we foster an environment of innovation, collaboration,
            and continuous learning. Our culture is built on these core values.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10 md:mb-16"
          variants={textContainerVariants}
        >
          {[
            {
              title: "Innovation",
              description:
                "We encourage creative thinking and bold ideas that push the boundaries of what's possible with AI.",
              icon: <FaRegLightbulb className="text-2xl" />,
            },
            {
              title: "Collaboration",
              description:
                "We believe the best solutions come from diverse teams working together toward common goals.",
              icon: <FiUsers className="text-2xl" />,
            },
            {
              title: "Continuous Learning",
              description:
                "We invest in our team's growth and development, fostering a culture of lifelong learning.",
              icon: <FiBookOpen />,
            },
            {
              title: "Inclusivity",
              description:
                "We celebrate diversity and create an environment where everyone feels valued and respected.",
              icon: <FaRegHeart />,
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              variants={textContainerVariants} // Apply variants to the parent div for each item
            >
              <motion.div
                className="w-14 h-14 md:w-16 md:h-16 font-bold bg-pink-100 rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto text-pink-600 text-xl md:text-3xl"
                // No variants directly here, as its parent 'textContainerVariants' handles staggering
              >
                {value.icon}
              </motion.div>
              <motion.h3
                className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3 text-center"
                variants={textItemVariants} // Apply textItemVariants here if you want individual text animation within the card
              >
                {value.title}
              </motion.h3>
              <motion.p
                className="text-gray-700 text-sm sm:text-md md:text-md lg:text-md text-center"
                variants={textItemVariants} // Apply textItemVariants here if you want individual text animation within the card
              >
                {value.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex flex-col md:flex-row gap-2">
          <motion.img
            src="/colla3.png"
            alt=""
            className="w-full md:w-1/3 object-cover rounded-lg shadow-md"
            variants={imageVariants}
          />
          <motion.img
            src="/colla.png"
            alt=""
            className="w-full md:w-1/3 object-cover rounded-lg shadow-md"
            variants={imageVariants}
          />
          <motion.img
            src="/colla2.png"
            alt=""
            className="w-full md:w-1/3 object-cover rounded-lg shadow-md"
            variants={imageVariants}
          />
        </div>
      </div>
    </motion.section>
  );
}
export default CultureSection;