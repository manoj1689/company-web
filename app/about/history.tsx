"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion"; 

function HistorySection() {
  const [activeTab, setActiveTab] = useState("history");

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

  return (
    <motion.section
      className="relative py-16 px-4 sm:px-4 lg:px-16 bg-[#FFF4F8] overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="absolute right-2 top-2 md:right-14 md:top-2 flex flex-col gap-2 md:gap-4">
        <img
          src="/watermark/Vector-2.png"
          alt="Image 1"
          className="w-20 md:w-28 lg:w-36"
        />
      </div>

      <div className="absolute left-2 top-4 md:left-10 md:top-10 flex flex-col gap-2 md:gap-4">
        <img
          src="/watermark/Vector-3.png"
          alt="Image 2"
          className="w-20 md:w-28 lg:w-36"
        />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="flex items-center justify-center ">
          <motion.h2
            className="text-3xl  md:text-4xl lg:text-5xl font-bold my-4 py-2 leading-tight bg-gradient-to-l from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4"
            variants={textItemVariants}
          >
            Our Journey
          </motion.h2>
        </div>
        <motion.p
          className="text-gray-500  text-md md:text-lg lg:text-xl mx-auto mb-12"
          variants={textItemVariants}
        >
          From a small startup to an industry leader in AI solutions, our
          growth story reflects our commitment to innovation and excellence.
        </motion.p>

        <motion.div
          className="bg-white rounded-xl shadow-md overflow-hidden"
          variants={textContainerVariants}
        >
          <div className="border-b border-gray-200">
            <div className="flex">
              {["history"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 text-md font-medium whitespace-nowrap  flex w-full justify-center cursor-pointer ${
                    activeTab === tab ? "" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab === "history" && "Company Timeline"}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            {activeTab === "history" && (
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                {[
                  {
                    year: "2018",
                    title: "Foundation",
                    description:
                      "EramLabs was founded by Dr. Nasir and Michael Rodriguez with a vision to make AI accessible to businesses of all sizes.",
                  },
                  {
                    year: "2019",
                    title: "First Major Client",
                    description:
                      "Secured our first enterprise client, a Fortune 500 healthcare provider, delivering a custom ML solution that improved diagnostic accuracy by 37%.",
                  },
                  {
                    year: "2020",
                    title: "Expansion",
                    description:
                      "Expanded our team to 50 employees and opened our second office in Boston, focusing on research and development.",
                  },
                  {
                    year: "2021",
                    title: "Series A Funding",
                    description:
                      "Raised $15M in Series A funding led by Horizon Ventures to accelerate product development and market expansion.",
                  },
                  {
                    year: "2022",
                    title: "International Growth",
                    description:
                      "Established our first international office in London, serving clients across Europe with localized AI solutions.",
                  },
                  {
                    year: "2023",
                    title: "AI Innovation Award",
                    description:
                      "Received the Global AI Innovation Award for our groundbreaking work in explainable AI for the financial sector.",
                  },
                  {
                    year: "2024",
                    title: "Present Day",
                    description:
                      "Now a team of 200+ AI specialists serving 300+ clients globally, with offices in 5 countries and continued innovation.",
                  },
                ].map((event, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-0 sm:pl-16 pb-10"
                    variants={textItemVariants}
                  >
                    <div className="hidden sm:block absolute left-6 -translate-x-0 w-5 h-5 rounded-full bg-pink-500 border-4 border-white z-10"></div>

                    <div className="bg-white hover:bg-gray-50 hover:shadow-xl hover:translate-y-2 p-5 rounded-lg shadow-sm border border-gray-100">
                      <div className="flex items-center mb-2 flex-wrap sm:flex-nowrap">
                        <span className="text-sm font-bold bg-pink-100 text-pink-800 px-3 py-1 rounded-full mb-2 sm:mb-0">
                          {event.year}
                        </span>
                        <h2 className=" text-sm md:text-xl font-bold text-gray-800 ml-0 sm:ml-3 w-full sm:w-auto">
                          {event.title}
                        </h2>
                      </div>
                      <p className="text-gray-600 text-sm md:text-lg text-left w-full ">
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
export default HistorySection;