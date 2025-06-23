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
import Navbar from "@/components/inner-navbar"
import Footer from "@/components/footer/page";

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


  const router = useRouter();
  const handlenavigation = (path: string) => {
    router.push(path);
  };
  return (
    <div className="bg-white text-gray-800 font-sans relative overflow-hidden">
      <Navbar />
      <motion.section
        className=" py-8 sm:py-12 px-4 sm:px-6 lg:px-16"
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

        {/* Top Right Vector 2 */}
        <div className="absolute right-2 top-40 md:right-5 md:top-72 flex flex-col gap-2 md:gap-4">
          <img
            src="/watermark/Vector-2.png"
            alt="Image 2"
            className="w-12 md:w-24 lg:w-30"
          />
        </div>

        {/* Left Vector 2 at mid height */}
        <div className="absolute left-2 top-44 md:left-5 md:top-80 flex flex-col gap-2 md:gap-4">
          <img
            src="/watermark/Vector-2.png"
            alt="Image 3"
            className="w-12 md:w-24 lg:w-30"
          />
        </div>

        {/* Center Vector 3 */}
        <div className="absolute left-1/2 -translate-x-1/2 top-44 md:top-80 flex flex-col gap-2 md:gap-4">
          <img
            src="/watermark/Vector-3.png"
            alt="Image 4"
            className="w-12 md:w-24 lg:w-30"
          />
        </div>

        {/* Middle Top Right Vector 2 */}
        <div className="absolute right-1/2 translate-x-1/2 top-2 md:top-10 flex flex-col gap-2 md:gap-4">
          <img
            src="/watermark/Vector-2.png"
            alt="Image 5"
            className="w-12 md:w-24 lg:w-30"
          />
        </div>
        <div className=" container mx-auto">
          <motion.div
            className=" top-4 md:top-6 flex gap-2"
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
            viewport={{ once: true, amount: 0.3 }}>
            <motion.div
              variants={textContainerVariants}
              className=" flex flex-col lg:flex-row justify-between items-center py-10 md:py-12 gap-4 ">
              <div className="lg:w-1/2 text-left ">
                <motion.h2
                  variants={textItemVariants}
                  className="ext-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                  Captivate Audiences with <br />
                  <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                    Visual Digital Marketing
                  </span>
                </motion.h2>
                <motion.p
                  variants={textItemVariants}
                  className="mt-4 text-gray-600 max-w-3xl text-md sm:text-lg md:text-xl lg:text-xl"
                >
                  Transforming brand engagement through AI-powered campaigns, immersive
                  storytelling, and data-driven visual content strategies that deliver real results.
                </motion.p>

                {/* Info Grid */}
                <motion.div
                  variants={textContainerVariants}
                  className="grid grid-cols-2 gap-4 mt-8 max-w-md mx-auto lg:mx-0 relative"
                >
                  {[
                    { label: "Campaign Reach", value: "12M+" },
                    { label: "Engagement Rate", value: "5.4x Higher" },
                    { label: "Conversion Boost", value: "67%" },
                    { label: "Avg. ROI", value: "412%" },
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

              <motion.div variants={imageVariants} className="lg:w-1/2 flex justify-center">
                <img
                  src="/landing/service/digital-marketing/digital.png"
                  alt="AI Automation"
                  className="w-5/6"
                />
              </motion.div>
            </motion.div>
          </motion.section>
        </div>
      </motion.section>
      {/* Comprehensive Data Development Solutions Section */}
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
            alt="Watermark"
            className="w-12 md:w-24 lg:w-30"
          />
        </div>
        <div className="absolute right-0 top-44 md:right-5 md:top-40">
          <img
            src="/servoffer/earth.png"
            alt="Earth"
            className="w-12 md:w-24 lg:w-40"
          />
        </div>
        <div className="absolute left-0 bottom-0 md:left- md:bottom-10">
          <img
            src="/servoffer/ion.png"
            alt="Ion"
            className="w-12 md:w-24 lg:w-64"
          />
        </div>
        <div className="container mx-auto">
          <motion.div
            variants={textContainerVariants}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            {/* Text Content Section */}
            <div className="w-full lg:w-1/2 space-y-10 px-10">
              <motion.h3
                variants={textItemVariants}
                className="text-xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text mb-4"
              >
                Comprehensive Data Development Solutions
              </motion.h3>
              <motion.p
                variants={textItemVariants}
                className="text-gray-700 text-sm md:text-md lg:text-lg mt-4"
              >
                In today's data-driven world, organizations need robust systems to collect, process, and analyze vast amounts of information. Our data development services provide end-to-end solutions that transform raw data into valuable business intelligence.
              </motion.p>
              <motion.p
                variants={textItemVariants}
                className="text-gray-700 text-sm md:text-md lg:text-lg mt-4"
              >
                We combine cutting-edge technologies with industry best practices to design and implement data architectures that scale with your business needs.
              </motion.p>
              <motion.p
                variants={textItemVariants}
                className="text-gray-700 text-sm md:text-md lg:text-lg mt-4"
              >
                Our team of experienced data engineers and analysts work closely with you to understand your unique challenges and deliver customized solutions.
              </motion.p>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <motion.img
                variants={imageVariants}
                src="/landing/service/digital-marketing/data-development.png" // Replace this with your own image
                alt="Data Development Image"
                className="w-full rounded-md"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>
      {/* Advanced Data Visualization Section */}
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
            alt="Watermark"
            className="w-12 md:w-24 lg:w-30"
          />
        </div>
        <div className="absolute right-0 top-44 md:right-5 md:top-40">
          <img
            src="/servoffer/earth.png"
            alt="Earth"
            className="w-12 md:w-24 lg:w-40"
          />
        </div>
        <div className="absolute left-0 bottom-0 md:left- md:bottom-10">
          <img
            src="/servoffer/ion.png"
            alt="Ion"
            className="w-12 md:w-24 lg:w-64"
          />
        </div>
        <div className="container mx-auto">
          <motion.div
            variants={textContainerVariants}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            {/* Text Content Section */}
            <div className="w-full lg:w-1/2 space-y-10 px-10">
              <motion.h3
                variants={textItemVariants}
                className="text-xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text mb-4"
              >
                Advanced Data Visualization
              </motion.h3>
              <motion.p
                variants={textItemVariants}
                className="text-gray-700 text-sm md:text-md lg:text-lg mt-4"
              >
                Transform complex data into clear, actionable insights with our advanced visualization solutions. We create intuitive dashboards and reports that make it easy to understand trends, patterns, and anomalies in your data.
              </motion.p>
              <motion.p
                variants={textItemVariants}
                className="text-gray-700 text-sm md:text-md lg:text-lg mt-4"
              >
                Our visualization tools are designed for both technical and non-technical users, ensuring that everyone in your organization can benefit from data-driven insights.
              </motion.p>
              <motion.p
                variants={textItemVariants}
                className="text-gray-700 text-sm md:text-md lg:text-lg mt-4"
              >
                We create compelling visual content and implement effective digital marketing strategies that help brands stand out in today's competitive digital landscape. Our creative team ensures your brand message reaches and resonates with your target audience.
              </motion.p>
              {/* Detailed Paragraph */}
              <motion.p
                variants={textItemVariants}
                className="text-gray-700 text-sm md:text-md lg:text-lg mt-6"
              >
                Our data visualization solutions go beyond just charts and graphs. We focus on crafting tailored visualizations that simplify complex datasets, providing clarity and enabling quick decision-making. With our interactive dashboards, users can drill down into granular details, offering deeper insights and actionable recommendations. Whether it's for real-time monitoring, performance metrics, or predictive analytics, our goal is to empower organizations with tools that enhance operational efficiency and foster data-driven innovation. From strategic insights to day-to-day operations, we ensure that your data is presented in a format that is intuitive, engaging, and easy to act upon.
              </motion.p>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <motion.img
                variants={imageVariants}
                src="/landing/service/digital-marketing/dataVisualize.png" // Replace this with your own image
                alt="Data Visualization Image"
                className="w-full rounded-md"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>
      <motion.div
        className="flex w-full container mx-auto justify-end py-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col w-full lg:w-1/2 bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <motion.h4
            className="text-lg md:text-xl font-semibold text-gray-600 mb-4"
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
                <span className="text-gray-600 text-lg md:text-xl lg:text-lg font-semibold">Data Pipeline Development</span>
                <span className="text-gray-500 max-md:text-sm sm:text-md">Comprehensive workflow analysis and document categorization</span>
              </div>
            </motion.div>
            <motion.div className="flex" variants={sectionVariants}>
              <div className="bg-blue-200 rounded-full p-2 w-10 h-10 font-semibold text-blue-500 text-center text-lg mr-3">
                2
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600 text-lg md:text-xl lg:text-lg font-semibold">Business Intelligence</span>
                <span className="text-gray-500 max-md:text-sm sm:text-md">Custom AI model training using client's historical data</span>
              </div>
            </motion.div>
            <motion.div className="flex" variants={sectionVariants}>
              <div className="bg-blue-200 rounded-full p-2 w-10 h-10 font-semibold text-blue-500 text-center text-lg mr-3">
                3
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600 text-lg md:text-xl lg:text-lg font-semibold">Predictive Analytics</span>
                <span className="text-gray-500 max-md:text-sm sm:text-md">Seamless connection with existing enterprise systems</span>
              </div>
            </motion.div>
            <motion.div className="flex" variants={sectionVariants}>
              <div className="bg-blue-200 rounded-full p-2 w-10 h-10 font-semibold text-blue-500 text-center text-lg mr-3">
                4
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600 text-lg md:text-xl lg:text-lg font-semibold">Cloud Data Solutions</span>
                <span className="text-gray-500 max-md:text-sm sm:text-md">Controlled rollout with continuous improvement cycles</span>
              </div>
            </motion.div>
            <motion.div className="flex" variants={sectionVariants}>
              <div className="bg-blue-200 rounded-full p-2 w-10 h-10 font-semibold text-blue-500 text-center text-lg mr-3">
                5
              </div>
              <div className="flex flex-col">
                <span className="text-gray-600 text-lg md:text-xl lg:text-lg font-semibold">Data Governance</span>
                <span className="text-gray-500 max-md:text-sm sm:text-md">Enterprise-wide implementation with comprehensive training</span>
              </div>
            </motion.div>
          </motion.ol>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}
