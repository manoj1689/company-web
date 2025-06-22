"use client";

import { motion, Variants } from "framer-motion"; // Import Variants
import { FaLinkedin, FaTwitter } from "react-icons/fa";

function LeaderSection() {
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
      className="relative py-16 px-4 sm:px-4 lg:px-16 ] overflow-hiddenbg-[#F1FFF2] "
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="absolute right-10 top-10 flex max-lg:hidden flex-col gap-4">
        <img src="/watermark/Vector-2.png" alt="Image 1" className="w-36" />
      </div>
      <div className="absolute right-10 bottom-10 flex max-lg:hidden flex-col gap-4">
        <img src="/sevice/form.png" alt="Image 1" className="w-36" />
      </div>
      <div className="container mx-auto text-center z-20">
        <div className="flex items-center justify-center ">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold my-4 leading-tight bg-gradient-to-l from-purple-500 to-pink-500 bg-clip-text text-transparent"
            variants={textItemVariants}
          >
            Meet Our Leadership
          </motion.h2>
        </div>
        <motion.p
          className="text-gray-500 max-w-xl md:max-w-3xl lg:max-w-4xl text-md md:text-lg lg:text-xl mx-auto mb-12"
          variants={textItemVariants}
        >
          Our diverse team of experts brings together decades of experience in
          AI, machine learning, and business transformation.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
          variants={textContainerVariants}
        >
          {[
            {
              name: "Dr. Nasir",
              position: "Co-Founder & CEO",
              bio: "Former AI Research Lead at MIT with 15+ years of experience in machine learning and computational linguistics. PhD in Computer Science from Stanford.",
              image: "/about/aboutL.png",
              icon: <FaTwitter />,
              icon1: <FaLinkedin />,
            },
            {
              name: "Michael Rodriguez",
              position: "Co-Founder & CTO",
              bio: "Previously led engineering teams at Google and Amazon. Pioneered several breakthrough technologies in natural language processing and computer vision.",
              image: "/about/aboutL1.png",
              icon: <FaTwitter />,
              icon1: <FaLinkedin />,
            },
            {
              name: "Dr. Amara Johnson",
              position: "Chief Research Officer",
              bio: "Renowned AI ethicist with over 50 published papers on responsible AI development. Previously led research initiatives at DeepMind.",
              image: "/about/aboutL2.png",
              icon: <FaTwitter />,
              icon1: <FaLinkedin />,
            },
            {
              name: "David Park",
              position: "Chief Operating Officer",
              bio: "20+ years of operational leadership in tech companies. Former SVP of Operations at Oracle with expertise in scaling AI implementations.",
              image: "/about/aboutL3.png",
              icon: <FaTwitter />,
              icon1: <FaLinkedin />,
            },
            {
              name: "Emma Blackwell",
              position: "Chief Marketing Officer",
              bio: "Award-winning marketer who previously led global campaigns for Microsoft and IBM. Expert in positioning AI technologies for enterprise adoption.",
              image: "/about/aboutL4.png",
              icon: <FaTwitter />,
              icon1: <FaLinkedin />,
            },
            {
              name: "Dr. Raj Patel",
              position: "Chief Innovation Officer",
              bio: "Serial entrepreneur with 3 successful tech exits. Holds 12 patents in AI and machine learning. PhD in Robotics from Carnegie Mellon.",
              image: "/about/aboutL5.png",
              icon: <FaTwitter />,
              icon1: <FaLinkedin />,
            },
          ].map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              variants={textItemVariants}
            >
              <div className=" overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-sm md:text-xl md:font-bold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-pink-600 text-xs md:text-sm font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {member.bio}
                </p>
                <div className="mt-4 flex space-x-3 text-neutral-400 text-xl">
                  {member.icon1}
                  {member.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
export default LeaderSection;