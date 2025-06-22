"use client";

import { motion, Variants } from "framer-motion"; // Import Variants type
import React from "react";

function LifeSection() {
  // Annotate variant objects with the 'Variants' type
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

  const navVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeOut", // 'easeOut' is a valid string for easing functions
        duration: 0.5,
      },
    },
  };

  const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

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
      className="bg-white py-16 px-4 sm:px-6 lg:px-16 relative"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Top Left - Vector 3 */}
      <motion.div
        className="absolute left-2 top-2 md:left-10 md:top-10 flex flex-col gap-2 md:gap-4"
        variants={textContainerVariants} // Apply textContainerVariants here to stagger its children
      >
        <motion.img
          variants={imageVariants}
          src="/watermark/Vector-3.png"
          alt="Vector 3" // Changed alt text for clarity
          className="w-20 md:w-28 lg:w-32"
        />
      </motion.div>

      {/* Top Right - Vector 2 */}
      <motion.div
        className="absolute right-2 top-2 md:right-10 md:top-10 flex flex-col gap-2 md:gap-4"
        variants={textContainerVariants} // Apply textContainerVariants here to stagger its children
      >
        <motion.img
          variants={imageVariants}
          src="/watermark/Vector-2.png"
          alt="Vector 2" // Changed alt text for clarity
          className="w-20 md:w-28 lg:w-32"
        />
      </motion.div>

      <div className="container mx-auto">
        <motion.div
          className=" px-4 md:px-8 lg:px-20" // Consider if this extra padding div is truly necessary inside container
          variants={textContainerVariants} // Apply container variants
        >
          <motion.div
            className="text-center mb-8 md:mb-10"
            variants={textContainerVariants} // Apply container variants
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 py-1"
              variants={textItemVariants}
            >
              Life at EarmLabs
            </motion.h2>
            <motion.p
              className="text-center text-gray-700 mb-8 md:mb-10 text-base md:text-lg"
              variants={textItemVariants}
            >
              Hear directly from our team members about their experiences
              working at TrendTech.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 "
            variants={textContainerVariants} // This div holds the testimonial cards, use textContainerVariants to stagger them
          >
            {[
              {
                name: "Sarah Chen",
                role: "Senior Product Manager",
                text: "Working at EarmLabs has been the highlight of my career. The collaborative culture and focus on innovation allows me to make a real impact while growing professionally. I appreciate how leadership truly values work-life balance.",
                img: "/career/lifeat.jpg",
              },
              {
                name: "Marcus Johnson",
                role: "Lead Software Engineer",
                text: "The technical challenges we tackle at EarmLabs keep me engaged every day. I've grown tremendously as an engineer here, thanks to the mentorship opportunities and the company's investment in continuous learning.",
                img: "/career/lifeat2.jpg",
              },
              {
                name: "Elena Rodriguez",
                role: "UX Designer",
                text: "EarmLabs truly values design thinking. I've been able to implement user-centered approaches that make a difference in our products. The supportive team and creative freedom make this an amazing place to work.",
                img: "/career/lifeat1.jpg",
              },
            ].map((person, index) => (
              <motion.div
                key={index}
                variants={textItemVariants} // Apply textItemVariants to each card for individual animation
                className="bg-purple-50 p-6 md:p-8 rounded-xl shadow hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <motion.img
                    variants={imageVariants} // This should be applied to the image directly
                    src={person.img}
                    alt={person.name}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                  />
                  <div>
                    <motion.h4
                      className="font-semibold text-sm md:text-base text-gray-900"
                      variants={textItemVariants}
                    >
                      {person.name}
                    </motion.h4>
                    <motion.p
                      className="text-xs md:text-sm text-gray-500"
                      variants={textItemVariants}
                    >
                      {person.role}
                    </motion.p>
                  </div>
                </div>
                {/* For the testimonial text itself, you might want to apply textItemVariants directly if it's meant to animate individually */}
                <motion.p
                  className="text-sm text-gray-700 italic leading-6 md:leading-7"
                  variants={textItemVariants}
                >
                  "{person.text}"
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default LifeSection;