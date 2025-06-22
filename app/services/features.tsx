"use client";

import { motion, Variants } from "framer-motion"; // <-- Import Variants here
import { FaLocationArrow } from "react-icons/fa";
import { GoShieldCheck } from "react-icons/go";
import { GiMultiDirections } from "react-icons/gi";
import { HiUsers } from "react-icons/hi2";
import { GrDocumentPerformance } from "react-icons/gr";
import { IoRibbon } from "react-icons/io5";

function FeatureSection() {
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

  const benefits = [
    {
      title: "Competitive Advantage",
      description:
        "Gain a strategic edge by identifying unique AI applications that differentiate your business in the marketplace.",
      icon: <IoRibbon />,
    },
    {
      title: "Risk Mitigation",
      description:
        "Identify potential challenges and develop strategies to address ethical, regulatory, and implementation risks.",
      icon: <GoShieldCheck />,
    },
    {
      title: "ROI Maximization",
      description:
        "Prioritize AI initiatives based on potential return on investment and alignment with business objectives.",
      icon: <GrDocumentPerformance />,
    },
    {
      title: "Scalable Implementation",
      description:
        "Develop a phased approach that allows for incremental deployment and validation of AI solutions.",
      icon: <GiMultiDirections />,
    },
    {
      title: "Organizational Alignment",
      description:
        "Ensure stakeholder buy-in and alignment across departments for successful AI adoption.",
      icon: <HiUsers />,
    },
    {
      title: "Future-Proof Strategy",
      description:
        "Create an adaptable roadmap that can evolve with emerging technologies and changing business needs.",
      icon: <FaLocationArrow />,
    },
  ];

  return (
    <motion.section
      className="bg-pink-50  py-8 sm:py-12 px-4 sm:px-6 lg:px-16 relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="absolute left-2 top-2 md:left-5 md:top-5 flex flex-col gap-2 opacity-20">
        <img src="/sevice/arrow.png" alt="Image 1" className="w-12 md:w-20 lg:w-40" />
      </div>

      {/* Right Ques Image */}
      <div className="absolute right-2 top-2 md:right-5 md:top-5 flex flex-col gap-2 opacity-50">
        <img src="/sevice/quess.png" alt="Image 2" className="w-12 md:w-32 lg:w-40" />
      </div>

      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold my-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600"
            variants={textItemVariants}
          >
            Benefits & Features
          </motion.h2>
          <motion.p
            className="text-gray-500 max-w-xl md:max-w-3xl lg:max-w-4xl text-md md:text-lg lg:text-xl mx-auto mb-12"
            variants={textItemVariants}
          >
            Our AI Strategy Consulting delivers tangible business value through
            a structured approach that addresses your unique challenges and
            opportunities.
          </motion.p>
        </div>

        {/* Feature Cards */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 relative z-10"
          variants={textContainerVariants}
        >
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow cursor-pointer hover:shadow-xl hover:shadow-pink-300 hover:-translate-y-2 transition-all duration-300 ease-in-out"
              variants={textItemVariants}
            >
              <div className="text-sm md:text-xl font-bold rounded-md mb-4 bg-pink-200 w-fit p-2 text-pink-700">
                {item.icon}
              </div>
              <h3 className="text-lg font-normal mb-2 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 text-xs md:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default FeatureSection;