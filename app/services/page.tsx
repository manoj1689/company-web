"use client";
import React, { JSX } from "react";
import { FaBrain, FaChartLine, FaLocationArrow, FaLongArrowAltLeft, FaRegCheckCircle, FaRegLightbulb, FaRobot } from "react-icons/fa";
import Header from "@/components/header/page";
import { GoShieldCheck } from "react-icons/go";
import { GrDocumentPerformance } from "react-icons/gr";
import { GiMultiDirections } from "react-icons/gi";
import { HiUsers } from "react-icons/hi2";
import { MdOutlineEmail, MdOutlineFullscreen } from "react-icons/md";
import { IoCall, IoRibbon } from "react-icons/io5";
import { RiCalendarScheduleFill, RiRobot2Line } from "react-icons/ri";
import { PiBrainThin } from "react-icons/pi";
import { LuChartLine } from "react-icons/lu";
import { IoSearchSharp } from "react-icons/io5";
import { HiMiniCpuChip } from "react-icons/hi2";
import { PiIntersectSquareFill } from "react-icons/pi";
import { GrPowerCycle } from "react-icons/gr";
import {motion} from "framer-motion";
import { useRouter } from "next/navigation";
import Footer from "@/components/footer/page";
function Service(){


  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren", 
        staggerChildren: 0.2,   
      },
    },
  };

  const navVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.5,
      },
    },
  };

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.6,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: 'easeOut',
        duration: 0.7,
        delay: 0.5,
      },
    },
  };
  
  // --- NEW VARIANTS FOR THE SECOND SECTION ---
  const missionVisionSectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1, 
      },
    },
  };

  const missionVisionItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.6,
      },
    },
  };

  
  const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2, 
    },
  },
};

const leftColumnVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.7,
      when: "beforeChildren",
      staggerChildren: 0.1, 
    },
  },
};

const rightColumnVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.7,
      when: "beforeChildren",
      staggerChildren: 0.1, 
    },
  },
};



const formItemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const contactInfoItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

const router=useRouter();
const handlenavigation=(path:string)=>{
  router.push(path);
};



  const benefits = [
  {
    title: "Competitive Advantage",
    description: "Gain a strategic edge by identifying unique AI applications that differentiate your business in the marketplace.",
    icon: <IoRibbon />,
  },
  {
    title: "Risk Mitigation",
    description: "Identify potential challenges and develop strategies to address ethical, regulatory, and implementation risks.",
    icon: <GoShieldCheck />,
  },
  {
    title: "ROI Maximization",
    description: "Prioritize AI initiatives based on potential return on investment and alignment with business objectives.",
    icon: <GrDocumentPerformance />,
  },
  {
    title: "Scalable Implementation",
    description: "Develop a phased approach that allows for incremental deployment and validation of AI solutions.",
    icon: <GiMultiDirections />,
  },
  {
    title: "Organizational Alignment",
    description: "Ensure stakeholder buy-in and alignment across departments for successful AI adoption.",
    icon: <HiUsers />,
  },
  {
    title: "Future-Proof Strategy",
    description: "Create an adaptable roadmap that can evolve with emerging technologies and changing business needs.",
    icon: <FaLocationArrow />,
  },
];


type Service = {
  icon: JSX.Element;
  title: string;
  description: string;
  link: string;
};

const services: Service[] = [
  {
    icon: <PiBrainThin  className="w-8 h-8 text-blue-500" />,
    title: "Machine Learning Solutions",
    description:
      "Custom ML models to extract insights from your data and automate complex decision processes.",
    link: "#",
  },
  {
    icon: <RiRobot2Line className="w-8 h-8 text-blue-500" />,
    title: "Process Automation",
    description:
      "Streamline operations with intelligent automation that adapts to changing business conditions.",
    link: "#",
  },
  {
    icon: <LuChartLine className="w-8 h-8 text-blue-500" />,
    title: "Data Analytics",
    description:
      "Transform raw data into actionable intelligence with our advanced analytics capabilities.",
    link: "#",
  },
];

