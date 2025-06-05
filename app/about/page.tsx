"use client"
import React, { useState } from 'react';
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import { FaLightbulb, FaLongArrowAltLeft, FaRegLightbulb, FaShieldAlt, FaStar, FaTwitter, FaUserFriends } from 'react-icons/fa';
import { FaArrowTrendUp, FaLinkedin, FaUserGroup } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';
import {motion} from "framer-motion";


const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('history');

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15, // Stagger elements within this section
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

  const imageAndValuesContainerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeOut",
        duration: 0.7,
        staggerChildren: 0.1, 
        when: "beforeChildren",
      },
    },
  };

  const coreValueItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };
  // --- END NEW VARIANTS ---
  
  const router=useRouter();
const handlenavigation=(path:string)=>{
  router.push(path);}

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      {/* Header */}
     <Header />

      {/* Hero Section (FIRST SECTION - UNCHANGED) */}
       <motion.section
       className="w-full py-1 px-4 md:px-8  bg-white relative overflow-hidden"
       variants={sectionVariants}
       initial="hidden"
       animate="visible" // Animates immediately on mount
     >
       <div className="container mx-auto">
         {/* Back to Home Navigation */}
         <motion.div
           className="absolute top-4 md:top-6 flex gap-2"
           variants={navVariants} >
           <FaLongArrowAltLeft
             onClick={() => handlenavigation('/landing')}
             className="hover:cursor-pointer mt-0 md:mt-1 text-xs md:text-base text-pink-600" />
           <p
             onClick={() => handlenavigation('/landing')}
             className="hover:cursor-pointer text-xs md:text-base md:font-medium bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text"   >
             Back to Home
           </p>
         </motion.div>

         <div className="flex flex-col md:flex-row justify-between items-center gap py-10 md:py-2">
           <motion.div
             className="w-full md:w-1/2 md:text-left"
             variants={textContainerVariants} >
             <motion.h1
               className="text-3xl md:text-5xl lg:text-5xl font-bold mb-4"
               variants={textItemVariants}   >
               About{' '}
               <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text ">
                 EARM LABS.
               </span>
             </motion.h1>
             <motion.p
               className="text-gray-600 text-sm md:text-md lg:text-lg leading-relaxed"
               variants={textItemVariants} >
               Pioneering the future of AI-driven business solutions since 2018. We
               combine cutting-edge technology with deep industry expertise to
               transform how organizations operate in the digital age.
             </motion.p>
           </motion.div>
           <motion.div
             className="w-full md:w-2/6 flex justify-center"
             variants={imageVariants}
           >
             <img
               src="/about/about1.png"
               alt="Join Team"
               className="w-full max-w-sm md:max-w-full"
             />
           </motion.div>
         </div>
       </div>
     </motion.section>
      
    {/* Mission & Vision Section (NEW SECTION - ANIMATED ON SCROLL) */}
    <motion.section
      className="py-5 md:py-14 bg-[#F4FCFF] px-4 sm:px-6 lg:px-8"
      variants={missionVisionSectionVariants}
      initial="hidden"
      whileInView="visible" 
      viewport={{ once: true, amount: 0.3 }} 
    > 
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 lg:gap-16"> 
          
          <motion.div className="w-full md:w-1/2"> 
            <motion.h2
              className="text-xl sm:text-3xl md:text-4xl lg:text-6xl  font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text mb-2 sm:mb-6 md:text-left"
              variants={missionVisionItemVariants}>
              Our Mission & Vision
            </motion.h2>
            <motion.div
              className="mb-6 sm:mb-8 p-4 sm:p-6 bg-[#E3F4FF] hover:bg-[#afdfff] hover:translate-y-2 rounded-xl border-l-4 border-pink-500"
              variants={missionVisionItemVariants}  > 
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Mission</h3> 
              <p className="text-xs md:text-base lg:text-base text-gray-700 leading-relaxed"> 
                To democratize artificial intelligence by creating accessible, powerful, and ethical AI solutions that solve real-world business challenges and drive meaningful transformation across industries.
              </p>
            </motion.div>
            <motion.div
              className="p-4 sm:p-6 bg-[#E3F4FF] rounded-xl hover:bg-[#afdfff] hover:shadow-xl hover:translate-y-2  border-l-4 border-indigo-500"
              variants={missionVisionItemVariants} >
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Vision</h3> 
              <p className="text-xs md:text-base lg:text-lg text-gray-700 leading-relaxed"> 
                To be the global leader in human-centered AI, building a future where advanced technology enhances human potential, creates sustainable business growth, and contributes positively to society.
              </p>
            </motion.div>
          </motion.div>

         
          <motion.div
            className="w-full md:w-1/2 flex flex-col items-center md:items-start"
            variants={imageAndValuesContainerVariants}   >
            <motion.div className="relative w-full max-w-sm sm:max-w-md md:max-w-none mt-3"
              variants={missionVisionItemVariants}  > 
             
              <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-pink-100 rounded-full z-0"></div> 
              <div className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-purple-100 rounded-full z-0"></div> 
              <img
                src="/about/ourmis.png"
                alt="Our Team Collaboration"
                className="rounded-xl shadow-lg relative z-10 w-full h-auto object-cover"   />
            </motion.div>
            <motion.div
              className="mt-8 md:mt-12 bg-gray-50 p-6 rounded-xl shadow-sm w-full max-w-sm sm:max-w-md md:max-w-none"
              variants={missionVisionItemVariants}  > 
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Our Core Values</h3> 
              <div className="grid grid-cols-2  gap-4">
                {[
                  { value: "Innovation", icon: <FaLightbulb className="text-lg sm:text-xl" /> }, 
                  { value: "Integrity", icon: <FaShieldAlt className="text-lg sm:text-xl" /> },
                  { value: "Collaboration", icon: <FaUserGroup className="text-lg sm:text-xl" /> },
                  { value: "Excellence", icon: <FaStar className="text-lg sm:text-xl" /> }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-2 sm:gap-3" 
                    variants={coreValueItemVariants}
                  > 
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                      {item.icon}
                    </div>
                    <span className="font-medium text-gray-800 text-sm sm:text-base">{item.value}</span> 
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
      {/* Company History Section */}
      <motion.section
      className="py-10 bg-[#FDF2F8]"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible" 
      viewport={{ once: true, amount: 0.3 }} 
    >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              className="text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text mb-4"
              variants={textItemVariants} 
            >
              Our Journey
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-3xl mx-auto"
              variants={textItemVariants}
            >
              From a small startup to an industry leader in AI solutions, our growth story reflects our commitment to innovation and excellence.
            </motion.p>
          </div>

          <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden"
            variants={textContainerVariants} 
          >
            <div className="border-b border-gray-200">
              <div className="flex">
                {['history'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-4 text-sm font-medium whitespace-nowrap cursor-pointer ${
                      activeTab === tab
                        ? 'border-b-2 border-pink-500 text-pink-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab === 'history' && 'Company Timeline'}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6">
              {activeTab === 'history' && (
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                  {[
                    {
                      year: "2018",
                      title: "Foundation",
                      description: "EramLabs was founded by Dr. Nasir and Michael Rodriguez with a vision to make AI accessible to businesses of all sizes."
                    },
                    {
                      year: "2019",
                      title: "First Major Client",
                      description: "Secured our first enterprise client, a Fortune 500 healthcare provider, delivering a custom ML solution that improved diagnostic accuracy by 37%."
                    },
                    {
                      year: "2020",
                      title: "Expansion",
                      description: "Expanded our team to 50 employees and opened our second office in Boston, focusing on research and development."
                    },
                    {
                      year: "2021",
                      title: "Series A Funding",
                      description: "Raised $15M in Series A funding led by Horizon Ventures to accelerate product development and market expansion."
                    },
                    {
                      year: "2022",
                      title: "International Growth",
                      description: "Established our first international office in London, serving clients across Europe with localized AI solutions."
                    },
                    {
                      year: "2023",
                      title: "AI Innovation Award",
                      description: "Received the Global AI Innovation Award for our groundbreaking work in explainable AI for the financial sector."
                    },
                    {
                      year: "2024",
                      title: "Present Day",
                      description: "Now a team of 200+ AI specialists serving 300+ clients globally, with offices in 5 countries and continued innovation."
                    }
                  ].map((event, index) => (
                    <motion.div // Each timeline event now animates
                      key={index}
                      className="relative pl-16 pb-10"
                      variants={textItemVariants} // Using textItemVariants for individual timeline items
                    >
                      <div className="absolute left-6 -translate-x-1/2 w-5 h-5 rounded-full bg-pink-500 border-4 border-white z-10"></div>
                      <div className="bg-white hover:bg-gray-50 hover:shadow-xl hover:translate-y-2 p-5 rounded-lg shadow-sm border border-gray-100">
                        <div className="flex items-center mb-2">
                          <span className="text-sm font-bold bg-pink-100 text-pink-800 px-3 py-1 rounded-full">{event.year}</span>
                          <h3 className="text-lg font-semibold text-gray-800 ml-3">{event.title}</h3>
                        </div>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )} 
            </div>
          </motion.div>
        </div>
      </motion.section>
  
      <motion.section
      className="py-5 md:py-10 bg-[#F1FFF2]"
      variants={sectionVariants} 
      initial="hidden"
      whileInView="visible" 
      viewport={{ once: true, amount: 0.3 }} 
    >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <motion.h2
              className="text-xl md:text-3xl lg:text-6xl font-bold mb-4 kulim bg-gradient-to-r from-pink-400 to-purple-800 text-transparent bg-clip-text"
              variants={textItemVariants} 
            >
              Meet Our Leadership
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-3xl text-xs md:text-base lg:text-lg mx-auto"
              variants={textItemVariants}
            >
              Our diverse team of experts brings together decades of experience in AI, machine learning, and business transformation.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
            variants={textContainerVariants} 
          >
            {[
              {
                name: "Dr. Nasir",
                position: "Co-Founder & CEO",
                bio: "Former AI Research Lead at MIT with 15+ years of experience in machine learning and computational linguistics. PhD in Computer Science from Stanford.",
                image: "/about/aboutL.png",
                icon: <FaTwitter />,
                icon1: <FaLinkedin />,
              },
              {
                name: "Michael Rodriguez",
                position: "Co-Founder & CTO",
                bio: "Previously led engineering teams at Google and Amazon. Pioneered several breakthrough technologies in natural language processing and computer vision.",
                image: "/about/aboutL1.png",
                icon: <FaTwitter />,
                icon1: <FaLinkedin />,
              },
              {
                name: "Dr. Amara Johnson",
                position: "Chief Research Officer",
                bio: "Renowned AI ethicist with over 50 published papers on responsible AI development. Previously led research initiatives at DeepMind.",
                image: "/about/aboutL2.png",
                icon: <FaTwitter />,
                icon1: <FaLinkedin />,
              },
              {
                name: "David Park",
                position: "Chief Operating Officer",
                bio: "20+ years of operational leadership in tech companies. Former SVP of Operations at Oracle with expertise in scaling AI implementations.",
                image: "/about/aboutL3.png",
                icon: <FaTwitter />,
                icon1: <FaLinkedin />,
              },
              {
                name: "Emma Blackwell",
                position: "Chief Marketing Officer",
                bio: "Award-winning marketer who previously led global campaigns for Microsoft and IBM. Expert in positioning AI technologies for enterprise adoption.",
                image: "/about/aboutL4.png",
                icon: <FaTwitter />,
                icon1: <FaLinkedin />,
              },
              {
                name: "Dr. Raj Patel",
                position: "Chief Innovation Officer",
                bio: "Serial entrepreneur with 3 successful tech exits. Holds 12 patents in AI and machine learning. PhD in Robotics from Carnegie Mellon.",
                image: "/about/aboutL5.png",
                icon: <FaTwitter />,
                icon1: <FaLinkedin />,
              },
            ].map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white border-4 border-gray-100 rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                variants={textItemVariants}
              >
                <div className="h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-sm md:text-xl md:font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-pink-600 text-xs md:text-sm font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="mt-4 flex space-x-3 text-neutral-400 text-xl">
                    {member.icon1}
                    {member.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

   

      {/* Join Our Team Section */}
      <motion.section
      className="py-20 bg-[#E7F6FF]"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-[#CBEBFF] border-4 border-white rounded-2xl overflow-hidden"
            variants={textContainerVariants} 
          >
            <div className="flex flex-col md:flex-row">
              <motion.div 
                className="md:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12 flex items-center"
                variants={textContainerVariants} 
              >
                <div>
                  <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-900 text-transparent bg-clip-text mb-4 md:mb-6"
                    variants={textItemVariants} 
                  >
                    Join Our Team
                  </motion.h2>
                  <motion.p
                    className="text-neutral-600 mb-6 md:mb-8 text-sm sm:text-base md:text-lg leading-relaxed"
                    variants={textItemVariants} 
                  >
                    We're always looking for talented individuals who are passionate about
                    AI and want to make a difference. Explore career opportunities at
                    EramLabs.
                  </motion.p>
                  <motion.button
                    className="bg-white text-neutral-700 px-6 py-2 sm:px-8 sm:py-3 text-sm rounded-lg hover:bg-gray-100 transition-colors font-normal cursor-pointer !rounded-button whitespace-nowrap"
                    variants={textItemVariants}
                  >
                    View Open Positions
                  </motion.button>
                </div>
              </motion.div>
              <motion.div 
                className="md:w-1/2 relative min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px]"
                variants={imageVariants}
              >
                <img
                  src="/about/joinTeam.png"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 text-center"
            variants={textContainerVariants} 
          >
            {[
              {
                title: "Innovative Environment",
                description: "Work on cutting-edge AI projects that push the boundaries of what's possible.",
                icon: <FaRegLightbulb className='text-[#2B88D8] text-2xl sm:text-3xl' />
              },
              {
                title: "Growth & Development",
                description: "Continuous learning opportunities and clear career progression paths.",
                icon: <FaArrowTrendUp className='text-[#2B88D8] text-2xl sm:text-3xl' />
              },
              {
                title: "Inclusive Culture",
                description: "A diverse and supportive workplace where every voice is valued and heard.",
                icon: <FaUserFriends className='text-[#2B88D8] text-2xl sm:text-3xl' />
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="p-2 sm:p-6 md:p-8"
                variants={textItemVariants} 
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-[#2C88D91A] rounded-full flex items-center justify-center text-pink-600 mb-3 sm:mb-4">
                  {benefit.icon}
                </div>
                <h3 className="md:text-lg text-sm font-semibold text-gray-800 mb-2 sm:mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-xs md:text-base">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>


      {/* Footer */}
     <Footer />
    </div>
  );
};

export default App;