"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import '../../styles/AgileSection.css';
import { FaRegCalendar } from "react-icons/fa";
import 'react-datepicker/dist/react-datepicker.css';
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import Header from "@/components/header/page"
import Footer from "@/components/footer/page"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeaderSection from "./headerSection";
import ServiceSection from "./serviceSection";
import TechnologySection from "./technologySection";
import ProcessSection from "./processSection";
import SuccessSection from "./successSection";
import {

  Mail,
  Phone,
  MapPin,

  MessageCircle,
} from "lucide-react";







export default function LandingPage() {



  const router = useRouter();

  return (
    <div className="">
      <Header />
      <HeaderSection />
      <ServiceSection />
      <TechnologySection />
      <ProcessSection/>
      <SuccessSection/>
      


    

    

      {/* Client Success Stories */}
      <section id="testimonial" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-purple-500 text-sm bg-gray-100 py-1 px-4 rounded-xl w-fit mx-auto  mb-2">Testimonial</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent text-5xl kulim">
                Client Success Stories
              </span>
            </h2>
            <p className="text-gray-600">
              Real experiences from businesses that have transformed with our solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Anderson",
                role: "CEO, TechNova",
                content: "MobiRizer's AI solutions have transformed our business operations. The intelligent automation has increased ourefficiency by 300% and reduced costs",
                img: "client1.png",
              },
              {
                name: "Nasir",
                role: "CTO, InnovateLabs",
                content: "The AI-powered mobile app developed by MobiRizer has revolutionized how we interact with our customers. The predictive analytics are incredibly accurate.",
                img: "client2.png",
              },
              {
                name: "Raj Patel",
                role: "Founder, EduSphere",
                content: "Working with MobiRizer has been exceptional. Their expertise in AI and machine learning helped us build a cutting-edge analytics platform.",
                img: "client3.png",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 shadow-lg  hover:-translate-y-1 hover:shadow-xl transition-transform duration-300"
              >
                <CardContent className="p-0">
                  <div className="flex justify-between mb-8 space-x-3">

                    <div>
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-gray-500">{testimonial.role}</div>
                    </div>
                    <img
                      src={`/${testimonial.img}`}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />

                  </div>
                  <p className="text-gray-600  text-sm mb-4">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Our Team */}
      <section className="bg-teal-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Our Team
              </span>
            </h2>
            <p className="text-gray-600">Meet the visionaries shaping the future of technology.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "David Miller", role: "Chief Executive Officer", img: "team1.png" },
              { name: "Emily Zhang", role: "Chief Technical Officer", img: "team2.png" },
              { name: "Alexa John", role: "Chief Operating Officer", img: "team3.png" },
              { name: "Jonathan Craig", role: "Chief Strategy Officer", img: "team4.png" },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={`/${member.img}`}
                  alt={member.name}
                  className="w-44 h-44 mx-auto mb-4 rounded-full object-cover"
                />
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>

                {/* Social Icons */}
                <div className="mt-4 flex justify-center space-x-2">
                  <a
                    href="#"
                    aria-label={`${member.name} LinkedIn`}
                    className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center border border-gray-300 hover:bg-black hover:text-white transition"
                  >
                    <FaLinkedinIn className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    aria-label={`${member.name} X`}
                    className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center border border-gray-300 hover:bg-black hover:text-white transition"
                  >
                    <FaTwitter className="w-4 h-4" />
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Get in touch Anytime
              </span>
            </h2>
            <p className="text-gray-600">We'll get back to you within 24 hours.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
                    />
                    <input
                      type="tel"
                      placeholder="Your Phone"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
                    />
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
                    ></textarea>
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500">
                      Send Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-purple-600" />
                  <span>hello@eramLabs.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-purple-600" />
                  <span>+91 123-456-7890</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  <span>East India, IN</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/office-space.png?height=400&width=600"
                alt="Office Space"
                width={600}
                height={400}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Left Sidebar for Contact Options */}
      {/* Left Sidebar for Contact Options */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col space-y-4">
          {/* Book a Meeting */}
          <div className="w-12 h-40 bg-purple-600 shadow-lg flex items-center justify-center relative">
            <button
              onClick={() => router.push('/appointment')}
              className="transform -rotate-90 p-4 flex items-center space-x-2 text-white bg-purple-600 hover:bg-purple-800 hover:text-white hover:scale-110 transition-all duration-300 ease-in-out whitespace-nowrap cursor-pointer"
              aria-label="Book a meeting"
            >
              <FaRegCalendar className="w-5 h-5" />
              <span className="text-sm">Book a Meeting</span>
            </button>



          </div>

          {/* Message Icon */}
          <div className="w-12 h-12 shadow-lg rounded-r-md flex items-center justify-center bg-gradient-to-br from-[#A955F7] to-[#EB489A]">
            <a
              href="tel:+918750860676"
              className="flex items-center justify-center text-white hover:scale-110 transition-all duration-300 ease-in-out"
              aria-label="Call +91 87508 60676"
            >
              <img
                src="/message-bubble.png"
                alt="Message Icon"
                className="w-8 h-8"
              />
            </a>
          </div>

          {/* WhatsApp Icon */}
          <div className="w-12 h-12 shadow-lg flex items-center justify-center bg-white">
            <a
              href="https://wa.me/918750860676?text=Hello!%20how%20can%20I%20help%20you"
              className="flex items-center justify-center text-gray-700 hover:text-purple-600 hover:bg-purple-50 hover:scale-110 transition-all duration-300 ease-in-out"
              aria-label="Message on WhatsApp"
            >
              <img
                src="/whatsapp.png"
                alt="WhatsApp Icon"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Right Sidebar for Chat with Us */}
      <div className="fixed right-0 bottom-0 transform -translate-y-1/2 z-50">
        <button
          onClick={() => window.$chatwoot?.toggle()}
          className="flex items-center space-x-2 text-white bg-purple-600 hover:bg-purple-800 transition-colors rounded-full px-4 py-2"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm">Chat with Us</span>
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}