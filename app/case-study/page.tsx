"use client"
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import React, { useState } from 'react';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

function Casestudy(){

  const caseStudies = [
    {
    title: "AI-Powered Healthcare Analytics Platform",
    client: " MediCorp International",
    industry: "Healthcare",
    tech: "AI & Machine Learning",
    image: "/career/career5.png",
    description:
      "Developed a comprehensive analytics platform that helpedreduce patient readmission rates by 35% and optimize resource allocation across 12 hospitals",
    results: ["35% reduction in readmissions", "42% faster diagnosis", "$2.4M annual savings"],
  },{
    title: "Blockchain-Based Supply Chain Solution",
    client: " GlobalTrade Logistics",
    industry: "Logistics",
    tech: "Blockchain",
    image: "/career/career6.png",
    description:
      "Implemented a blockchain solution that increased supply chain transparency by 87% and reduced verification times from days to minutes for international shipments.",
    results: ["87% increased transparency", "94% faster verification", "28% cost reduction"],
  },{
    title: "Mobile Banking Revolution",
    client: " SecureBank Financial",
    industry: "Finance",
    tech: "Mobile App",
    image: "/career/career7.png",
    description:
      "Created an award-winning mobile banking application that increased digital transactions by 156% and improved customer satisfaction scores by 42 points.",
    results: ["156% transaction growths", "42-point NPS increase", "3.2M new users"],
  },
  {
    title: "E-Commerce Platform Overhaul",
    client: "RetailPlus Enterprises",
    industry: "Retail",
    tech: "Web Development",
    image: "/career/career2.png",
    description:
      "Redesigned and optimized a major e-commerce platform, resulting in 78% faster page loads, 43% higher conversion rates, and a 92% increase in mobile sales.",
    results: ["78% faster page loads", "43% higher conversions", "92% mobile sales growth"],
  },
  {
    title: "Smart Manufacturing IoT Implementation",
    client: "IndusTech Manufacturing",
    industry: "Manufacturing",
    tech: "IoT",
    image: "/career/career4.png",
    description:
      "Deployed an IoT sensor network and analytics platform that reduced equipment downtime by 64% and improved production efficiency across 8 manufacturing facilities.",
    results: ["64% reduced downtime", "27% efficiency increase", "$3.8M maintenance savings"],
  },
  {
    title: "EdTech Learning Management System",
    client: "EduSphere Academy",
    industry: "Education",
    tech: "Web Application",
    image: "/career/career3.png",
    description:
      "Built a comprehensive learning management system that increased student engagement by 47% and improved course completion rates from 62% to 89%.",
    results: ["47% higher engagement", "89% completion rate", "124% enrollment increase"],
  },
];



  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
     
     <Header />
      
        <section className="w-full  py-1  px-4 md:px-8 lg:px-32 bg-white relative overflow-hidden">
                <div className=' container mx-auto'>
                       <div className=" absolute top-4  md:top-6  flex gap-2">
                        <FaLongArrowAltLeft className=" mt-1 text-pink-600 "/><p className=" font-medium bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text ">Back to Home</p>
                       </div>
              
                          <div className="flex flex-col md:flex-row justify-between items-center gap py-10  md:py-2">
                       
                            <div className="w-full md:w-1/2  text-center md:text-left">
                              <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-4">
                                Our  <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text ">Success Stories</span>
                              </h1>
                              <p className="text-gray-600 text-sm  md:text-base leading-relaxed">
                                Pioneering the future of AI-driven business solutions since 2018. We combine cutting-edge technology with deep industry expertise to transform how organizations operate in the digital age.
                              </p>
                            </div>
              
                           
                            <div className="w-full md:w-2/5  flex justify-center">
                              <img src="/career/career1.png" alt="Join Team" className="w-full  max-w-sm md:max-w-full " />
                            </div>
                          </div>
                  </div>          
       </section>

       <section className="bg-soft-pink py-16 px-4 md:px-20">
        <div className=" container mx-auto">

        
      <div className="grid md:grid-cols-3 gap-10">
        {caseStudies.map((study, index) => (
          <div key={index} className="bg-white shadow-md rounded-2xl overflow-hidden">
            
            <div className="h-52 w-full mb-3 relative">
              <img src={study.image} alt="" />
            </div>

            
            <div className="px-6 py-2 ">
              
              <div className="flex justify-between items-center mb-4  text-sm">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                  {study.industry}
                </span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                  {study.tech}
                </span>
              </div>

              
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{study.title}</h3>
              <p className="text-sm text-gray-500 mb-3">Client: {study.client}</p>
              <p className="text-gray-700 text-sm mb-4">{study.description}</p>

              
              <p className="font-semibold text-sm mb-2">Key Results:</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {study.results.map((result, i) => (
                  <span
                    key={i}
                    className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs"
                  >
                    {result}
                  </span>
                ))}
              </div>

             
              <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium py-2 px-4 rounded-lg flex justify-center items-center gap-2 hover:opacity-90">
                Read Full Case Study <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>

    <section className="bg-blue-50 py-20 text-center relative overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Ready to Create Your Own Success Story?
        </h2>
        <p className="text-gray-700 mb-8">
          Partner with EarmLabs to transform your business challenges into opportunities
          for growth, innovation, and competitive advantage.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-white bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text  font-medium px-5 py-2 rounded-md border border-pink-100 hover:bg-pink-50 transition">
            Return to Services
          </button>
          <button className="bg-white text-purple-600 font-medium px-5 py-2 rounded-md border border-bg-gradient-to-r from-pink-500 to-purple-600   hover:bg-purple-50 transition">
            Contact Us Today
          </button>
        </div>
      </div>
    </section>

     

    <Footer/>
    </div>
       
    
  );
}
 export default Casestudy