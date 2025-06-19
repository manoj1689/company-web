"use client";

import { motion, Variants } from "framer-motion"; // <-- Import Variants here
import { MdOutlineEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { RiCalendarScheduleFill } from "react-icons/ri";

function StartAiSection() {
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

  // Add type annotation to missionVisionSectionVariants
  const missionVisionSectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  // Add type annotation to missionVisionItemVariants
  const missionVisionItemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.6,
      },
    },
  };

  // Add type annotation to containerVariants
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  // Add type annotation to leftColumnVariants
  const leftColumnVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeOut",
        duration: 0.7,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  // Add type annotation to rightColumnVariants
  const rightColumnVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeOut",
        duration: 0.7,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  // Add type annotation to formItemVariants
  const formItemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Add type annotation to contactInfoItemVariants
  const contactInfoItemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeOut",
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="py-16 px-4 sm:px-6 lg:px-16 bg-[#F1FFF2] relative"
    >
      <div className="absolute right-6 top-44 flex max-lg:hidden opacity-100 flex-col gap-4">
        <img src="/sevice/gii.png" alt="Image 1" className="w-48" />
      </div>
      <div className="absolute md:left-1/2 md:bottom-0 lg:left-16 lg:bottom-0 flex max-lg:hidden opacity-20 flex-col gap-4">
        <img src="/sevice/search.png" alt="Image 1" className="lg:w-48 md:w-16" />
      </div>
      <div className="flex flex-col md:flex-row container mx-auto justify-between gap-14">
        {/* Left Side - Form */}
        <motion.div className="w-full md:w-1/2" variants={leftColumnVariants}>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold my-4 leading-tight bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text mb-4 pb-2"
            variants={textItemVariants}
          >
            Get Started with AI Strategy
          </motion.h2>

          <motion.p
            className="text-gray-500 max-w-xl md:max-w-3xl lg:max-w-4xl text-md md:text-lg lg:text-xl mx-auto mb-8"
            variants={textItemVariants}
          >
            Ready to transform your business with AI? Contact our team of
            experts to discuss your specific needs and how our AI Strategy
            Consulting can help you achieve your objectives.
          </motion.p>

          <motion.div
            className="bg-white w-full rounded-lg relative shadow-md"
            variants={formItemVariants}
          >
            <form className="p-10 shadow-md  rounded-xl space-y-4">
              {["Full Name", "Email Address", "Company Name"].map(
                (label, i) => (
                  <motion.div key={label} variants={formItemVariants}>
                    <p className="text-sm font-normal text-gray-700 mb-1">
                      {label}
                    </p>
                    <input
                      type={label === "Email Address" ? "email" : "text"}
                      placeholder={`Enter your ${label.toLowerCase()}`}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </motion.div>
                )
              )}

              <motion.div variants={formItemVariants}>
                <p className="text-sm font-normal text-gray-700 mb-1">
                  Service of Interest
                </p>
                <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500">
                  <option>AI Strategy Consulting</option>
                  <option>AI Model Development</option>
                  <option>AI Integration</option>
                </select>
              </motion.div>

              <motion.div variants={formItemVariants}>
                <p className="text-sm font-normal text-gray-700 mb-1">
                  Project Requirements
                </p>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project and objectives"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-md font-semibold hover:opacity-90 transition"
                variants={formItemVariants}
              >
                Submit Inquiry
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Right Side - Contact Info + Image */}
        <motion.div className="w-full md:w-1/2" variants={rightColumnVariants}>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md space-y-3"
            variants={contactInfoItemVariants}
          >
            <motion.div
              variants={contactInfoItemVariants}
              className=" space-y-2 "
            >
              <p className="flex text-base text-gray-600 gap-2">
                <MdOutlineEmail className="text-pink-500 text-xl" /> Email Us
              </p>
              <p className="text-gray-800 text-sm pl-7">
                strategy@techfusion.ai
              </p>
            </motion.div>

            <motion.div
              variants={contactInfoItemVariants}
              className=" space-y-3"
            >
              <p className="flex text-base text-gray-600 gap-2">
                <IoCall className="text-pink-500 text-xl" /> Call Us
              </p>
              <p className="text-gray-800 text-sm pl-5">+1 (555) 123-4567</p>
            </motion.div>

            <motion.div
              variants={contactInfoItemVariants}
              className=" space-y-3"
            >
              <p className="flex text-base text-gray-600 gap-2">
                <RiCalendarScheduleFill className="text-pink-500 text-xl" />
                Schedule a Consultation
              </p>
              <p className="text-gray-800 text-sm ml-7">
                Book a 30-minute discovery call with our strategy team
              </p>
            </motion.div>
            <div className="text-pink-500 font-semibold hover:underline pl-7 py-4">
                Schedule now
            </div>
          </motion.div>

          <motion.div
            className="mt-8 hover:scale-105 transition-all duration-500"
            variants={imageVariants}
          >
            <img
              src="/sevice/serv3.png"
              alt="Contact Illustration"
              className="w-full rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default StartAiSection;
