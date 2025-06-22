"use client";

import { motion, Variants } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { RiCalendarScheduleFill } from "react-icons/ri";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
// Type for form data
type FormData = {
  fullName: string;
  email: string;
  companyName: string;
  service: string;
  message: string;
};

function StartAiSection() {
  // Form state
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    companyName: "",
    service: "AI Strategy Consulting",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
    setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      console.log("Submitted Data:", formData); // For now
      setFormData({
        fullName: "",
        email: "",
        companyName: "",
        service: "AI Strategy Consulting",
        message: "",
      });
    }
  };

  // Animations
  const textItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { ease: "easeOut", duration: 0.7, delay: 0.5 },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { when: "beforeChildren", staggerChildren: 0.2 },
    },
  };

  const leftColumnVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { ease: "easeOut", duration: 0.7, when: "beforeChildren", staggerChildren: 0.1 },
    },
  };

  const rightColumnVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { ease: "easeOut", duration: 0.7, when: "beforeChildren", staggerChildren: 0.1 },
    },
  };

  const formItemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const contactInfoItemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { ease: "easeOut", duration: 0.5 } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="py-16 px-4 sm:px-6 lg:px-16 bg-[#F1FFF2] relative"
    >
      {/* Decorative images */}
      <div className="absolute right-6 top-44 flex max-lg:hidden opacity-100 flex-col gap-4">
        <img src="/sevice/gii.png" alt="AI Graphic" className="w-48" />
      </div>
      <div className="absolute md:left-1/2 md:bottom-0 lg:left-16 lg:bottom-0 flex max-lg:hidden opacity-20 flex-col gap-4">
        <img src="/sevice/search.png" alt="Search" className="lg:w-48 md:w-16" />
      </div>

      <div className="flex flex-col md:flex-row container mx-auto justify-between gap-14">
        {/* Left - Form */}
        <motion.div className="w-full md:w-1/2" variants={leftColumnVariants}>
          <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold my-4 leading-tight bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text mb-4 pb-2" variants={textItemVariants}>
            Get Started with AI Strategy
          </motion.h2>

          <motion.p className="text-gray-500 text-md md:text-lg lg:text-xl mb-8" variants={textItemVariants}>
            Ready to transform your business with AI? Contact our team of experts to discuss your specific needs and how our AI Strategy Consulting can help you achieve your objectives.
          </motion.p>

          <motion.div className="bg-white w-full rounded-lg relative shadow-md" variants={formItemVariants}>
            <form className="p-10 space-y-4" onSubmit={handleSubmit}>
              {/* Full Name */}
              <motion.div variants={formItemVariants}>
                <p className="text-sm font-normal text-gray-700 mb-1">Full Name</p>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
              </motion.div>

              {/* Email */}
              <motion.div variants={formItemVariants}>
                <p className="text-sm font-normal text-gray-700 mb-1">Email Address</p>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </motion.div>

              {/* Company Name */}
              <motion.div variants={formItemVariants}>
                <p className="text-sm font-normal text-gray-700 mb-1">Company Name</p>
                <input
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your company name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName}</p>}
              </motion.div>

              {/* Service */}
              <motion.div variants={formItemVariants}>
                <p className="text-sm font-normal text-gray-700 mb-1">Service of Interest</p>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <option>AI Strategy Consulting</option>
                  <option>AI Model Development</option>
                  <option>AI Integration</option>
                </select>
              </motion.div>

              {/* Message */}
              <motion.div variants={formItemVariants}>
                <p className="text-sm font-normal text-gray-700 mb-1">Project Requirements</p>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your project and objectives"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-md font-semibold hover:opacity-90 transition"
                variants={formItemVariants}
              >
                Submit Inquiry
              </motion.button>

              {submitted && (
                <p className="text-green-600 text-sm mt-2 flex gap-2 items-center">
                 <FaCheck size={16}/> Your inquiry has been submitted successfully!
                </p>
              )}
            </form>
          </motion.div>
        </motion.div>

        {/* Right - Contact Info + Image */}
        <motion.div className="w-full md:w-1/2" variants={rightColumnVariants}>
          <motion.div className="bg-white p-6 rounded-lg shadow-md space-y-3" variants={contactInfoItemVariants}>
            <div className="space-y-2">
              <p className="flex text-base text-gray-600 gap-2">
                <MdOutlineEmail className="text-pink-500 text-xl" /> Email Us
              </p>
              <p className="text-gray-800 text-sm pl-7">info@eramlabs.com</p>
            </div>
            <div className="space-y-3">
              <p className="flex text-base text-gray-600 gap-2">
                <IoCall className="text-pink-500 text-xl" /> Call Us
              </p>
              <p className="text-gray-800 text-sm pl-5">+918802346983</p>
            </div>
            <div className="space-y-3">
              <p className="flex text-base text-gray-600 gap-2">
                <RiCalendarScheduleFill className="text-pink-500 text-xl" />
                Schedule a Consultation
              </p>
              <p className="text-gray-800 text-sm ml-7">
                Book a 30-minute discovery call with our strategy team
              </p>
            </div>
            <div className="text-pink-500 font-semibold hover:underline pl-7 py-4">Schedule now</div>
          </motion.div>

          <motion.div className="mt-8 hover:scale-105 transition-all duration-500" variants={imageVariants}>
            <img src="/sevice/serv3.png" alt="Contact Illustration" className="w-full rounded-lg shadow-2xl" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default StartAiSection;
