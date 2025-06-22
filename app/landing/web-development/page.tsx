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

export default function WebDevelopment() {
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
        <div className="absolute right-2 top-40 md:right-5 md:top-72  ">
          <img
            src="/watermark/Vector-2.png"
            alt="Image 2"
            className="w-12 md:w-24 lg:w-30"
          />
        </div>

        {/* Left Vector 2 at mid height */}
        <div className="absolute left-2 top-44 md:left-5 md:top-80 ">
          <img
            src="/watermark/Vector-2.png"
            alt="Image 3"
            className="w-12 md:w-24 lg:w-30"
          />
        </div>

        {/* Center Vector 3 */}
        <div className="absolute left-1/2 -translate-x-1/2 top-44 md:top-80 ">
          <img
            src="/watermark/Vector-3.png"
            alt="Image 4"
            className="w-12 md:w-24 lg:w-30"
          />
        </div>

        {/* Middle Top Right Vector 2 */}
        <div className="absolute right-1/2 translate-x-1/2 top-2 md:top-10">
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
              className=" flex flex-col lg:flex-row  py-10 md:py-12 gap-4">
              <div className="lg:w-1/2 text-left ">
                <motion.h2
                  variants={textItemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Web AI-Powered <br />
                  <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                    Workflow Automation
                  </span>
                </motion.h2  >
                <motion.p
                  variants={textItemVariants} className=" mt-4 text-gray-600 max-w-3xl text-md sm:text-lg md:text-xl lg:text-xl">
                  Pioneering the future of AI-driven business solutions since
                  2018. We combine cutting-edge technology with deep industry
                  expertise to transform how organizations operate in the
                  digital age.
                </motion.p  >

                {/* Info Grid */}
                <motion.div
                  variants={textContainerVariants} className="grid grid-cols-2 gap-4 mt-8 max-w-md mx-auto lg:mx-0 relative">
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
                        <motion.p variants={textItemVariants} className="text-sm text-gray-600">{item.label}</motion.p>
                        <motion.p variants={textItemVariants} className="font-semibold text-lg text-gray-800">
                          {item.value}
                        </motion.p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              <motion.div variants={imageVariants} className="lg:w-1/2 flex justify-center">
                <img
                  src="/landing/service/web-development/web-develoment.png"
                  alt="AI Automation"
                  className="w-5/6"
                />
              </motion.div>
            </motion.div>
          </motion.section>
        </div>
      </motion.section>

      {/* Challenge Section */}
      <motion.section variants={sectionVariants} initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-[#FFF9FC] py-8 sm:py-12 px-4 sm:px-6 lg:px-16 relative">
        <div className="absolute left-2 top-44 md:left-0 md:top-40 flex flex-col gap-2 md:gap-4">
          <img
            src="/watermark/Vector-2.png"
            alt="Image 3"
            className="w-12 md:w-24 lg:w-30"
          />{" "}
        </div>
        <div className="absolute right-0 top-44 md:right-5 md:top-40 ">
          <img
            src="/servoffer/earth.png"
            alt="Image 3"
            className="w-12 md:w-24 lg:w-40"
          />{" "}
        </div>
        <div className="absolute left-0 bottom-0 md:left-0 md:bottom-10 ">
          <img
            src="/servoffer/ion.png"
            alt="Image 3"
            className="w-12 md:w-24 lg:w-64"
          />{" "}
        </div>
        <div className=" container mx-auto">
          {/* AI Solutions Section 1 */}
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
                    The Challange
                  </motion.h3>
                  <motion.p
                    variants={textItemVariants}
                    className="text-gray-700 text-sm md:text-md lg:text-lg mt-4"
                  >
                    Our Artificial Intelligence solutions are designed to help businesses of all sizes harness the power of AI to optimize operations, enhance customer experiences, and drive innovation.
                  </motion.p>
                  <motion.p
                    variants={textItemVariants}
                    className="text-gray-700 text-sm md:text-md lg:text-lg mt-4"
                  >
                    We combine deep expertise in machine learning, natural language processing, computer vision, and predictive analytics to deliver customized AI solutions that address your specific business challenges.
                  </motion.p>
                  <motion.p
                    variants={textItemVariants}
                    className="text-gray-700 text-sm md:text-md lg:text-lg mt-4"
                  >
                    Whether you're looking to automate repetitive tasks, extract insights from unstructured data, or build intelligent applications that learn and adapt, our team of AI specialists will work closely with you to develop and implement solutions that deliver measurable results and competitive advantage.
                  </motion.p>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                  <motion.img
                    variants={imageVariants}
                    src="/landing/service/web-development/challange.png"
                    alt="Solution Image"
                    className="w-full rounded-md"
                  />
                </div>
              </motion.div>
            </div>
          </motion.section>
          {/* Our Solution Section */}
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
                    Our Solution
                  </motion.h3>
                  <motion.p
                    variants={textItemVariants}
                    className="text-gray-700 text-sm md:text-md lg:text-lg mt-4"
                  >
                    We developed a comprehensive AI-powered workflow automation solution tailored to the client's specific needs:
                  </motion.p>
                  <motion.ul
                    variants={textItemVariants}
                    className="list-disc list-inside text-gray-600 space-y-3 text-sm md:text-md lg:text-lg"
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
                  <motion.p
                    variants={textItemVariants}
                    className="text-gray-600 text-sm md:text-md lg:text-lg my-4"
                  >
                    Our solution was designed to not only automate routine tasks but also to learn and improve over time, adapting to new document types and regulatory changes with minimal human intervention.
                  </motion.p>
                </div>

                {/* Image Section */}
                <motion.div
                  className="bg-blue-50 p-6 rounded-xl shadow-md border border-blue-200   lg:w-1/2"
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

                  <motion.div
                    className="bg-white rounded-lg overflow-hidden mb-6 flex justify-center items-center"
                    variants={imageVariants}
                  >
                    <img
                      src="/landing/service/web-development/solution- architecture.png" // Update with your actual chart image path
                      alt="AI Industry Impact Chart"
                      className="w-full max-w-2xl"
                    />
                  </motion.div>

                  <motion.p
                    className="text-gray-600 text-sm md:text-md lg:text-lg"
                    variants={textItemVariants}
                  >
                    Our solution architecture integrates multiple AI components including document
                    classification, data extraction, validation, and workflow orchestration, all secured
                    within the client’s existing infrastructure.
                  </motion.p>
                </motion.div>

              </motion.div>
            </div>
          </motion.section>

          <motion.div
            className="flex w-full container mx-auto py-8 justify-end"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex flex-col w-full lg:w-1/2 bg-white p-6 rounded-xl shadow-md border border-gray-200">
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
                    <span className="text-gray-600 text-lg md:text-xl lg:text-lg font-semibold">Image Acquisition & Analysis</span>
                    <span className="text-gray-500 max-md:text-sm sm:text-md lg:text-md">
                      Capturing visual data through cameras, sensors, or existing image databases
                    </span>
                  </div>
                </motion.div>
                <motion.div className="flex" variants={sectionVariants}>
                  <div className="bg-blue-200 rounded-full p-2 w-10 h-10 font-semibold text-blue-500 text-center text-lg mr-3">
                    2
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-600 text-lg md:text-xl lg:text-lg font-semibold">Pre-processing</span>
                    <span className="text-gray-500 max-md:text-sm sm:text-md lg:text-md">
                      Enhancing images through noise reduction, normalization, and feature extraction
                    </span>
                  </div>
                </motion.div>
                <motion.div className="flex" variants={sectionVariants}>
                  <div className="bg-blue-200 rounded-full p-2 w-10 h-10 font-semibold text-blue-500 text-center text-lg mr-3">
                    3
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-600 text-lg md:text-xl lg:text-lg font-semibold">Deep Learning Analysis</span>
                    <span className="text-gray-500 max-md:text-sm sm:text-md lg:text-md">
                      Using neural networks to classify, detect, and segment objects within images
                    </span>
                  </div>
                </motion.div>
                <motion.div className="flex" variants={sectionVariants}>
                  <div className="bg-blue-200 rounded-full p-2 w-10 h-10 font-semibold text-blue-500 text-center text-lg mr-3">
                    4
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-600 text-lg md:text-xl lg:text-lg font-semibold">Decision & Action</span>
                    <span className="text-gray-500 max-md:text-sm sm:text-md lg:text-md">
                      Converting visual insights into actionable intelligence for your business
                    </span>
                  </div>
                </motion.div>
              </motion.ol>
            </div>
          </motion.div>


        </div>
      </motion.section>
      <Footer />
    </div>
  );
}
