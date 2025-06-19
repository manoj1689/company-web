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
import HeaderSection from "./header";
import CultureSection from "./culture";
import BenefitsSection from "./benifits";
import OpeningsSection from "./openings";
import LifeSection from "./life";
import QuestionSection from "./question";
import Header1 from "@/components/header1";



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


  

  return (
    <div className="">
     
      <Header1/>
      <HeaderSection/>
      <CultureSection/>
      <BenefitsSection/>
      <OpeningsSection/>
      <LifeSection/>
      <QuestionSection/>
     <Footer />
    </div>
  );
};

export default App;