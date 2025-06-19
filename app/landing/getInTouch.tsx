import React, { useRef, useState, useEffect } from "react";
import Image from "next/image"; // Assuming Next.js Image component
import { Button } from "@/components/ui/button"; // Assuming your button component path
import { Card, CardContent } from "@/components/ui/card"; // Assuming your card component path
import { TbMessageCircle } from "react-icons/tb";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { IoPaperPlaneOutline } from "react-icons/io5"; // Changed to IoPaperPlaneOutline from io5

export default function GetInTouchSection() {
  const contactRef = useRef<HTMLElement>(null);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of the section is visible
      rootMargin: "0px 0px -50px 0px", // Adjust if needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setContactVisible(true);
          // Optional: Disconnect observer once visible if you only need the animation to run once
          if (contactRef.current) {
            observer.unobserve(contactRef.current);
          }
        }
      });
    }, observerOptions);

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={contactRef}
      className="relative py-16 px-4 sm:px-4 lg:px-16 bg-[#E6F1FF] overflow-hidden"
    >
      <div className="absolute left-2 top-2 md:left-10 md:top-12 opacity-100 flex  flex-col gap-2 md:gap-4">
        <img
          src="/landing/getin/book.png"
          alt="Image 1"
          className="w-12 md:w-20 lg:w-48"
        />
      </div>
      <div className="absolute left-2 bottom-2 md:left-5 md:bottom-52 opacity-100 flex  flex-col gap-2 md:gap-4">
        <img
          src="/landing/getin/mag.png"
          alt="Image 1"
          className="w-12 md:w-20 lg:w-32"
        />
      </div>


      <div className="container mx-auto text-center relative z-10">
        <div className="flex items-center justify-center ">
          <h1 className="bg-purple-200 text-xs md:text-sm text-gray-600 font-medium rounded-full px-4 py-1">
            Let's collaborate
          </h1>
          </div>
          <h2
            className={`text-3xl  md:text-4xl lg:text-5xl font-bold my-4  leading-tight transition-all duration-700 ${
              contactVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <span className="bg-gradient-to-l from-purple-500 to-pink-500 bg-clip-text text-transparent ">
              Get in touch Anytime
            </span>
          </h2>

          <p
            className={`text-gray-500 max-w-xl md:max-w-3xl lg:max-w-4xl  text-md md:text-lg lg:text-xl mx-auto mb-12 transition-all duration-700 delay-100 ${
              contactVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Reach out to discuss your vision, explore possibilities, and bring
            innovation to your business.
          </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8 lg:gap-8">
          {/* Contact Form Card */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              contactVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <Card className="p-6 sm:p-8 md:p-10 hover:scale-105 transition-all duration-500 border">
              <CardContent className="px-3 py-2 sm:px-5 sm:py-3">
                <div className="flex gap-4 sm:gap-6 my-auto">
                  <TbMessageCircle className="text-5xl sm:text-6xl mt-1 sm:mt-2 text-blue-500 bg-blue-100 p-2 sm:p-3 rounded-full" />
                  <div className="mb-2 sm:mb-8">
                    <p className="text-xl sm:text-2xl font-normal mb-1">
                      Send us a Message
                    </p>
                    <p className="text-sm sm:text-base">
                      We'll get back to you within 24hrs
                    </p>
                  </div>
                </div>
                <div className="space-y-4 contact-form">
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm text-start font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      className="w-full mt-2 p-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-start text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      className="w-full p-3 mt-2 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 text-start"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Your Message"
                      rows={4}
                      className="w-full p-3 mt-2 mb-6 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    ></textarea>
                  </div>
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 flex justify-center items-center rounded-lg">
                    <Button className="w-fit hover:scale-105 transition-all duration-300 h-14 sm:h-16 text-base sm:text-lg bg-transparent">
                      Send Message
                    </Button>
                    <IoPaperPlaneOutline className="text-xl sm:text-2xl my-auto text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Office Image and Contact Info */}
          <div
            className={`relative mt-8 lg:mt-0 transition-all duration-700 delay-300 ${
              contactVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <img className=" mb-4 rounded-md hover:scale-105 transition-all duration-500" src="/landing/client/office.png" alt="" />

            
            <div className="flex flex-col sm:flex-row justify-between gap-6">
              <div className="flex gap-4 bg-white p-4 sm:p-5 w-full sm:w-1/2 rounded-xl shadow-xl hover:scale-105 transition-all duration-500">
                <div className="text-blue-500 bg-blue-100 my-auto rounded-full text-4xl sm:text-5xl">
                  <LuPhone className="p-2 sm:p-3" />
                </div>
                <div>
                  <p className="text-base sm:text-lg font-medium">Phone</p>
                  <p className="text-sm sm:text-base text-gray-600">
                    +919954xxxx
                  </p>
                </div>
              </div>
              <div className="flex gap-4 bg-white rounded-xl p-4 sm:p-5 w-full sm:w-1/2 shadow-xl hover:scale-105 transition-all duration-500">
                <div className="text-blue-400 bg-blue-100 my-auto rounded-full text-4xl sm:text-5xl">
                  <MdOutlineEmail className="p-2 sm:p-3" />
                </div>
                <div>
                  <p className="text-base sm:text-lg font-medium">Email</p>
                  <p className="text-sm sm:text-base text-gray-600">
                    abc@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
