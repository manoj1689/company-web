"use client";

import { motion, Variants } from "framer-motion"; // <-- Import Variants here
import React from "react";
import { FaCheck, FaGraduationCap } from "react-icons/fa";
import { FaHeartPulse, FaSackDollar, FaScaleBalanced } from "react-icons/fa6";

function BenefitsSection() {
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
      id="benefits"
      className="py-16 px-4 sm:px-6 lg:px-16 bg-white relative"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Top Right Vector 2 */}
      <div className="absolute right-2 top-2 md:right-10 md:top-10 flex flex-col gap-2 md:gap-4">
        <img
          src="/watermark/Vector-2.png"
          alt="Image 1"
          className="w-16 md:w-20 lg:w-24"
        />
      </div>

      {/* Top Left Vector 3 */}
      <div className="absolute left-2 top-2 md:left-10 md:top-10 flex flex-col gap-2 md:gap-4">
        <img
          src="/watermark/Vector-3.png"
          alt="Image 2"
          className="w-16 md:w-24 lg:w-30"
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-10 md:mb-16"
          variants={textContainerVariants} // Apply textContainerVariants here
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500"
            variants={textItemVariants} // Apply textItemVariants for individual text animation
          >
            Benefits & Perks
          </motion.h2>
          <motion.p
            className="text-gray-600 text-md sm:text-lg md:text-xl lg:text-xl max-w-3xl mx-auto"
            variants={textItemVariants} // Apply textItemVariants for individual text animation
          >
            We believe in taking care of our team members with comprehensive
            benefits that support your health, wealth, and work-life balance
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch"
          variants={textContainerVariants} // Apply to the grid container
        >
          {[
            {
              title: "Health & Wellness",
              items: [
                "Comprehensive medical, dental & vision",
                "Mental health resources",
                "On-site fitness classes",
                "Wellness programs and gym stipend",
              ],
              icon: <FaHeartPulse className="text-white text-xl" />,
              iconBg: "bg-purple-600",
              gradient: "from-purple-50 to-pink-50",
              titleColor: "text-purple-700",
              checkColor: "text-purple-500",
            },
            {
              title: "Financial Benefits",
              items: [
                "Competitive salary packages",
                "401(k) with company matching",
                "Stock options & equity grants",
                "Generous bonus structure",
              ],
              icon: <FaSackDollar className="text-white text-2xl" />,
              iconBg: "bg-blue-600",
              gradient: "from-blue-50 to-sky-50",
              titleColor: "text-blue-700",
              checkColor: "text-blue-500",
            },
            {
              title: "Work-Life Balance",
              items: [
                "Flexible work arrangements",
                "Generous PTO policy",
                "Paid parental leave",
                "Sabbatical program",
              ],
              icon: <FaScaleBalanced className="text-white text-3xl" />,
              iconBg: "bg-green-600",
              gradient: "from-green-50 to-emerald-50",
              titleColor: "text-green-700",
              checkColor: "text-green-500",
            },
            {
              title: "Professional Growth",
              items: [
                "Learning & development budget",
                "Conference attendance",
                "Mentorship programs",
                "Career advancement paths",
              ],
              icon: <FaGraduationCap className="text-white text-2xl" />,
              iconBg: "bg-orange-600",
              gradient: "from-orange-50 to-yellow-50",
              titleColor: "text-orange-700",
              checkColor: "text-orange-600 font-bold",
            },
          ].map((category, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-b ${category.gradient} p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between h-full min-h-[280px] md:min-h-[320px]`}
              variants={textContainerVariants} // Apply to each card for staggered appearance
            >
              <div className="flex flex-col ">
                <motion.div
                  className={`w-12 h-12 md:w-14 md:h-14 ${category.iconBg} rounded-full flex items-center justify-center shadow-sm mb-4 md:mb-6`}
                  variants={textItemVariants} // Animates the icon container within each card
                >
                  {category.icon}
                </motion.div>

                <motion.h3
                  className={`text-lg md:text-xl font-semibold ${category.titleColor} mb-2 md:mb-3`}
                  variants={textItemVariants} // Animates the title within each card
                >
                  {category.title}
                </motion.h3>

                <motion.div
                  className="space-y-2 md:space-y-3"
                  variants={textContainerVariants} // Use textContainerVariants to stagger items inside the list
                >
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 md:gap-3 w-full"
                    >
                      <FaCheck
                        className={`${category.checkColor} mt-[2px] text-sm flex-shrink-0`}
                      />
                      <motion.span
                        className="text-gray-700 text-base leading-tight"
                        variants={textItemVariants} // Animates each list item
                      >
                        {item}
                      </motion.span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
export default BenefitsSection;