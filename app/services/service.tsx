"use client";

import { motion, Variants } from "framer-motion"; // Import Variants
import { FaRegCheckCircle } from "react-icons/fa";

function ServiceSection() {
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
      transition: { ease: "easeInOut", duration: 0.5 },
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
      className="w-full py-16 px-4 sm:px-6 lg:px-16 bg-white relative mt-1 overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="absolute left-5  top-0 flex max-lg:hidden flex-col gap-4">
        <img src="/sevice/bond.png" alt="Image 1" className="w-30" />
      </div>

      <div className="absolute right-5  bottom-10 flex max-lg:hidden flex-col gap-4">
        <img src="/sevice/bond.png" alt="Image 1" className="w-40" />
      </div>
      <div className="absolute right-1/2 top-0 flex max-lg:hidden flex-col gap-4">
        <img src="/sevice/graph.png" alt="Image 1" className="w-30" />
      </div>

      <div className="absolute left-14 bottom-10 flex max-lg:hidden flex-col gap-4">
        <img src="/sevice/bulb.png" alt="Image 1" className="w-40" />
      </div>

      <div className="flex flex-col md:flex-row container   mx-auto">
        <motion.div
          className="md:w-1/2 space-y-4"
          variants={textContainerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold my-4 leading-tight bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text"
            variants={textItemVariants}
          >
            Services Overview
          </motion.h2>

          <div className="mr-5  relative z-10">
            <motion.p
              className="text-gray-700 text-sm md:text-lg lg:text-xl"
              variants={textItemVariants}
            >
              Our AI Strategy Consulting service provides organizations with a
              clear roadmap for leveraging artificial intelligence to achieve
              business objectives. We combine deep technical expertise with
              business acumen to develop strategies that drive real value.
            </motion.p>

            {/* Background Image */}
            <div
              className="absolute left-3 w-24 h-24 md:w-32 md:h-32 bg-no-repeat bg-contain opacity-100 pointer-events-none z-0"
              style={{
                backgroundImage: "url('/watermark/vector-2.png')",
                backgroundSize: "500px",
                top: "50%",
              }}
            ></div>

            {/* Service List */}
            <motion.ul
              className="space-y-2 text-gray-700 text-base text-start relative z-10"
              variants={textContainerVariants}
            >
              {[
                {
                  title: "Comprehensive Assessment",
                  description:
                    "Evaluate your current capabilities, data assets, and organizational readiness for AI adoption.",
                },
                {
                  title: "Strategic Roadmap",
                  description:
                    "Develop a prioritized implementation plan with clear milestones and resource requirements.",
                },
                {
                  title: "Technology Selection",
                  description:
                    "Identify the right AI technologies and platforms to meet your specific business needs.",
                },
                {
                  title: "Change Management",
                  description:
                    "Prepare your organization for successful AI adoption with comprehensive change management support.",
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start ml-0"
                  variants={textItemVariants}
                >
                  <span className="text-pink-500 text-xl mr-2 mt-7">
                    <FaRegCheckCircle />
                  </span>
                  <div className="flex flex-col mt-2">
                    <h1 className="leading-tight text-gray-800 text-sm md:text-md lg:text-lg">
                      {item.title}
                    </h1>
                    <p className="leading-tight text-gray-600 text-sm md:text-md lg:text-lg">
                      {item.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <motion.button
            className="mt-4 px-5 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded transition"
            variants={textItemVariants}
          >
            Know More
          </motion.button>
        </motion.div>

        {/* Image */}
        <motion.div
          className="md:w-1/2 mt-5 md:mt-10"
          variants={imageVariants}
        >
          <img className=" rounded-md" src="/sevice/serv2.png" alt="AI Consulting" />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default ServiceSection;