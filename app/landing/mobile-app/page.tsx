"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  FaLightbulb,
  FaLongArrowAltLeft,
  FaRegLightbulb,
  FaShieldAlt,
  FaStar,
  FaTwitter,
  FaUserFriends,
} from "react-icons/fa";
import Header from "@/components/header/page";
import Navbar from "@/components/inner-navbar";
import Footer from "@/components/footer/page";
import AIIndustryChart from "./AIIndustryChart";

export default function MobileAutomationAI() {
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
        ease: "easeOut",
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

  const router = useRouter();
  const handlenavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="bg-white text-gray-800 font-sans relative overflow-hidden">
      <Navbar />
      <motion.section
        className="py-8 sm:py-12 px-4 sm:px-6 lg:px-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="absolute left-2 top-2 md:left-10 md:top-10 flex flex-col gap-2 md:gap-4">
          <img
            src="/watermark/Vector- 1.png"
            alt="Image 1"
            className="w-12 md:w-20 lg:w-24"
          />
        </div>
        <div className="absolute right-2 top-40 md:right-5 md:top-72 flex flex-col gap-2 md:gap-4">
          <img
            src="/watermark/Vector-2.png"
            alt="Image 2"
            className="w-12 md:w-24 lg:w-30"
          />
        </div>
        <div className="absolute left-2 top-44 md:left-5 md:top-80 flex flex-col gap-2 md:gap-4">
          <img
            src="/watermark/Vector-2.png"
            alt="Image 3"
            className="w-12 md:w-24 lg:w-30"
          />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-44 md:top-80 flex flex-col gap-2 md:gap-4">
          <img
            src="/watermark/Vector-3.png"
            alt="Image 4"
            className="w-12 md:w-24 lg:w-30"
          />
        </div>
        <div className="absolute right-1/2 translate-x-1/2 top-2 md:top-10 flex flex-col gap-2 md:gap-4">
          <img
            src="/watermark/Vector-2.png"
            alt="Image 5"
            className="w-12 md:w-24 lg:w-30"
          />
        </div>
        <div className="container mx-auto">
          <motion.div
            className="top-4 md:top-6 flex gap-2"
            variants={navVariants}
          >
            <FaLongArrowAltLeft
              onClick={() => handlenavigation("/landing")}
              className="hover:cursor-pointer mt-0 md:mt-1 text-xs md:text-base text-pink-600"
            />
            <p
              onClick={() => handlenavigation("/landing")}
              className="hover:cursor-pointer text-xs md:text-base md:font-medium bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text"
            >
              Back to Home
            </p>
          </motion.div>
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              variants={textContainerVariants}
              className="flex flex-col lg:flex-row justify-between items-center py-10 md:py-12 gap-4"
            >
              <div className="lg:w-1/2 text-left">
                <motion.h2
                  variants={textItemVariants}
                  className="ext-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                  Effortless Mobile <br />
                  <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                    Automation with AI
                  </span>
                </motion.h2>
                <motion.p
                  variants={textItemVariants}
                  className="mt-4 text-gray-600 max-w-3xl text-md sm:text-lg md:text-xl lg:text-xl"
                >
                  Pioneering the future of AI-driven business solutions since
                  2018. We combine cutting-edge technology with deep industry
                  expertise to transform how organizations operate in the
                  digital age.
                </motion.p>

                {/* Info Grid */}
                <motion.div
                  variants={textContainerVariants}
                  className="grid grid-cols-2 gap-4 mt-8 max-w-md mx-auto lg:mx-0 relative"
                >
                  {[
                    { label: "Project Duration", value: "6 Months" },
                    { label: "ROI", value: "342%" },
                    { label: "Time Saved", value: "87%" },
                    { label: "Annual Savings", value: "$2.4M" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-purple-600"
                    >
                      <div className="rounded-lg px-4 py-3 text-center bg-white">
                        <motion.p
                          variants={textItemVariants}
                          className="text-sm text-gray-600"
                        >
                          {item.label}
                        </motion.p>
                        <motion.p
                          variants={textItemVariants}
                          className="font-semibold text-lg text-gray-800"
                        >
                          {item.value}
                        </motion.p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              <motion.div variants={imageVariants} className="lg:w-1/2 flex justify-end">
                <img
                  src="/servoffer/android.png"
                  alt="AI Automation"
                  className="w-5/6"
                />
              </motion.div>
            </motion.div>
          </motion.section>
        </div>
      </motion.section>

      {/* Native Development Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-[#FFF9FC] py-8 sm:py-12 px-4 sm:px-6 lg:px-16 relative"
      >
        <div className="absolute left-2 top-44 md:left-0 md:top-40 flex flex-col gap-2 md:gap-4">
          <img
            src="/watermark/Vector-2.png"
            alt="Image 3"
            className="w-12 md:w-24 lg:w-30"
          />
        </div>
        <div className="absolute right-0 top-44 md:right-5 md:top-40">
          <img
            src="/servoffer/earth.png"
            alt="Image 3"
            className="w-12 md:w-24 lg:w-40"
          />
        </div>
        <div className="absolute left-0 bottom-0 md:left- md:bottom-10">
          <img
            src="/servoffer/ion.png"
            alt="Image 3"
            className="w-12 md:w-24 lg:w-64"
          />
        </div>
        <div className="container mx-auto">
          <motion.div
            variants={textContainerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            <div className="space-y-10">
              <motion.div variants={textContainerVariants} className="px-10">
                <motion.h3
                  variants={textItemVariants}
                  className="text-xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text mb-4"
                >
                  Native Development
                </motion.h3>
                <motion.ul
                  variants={textItemVariants}
                  className="list-disc list-inside text-gray-600 space-y-3 text-sm md:text-md lg:text-lg"
                >
                  <motion.li variants={textItemVariants}>
                    Kotlin Programming Language
                  </motion.li>
                  <motion.li variants={textItemVariants}>Android Development (Kotlin)</motion.li>
                  <motion.li variants={textItemVariants}>UI Design with XML</motion.li>
                  <motion.li variants={textItemVariants}>Jetpack Libraries</motion.li>
                  <motion.li variants={textItemVariants}>Material Design Principles</motion.li>
                  <motion.li variants={textItemVariants}>Intents & Services</motion.li>
                  <motion.li variants={textItemVariants}>RecyclerView & ListView</motion.li>
                  <motion.li variants={textItemVariants}>Permissions and Security</motion.li>
                  <motion.li variants={textItemVariants}>Performance Optimization</motion.li>
                </motion.ul>
                <motion.p
                  variants={textItemVariants}
                  className="text-gray-700 text-sm md:text-md lg:text-lg mt-4"
                >
                  The manual nature of their workflow was not only expensive but also created significant operational risks and limited their ability to scale effectively in a competitive market.
                </motion.p>
              </motion.div>
            </div>

            <div className="flex flex-col lg:flex-row">
              <motion.div
                variants={textContainerVariants}

              >

                <motion.img
                  variants={imageVariants}
                  src="/landing/service/mobile-development/native.png"
                  alt="Solution Architecture"
                  className="w-full rounded-md mb-3 mx-auto"
                />

              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Cross Platform */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-[#FFF9FC] py-8 sm:py-12 px-4 sm:px-6 lg:px-16 relative"
      >
        <div className="absolute left-2 top-44 md:left-0 md:top-40 flex flex-col gap-2 md:gap-4">
          <img
            src="/watermark/Vector-2.png"
            alt="Image 3"
            className="w-12 md:w-24 lg:w-30"
          />
        </div>
        <div className="absolute right-0 top-44 md:right-5 md:top-40">
          <img
            src="/servoffer/earth.png"
            alt="Image 3"
            className="w-12 md:w-24 lg:w-40"
          />
        </div>
        <div className="absolute left-0 bottom-0  md:bottom-10">
          <img
            src="/servoffer/ion.png"
            alt="Image 3"
            className="w-12 md:w-24 lg:w-64"
          />
        </div>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row">
            <motion.div
              variants={textContainerVariants}
              className="space-y-8 lg:w-1/2 py-4"
            >
              <motion.h4
                variants={textItemVariants}
                className="text-xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text "
              >
                Cross Platform
              </motion.h4>
              <motion.p
                variants={textItemVariants}
                className="text-lg md:text-xl text-gray-700 mb-6"
              >
                We developed a comprehensive AI-powered workflow automation solution tailored to the client's specific needs:
              </motion.p>
              <motion.ul
                variants={textItemVariants}
                className="list-disc list-inside text-gray-600 space-y-3 text-sm  md:text-md lg:text-lg"
              >
                <motion.li variants={textItemVariants}>
                  Custom machine learning models trained on the client's historical document data
                </motion.li>
                <motion.li variants={textItemVariants}>
                  Intelligent document processing system with advanced OCR and natural language understanding
                </motion.li>
                <motion.li variants={textItemVariants}>
                  Automated validation against regulatory requirements and internal policies
                </motion.li>
                <motion.li variants={textItemVariants}>
                  Real-time analytics dashboard for monitoring system performance and document flow
                </motion.li>
                <motion.li variants={textItemVariants}>
                  Integration with existing enterprise systems through secure APIs
                </motion.li>
                <motion.li variants={textItemVariants}>
                  Human-in-the-loop workflow for exception handling and continuous improvement
                </motion.li>
              </motion.ul>
          
            </motion.div>

            <motion.div
              className="bg-blue-50 p-6 rounded-xl shadow-md border border-blue-200  lg:w-1/2"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h3
                className="text-xl md:text-2xl font-bold text-gray-800 mb-4"
                variants={textItemVariants}
              >
                AI Impact Across Industries
              </motion.h3>

            <AIIndustryChart/>


            </motion.div>
          </div>

        </div>

      </motion.section>
      <motion.div
        className="flex w-full container mx-auto py-8 justify-end"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col w-full lg:w-1/2 bg-white p-6  rounded-xl shadow-md border border-gray-200">
          <motion.h4
            className="text-lg font-semibold text-gray-800 mb-4"
            variants={sectionVariants}
          >
            Implementation Approach
          </motion.h4>
          <motion.ol
            className="space-y-3 text-gray-700 text-sm md:text-md lg:text-lg"
            variants={sectionVariants}
          >
            <motion.div className="flex" variants={sectionVariants}>
              <div className="bg-blue-200 rounded-full p-2 w-10 h-10 font-semibold text-center text-blue-500 text-lg mr-3">
                1
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600 text-lg md:text-xl lg:text-lg font-semibold">Discovery & Analysis</span>
                <span className="text-gray-500 max-md:text-sm sm:text-md lg:text-md">Comprehensive workflow analysis and document categorization</span>
              </div>
            </motion.div>
            <motion.div className="flex" variants={sectionVariants}>
              <div className="bg-blue-200 rounded-full p-2 w-10 h-10 font-semibold text-blue-500 text-center text-lg mr-3">
                2
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600 text-lg md:text-xl lg:text-lg font-semibold">Model Development</span>
                <span className="text-gray-500 max-md:text-sm sm:text-md lg:text-md">Custom AI model training using client's historical data</span>
              </div>
            </motion.div>
            <motion.div className="flex" variants={sectionVariants}>
              <div className="bg-blue-200 rounded-full p-2 w-10 h-10 font-semibold text-blue-500 text-center text-lg mr-3">
                3
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600 text-lg md:text-xl lg:text-lg font-semibold">System Integration</span>
                <span className="text-gray-500 max-md:text-sm sm:text-md lg:text-md">Seamless connection with existing enterprise systems</span>
              </div>
            </motion.div>
            <motion.div className="flex" variants={sectionVariants}>
              <div className="bg-blue-200 rounded-full p-2 w-10 h-10 font-semibold text-blue-500 text-center text-lg mr-3">
                4
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600 text-lg md:text-xl lg:text-lg font-semibold">Pilot & Refinement</span>
                <span className="text-gray-500 max-md:text-sm sm:text-md lg:text-md">Controlled rollout with continuous improvement cycles</span>
              </div>
            </motion.div>
            <motion.div className="flex" variants={sectionVariants}>
              <div className="bg-blue-200 rounded-full p-2 w-10 h-10 font-semibold text-blue-500 text-center text-lg mr-3">
                5
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600 text-lg md:text-xl lg:text-lg font-semibold">Full Deployment</span>
                <span className="text-gray-500 max-md:text-sm sm:text-md lg:text-md">Enterprise-wide implementation with comprehensive training</span>
              </div>
            </motion.div>
          </motion.ol>
        </div>
      </motion.div>


      <Footer />
    </div>
  );
}

