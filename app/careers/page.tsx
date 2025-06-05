"use client"
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import React, { useState } from 'react';
import { FaInstagram, FaLongArrowAltLeft } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";
import { FaHeartPulse, FaGraduationCap, FaSackDollar, FaCheck } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaScaleBalanced } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import {Modal} from "react-responsive-modal"
import { number } from "framer-motion";
import 'react-responsive-modal/styles.css';



const jobData = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote (US)",
    experience: "5+ years",
    tagColor: "purple",
    applyColor: "pink",
    description:
      "We're looking for an experienced Full Stack Developer to build and maintain scalable web applications using React, Node.js, and AWS technologies.",
    requirements: [
      "5+ years of experience with modern JavaScript frameworks",
      "Strong knowledge of React and Node.js",
      "Experience with cloud services (AWS/Azure/GCP)",
      "Database design and optimization skills",
    ],
  },
  {
    id: 2,
    title: "UX/UI Designer",
    department: "Design",
    location: "San Francisco, CA (Hybrid)",
    experience: "3+ years",
    tagColor: "blue",
    applyColor: "pink",
    description:
      "Join our design team to create intuitive and visually appealing user experiences across our digital products and services.",
    requirements: [
      "3+ years of UX/UI design experience",
      "Proficiency in Figma and Adobe Creative Suite",
      "Portfolio showcasing user-centered design process",
      "Experience with design systems",
    ],
  },
  {
    id: 3,
    title: "AI Research Scientist",
    department: "AI & ML",
    location: "Remote (Global)",
    experience: "4+ years",
    tagColor: "indigo",
    applyColor: "pink",
    description:
      "Help us push the boundaries of AI technology by researching and implementing cutting-edge machine learning algorithms and models.",
    requirements: [
      "PhD or MS in Computer Science, AI, or related field",
      "Published research in machine learning or AI",
      "Experience with PyTorch or TensorFlow",
      "Strong mathematical background",
    ],
  },
  {
    id: 4,
    title: "Digital Marketing Manager",
    department: "Marketing",
    location: "New York, NY (On-site)",
    experience: "4+ years",
    tagColor: "pink",
    applyColor: "pink",
    description:
      "Lead our digital marketing efforts to increase brand awareness, generate leads, and drive customer engagement across multiple channels.",
    requirements: [
      "4+ years of digital marketing experience",
      "Experience with SEO, SEM, and social media marketing",
      "Data analysis and reporting skills",
      "Campaign management expertise",
    ],
  },
  {
    id: 5,
    title: "iOS Developer",
    department: "Engineering",
    location: "Remote (US)",
    experience: "3+ years",
    tagColor: "purple",
    applyColor: "pink",
    image: "/images/ios.png", 
    description:
      "Develop and maintain iOS applications that deliver exceptional user experiences and integrate with our backend services.",
    requirements: [
      "3+ years of iOS development experience",
      "Proficiency in Swift and Objective-C",
      "Understanding of iOS design principles",
      "Experience with RESTful APIs",
    ],
  },
  {
    id: 6,
    title: "Product Manager",
    department: "Product",
    location: "San Francisco, CA (Hybrid)",
    experience: "4+ years",
    tagColor: "pink",
    applyColor: "pink",
    image: "/images/product.png", 
    description:
      "Drive product strategy and execution, working closely with engineering, design, and marketing teams to deliver innovative solutions.",
    requirements: [
      "4+ years of product management experience",
      "Strong analytical and problem-solving skills",
      "Experience with agile methodologies",
      "Excellent communication and leadership abilities",
    ],
  }
];



