import { FiAward, FiGlobe } from "react-icons/fi";
import { FaBookOpen, FaChartBar, FaRocket, FaBolt, FaCogs, FaUserAlt } from "react-icons/fa";
import { MdOutlineInsights, MdStar } from "react-icons/md";
import HeroContent from "./heroContent"; // Assuming correct path
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { TbDirections } from "react-icons/tb";
import { GrMapLocation } from "react-icons/gr";
import { GiCarKey } from "react-icons/gi";
import { BsFillKeyFill } from "react-icons/bs";

import { GoTasklist } from "react-icons/go";
import { RiRobot2Fill } from "react-icons/ri";
import { PiMedalFill } from "react-icons/pi";

const HeaderSection = () => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      autoPlay
      interval={6000}
      stopOnHover
      transitionTime={800}
      showIndicators
    >
      {/* Slide 1 */}
      <div>
        <HeroContent
          badge="Inspiring Progress"
          title="Boost Your Business with Cutting-Edge"
          colorTitle="AI Solution"
          subtitle="Leverage advanced AI capabilities to elevate your operations and customer experiences."
          image="/landing/headerSection/solution.png"
          floatBoxes={[
            {
              icon: PiMedalFill,
              title: "Live Service",
              subtitle: "",
              iconColor: "text-red-500 ", // <--- Different color
               bgcolor:"",
              iconsize:"32",
              position: "Top-right",
              motionProps: {
                animate: { y: [0, -10, 0], rotate: [0, 1, -1, 0] },
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "mirror" as const,
                },
              },
            },
            {
              icon: GrMapLocation,
              title: "Local Events",
              subtitle: "",
              iconColor: "text-blue-500", // <--- Different color
               bgcolor:"",
              iconsize:"32",
              position: "bottom-left",
              motionProps: {
                animate: { y: [0, 10, 0], rotate: [0, -0.5, 0.5, 0] },
                transition: {
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "mirror" as const,
                },
              },
            },
            {
              icon: TbDirections,
              title: "Development",
              subtitle: "",
              iconColor: "text-orange-400", // <--- Different color
               bgcolor:"",
              iconsize:"",
              position: "center-right",
              motionProps: {
                animate: { y: [0, -6, 0], rotate: [0, 1, -1, 0] },
                transition: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "mirror" as const,
                },
              },
            },
            {
              icon: BsFillKeyFill,
              title: "Better Opporunity",
              subtitle: "",
              iconColor: "text-purple-500", // <--- Different color
               bgcolor:"",
              iconsize:"",
              position: "TOP-left",
              motionProps: {
                animate: { y: [0, -6, 0], rotate: [0, 1, -1, 0] },
                transition: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "mirror" as const,
                },
              },
            },
          ]}
        />
      </div>

      {/* Slide 2 */}
      <div>
        <HeroContent
          badge="Empowering Innovation"
          title="Accelerate Your Digital Transformation with"
          colorTitle="AI Excellence"
          subtitle="Advanced AI-driven mobile and web solutions tailored to scale your business and deliver exceptional user experiences."
          image="/landing/headerSection/power.png"
          floatBoxes={[
            {
              icon: FaUserAlt,
              title: "Best Methods",
              subtitle: "But i must to explain it",
              iconColor: "text-yellow-500", // <--- Different color
               bgcolor:"",
              iconsize:"32",
              position: "top-right",
              motionProps: {
                animate: { y: [0, -8, 0], rotate: [0, 0.8, -0.8, 0] },
                transition: {
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "mirror" as const,
                },
              },
            },
            {
              icon: FaBookOpen,
              title: "English",
              subtitle: "172 Popular Courses",
              iconColor: "text-teal-500", // <--- Different color
               bgcolor:"",
              iconsize:"32",
              position: "bottom-left",
              motionProps: {
                animate: { y: [0, 7, 0], rotate: [0, -0.4, 0.4, 0] },
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "mirror" as const,
                },
              },
            },
            {
              icon: RiRobot2Fill,
              title: "",
              subtitle: "",
              iconColor: "text-white", // <--- Different color              
              iconsize:"",
              bgcolor:"bg-blue-500",
              position: "center-right",
              motionProps: {
                animate: { y: [0, -10, 0], rotate: [0, 1, 0, -1, 0] },
                transition: {
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "mirror" as const,
                },
              },
            },
          ]}
        />
      </div>

      {/* Slide 3 */}
      <div>
        <HeroContent
          badge="Igniting Creativity"
          title="Supercharge Your Digital Strategy with"
          colorTitle="AI Power"
          subtitle="Stay ahead of the curve by implementing smart, data-driven AI tools and technologies."
          image="/landing/headerSection/digital.png"
          floatBoxes={[
            {
              icon: FaUserAlt,
              title: "Product Developer",
              subtitle: "5 Years",
              iconColor: "text-pink-500", // <--- Different color
               bgcolor:"",
              iconsize:"32",
              position: "bottom-right",
              motionProps: {
                animate: { y: [0, -12, 0], rotate: [0, 1, 0, -1, 0] },
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "mirror" as const,
                },
              },
            },
            {
              icon: MdStar,
              title: "4.8",
              subtitle: "Satisfaction",
              iconColor: "text-lime-500", // <--- Different color
               bgcolor:"",
              iconsize:"",
              position: "top-right",
              motionProps: {
                animate: { y: [0, -6, 0], rotate: [0, 1, -1, 0] },
                transition: {
                  duration: 5.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "mirror" as const,
                },
              },
            },
            {
              icon: GoTasklist,
              title: "1k+",
              subtitle: "Projects",
              iconColor: "text-cyan-500", // <--- Different color
              iconsize:"",
               bgcolor:"",
              position: "top-left",
              motionProps: {
                animate: { y: [0, 10, 0], rotate: [0, -1, 1, 0] },
                transition: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "mirror" as const,
                },
              },
            },
          ]}
        />
      </div>
    </Carousel>
  );
};

export default HeaderSection;