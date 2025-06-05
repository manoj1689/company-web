"use client"
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import { useRouter } from "next/navigation";
import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import {motion} from "framer-motion";

function Serviceoffer()
{
  const router=useRouter();
  const handlenavigation=(path:string)=>{
    router.push(path);}
  return(

    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <Header/>
      <section className="w-full  py-1  px-4 md:px-8 lg:px-32 bg-white relative overflow-hidden">
              <div className=' container mx-auto'>
                     <div className=" absolute top-4  md:top-6  flex gap-2">
                                             <FaLongArrowAltLeft onClick={()=>handlenavigation('/landing')} className=" hover:cursor-pointer mt-0 md:mt-1 text-xs md:text-base text-pink-600 "/><p onClick={()=>handlenavigation('/landing')}  className="hover:cursor-pointer text-xs md:text-base md:font-medium bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text ">Back to Home</p>
                                            </div>
                        
                        <div className="flex flex-col md:flex-row justify-between items-center gap py-10  md:py-2">
                          {/* LEFT SECTION */}
                          <div className="w-full md:w-1/2 mt-5  md:text-left">
                            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-4">
                              Effortless Mobile  <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">Automation with AI</span>
                            </h1>
                            <p className="text-gray-600 text-sm  md:text-base leading-relaxed">
                              Pioneering the future of AI-driven business solutions since 2018. We
                              combine cutting-edge technology with deep industry expertise to transform
                              how organizations operate in the digital age.
                            </p>
                                <div className="grid grid-cols-2  gap-4">
                                  <div className="hover:shadow p-[2px] rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 inline-block">
                                          <div className="border p-2 rounded-lg bg-white">
                                            <p className="text-sm text-gray-600">Project Duration</p>
                                            <p className="font-semibold text-gray-400 text-lg">6 Months</p>
                                          </div>
                                        </div>
                                        <div className="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 inline-block">
                                          <div className="border p-2 bg-white rounded-lg">
                                            <p className="text-sm text-gray-600">ROI</p>
                                            <p className="font-semibold text-gray-400 text-lg">342%</p>
                                          </div>
                                        </div>
                                        <div className="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 inline-block">
                                          <div className="border p-2 rounded-lg bg-white">
                                            <p className="text-sm text-gray-600">Time Saved</p>
                                            <p className="font-semibold text-gray-400 text-lg">87%</p>
                                          </div>
                                        </div>
                                        <div className="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 inline-block">
                                          <div className="border p-2 bg-white rounded-lg">
                                            <p className="text-sm text-gray-600">Annual Savings</p>
                                            <p className="font-semibold text-gray-400 text-lg">$2.4M</p>
                                          </div>
                                        </div>
                                
                               </div>
                          </div>            
                          {/* RIGHT SECTION */}
                     <div className="w-full md:w-1/2  flex justify-center">
                       <img src="/servoffer/servoff1.png" alt="Join Team" className="w-full  max-w-sm md:max-w-full " />
                    </div>
                   </div>
                </div>          
         </section>

{/* the challage part */}

         <section className="bg-white py-16 px-6 lg:px-24 relative overflow-hidden">
<div className=" container mx-auto">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: The Challenge & Our Solution */}
        <div className="space-y-12  w-full pl-20 ">
          {/* The Challenge */}
          <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
            <p className="text-gray-700 text-xs md:text-sm mb-4">
              Our client, a global financial institution managing over $500 billion in assets, was struggling with inefficient document processing workflows that were largely manual and time-consuming. Their challenges included:
            </p>
            <div className="text-xs md:text-sm text-gray-700 space-y-2 mb-5">
              <li>Processing over 10,000 complex financial documents daily with a team of 50+ specialists</li>
              <li>Average processing time of 24 hours per document batch, creating significant bottlenecks</li>
              <li>Error rates of approximately 8.5%, requiring costly review processes</li>
              <li>Compliance risks due to inconsistent application of regulatory requirements</li>
              <li>Difficulty scaling operations during peak periods without substantial staffing increases</li>
            </div>
            <p className="text-gray-700 text-xs md:text-sm mt-6">
              The manual nature of their workflows was not only expensive but also created significant operational risks and limited their ability to scale effectively in a competitive market.
            </p>
          </motion.div>

          {/* Our Solution */}
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h2>
            <p className="text-gray-700 mb-4 text-xs md:text-sm">
              We developed a comprehensive AI-powered workflow automation solution tailored to the client’s specific needs:
            </p>
            <div className="text-xs md:text-sm text-gray-700 space-y-2 mb-5">
              <li className="">Custom machine learning models trained on the client’s historical document data</li>
              <li>Intelligent document processing system with advanced OCR and natural language understanding</li>
              <li>Automated validation against regulatory requirements and internal policies</li>
              <li>Real-time analytics dashboard for monitoring system performance and document flow</li>
              <li>Integration with existing enterprise systems through secure APIs</li>
              <li>Human-in-the-loop workflow for exception handling and continuous improvement</li>
            </div>
            <p className="text-gray-700 mt-4 text-xs md:text-sm">
              Our solution was designed to not only automate routine tasks but also to learn and improve over time, adapting to new document types and regulatory changes with minimal human intervention.
            </p>
          </div>
        </div>

        {/* Right: Images and Cards */}
        <div className="space-y-10">
          {/* Top Image */}
          <div className="w-5/6   ">
            <img src="/servoffer/servoff2.png" alt="" />
          </div>

          {/* Solution Architecture */}
          <div className="bg-blue-50  -blue-100 rounded-lg p-6 w-5/6 ">
            <h3 className="text-md font-semibold mb-4">Solution Architecture</h3>
            <img className=" mb-4" src="/servoffer/servoff3.png" alt="" />
            <p className="text-sm text-gray-600  ">
              Our solution architecture integrates multiple AI components including document classification, data extraction, validation, and workflow orchestration, all secured within the client’s existing infrastructure.
            </p>
          </div>

          
          <div className="bg-[#F9FAFB] w-5/6 rounded-lg p-6">
            <h3 className="text-md font-semibold mb-4">Implementation Approach</h3>
            <ol className="space-y-3 text-sm text-gray-700">
              <div className="space-y-4 text-sm text-gray-700">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-indigo-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">1</div>
                  <div>
                    <p className="font-semibold">Discovery & Analysis</p>
                    <p>Comprehensive workflow analysis and document categorization</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-indigo-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">2</div>
                  <div>
                    <p className="font-semibold">Model Development</p>
                    <p>Custom AI model training using client’s historical data</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-indigo-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">3</div>
                  <div>
                    <p className="font-semibold">System Integration</p>
                    <p>Seamless connection with existing enterprise systems</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-indigo-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">4</div>
                  <div>
                    <p className="font-semibold">Pilot & Refinement</p>
                    <p>Controlled rollout with continuous improvement cycles</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-indigo-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">5</div>
                  <div>
                    <p className="font-semibold">Full Deployment</p>
                    <p>Enterprise-wide implementation with comprehensive training</p>
                  </div>
                </li>
              </div>
            </ol>
          </div>
        </div>
      </div>
     </div> 
    </section>
    <Footer/>
    </div>
  );
}
export default Serviceoffer