const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    department: '',
    location: '',
    employmentType: ''
  });

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      department: '',
      location: '',
      employmentType: ''
    });
    setSearchTerm('');
  };

  

  const departments = ['Engineering', 'Design', 'Marketing', 'Sales', 'Product', 'Customer Support'];
  const locations = ['Remote', 'San Francisco, CA', 'New York, NY', 'London, UK', 'Toronto, Canada'];
  const employmentTypes = ['Full-time', 'Part-time', 'Contract', 'Internship'];

  const jobs = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      employmentType: 'Full-time',
      description: 'Design and implement advanced machine learning models and AI solutions for enterprise clients.',
      experience: '5+ years',
      postedDate: '2025-05-10'
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote',
      employmentType: 'Full-time',
      description: 'Create intuitive and engaging user experiences for our AI-powered applications.',
      experience: '3+ years',
      postedDate: '2025-05-15'
    },
    {
      id: 3,
      title: 'Data Scientist',
      department: 'Engineering',
      location: 'New York, NY',
      employmentType: 'Full-time',
      description: 'Analyze complex datasets and develop predictive models to solve business problems.',
      experience: '4+ years',
      postedDate: '2025-05-12'
    },
    {
      id: 4,
      title: 'Content Marketing Specialist',
      department: 'Marketing',
      location: 'Remote',
      employmentType: 'Full-time',
      description: 'Develop compelling content strategies to showcase our AI solutions and thought leadership.',
      experience: '2+ years',
      postedDate: '2025-05-18'
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Toronto, Canada',
      employmentType: 'Full-time',
      description: 'Build and maintain scalable infrastructure for our AI applications and services.',
      experience: '3+ years',
      postedDate: '2025-05-14'
    },
    {
      id: 6,
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco, CA',
      employmentType: 'Full-time',
      description: 'Lead the development of innovative AI products from conception to launch.',
      experience: '4+ years',
      postedDate: '2025-05-08'
    },
    {
      id: 7,
      title: 'Technical Support Specialist',
      department: 'Customer Support',
      location: 'London, UK',
      employmentType: 'Full-time',
      description: 'Provide expert technical assistance to clients using our AI solutions.',
      experience: '2+ years',
      postedDate: '2025-05-20'
    },
    {
      id: 8,
      title: 'AI Research Scientist',
      department: 'Engineering',
      location: 'San Francisco, CA',
      employmentType: 'Full-time',
      description: 'Conduct cutting-edge research in machine learning and develop novel AI algorithms.',
      experience: '5+ years',
      postedDate: '2025-05-05'
    },
    {
      id: 9,
      title: 'Sales Development Representative',
      department: 'Sales',
      location: 'Remote',
      employmentType: 'Full-time',
      description: 'Generate qualified leads and build relationships with potential clients for our AI solutions.',
      experience: '1+ years',
      postedDate: '2025-05-22'
    },
    {
      id: 10,
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'New York, NY',
      employmentType: 'Contract',
      description: 'Build responsive and accessible user interfaces for our AI-powered applications.',
      experience: '3+ years',
      postedDate: '2025-05-16'
    },
    {
      id: 11,
      title: 'Marketing Intern',
      department: 'Marketing',
      location: 'San Francisco, CA',
      employmentType: 'Internship',
      description: 'Support marketing initiatives and gain hands-on experience in AI technology marketing.',
      experience: 'Entry level',
      postedDate: '2025-05-21'
    },
    {
      id: 12,
      title: 'Backend Engineer',
      department: 'Engineering',
      location: 'Remote',
      employmentType: 'Part-time',
      description: 'Develop and maintain server-side applications and APIs for our AI platform.',
      experience: '2+ years',
      postedDate: '2025-05-19'
    }
  ];