const steps = [
  {
    title: 'Discovery & Assessment',
    description:
      'We evaluate your current capabilities, data assets, business objectives, and competitive landscape to identify AI opportunities.',
    duration: '2-3 Weeks',
    position: 'left',
    icon: <IoSearchSharp />,
  },
  {
    title: 'Strategy Development',
    description:
      'Our team develops a comprehensive AI roadmap with prioritized initiatives, resource requirements, and implementation timelines.',
    duration: '3-4 Weeks',
    position: 'right',
    icon:<FaRegLightbulb /> ,
  },
  {
    title: 'Technology Selection',
    description:
      'We identify and evaluate the optimal AI technologies and platforms to support your strategic objectives.',
    duration: '2-3 Weeks',
    position: 'left',
    icon: <HiMiniCpuChip />,
  },
  {
    title: 'Pilot Implementation',
    description:
      'We implement a proof-of-concept for a high-priority initiative to validate the approach and demonstrate value.',
    duration: '4-6 Weeks',
    position: 'right',
    icon: <PiIntersectSquareFill />,
  },
  {
    title: 'Scaling & Integration',
    description:
      'Following successful pilot validation, we scale the solution and integrate it with existing systems and processes.',
    duration: '8-12 Weeks',
    position: 'left',
    icon:<MdOutlineFullscreen /> ,
  },
  {
    title: 'Continuous Optimization',
    description:
      'We monitor performance, gather feedback, and continuously refine the AI solution to maximize business value.',
    duration: 'Ongoing',
    position: 'right',
    icon: <GrPowerCycle />,
  },
];

  return(
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
       <Header />
      
        <motion.section
      className="w-full py-1 px-4 md:px-8 lg:px-32 bg-white relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      animate="visible" 
    >
      <div className=' container mx-auto'>
        {/* Decorative background vectors - no motion applied as they are background elements */}
        <div className="absolute right-0 top-20 md:top-0 w-1/2 h-1/2 bg-no-repeat bg-left bg-contain opacity-100 pointer-events-none z-0"
          style={{ backgroundImage: "url('/sevice/vector.png')",
            backgroundSize:"75px",
            backgroundPosition:" right top"
        }}></div>
        <div className="absolute top-4 left-0 w-24 h-24 md:w-32 md:h-32 bg-no-repeat bg-contain opacity-100 pointer-events-none z-0" style={{ backgroundImage: "url('/sevice/vector 1.png')",
            backgroundSize:"75px",
            backgroundPosition:" "
        }} ></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 md:w-32 md:h-32 bg-no-repeat bg-contain opacity-100 pointer-events-none z-0" style={{ backgroundImage: "url('/sevice/vector3.png')",
            backgroundSize:"75px",
            backgroundPosition:" "
        }} ></div>
        <div className="absolute top-4 left- w-24 h-24 md:w-32 md:h-32 bg-no-repeat bg-contain opacity-100 pointer-events-none z-0" style={{ backgroundImage: "url('/sevice/vector4.png')",
            backgroundSize:"75px",
            backgroundPosition:" "
        }} ></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-no-repeat bg-contain opacity-100 pointer-events-none z-0" style={{backgroundImage: "url('/sevice/vector2.png')",
            backgroundSize:"75px",
            backgroundPosition:" "
        }}></div>

       
        <motion.div onClick={()=>handlenavigation('/landing')} className="cursor-pointer absolute top-4 md:top-6 flex gap-2" variants={navVariants}>
          <FaLongArrowAltLeft className=" mt-1 text-pink-600 "/><p className=" font-medium bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text ">Back to Home</p>
        </motion.div>
      
        
        <div className="flex flex-col md:flex-row justify-between items-center gap py-10 md:py-2">
          <motion.div
            className="w-full md:w-1/2 md:text-left"
            variants={textContainerVariants} 
          >
            <motion.h1
              className="text-3xl md:text-5xl lg:text-5xl font-bold mb-4"
              variants={textItemVariants} 
            >
              AI Strategy <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text ">Consulting </span>
            </motion.h1>
            <motion.p
              className="text-gray-600 text-sm md:text-base leading-relaxed"
              variants={textItemVariants} 
            >
              Pioneering the future of AI-driven business solutions since 2018. We combine cutting-edge technology with deep industry expertise to transform how organizations operate in the digital age
            </motion.p>
          </motion.div>
      
          <motion.div 
            className="w-full md:w-2/5 flex justify-center"
            variants={imageVariants}
          >
            <img src="/sevice/serv1.png" alt="Join Team" className="w-full max-w-sm md:max-w-full " />
          </motion.div>
        </div>
      </div>
    </motion.section>
        {/* Services Overview */}
        
       <motion.section
      className="flex flex-col md:flex-row items-center justify-between gap-8 p-6 md:p-12 bg-white"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex container mx-auto">
        <motion.div 
          className="md:w-1/2 space-y-4"
          variants={textContainerVariants} 
        >
          <motion.h2
            className="text-6xl font-bold kulim ml-9 bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text"
            variants={textItemVariants} 
          >
            Services Overview
          </motion.h2>
          <div className=" mr-5 ">
            <motion.p
              className="text-gray-700 ml-9 "
              variants={textItemVariants} 
            >
              Our AI Strategy Consulting service provides organizations with a clear roadmap for leveraging artificial intelligence
              to achieve business objectives. We combine deep technical expertise with business acumen to develop strategies that drive real value.
            </motion.p>
            <div className=" ">
              <motion.ul 
                className=" space-y-3 text-gray-700 text-base"
                variants={textContainerVariants} 
              >
                {[
                  {
                    title: "Comprehensive Assessment",
                    description: "Evaluate your current capabilities, data assets, and organizational readiness for AI adoption."
                  },
                  {
                    title: "Strategic Roadmap",
                    description: "Develop a prioritized implementation plan with clear milestones and resource requirements."
                  },
                  {
                    title: "Technology Selection",
                    description: "Identify the right AI technologies and platforms to meet your specific business needs."
                  },
                  {
                    title: "Change Management",
                    description: "Prepare your organization for successful AI adoption with comprehensive change management support."
                  }
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start ml-0"
                    variants={textItemVariants} 
                  >
                    <span className="text-pink-500 text-xl mr-2"><FaRegCheckCircle /></span>
                    <div className="flex flex-col">
                      <h1 className="leading-tight">{item.title}</h1>
                      <p className="leading-tight">{item.description}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
          <motion.button
            className="mt-4 px-5 py-2 ml-9 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded transition"
            variants={textItemVariants} 
          >
            Know More
          </motion.button>
        </motion.div>
        <motion.div 
          className="md:w-1/2"
          variants={imageVariants} 
        >
          <img src="/sevice/serv2.png" alt="" />
        </motion.div>
      </div>
    </motion.section>

            {/* benifits & features */}

       <motion.section
      className="bg-pink-50 py-12 px-4 md:px-16"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <motion.h2
            className="text-6xl kulim font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600"
            variants={textItemVariants} 
          >
            Benefits & Features
          </motion.h2>
          <motion.p
            className="text-gray-700 mt-2 max-w-2xl mx-auto"
            variants={textItemVariants} 
          >
            Our AI Strategy Consulting delivers tangible business value through a structured approach that addresses your unique challenges and opportunities.
          </motion.p>
        </div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={textContainerVariants}
        >
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow  cursor-pointer hover:shadow-xl hover:shadow-pink-300 hover:-translate-y-2 transition-all duration-300 ease-in-out"
              variants={textItemVariants} 
            >
              <div className="text-xl rounded-md mb-4 bg-pink-200 w-fit p-2 text-pink-500">{item.icon}</div>
              <h3 className="text-lg font-normal mb-2 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>

          {/* implementation process */}

     <motion.section
      className="bg-gray-50 py-16"
      variants={missionVisionSectionVariants} 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center kulim bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text mb-4"
          variants={missionVisionItemVariants}
        >
          Implementation Process
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          variants={missionVisionItemVariants} 
        >
          Our structured methodology ensures successful AI strategy development
          and implementation.
        </motion.p>
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-5 h-full w-1 bg-gradient-to-b from-pink-400 to-purple-500"></div>

          <ul className="space-y-16 relative z-10">
            {steps.map((step, index) => (
              <motion.li
                key={index}
                className="relative flex flex-col md:flex-row md:items-center"
                variants={missionVisionItemVariants} 
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-pink-400 to-purple-500 rounded-full text-xl text-white absolute left6 md:left-1/2 transform md:-translate-x-9 -translate-x-[1.65rem] -translate-y-1/2 z-20"
                  style={{ top: "1.25rem" }}
                >
                  {step.icon}
                </div>

      
                <div className="ml-16 md:hidden">
                  <h3 className="text-xl font-normal text-neutral-700">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{step.description}</p>
                  <p className="text-sm text-pink-500 mt-1">
                    {step.duration}
                  </p>
                </div>

             
                {step.position === "left" && (
                  <div className="hidden md:block w-full md:w-1/2 md:pr-16 text-right">
                    <h3 className="text-xl font-normal text-neutral-700">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{step.description}</p>
                    <p className="text-sm text-pink-500 mt-1">
                      {step.duration}
                    </p>
                  </div>
                )}

                {step.position === "right" && (
                  <div className="hidden md:block w-full md:w-1/2 md:pl-14 text-left md:ml-auto">
                    <h3 className="text-xl font-normal text-neutral-700">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{step.description}</p>
                    <p className="text-sm text-pink-500 mt-1">
                      {step.duration}
                    </p>
                  </div>
                )}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
                {/* get start with AI */}

                 <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="flex container mx-auto justify-between gap-5">
        {/* leftdiv */}
        <motion.div
          className="py-20 w-1/2"
          variants={leftColumnVariants} 
        >
          <div>
            <motion.h2
              className="text-5xl w-full font-bold bg-gradient-to-r from-pink-500 to-purple-800 text-transparent bg-clip-text p-2"
              variants={textItemVariants} 
            >
              Get Start with Ai Strategy
            </motion.h2>
          </div>
          <div>
            <motion.p
              className="text-gray-600 md:text-sm text:xs mb-6 w-full p-2"
              variants={textItemVariants}
            >
              Ready to transform your business with AI? Contact our team of
              experts to discuss your specific needs and how our AI Strategy
              Consulting can help you achieve your objectives.
            </motion.p>
            <div>
              <motion.div
                className="bg-white w-full rounded-lg shadow-md"
                variants={formItemVariants} 
              >
                <form className="p-10 shadow-md rounded-xl space-y-4">
                  <motion.div variants={formItemVariants}>
                    <p className="text-sm font-normal text-gray-700 mb-1">
                      Full Name
                    </p>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </motion.div>
                  <motion.div variants={formItemVariants}>
                    <p className="text-sm font-normal text-gray-700 mb-1">
                      Email Address
                    </p>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </motion.div>
                  <motion.div variants={formItemVariants}>
                    <p className="text-sm font-normal text-gray-700 mb-1">
                      Company Name
                    </p>
                    <input
                      type="text"
                      placeholder="Enter your company name"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </motion.div>
                  <motion.div variants={formItemVariants}>
                    <p className="text-sm font-normal text-gray-700 mb-1">
                      Service of Interest
                    </p>
                    <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500">
                      <option>AI Strategy Consulting</option>
                      <option>AI Model Development</option>
                      <option>AI Integration</option>
                    </select>
                  </motion.div>
                  <motion.div variants={formItemVariants}>
                    <p className="text-sm font-normal text-gray-700 mb-1">
                      Project Requirements
                    </p>
                    <textarea
                      placeholder="Tell us about your project and objectives"
                      rows={4}
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </motion.div>
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-md font-semibold hover:opacity-90 transition"
                    variants={formItemVariants} 
                  >
                    Submit Inquiry
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="py-20 w-1/2"
          variants={rightColumnVariants} 
        >
          <div className="">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md space-y-3"
              variants={contactInfoItemVariants} // Apply variant to the contact info block
            >
              <motion.div variants={contactInfoItemVariants}>
                <p className="flex text-base text-gray-60 gap-2">
                  <MdOutlineEmail className="text-pink-500 text-xl" /> Email Us
                </p>
                <p className="text-gray-800 text-sm pl-5">
                  strategy@techfusion.ai
                </p>
              </motion.div>
              <motion.div variants={contactInfoItemVariants}>
                <p className="flex text-base text-gray-600 gap-2">
                  <IoCall className="text-pink-500 text-xl" /> Call Us
                </p>
                <p className="text-gray-800 text-sm w-1/2 pl-5">
                  +1 (555) 123-4567
                </p>
              </motion.div>
              <motion.div variants={contactInfoItemVariants}>
                <p className="flex text-base text-gray-600 gap-2">
                  <RiCalendarScheduleFill className="text-pink-500 text-xl" />{" "}
                  Schedule a Consultation
                </p>
                <p className="text-gray-800 text-sm ml-6">
                  Book a 30-minute discovery call with our stradgey team
                </p>
                <a
                  href="#"
                  className="text-pink-500 font-semibold hover:underline pl-5"
                >
                  Schedule Now
                </a>
              </motion.div>
            </motion.div>
          </div>
          <motion.div className="mt-5" variants={imageVariants}>
            <img
              className="w-full rounded-lg shadow-md"
              src="/sevice/serv3.png"
              alt=""
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
    {/* <section className="bg-green-50 py-16 px-4 md:px-24">
       <div className=" container mx-auto">
                  <h2 className="text-5xl border w-1/2 font-bold bg-gradient-to-r from-pink-500 to-purple-800 text-transparent bg-clip-text p-2 ">Get Start with Ai Strategy</h2>
                  <p className="text-gray-600 border mb-6 w-1/2 p-2 ">
                  Ready to transform your business with AI? Contact our team of experts to discuss your specific needs and how our AI Strategy Consulting can help you achieve your objectives.
                </p>
                <div className=" flex border">
                <div className="max-w-7xl  mx-auto grid md:grid-cols-2 gap-10 ">
                
               
                  <div className="bg-white h-fit border rounded-lg shadow-md">
                    <form className="p-10 w-full shadow-md rounded-xl space-y-4">
                      <div>
                        <p className="text-sm font-normal text-gray-700 mb-1">Full Name</p>
                        <input type="text" placeholder="Enter your name" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"/>
                      </div>

                      <div>
                        <p className="text-sm font-normal text-gray-700 mb-1">Email Address</p>
                        <input type="email" placeholder="Enter your email" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500" />
                      </div>

                          <div>
                            <p className="text-sm font-normal text-gray-700 mb-1">Company Name</p>
                                <input type="text" placeholder="Enter your company name" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500" /> 
                          </div>

                          <div>
                            <p className="text-sm font-normal text-gray-700 mb-1">Service of Interest</p>
                              <select  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500" >
                                <option>AI Strategy Consulting</option>
                                <option>AI Model Development</option>
                                <option>AI Integration</option>
                              </select>
                          </div>

                    <div>
                      <p className="text-sm font-normal text-gray-700 mb-1">Project Requirements</p> <textarea  placeholder="Tell us about your project and objectives"  rows={4}  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"  />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-md font-semibold hover:opacity-90 transition"> Submit Inquiry</button>
                  </form>
                </div>
                      <div className="space-y-3 border">
                        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                          <div className="">
                            <p className="flex text-base text-gray-60 gap-2"><MdOutlineEmail className=" text-pink-500 text-xl" /> Email Us</p>
                            <p className="text-gray-800 text-sm pl-5">strategy@techfusion.ai</p>
                          </div>
                          <div>
                            <p className="flex text-base text-gray-600 gap-2"><IoCall className=" text-pink-500 text-xl" /> Call Us</p>
                            <p className="text-gray-800 text-sm w-1/2  pl-5">+1 (555) 123-4567</p>
                          </div>
                          <div>
                            <p className="flex text-base text-gray-600 gap-2"><RiCalendarScheduleFill className=" text-pink-500 text-xl"  /> Schedule a Consultation</p>
                            <p className="text-gray-800 text-sm ml-6">Book a 30-minute discovery call with our stradgey team</p>
                            <a href="#"className="text-pink-500 font-semibold hover:underline pl-5">Schedule Now</a>
                          </div>
                        </div>

                        <img
                          src="/sevice/serv3.png" 
                          alt="Consulting Room"
                          className="w-full rounded-lg shadow-md"
                        />
                      </div>
               </div>
               </div>
        </div>
    </section> */}

              {/* related service */}
        <motion.section
      className="bg-blue-100 py-16"
      variants={missionVisionSectionVariants} // Apply parent variant
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Animate when 30% of the section is in view
    >
      <div className="container mx-auto">
        <div className="text-center mb-12 px-4">
          <motion.h2
            className="text-6xl kulim font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500"
            variants={missionVisionItemVariants} // Apply child variant to heading
          >
            Related Services
          </motion.h2>
          <motion.p
            className="text-gray-700 mt-2"
            variants={missionVisionItemVariants} // Apply child variant to paragraph
          >
            Explore our other AI solutions that complement our Strategy
            Consulting services.
          </motion.p>
        </div>

        <motion.div
          className="w-3/4 mx-auto grid gap-6 px-6 md:grid-cols-3"
          // We apply the main section's stagger here, or could create a new variant
          // for the grid container if more specific grid animations were needed.
          // For simplicity, we'll let the parent stagger handle it.
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              variants={missionVisionItemVariants} // Apply item variant to each service card
            >
              <div className="mb-4 bg-indigo-100 w-fit p-2 rounded-lg">
                {service.icon}
              </div>
              <h3 className="text-xl text-gray-600 font-normal mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 mb-4">{service.description}</p>
              <a href={service.link} className="text-blue-600 hover:underline">
                Learn more
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
     <Footer/>
       
    </div>
  );
}
export default Service