"use client";

import { useState } from "react";
import {
  FaFileAlt,
  FaCookieBite,
  FaLock,
  FaThumbsUp,
  FaRegQuestionCircle,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using AI Content Creator, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any part of these terms, you are prohibited from using or accessing this site. Continued use of the platform indicates your ongoing acceptance of the current terms and any modifications made in the future.`,
  },
  {
    title: "2. Eligibility and Registration",
    content: `You must be at least 18 years old to register and use our services. By creating an account, you represent and warrant that all information you provide is accurate, complete, and current. You are responsible for maintaining the confidentiality of your account credentials and for any activity that occurs under your account.`,
  },
  {
    title: "3. Use of the Services",
    content: `You agree to use our platform only for lawful purposes and in accordance with these Terms. You shall not: (a) violate any applicable law or regulation; (b) infringe the intellectual property or privacy rights of any third party; (c) interfere with or disrupt the operation of our services or the servers or networks used to make our services available.`,
  },
  {
    title: "4. Intellectual Property Rights",
    content: `All content, features, and functionality on the platform—including but not limited to text, graphics, logos, icons, images, and software—are owned by AI Content Creator, its licensors, or other providers of such material. You may not copy, reproduce, modify, create derivative works from, or distribute any part of the site without prior written permission.`,
  },
  {
    title: "5. User Content and Conduct",
    content: `You are solely responsible for the content you upload, publish, or display through our services. You grant us a non-exclusive, transferable, royalty-free license to use, store, display, reproduce, and distribute your content for the purpose of operating and improving the platform. You agree not to upload harmful, offensive, or unlawful material.`,
  },
  {
    title: "6. Privacy and Data Protection",
    content: `Your privacy is important to us. Please refer to our Privacy Policy to understand how we collect, use, and share your information. By using the platform, you consent to all actions taken with respect to your information in compliance with the Privacy Policy and applicable data protection laws.`,
  },
  {
    title: "7. Third-Party Services",
    content: `Our platform may integrate or link to third-party websites or services. We are not responsible for the content, accuracy, or practices of third-party services, and inclusion of such links does not imply endorsement. Use of any third-party services is at your own risk and subject to the terms and policies of those third parties.`,
  },
  {
    title: "8. Subscription and Payments",
    content: `Certain features of our platform may require a paid subscription. All payment information must be accurate and complete. We reserve the right to change our pricing, subscription plans, or billing methods at any time. Refunds are issued at our discretion and may be subject to applicable laws.`,
  },
  {
    title: "9. Termination and Suspension",
    content: `We reserve the right to suspend or permanently disable your access to the platform at our discretion, without notice, if you violate these Terms or if we believe your actions may cause legal liability, harm other users, or disrupt our services.`,
  },
  {
    title: "10. Disclaimers and No Warranties",
    content: `The platform is provided on an “as is” and “as available” basis without any warranties of any kind. We do not guarantee that the platform will be error-free or uninterrupted, or that any information you obtain will be accurate or reliable. You use the platform at your own risk.`,
  }
];

export default function TermsAndConditionsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative px-4 sm:px-6 bg-white text-gray-800">
      {/* Decorative Watermarks */}
      <div
        className="absolute top-[10%] right-0 w-24 h-24 md:w-40 md:h-40 bg-no-repeat bg-contain opacity-100 pointer-events-none z-0"
        style={{
          backgroundImage: "url('/watermark/Vector-2.png')",
          backgroundSize: "100px",
        }}
      />
      <div
        className="absolute top-[23%] left-1/3 w-24 h-24 md:w-32 md:h-32 bg-no-repeat bg-contain opacity-50 pointer-events-none z-0"
        style={{
          backgroundImage: "url('/watermark/Vector-3.png')",
          backgroundSize: "100px",
        }}
      />
      <div
        className="absolute left-0 top-[55%] w-24 h-24 md:w-40 md:h-40 bg-no-repeat bg-contain opacity-100 pointer-events-none z-0"
        style={{
          backgroundImage: "url('/watermark/Vector-2.png')",
          backgroundSize: "75px",
        }}
      />
      <div
        className="absolute w-24 top-1/2 left-1/2 h-24 md:w-40 md:h-40 bg-no-repeat bg-contain opacity-100 pointer-events-none z-0"
        style={{
          backgroundImage: "url('/watermark/Vector-2.png')",
          backgroundSize: "75px",
        }}
      />

      <div className="container relative z-10 mx-auto py-12">
        <h1 className="text-4xl font-bold text-center py-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Terms and Conditions
        </h1>
        <p className="text-sm text-gray-500 text-center mb-10">
          Last Updated: April 24, 2025
        </p>

        <div className="space-y-4 p-4 my-8 rounded-xl shadow-lg bg-[#FFECEC]">
          <h1 className="text-lg lg:text-xl text-gray-700 font-bold">Important Information</h1>
          <p className="text-gray-600">Before using our services, please take a moment to read and understand the following terms and conditions and privacy policy. These documents outline your rights and responsibilities as a user of our platform, as well as how we collect, use, and protect your personal information.</p>
          <p className="text-gray-600">By checking the acceptance box at the bottom of this page, you acknowledge that you have read, understood, and agree to be bound by these terms.</p>

        </div>

        {/* Collapsible Sections */}
        {sections.map((section, index) => (
          <div key={index} className="mb-6">
            <button
              onClick={() => toggleSection(index)}
              className="flex justify-between items-center w-full text-left text-lg font-semibold py-3 px-4 bg-gray-50 hover:bg-gray-100 hover:scale-105 rounded-md transition"
            >
              {section.title}
              {openIndex === index ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <p className="mt-2  text-gray-500 text-md p-4">{section.content}</p>
            )}
          </div>
        ))}
        {/* Acceptance Section */}
        <div className="mt-10 p-6 bg-[#FFF6F8] rounded-xl shadow border border-pink-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Acceptance of Terms</h2>
          <p className="text-gray-700 mb-4">
            By checking the box below, you acknowledge that you have read, understood, and agree to be bound by our
            <span className="text-blue-600 font-medium"> Terms and Conditions</span>.
          </p>

          <div className="flex items-center gap-2 mb-6">
            <input type="checkbox" id="acceptTerms" className="w-4 h-4 border rounded" />
            <label htmlFor="acceptTerms" className="text-sm text-gray-700">
              I have read and agree to the
              <a href="/terms" className="ml-1 text-blue-600 underline hover:text-blue-800">Terms and Conditions</a>
            </label>
          </div>

          <div className="flex gap-4">
            <button className="bg-gray-100 text-gray-700 font-semibold px-5 py-2 rounded-md hover:bg-gray-200 transition">
              Cancel
            </button>
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold px-6 py-2 rounded-md hover:opacity-90 transition">
              Accept & Continue
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
