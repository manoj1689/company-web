"use client";

import { motion, Variants } from "framer-motion"; // <-- Import Variants here
import { useRouter } from "next/navigation";
import { FaLongArrowAltLeft } from "react-icons/fa";

function HeaderSection() {
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

  const router = useRouter();
  const handlenavigation = (path: string) => {
    router.push(path);
  };

  return (
    <motion.section
      className="w-full py-8 sm:py-12 px-4 sm:px-6 lg:px-16 bg-white relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute left-2 top-2 md:left-10 md:top-10 flex flex-col gap-2 md:gap-4">
        <img
          src="/watermark/Vector-1.png"
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

 
     
      <div className="container mx-auto">
        {/* Back Button */}
        <motion.div
          onClick={() => handlenavigation("/landing")}
          className="cursor-pointer absolute top-4 md:top-6 flex gap-2"
          variants={navVariants}
        >
          <FaLongArrowAltLeft className="mt-1 text-pink-600" />
          <p className="font-medium bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
            Back to Home
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-8 md:py-16">
          {/* Left Section */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            variants={textContainerVariants}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mt-10 lg:mt-0"
              variants={textItemVariants}
            >
              Join Our Team{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
                at Eram Labs
              </span>
            </motion.h1>
            <motion.p
              className="text-gray-700 text-sm md:text-lg lg:text-xl"
              variants={textItemVariants}
            >
              Be part of a team that’s shaping the future of technology. We're
              looking for passionate individuals who want to make an impact and
              grow with us.
            </motion.p>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="w-full md:w-2/5 flex justify-center"
            variants={imageVariants}
          >
            <img
              src="/immaaa 1.png"
              alt="Join Team"
              className="w-full max-w-sm md:max-w-full "
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default HeaderSection;