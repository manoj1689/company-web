"use client";

import { motion, Variants } from "framer-motion"; // Import Variants
import { FaRegLightbulb, FaUserFriends } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

function Joinsection() {
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
      className="relative py-16 px-4 sm:px-4 lg:px-16 overflow-hidden bg-[#E7F6FF]"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="absolute right-2 top-56 flex max-lg:hidden opacity-20 flex-col gap-4">
        <img src="/sevice/star.png" alt="Image 1" className="w-20" />
      </div>
      <div className="absolute left-2 bottom-56 flex max-lg:hidden opacity-100 flex-col gap-4">
        <img src="/sevice/book.png" alt="Image 1" className="w-52" />
      </div>
      {/* <div className="absolute right-20  top-10 flex max-lg:hidden flex-col gap-4">
              <img src="/sevice/star.png" alt="Image 1" className="w-36"/>
          </div> */}
      <div className="container mx-auto px-4 ">
        <motion.div
          className="bg-[#CBEBFF] border-4 border-white rounded-2xl overflow-hidden relative"
          variants={textContainerVariants}
        >
          <div className="flex flex-col md:flex-row ">
            <motion.div
              className="md:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12 flex items-center"
              variants={textContainerVariants}
            >
              <div className="">
                <motion.h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold my-4 py-2 leading-tight bg-gradient-to-l from-purple-500 to-pink-500 bg-clip-text text-transparent"
                  variants={textItemVariants}
                >
                  Join Our Team
                </motion.h2>
                <motion.p
                  className="text-neutral-600 mb-6 md:mb-8 text-md sm:text-lg md:text-xl lg:text-xl leading-relaxed"
                  variants={textItemVariants}
                >
                  We're always looking for talented individuals who are
                  passionate about AI and want to make a difference. Explore
                  career opportunities at EramLabs.
                </motion.p>
                <motion.button
                  className="bg-white text-neutral-700 px-6 py-2 sm:px-8 sm:py-3 text-sm rounded-lg hover:bg-gray-100 transition-colors font-normal cursor-pointer !rounded-button whitespace-nowrap"
                  variants={textItemVariants}
                >
                  View Open Positions
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              className="md:w-1/2 relative min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px]"
              variants={imageVariants}
            >
              <img
                src="/about/joinTeam.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 text-center"
          variants={textContainerVariants}
        >
          {[
            {
              title: "Innovative Environment",
              description:
                "Work on cutting-edge AI projects that push the boundaries of what's possible.",
              icon: <FaRegLightbulb className="text-[#2B88D8] text-2xl sm:text-3xl" />,
            },
            {
              title: "Growth & Development",
              description:
                "Continuous learning opportunities and clear career progression paths.",
              icon: <FaArrowTrendUp className="text-[#2B88D8] text-2xl sm:text-3xl" />,
            },
            {
              title: "Inclusive Culture",
              description:
                "A diverse and supportive workplace where every voice is valued and heard.",
              icon: <FaUserFriends className="text-[#2B88D8] text-2xl sm:text-3xl" />,
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="p-2 sm:p-6 md:p-8"
              variants={textItemVariants}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-[#2C88D91A] rounded-full flex items-center justify-center text-pink-600 mb-3 sm:mb-4">
                {benefit.icon}
              </div>
              <h3 className="md:text-lg text-sm font-semibold text-gray-800 mb-2 sm:mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-xs md:text-base">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
export default Joinsection;