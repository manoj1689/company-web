"use client";
import React from "react";
import { GrMail, GrFacebookOption } from "react-icons/gr";
import {
  FaPhoneFlip,
  FaLocationDot,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import { useRouter } from "next/navigation";

function QuestionSection() {
  const router = useRouter();
    const handlenavigation = (path: string) => {
      router.push(path);
    };
  
  return (
    <section>
      <div className="bg-pink-50 py-16 px-4 sm:px-6 lg:px-16 relative">
        {/* Top Left Ques2 */}
        <div className="absolute left-2 top-2 flex flex-col gap-2 opacity-30 md:left-10 md:top-10">
          <img
            src="/sevice/ques2.png"
            alt="Image 1"
            className="w-16 md:w-36 lg:w-48"
          />
        </div>

        {/* Top Right Pencil */}
        <div className="absolute right-2 top-2 flex flex-col gap-2 md:right-20 md:top-10">
          <img
            src="/sevice/pencil.png"
            alt="Image 2"
            className="w-12 md:w-24 lg:w-32"
          />
        </div>

        {/* Right Mid Title */}
        <div className="absolute right-2 top-20 flex flex-col gap-2 md:right-0 md:top-32">
          <img
            src="/sevice/title.png"
            alt="Image 3"
            className="w-10 md:w-16 lg:w-24"
          />
        </div>

        {/* Bottom Left Box1 */}
        <div className="absolute left-2 bottom-2 flex flex-col gap-2 opacity-90 md:left-10 md:bottom-10">
          <img
            src="/sevice/box1.png"
            alt="Image 4"
            className="w-16 md:w-36 lg:w-48"
          />
        </div>

        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl  md:text-4xl lg:text-5xl font-bold  mb-4  leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 py-2">
            Have a Question
          </h2>
          <p className="text-gray-600 mt-2 text-base md:text-lg">
            Our recruitment team is here to help. Reach out with any questions
            about our open positions or the application process.
          </p>
        </div>

        <div className=" container  grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
          <div className="md:w-2/3 md:ml-auto">
            <h3 className="text-xl font-semibold mb-5">Contact Us</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="min-w-[2.5rem] min-h-[2.5rem] md:min-w-[3rem] md:min-h-[3rem] rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white text-lg md:text-xl mt-1 md:mt-3">
                  <GrMail />
                </span>
                <div>
                  <p className="font-medium text-base">Email</p>
                  <p className="text-sm md:text-base">careers@earmlabs.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="min-w-[2.5rem] min-h-[2.5rem] md:min-w-[3rem] md:min-h-[3rem] rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white text-lg md:text-xl mt-1 md:mt-3">
                  <FaPhoneFlip />
                </span>
                <div>
                  <p className="font-medium text-base">Phone</p>
                  <p className="text-sm md:text-base">+1 (555) 123-4567</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="min-w-[2.5rem] min-h-[2.5rem] md:min-w-[3rem] md:min-h-[3rem] rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white text-lg md:text-xl mt-1 md:mt-3">
                  <FaLocationDot />
                </span>
                <div>
                  <p className="text-sm md:text-base">Headquarters</p>
                  <p className="text-sm md:text-base">
                    123 Innovation Drive, Tech Valley, CA 94103
                  </p>
                </div>
              </li>
            </ul>

            <p className="mt-6 mb-2 text-gray-600 text-base">
              Follow us on social media:
            </p>
            <div className="flex gap-4">
              {[
                <GrFacebookOption />,
                <FaLinkedinIn />,
                <FaInstagram />,
                <FaTwitter />,
              ].map((platform, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-[#FFADAD] text-white w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:bg-pink-400 transition"
                >
                  <span className="text-white text-lg font-bold">
                    {platform}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 border ">
            <h3 className="text-lg font-semibold mb-4">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm md:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm md:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full px-4 py-2 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm md:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  placeholder="Enter your message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm md:text-base"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 rounded-md text-white font-semibold bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition text-base md:text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <button onClick={()=>handlenavigation('/landing')} className="px-6 py-2 border bg-gray-200 hover:bg-gradient-to-tr from-pink-500 to-purple-600 text-gray-600 hover:text-white transition-colors duration-300  rounded-md hover:bg-pink-100 text-base md:text-lg">
            ← Return to Home
          </button>
        </div>
      </div>
    </section>
  );
}
export default QuestionSection;
