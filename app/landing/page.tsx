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
import ClientStory from "./clientStory";
import OurTeam from "./ourTeam";
import GetInTouchSection from "./getInTouch";
import { FaSquareWhatsapp } from "react-icons/fa6";







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
      <ClientStory/>
      <OurTeam/>
      < GetInTouchSection/>

         <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
          <div className="flex flex-col space-y-4">
        

            {/* Message Icon */}
            <div className="w-12 h-12 shadow-lg rounded-r-md flex items-center justify-center bg-gradient-to-br from-[#A955F7] to-[#EB489A] floating-sidebar">
              <a
                href="tel:+918750860676"
                className="flex items-center justify-center text-white hover:scale-110 transition-all duration-300 ease-in-out"
                aria-label="Call +91 87508 60676"
              >
                <img src="/message-bubble.png" alt="Message Icon" className="w-8 h-8" />
              </a>
            </div>

            {/* WhatsApp Icon */}
            <div className="w-12 h-12 shadow-lg flex text-4xl text-green-500 items-center justify-center bg-white border-2 border-gray-100 rounded-md floating-sidebar">
              
                <FaSquareWhatsapp className="hover:rounded-r-md hover:scale-110 transition-all duration-300 ease-in-out whitespace-nowrap cursor-pointer" />
             
            </div>
          </div>
        </div>


      {/* <div className="fixed right-0 bottom-0 transform -translate-y-1/2 z-50">
        <button
          
          className="flex items-center space-x-2 text-white bg-purple-600 hover:bg-purple-800 transition-colors rounded-full px-4 py-2"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm">Chat with Us</span>
        </button>
      </div> */}


      <Footer />
    </div>
  );
}