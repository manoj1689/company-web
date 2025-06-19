"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
import Header1 from "@/components/header1";

export default function MobileAutomationAI() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const navVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeOut" as const,
        duration: 0.5,
      },
    },
  };

  const router = useRouter();
  const handlenavigation = (path: string) => {
    router.push(path);
  };
  return (
    <div className="bg-white text-gray-800 font-sans relative overflow-hidden">
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-16">
        <Header1/>
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
          <div className=" flex flex-col md:flex-row justify-between items-center py-10 md:py-12 gap-4 ">
            <div className="lg:w-1/2 text-center lg:text-left ">
              <h2 className="ext-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Captivate Audiences with <br />
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                  Visual Digital Marketing
                </span>
              </h2>
              <p className=" mt-4 text-gray-600 max-w-3xl text-md sm:text-lg md:text-xl lg:text-xl">
                Pioneering the future of AI-driven business solutions since
                2018. We combine cutting-edge technology with deep industry
                expertise to transform how organizations operate in the digital
                age.
              </p>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8 max-w-md mx-auto lg:mx-0 ">
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
                      <p className="text-sm text-gray-600">{item.label}</p>
                      <p className="font-semibold text-lg text-gray-800">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2  flex justify-center">
              <img
                src="/servoffer/ai.png"
                alt="AI Automation"
                className="w-5/6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="bg-[#FFF9FC] py-16 relative">
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
                <div className="absolute left-0 bottom-0 md:left-10 md:bottom-10 ">
                  <img
                    src="/servoffer/ion.png"
                    alt="Image 3"
                    className="w-12 md:w-24 lg:w-64"
                  />{" "}
                </div>
        <div className=" container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Text Content */}
            <div className="space-y-10">
              {/* The Challenge */}
              <div className="  px-10">
                <h3 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text mb-4">
                  The Challenge
                </h3>
                <p className="text-gray-700 mb-4 text-sm md:text-md lg:text-lg">
                  Our client, a global financial institution managing over $500
                  billion in assets, was struggling with inefficient document
                  processing workflows that were largely manual and
                  time-consuming. Their challenges included:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-3 text-sm md:text-md lg:text-lg">
                  <li>
                    Processing over 100,000 complex financial documents daily
                    with a team of 50+ specialists
                  </li>
                  <li>
                    Average processing time of 2+ hours per document batch,
                    creating significant bottlenecks
                  </li>
                  <li>
                    Error rates of approximately 6.5%, requiring costly review
                    processes
                  </li>
                  <li>
                    Compliance risks due to inconsistent application of
                    regulatory requirements
                  </li>
                  <li>
                    Difficulty scaling operations during peak periods without
                    substantial staffing increases
                  </li>
                </ul>
                <p className="text-gray-700 text-sm md:text-md lg:text-lg mt-4">
                  The manual nature of their workflow was not only expensive but
                  also created significant operational risks and limited their
                  ability to scale effectively in a competitive market.
                </p>
              </div>

              {/*  Our Solution */}
              <div className=" px-10">
                <h3 className="  text-xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text mb-4 ">
                  Our Solution
                </h3>
                <p className="text-gray-700 text-sm md:text-md lg:text-lg mb-4">
                  We developed a comprehensive AI-powered workflow automation
                  solution tailored to the client’s specific needs:
                </p>
                <ul className="list-disc list-inside text-gray-600 text-sm md:text-md lg:text-lg space-y-3">
                  <li>
                    Custom machine learning models trained on the client’s
                    historical document data
                  </li>
                  <li>
                    Intelligent document processing system with advanced OCR and
                    natural language understanding
                  </li>
                  <li>
                    Automated validation against regulatory requirements and
                    internal policies
                  </li>
                  <li>
                    Real-time analytics dashboard for monitoring system
                    performance and document flow
                  </li>
                  <li>
                    Integration with existing enterprise systems through secure
                    APIs
                  </li>
                  <li>
                    Human-in-the-loop workflow for exception handling and
                    continuous improvement
                  </li>
                </ul>
                <p className="text-gray-700 text-sm md:text-md lg:text-lg mt-4">
                  Our solution was designed to not only automate routine tasks
                  but also to learn and improve over time, adapting to new
                  document types and regulatory changes with minimal human
                  intervention.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-xl overflow-hidden shadow-md ">
                <img
                  src="/servoffer/servoff2.png"
                  alt="Challenge Image"
                  className="w-full h-auto"
                />
              </div>

              <div className="bg-blue-50 p-6 rounded-xl shadow-md border border-blue-200">
                <h4 className="text-lg font-bold text-gray-800 mb-3">
                  Solution Architecture
                </h4>
                <img
                  src="/servoffer/servoff3.png"
                  alt="Solution Architecture"
                  className="w-full rounded-md mb-3 mx-auto"
                />
                <p className=" text-gray-600 text-sm md:text-md lg:text-lg">
                  Our solution architecture integrates multiple AI components
                  including document classification, data extraction,
                  validation, and workflow orchestration, all secured within the
                  client’s existing infrastructure.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Implementation Approach
                </h4>
                <ol className="space-y-3 text-gray-700  text-sm md:text-md lg:text-sm">
                  <div className=" flex">
                    <div className=" bg-blue-200 rounded-full p-2 w-10 h-10 font-semibold   text-center text-blue-500 text-lg mr-3">
                      1
                    </div>
                    <div className=" flex flex-col">
                      <span className=" text-black flex flex-col text-lg">
                        Discovery & Analysis
                      </span>{" "}
                      Comprehensive workflow analysis and document
                      categorization
                    </div>
                  </div>
                  <div className=" flex">
                    <div
                      className=" bg-blue-200 rounded-full p-2 w-10 h-10  font-semibold
text-blue-500  text-center text-lg mr-3"
                    >
                      2
                    </div>
                    <div className=" flex flex-col">
                      <span className="text-black flex flex-col text-lg">
                        Model Development
                      </span>{" "}
                      Custom AI model training using client's historical data
                    </div>
                  </div>
                  <div className=" flex">
                    <div
                      className=" bg-blue-200 rounded-full p-2 w-10 h-10  font-semibold
text-blue-500 text-center text-lg mr-3"
                    >
                      3
                    </div>
                    <div className=" flex flex-col">
                      <span className="text-black flex flex-col">
                        System Integration{" "}
                      </span>{" "}
                      Seamless connection with existing enterprise systems{" "}
                    </div>
                  </div>
                  <div className=" flex">
                    <div
                      className=" bg-blue-200 rounded-full p-2 w-10 h-10  font-semibold
text-blue-500 text-center text-lg mr-3"
                    >
                      4
                    </div>
                    <div className=" flex flex-col">
                      <span className=" text-black flex flex-col text-lg">
                        Pilot & Refinement{" "}
                      </span>{" "}
                      Controlled rollout with continuous improvement cycles{" "}
                    </div>
                  </div>
                  <div className=" flex">
                    <div
                      className=" bg-blue-200 rounded-full p-2 w-10 h-10  font-semibold
text-blue-500 text-center text-lg mr-3"
                    >
                      5
                    </div>
                    <div className=" flex flex-col">
                      <span className=" text-black  text-lg flex flex-col">
                        Full Deployment{" "}
                      </span>{" "}
                      Enterprise-wide implementation with comprehensive training{" "}
                    </div>
                  </div>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
