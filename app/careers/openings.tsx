"use client";

import { motion, Variants } from "framer-motion"; // Import Variants type
import { TicketXIcon } from "lucide-react"; // Note: TicketXIcon is imported but not used.
import { useRouter } from "next/navigation";
import React, { useState } from "react";
// FaRegLightbulb, FaRegHeart, FiUsers, FiBookOpen are imported but not used.
import { FaBookmark } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";

// Define a type for your job data for better type safety
interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  experience: string;
  tagColor: string; // Tailwind class suffix, e.g., "purple"
  applyColor: string; // Tailwind class suffix, e.g., "pink"
  description: string;
  requirements: string[];
  keyfeatures: string[];
  benifits: string[]; // Corrected typo from 'benifits' to 'benefits' if preferred, but keeping for now
  image?: string; // Optional image property
}

function OpeningsSection() {
  const router = useRouter();
  const handlenavigation = (path: string) => {
    router.push(path);
  };

  const [openModal, setOpenModal] = useState(false);
  const [fullmodal, setFullModal] = useState(false); // Corrected typo
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);

  const jobData: Job[] = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote (US)",
      experience: "5+ years",
      tagColor: "purple",
      applyColor: "pink",
      description:
        "We're looking for an experienced Full Stack Developer to build and maintain scalable web applications using React, Node.js, and AWS technologies.",
      requirements: [
        "5+ years of experience with modern JavaScript frameworks",
        "Strong knowledge of React and Node.js",
        "Experience with cloud services (AWS/Azure/GCP)",
        "Database design and optimization skills",
      ],
      keyfeatures: [
        "Lead and execute complex projects from conception to completion",
        "collaborate with cross-functional teams to achieve projects objects",
        "Develop and maintain technical documentation",
        "participate in code reviews and technical discussion",
        "mentor junior team members",
      ],
      benifits: [
        "competitive salary and equity package",
        "comprehensive health, dental and vision insurance",
        "flexible work arrangement",
        "professional development budget",
        "generous paid time off",
      ],
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "Design",
      location: "San Francisco, CA (Hybrid)",
      experience: "3+ years",
      tagColor: "blue",
      applyColor: "pink",
      description:
        "Join our design team to create intuitive and visually appealing user experiences across our digital products and services.",
      requirements: [
        "3+ years of UX/UI design experience",
        "Proficiency in Figma and Adobe Creative Suite",
        "Portfolio showcasing user-centered design process",
        "Experience with design systems",
      ],
      keyfeatures: [
        "Lead and execute complex projects from conception to completion",
        "collaborate with cross-functional teams to achieve projects objects",
        "Develop and maintain technical documentation",
        "participate in code reviews and technical discussion",
        "mentor junior team members",
      ],
      benifits: [
        "competitive salary and equity package",
        "comprehensive health, dental and vision insurance",
        "flexible work arrangement",
        "professional development budget",
        "generous paid time off",
      ],
    },
    {
      id: 3,
      title: "AI Research Scientist",
      department: "AI & ML",
      location: "Remote (Global)",
      experience: "4+ years",
      tagColor: "indigo",
      applyColor: "pink",
      description:
        "Help us push the boundaries of AI technology by researching and implementing cutting-edge machine learning algorithms and models.",
      requirements: [
        "PhD or MS in Computer Science, AI, or related field",
        "Published research in machine learning or AI",
        "Experience with PyTorch or TensorFlow",
        "Strong mathematical background",
      ],
      keyfeatures: [
        "Lead and execute complex projects from conception to completion",
        "collaborate with cross-functional teams to achieve projects objects",
        "Develop and maintain technical documentation",
        "participate in code reviews and technical discussion",
        "mentor junior team members",
      ],
      benifits: [
        "competitive salary and equity package",
        "comprehensive health, dental and vision insurance",
        "flexible work arrangement",
        "professional development budget",
        "generous paid time off",
      ],
    },
    {
      id: 4,
      title: "Digital Marketing Manager",
      department: "Marketing",
      location: "New York, NY (On-site)",
      experience: "4+ years",
      tagColor: "pink",
      applyColor: "pink",
      description:
        "Lead our digital marketing efforts to increase brand awareness, generate leads, and drive customer engagement across multiple channels.",
      requirements: [
        "4+ years of digital marketing experience",
        "Experience with SEO, SEM, and social media marketing",
        "Data analysis and reporting skills",
        "Campaign management expertise",
      ],
      keyfeatures: [
        "Lead and execute complex projects from conception to completion",
        "collaborate with cross-functional teams to achieve projects objects",
        "Develop and maintain technical documentation",
        "participate in code reviews and technical discussion",
        "mentor junior team members",
      ],
      benifits: [
        "competitive salary and equity package",
        "comprehensive health, dental and vision insurance",
        "flexible work arrangement",
        "professional development budget",
        "generous paid time off",
      ],
    },
    {
      id: 5,
      title: "iOS Developer",
      department: "Engineering",
      location: "Remote (US)",
      experience: "3+ years",
      tagColor: "purple",
      applyColor: "pink",
      image: "/images/ios.png",
      description:
        "Develop and maintain iOS applications that deliver exceptional user experiences and integrate with our backend services.",
      requirements: [
        "3+ years of iOS development experience",
        "Proficiency in Swift and Objective-C",
        "Understanding of iOS design principles",
        "Experience with RESTful APIs",
      ],
      keyfeatures: [
        "Lead and execute complex projects from conception to completion",
        "collaborate with cross-functional teams to achieve projects objects",
        "Develop and maintain technical documentation",
        "participate in code reviews and technical discussion",
        "mentor junior team members",
      ],
      benifits: [
        "competitive salary and equity package",
        "comprehensive health, dental and vision insurance",
        "flexible work arrangement",
        "professional development budget",
        "generous paid time off",
      ],
    },
    {
      id: 6,
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA (Hybrid)",
      experience: "4+ years",
      tagColor: "pink",
      applyColor: "pink",
      image: "/images/product.png",
      description:
        "Drive product strategy and execution, working closely with engineering, design, and marketing teams to deliver innovative solutions.",
      requirements: [
        "4+ years of product management experience",
        "Strong analytical and problem-solving skills",
        "Experience with agile methodologies",
        "Excellent communication and leadership abilities",
      ],
      keyfeatures: [
        "Lead and execute complex projects from conception to completion",
        "collaborate with cross-functional teams to achieve projects objects",
        "Develop and maintain technical documentation",
        "participate in code reviews and technical discussion",
        "mentor junior team members",
      ],
      benifits: [
        "competitive salary and equity package",
        "comprehensive health, dental and vision insurance",
        "flexible work arrangement",
        "professional development budget",
        "generous paid time off",
      ],
    },
  ];

  // Type annotations for Framer Motion Variants
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

  const onOpenModal = (jobId: number) => {
    setSelectedJobId(jobId);
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
    setSelectedJobId(null);
  };

  const jobTitleForModal = selectedJobId
    ? jobData.find((j) => j.id === selectedJobId)?.title
    : "Job";

  const onFullModal = (jobId: number) => {
    setSelectedJobId(jobId);
    setFullModal(true);
  };

  const closeFullModal = () => {
    setFullModal(false);
    setSelectedJobId(null);
  };

  // Helper function to safely get the selected job
  const selectedJob = selectedJobId
    ? jobData.find((j) => j.id === selectedJobId)
    : null;

  return (
    <motion.section
      className="w-full py-16 px-4 md:px-8 lg:px-16 bg-green-50 relative"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Top Left Bell Icon */}
      <div className="absolute left-1 top-2 md:left-10 md:top-10 flex flex-col gap-2 md:gap-4 opacity-20">
        <img src="/sevice/bell.png" alt="Image 1" className="w-16 md:w-24" />
      </div>

      {/* Top Right Semicircle Icon */}
      <div className="absolute right-1 top-2 md:right-0 md:top-5 flex flex-col gap-2 md:gap-4 opacity-100">
        <img
          src="/sevice/semic.png"
          alt="Image 2"
          className="w-20 md:w-28 lg:w-32"
        />
      </div>

      {/* Bottom Left Search Icon */}
      <div className="absolute left-1 bottom-2 md:left-2 md:bottom-10 flex flex-col gap-2 md:gap-4 opacity-30">
        <img
          src="/sevice/search.png"
          alt="Image 3"
          className="w-20 md:w-28 lg:w-32"
        />
      </div>

      <div className="container mx-auto">
        <motion.div
          variants={textContainerVariants}
          className=" mx-auto text-center"
        >
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 py-2"
            variants={textItemVariants}
          >
            Current Openings
          </motion.h1>
          <motion.p
            className="text-center text-gray-700 mb-8 md:mb-10 text-base md:text-lg"
            variants={textItemVariants}
          >
            Join our team of innovators and make an impact. Explore our current
            job opportunities below.
          </motion.p>
        </motion.div>

        {/* Department filter buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10"
          variants={textContainerVariants}
        >
          {[
            "All Departments",
            "Engineering",
            "Design",
            "Marketing",
            "Product",
            "AI & ML",
          ].map((dept, i) => (
            <motion.button
              key={i}
              className="px-4 py-2 text-sm md:text-base rounded-md bg-gray-200 hover:bg-gradient-to-tr from-pink-500 to-purple-600 text-gray-600 hover:text-white transition-colors duration-300"
              variants={textItemVariants}
            >
              {dept}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid of job cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {jobData.map((job) => (
            <motion.div
              key={job.id}
              className="bg-white shadow-md rounded-lg p-6"
              variants={textContainerVariants} // Apply container variants for the card itself
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <motion.div variants={textContainerVariants}>
                  <motion.h2
                    className="text-xl font-bold mb-2"
                    variants={textItemVariants}
                  >
                    {job.title}
                  </motion.h2>
                  <div className="flex flex-wrap gap-2 text-sm mb-3">
                    {/* Dynamic Tailwind classes need to be handled carefully */}
                    <motion.span
                      variants={textItemVariants}
                      className={`bg-${job.tagColor}-100 text-${job.tagColor}-600 px-2 py-1 rounded-md`}
                    >
                      {job.department}
                    </motion.span>
                    <motion.span
                      className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md"
                      variants={textItemVariants}
                    >
                      {job.location}
                    </motion.span>
                    <motion.span
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
                      variants={textItemVariants}
                    >
                      {job.experience}
                    </motion.span>
                  </div>
                </motion.div>
                <motion.button
                  variants={textItemVariants}
                  className="text-white px-4 py-2 rounded-md bg-gradient-to-r from-pink-400 to-purple-500 text-sm mt-3 sm:mt-0"
                  onClick={() => onOpenModal(job.id)}
                >
                  Apply Now
                </motion.button>
              </div>
              <motion.p
                className="text-neutral-600 font-normal text-sm md:text-base mb-3"
                variants={textItemVariants}
              >
                {job.description}
              </motion.p>
              <motion.h4
                className="font-semibold text-base md:text-lg mb-2"
                variants={textItemVariants}
              >
                Requirements:
              </motion.h4>
              <motion.ul // Changed from div to ul for semantic correctness and applied variants
                className="list-disc list-inside text-sm md:text-base text-gray-600 mb-4"
                variants={textContainerVariants} // Use container variants to stagger list items
              >
                {job.requirements.map((req, i) => (
                  <motion.li key={i} variants={textItemVariants}>
                    {req}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                className="flex justify-end"
                variants={textContainerVariants}
              >
                <motion.button
                  variants={textItemVariants}
                  className="text-neutral-700 text-sm hover:underline"
                  onClick={() => onFullModal(job.id)}
                >
                  View Full Description &gt;&gt;
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom Apply Modal Component */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full px-5 py-2 md:py-2 lg:py-5 relative">
            <button
              onClick={onCloseModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              aria-label="Close modal"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-2">
              Apply for {jobTitleForModal}
            </h2>
            <hr className="mb-3" />

            <form>
              <div className="flex flex-wrap gap-x-6">
                {" "}
                {/* Use flex-wrap for responsiveness */}
                <div className="mb-2 w-full sm:w-1/2">
                  <label
                    htmlFor="applicantName"
                    className="block text-gray-700 text-sm font-semibold mb-2"
                  >
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="applicantName"
                    name="applicantName"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-2 w-full sm:w-1/2">
                  <label
                    htmlFor="applicantEmail"
                    className="block text-gray-700 text-sm font-semibold mb-2"
                  >
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="applicantEmail"
                    name="applicantEmail"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="mb-2">
                <label
                  htmlFor="applicantPhone"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Phone Number*
                </label>
                <input
                  type="tel"
                  id="applicantPhone"
                  name="applicantPhone"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                  placeholder="e.g. 9954xxxxxx"
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="applicantResume"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Resume/CV*
                </label>
                <input
                  type="file"
                  id="applicantResume"
                  name="applicantResume"
                  accept=".pdf,.doc,.docx"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                />
                <span className="text-sm text-gray-500">
                  Accepted formats: PDF, DOC, DOCX (max 5MB)
                </span>
              </div>

              <div className="mb-2">
                <label
                  htmlFor="coverLetter"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Cover Letter*
                </label>
                <textarea
                  id="coverLetter"
                  className="border rounded w-full p-2 h-24"
                  placeholder="Tell us why you're interested in this position."
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="experience"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Relevant Experience*
                </label>
                <textarea
                  id="experience"
                  className="border rounded w-full p-2 h-24"
                  placeholder="Describe your relevant experience."
                />
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onCloseModal}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 text-sm rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white py-2 px-4 text-sm rounded"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Full Description Modal Component */}
      {fullmodal && selectedJobId !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl p-4 relative max-h-[95vh] overflow-y-auto">
            <button
              onClick={closeFullModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              aria-label="Close modal"
            >
              &times;
            </button>

            {selectedJob && (
              <>
                <h2 className="text-lg sm:text-xl font-bold mb-2">
                  {selectedJob.title}
                </h2>
                <hr className="mb-3" />

                <div className="flex flex-wrap gap-2 text-xs sm:text-sm mb-3">
                  {/* Important: Tailwind JIT/AOT mode often needs full class names.
                     If these dynamic classes (e.g., `bg-${job.tagColor}-100`)
                     don't work, consider mapping them to predefined classes
                     or using inline styles for backgroundColor and color. */}
                  <span
                    className={`bg-${selectedJob.tagColor}-100 text-${selectedJob.tagColor}-600 px-2 py-1 rounded-md`}
                  >
                    {selectedJob.department}
                  </span>
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
                    {selectedJob.location}
                  </span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                    {selectedJob.experience}
                  </span>
                </div>

                <h3 className="text-sm md:text-sm font-semibold mb-2">
                  Overview
                </h3>
                <p className="text-gray-700 text-sm md:text-sm mb-3">
                  {selectedJob.description}
                </p>

                <h3 className="text-sm md:text-sm font-semibold mb-2">
                  Key Responsibilities
                </h3>
                <ul className="list-disc list-inside text-gray-700 text-sm md:text-sm mb-3 space-y-1">
                  {selectedJob.keyfeatures.map((ke, i) => (
                    <li key={i}>{ke}</li>
                  ))}
                </ul>

                <h3 className="text-sm md:text-sm font-semibold mb-2">
                  Requirements:
                </h3>
                <ul className="list-disc list-inside text-gray-700 text-sm md:text-sm mb-3 space-y-1">
                  {selectedJob.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>

                <h3 className="text-sm md:text-sm font-semibold mb-2">
                  Benefits
                </h3>
                <ul className="list-disc list-inside text-gray-700 text-sm md:text-sm mb-4 space-y-1">
                  {selectedJob.benifits.map((ben, i) => (
                    <li key={i}>{ben}</li>
                  ))}
                </ul>

                <hr className="mb-4" />

                <div className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:items-center">
                  <button
                    onClick={() => onOpenModal(selectedJob.id)}
                    className="text-white px-4 py-2 rounded-md bg-gradient-to-r from-pink-400 to-purple-500 text-sm"
                  >
                    Apply now
                  </button>

                  <div className="flex gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <IoShareSocial className="text-lg" />
                      Share
                    </span>
                    <span className="flex items-center gap-1">
                      <FaBookmark className="text-lg" />
                      Save
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </motion.section>
  );
}

export default OpeningsSection;