// modal pop up
  const [openModal, setOpenModal] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);

  const onOpenModal = (jobId:number) => {
    setSelectedJobId(jobId);
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
    setSelectedJobId(null);
  };

  const jobTitleForModal = selectedJobId ? jobData.find(j => j.id === selectedJobId)?.title : 'Job';


  const router=useRouter();
  const handlenavigation=(path:string)=>{
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
     
      <Header />

      

        <section className="w-full border py-4 px-4 md:px-8 lg:px-32 bg-white relative overflow-hidden">
        <div className=" flex container mx-auto ">
          <div onClick={()=>handlenavigation('/landing')} className=" cursor-pointer absolute top-4  md:top-6  flex gap-2">
                                  <FaLongArrowAltLeft className=" mt-1 text-pink-600 "/><p className=" font-medium bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text ">Back to Home</p>
                                 </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-8 md:py-16">
              {/* LEFT SECTION */}
              <div className="w-full md:w-1/2  text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4">
                  Join Our Team <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text ">at Earm Labs</span>
                </h1>
                <p className="text-gray-600 text-base md:text-lg">
                  Be part of a team that’s shaping the future of technology. We're looking for passionate individuals who want to make an impact and grow with us.
                </p>
              </div>

              {/* RIGHT SECTION */}
              <div className="w-full md:w-2/5 flex justify-center">
                <img src="/immaaa 1.png" alt="Join Team" className="w-full max-w-sm md:max-w-full h-auto" />
              </div>
            </div>
           </div> 
        </section>

      <section id="culture" className="py-8 md:py-12 lg:py-16 bg-gradient-to-b from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text kulim mb-4">Our Culture</h2>
            <p className="text-neutral-500 max-w-3xl mx-auto text-base md:text-lg">
              At EramLabs, we foster an environment of innovation, collaboration, and continuous learning. Our culture is built on these core values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10 md:mb-16">
            {[
              {
                title: "Innovation",
                description: "We encourage creative thinking and bold ideas that push the boundaries of what's possible with AI.",
                icon: <FaRegLightbulb className="text-2xl" />
              },
              {
                title: "Collaboration",
                description: "We believe the best solutions come from diverse teams working together toward common goals.",
                icon: <FiUsers className="text-2xl" />
              },
              {
                title: "Continuous Learning",
                description: "We invest in our team's growth anddevelopment, fostering a culture oflifelong learning.",
                icon: <FiBookOpen/>
              },
              {
                title: "Inclusivity",
                description: "We celebrate diversity and create anenvironment where everyone feelsvalued and respected.",
                icon: <FaRegHeart/>
              },

            ].map((value, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto text-pink-600 text-xl md:text-2xl">
                {value.icon}
              </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3 text-center">{value.title}</h3>
                <p className="text-gray-600 text-sm font-light text-center">{value.description}</p>
              </div>
            ))}
          </div>

              <div className="flex flex-col md:flex-row gap-4">
                <img  src="/colla3.png" alt="" className="w-full md:w-1/3 object-cover rounded-lg shadow-md"   />
                <img  src="/colla.png" alt=""  className="w-full md:w-1/3 object-cover rounded-lg shadow-md" />
                <img  src="/colla2.png" alt="" className="w-full md:w-1/3 object-cover rounded-lg shadow-md"  />
              </div>


        </div>
      </section>

                      {/* Benefits Section */}
        <section id="benefits" className="py-8 md:py-12 lg:py-14 bg-white ">
                        <div className="container mx-auto  px-4">
                          <div className="text-center mb-10 md:mb-16">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-transparent kulim bg-clip-text mb-4">Benefits & Perks</h2>
                            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
                            We believe in taking care of our team members with comprehensive benefits that
                support your health, wealth, and work-life balance
                            </p>
                          </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch">
                  {[
                    {
                      title: "Health & Wellness",
                      items: [
                        "Comprehensive medical, dental & vision",
                        "Mental health resources",
                        "On-site fitness classes",
                        "Wellness programs and gym stipend"
                      ],
                      icon: <FaHeartPulse className="text-white text-xl" />,
                      iconBg: "bg-purple-600",
                      gradient: "from-purple-50 to-pink-50",
                      titleColor: "text-purple-700",
                      checkColor: "text-purple-500"
                    },
                    {
                      title: "Financial Benefits",
                      items: [
                        "Competitive salary packages",
                        "401(k) with company matching",
                        "Stock options & equity grants",
                        "Generous bonus structure"
                      ],
                      icon: <FaSackDollar className="text-white text-2xl" />,
                      iconBg: "bg-blue-600",
                      gradient: "from-blue-50 to-sky-50",
                      titleColor: "text-blue-700",
                      checkColor: "text-blue-500"
                    },
                    {
                      title: "Work-Life Balance",
                      items: [
                        "Flexible work arrangements",
                        "Generous PTO policy",
                        "Paid parental leave",
                        "Sabbatical program"
                      ],
                      icon: <FaScaleBalanced  className="text-white text-3xl" />,
                      iconBg: "bg-green-600",
                      gradient: "from-green-50 to-emerald-50",
                      titleColor: "text-green-700",
                      checkColor: "text-green-500"
                    },
                    {
                      title: "Professional Growth",
                      items: [
                        "Learning & development budget",
                        "Conference attendance",
                        "Mentorship programs",
                        "Career advancement paths"
                      ],
                      icon: <FaGraduationCap className="text-white text-2xl" />,
                      iconBg: "bg-orange-600",
                      gradient: "from-orange-50 to-yellow-50",
                      titleColor: "text-orange-700",
                      checkColor: "text-orange-600 font-bold"
                    }
                  ].map((category, index) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-b ${category.gradient} p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between h-full min-h-[280px] md:min-h-[320px]`}
                    >
                      <div className="flex flex-col ">
                     
                        <div
                          className={`w-12 h-12 md:w-14 md:h-14 ${category.iconBg} rounded-full flex items-center  justify-center shadow-sm mb-4 md:mb-6`}
                        >
                          {category.icon}
                        </div>

                       
                        <h3 className={`text-lg md:text-xl  font-semibold ${category.titleColor} mb-2 md:mb-3`}>
                          {category.title}
                        </h3>

                        
                        <div className="space-y-2 md:space-y-3 ">
                          {category.items.map((item, idx) => (
                            <div key={idx} className="flex items-center  gap-2 md:gap-3 w-full">
                              <FaCheck className={`${category.checkColor} mt-[2px] text-sm flex-shrink-0`} />
                              <span className="text-gray-700 text-sm leading-tight">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

        </div>
      </section>
       <div className="min-h-screen bg-gray-100 font-sans antialiased">
      {/* Tailwind CSS CDN for styling */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* This section displays the job openings */}
      <section className="w-full py-8 px-4 md:px-8 lg:px-32 bg-green-50">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-tr from-pink-500 to-purple-600 text-transparent bg-clip-text mb-4 py-1 kulim">Current Openings</h1>
          <p className="text-center text-gray-700 mb-8 md:mb-10 text-base md:text-lg">
            Join our team of innovators and make an impact. Explore our current job opportunities below.
          </p>

          {/* Department filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10">
            {["All Departments", "Engineering", "Design", "Marketing", "Product", "AI & ML"].map((dept, i) => (
              <button key={i} className="px-4 py-2 text-sm md:text-base rounded-md bg-gray-200 hover:bg-gradient-to-tr from-pink-500 to-purple-600 text-gray-600 hover:text-white transition-colors duration-300">
                {dept}
              </button>
            ))}
          </div>

          {/* Grid of job cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobData.map((job) => (
              <div key={job.id} className="bg-white shadow-md rounded-lg p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                  <div>
                    <h2 className="text-xl font-bold mb-2">{job.title}</h2>
                    <div className="flex flex-wrap gap-2 text-sm mb-3">
                      <span className={`bg-${job.tagColor}-100 text-${job.tagColor}-600 px-2 py-1 rounded-md`}>
                        {job.department}
                      </span>
                      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md">{job.location}</span>
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md">{job.experience}</span>
                    </div>
                  </div>
                  {/* The "Apply Now" button that triggers the custom modal */}
                  <button
                    className={`text-white px-4 py-2 rounded-md bg-gradient-to-r from-pink-400 to-purple-500 text-sm mt-3 sm:mt-0`}
                    onClick={() => onOpenModal(job.id)} // This calls the function to open the custom modal
                  >
                    Apply Now
                  </button>
                </div>
                <p className="text-neutral-600 font-normal text-sm mb-3">{job.description}</p>
                <h4 className="font-semibold text-base md:text-lg mb-2">Requirements:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                  {job.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
                <div className="flex justify-end">
                  <button className="text-neutral-700 text-sm hover:underline">View Full Description &gt;&gt;</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Modal Component */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center  justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 relative">
            {/* Close button for the modal */}
            <button
              onClick={onCloseModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              aria-label="Close modal"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-2">Apply for {jobTitleForModal}</h2>
           <hr  className="mb-3"/>

            {/* Application form content */}
            <form>
              <div className=" flex gap-10">
                  <div className="mb-2 w-1/2">
                    <label htmlFor="applicantName" className="block text-gray-700 text-sm mb-2 font-semibold">Full Name*</label>
                    <input type="text" id="applicantName" name="applicantName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Name" />
                  </div>
                  <div className="mb-2 w-1/2">
                    <label htmlFor="applicantEmail" className="block text-gray-700 text-sm mb-2 font-semibold">Email Address*</label>
                    <input type="email" id="applicantEmail" name="applicantEmail" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="your.email@example.com" />
                  </div>
              </div>

              <div className="mb-2">
                <label htmlFor="applicantPhone" className="block text-gray-700 text-sm mb-2 font-semibold">Phone Number*</label>
                <input type="tel" id="applicantPhone" name="applicantPhone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="e.g.:9954xxxxxx" />
              </div>

              <div className="mb-2">
                <label htmlFor="applicantResume" className="block text-gray-700 text-sm mb-2 font-semibold">UResume/CV*</label>
                <input type="file" id="applicantResume" name="applicantResume" accept=".pdf" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                <label className=" text-gray-360 text-sm" htmlFor="">Accepted formats:PDF,DOC,DOCX(MAX5mb)</label>
              </div>

                <div>
                  <label className="block text-gray-700 text-sm  mb-2 font-semibold">Cover Letter*</label>
                  <textarea id="covletter" className="border rounded w-full p-2 h-32"  placeholder="Tell us why you are interested in this position and what makes you a great fit"></textarea>
                 </div> 
                 <div>
                  <label>Relavant experince*</label>
                  <textarea id="covletter" className="border rounded w-full p-2 h-32"  placeholder="describe your relavant experince for this position"></textarea>
                 </div> 
              <div className="flex justify-end gap-3 mt-2">
                <button
                  type="button"
                  onClick={onCloseModal} 
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit" 
                  className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
         
        <section className=" bg-white">
          <div className=" container mx-auto ">
          <div className="py-8 px-4 md:px-8 lg:px-20">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent kulim bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                Life at EarmLabs
              </h2>
              <p className="mt-4 text-gray-600 text-base md:text-lg">
                Hear directly from our team members about their experiences working at TrendTech.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 py-8 md:py-10 lg:py-20">
              {[
            {
              name: "Sarah Chen",
              role: "Senior Product Manager",
              text: "Working at EarmLabs has been the highlight of my career. The collaborative culture and focus on innovation allows me to make a real impact while growing professionally. I appreciate how leadership truly values work-life balance.",
              img: "/life3.png" 
            },
            {
              name: "Marcus Johnson",
              role: "Lead Software Engineer",
              text: "The technical challenges we tackle at EarmLabs keep me engaged every day. I've grown tremendously as an engineer here, thanks to the mentorship opportunities and the company's investment in continuous learning.",
              img: "/life2.png"
            },
            {
              name: "Elena Rodriguez",
              role: "UX Designer",
              text: "EarmLabs truly values design thinking. I've been able to implement user-centered approaches that make a difference in our products. The supportive team and creative freedom make this an amazing place to work.",
              img: "/life1.png"
            }
            ].map((person, index) => (
            <div key={index} className="bg-purple-50 p-6 md:p-8 rounded-xl shadow hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-sm md:text-base text-gray-900">{person.name}</h4>
                  <p className="text-xs md:text-sm text-gray-500">{person.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 italic leading-6 md:leading-7">"{person.text}"</p>
            </div>
            ))}
             </div>
            </div>
          </div>
        </section>



     <section>
      <div className="bg-pink-50 px-4 md:px-8 lg:px-20 py-10 md:py-16 lg:py-20">
          
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent kulim bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              Have a Question
            </h2>
            <p className="text-gray-600 mt-2 text-base md:text-lg">
              Our recruitment team is here to help. Reach out with any questions about our open positions or the application process.
            </p>
          </div>

           
            <div className=" container  grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
             
              <div className="md:w-2/3 md:ml-auto">
                <h3 className="text-xl font-semibold mb-5">Contact Us</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="min-w-[2.5rem] min-h-[2.5rem] md:min-w-[3rem] md:min-h-[3rem] rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white text-lg md:text-xl mt-1 md:mt-3"><GrMail /></span>
                    <div>
                      <p className="font-medium text-base">Email</p>
                      <p className="text-sm md:text-base">careers@earmlabs.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="min-w-[2.5rem] min-h-[2.5rem] md:min-w-[3rem] md:min-h-[3rem] rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white text-lg md:text-xl mt-1 md:mt-3"><FaPhoneFlip /></span>
                    <div>
                      <p className="font-medium text-base">Phone</p>
                      <p className="text-sm md:text-base">+1 (555) 123-4567</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="min-w-[2.5rem] min-h-[2.5rem] md:min-w-[3rem] md:min-h-[3rem] rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white text-lg md:text-xl mt-1 md:mt-3"><FaLocationDot /></span>
                    <div>
                      <p className="text-sm md:text-base">Headquarters</p>
                      <p className="text-sm md:text-base">123 Innovation Drive, Tech Valley, CA 94103</p>
                    </div>
                  </li>
                </ul>

               
                <p className="mt-6 mb-2 text-gray-600 text-base">Follow us on social media:</p>
                <div className="flex gap-4">
                  {[<GrFacebookOption />, <FaLinkedinIn />, <FaInstagram />, <FaTwitter />].map((platform, index) => (
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

    {/* Form */}
    <div className="bg-white shadow-md rounded-lg p-6 border ">
      <h3 className="text-lg font-semibold mb-4">Send a Message</h3>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
          <input type="text" placeholder="Enter your name" className="w-full px-4 py-2 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm md:text-base" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm md:text-base" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
          <input type="text" placeholder="Enter subject" className="w-full px-4 py-2 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm md:text-base" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea placeholder="Enter your message" rows={4} className="w-full px-4 py-2 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm md:text-base" />
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
    <button className="px-6 py-2 border border-pink-500 text-pink-600 rounded-md hover:bg-pink-100 transition text-base md:text-lg">
      ← Return to Home
    </button>
  </div>
</div>

     </section>

      
     <Footer />
    </div>
  );
};

export default App;