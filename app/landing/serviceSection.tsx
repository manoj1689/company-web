"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { RiCloudLine } from "react-icons/ri";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { GoShieldCheck } from "react-icons/go";
import { useRouter } from "next/navigation";
import { BsGlobe2 } from "react-icons/bs";

const ServiceSection = () => {
  const router = useRouter();
  const handlenavigation = (path: string) => {
    router.push(path);
  };
  return (
    <section
      id="services"
      className="relative py-16 px-4 sm:px-4 lg:px-16  text-center  bg-[#FFF4F8] overflow-hidden"
    >
      <div className="absolute left-0 sm:left-0 top-10 sm:top-20 lg:-top-10 hidden md:flex flex-col gap-4 opacity-100 pointer-events-none">
        <img
          src="/Ellip1.png"
          alt="Decorative shape"
          className="w-20 sm:w-24 md:w-30 lg:w-40 object-contain"
        />
      </div>
      <div className="absolute left-56 top-10 flex max-lg:hidden flex-col gap-4 opacity-50">
        <img src="/watermark/Vector.png" alt="Image1" className="w-32" />
      </div>
      <div className="absolute right-20  -top-10 flex max-lg:hidden flex-col gap-4 opacity-50">
        <img src="/watermark/Vector-2.png" alt="Image3" className="w-32" />
      </div>
      <div className="absolute -right-0  top-32 flex max-lg:hidden flex-col gap-4 opacity-50">
        <img src="/watermark/Vector-3.png" alt="Image2" className="w-32" />
      </div>
      <div className="absolute right-0 sm:right-0 bottom-0 sm:bottom-0 lg:bottom-0 hidden md:flex flex-col gap-4 opacity-100 pointer-events-none">
        <img
          src="/Ellip2.png"
          alt="Decorative shape"
          className="w-20 sm:w-24 md:w-30 lg:w-32 object-contain"
        />
      </div>

      <div className="absolute left-16 bottom-10 border flex max-lg:hidden flex-col gap-4 opacity-50">
        <img src="/watermark/Vector-2.png" alt="Image 1" className="w-32" />
      </div>

      <div className="relative z-10 container mx-auto">
        <div className="flex items-center justify-center ">
          <p className="text-violet-500 text-xs md:text-sm font-medium bg-pink-100 rounded-full px-4 py-1">
            What We Deliver
          </p>
        </div>

        <h2 className="text-3xl  md:text-4xl lg:text-5xl font-bold my-4  leading-tight">
          <span className="bg-gradient-to-l from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Services We Offer
          </span>
        </h2>

        <p className="text-gray-500 max-w-xl md:max-w-3xl lg:max-w-4xl  text-md md:text-lg lg:text-xl mx-auto mb-12">
          Our specialized services blend innovation with expertise, helping you
          to thrive in the digital economy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap- lg:gap-6 container mx-auto">
          <Card className="bg-white shadow-lg shadow-pink-300 rounded-3xl py-6 px-6 sm:px-8 hover:shadow-xl hover:shadow-pink-400 hover:-translate-y-2 transition-all duration-300 ease-in-out text-left">
            <CardContent
              onClick={() => handlenavigation("/landing/web-development")}
              className="p-0 cursor-pointer"
            >
              <div className="text-3xl sm:text-4xl mt-3 mb-6 text-pink-500 bg-gray-100 rounded-lg w-fit p-3">
                <BsGlobe2 />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-2xl w-7/12 font-semibold my-3 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent pr-4">
                Web Development
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">
                Advanced analytics and AI solutions for data-driven decision
                making.
              </p>
              <Link
                onClick={() => handlenavigation("/landing/web-development")}
                href=""
                className="relative inline-block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent text-base font-semibold transition-colors duration-300
                  after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px]
                  after:w-full after:bg-purple-600 after:scale-x-0 after:origin-left
                  after:transition-transform after:duration-300 hover:after:scale-x-100 mt-2"
              >
                Learn More →
              </Link>
            </CardContent>
          </Card>

          {/* Mobile App Development Card */}
          <Card className="bg-white shadow-lg shadow-pink-300 rounded-3xl py-6 px-6 sm:px-8 hover:shadow-xl hover:shadow-pink-400 hover:-translate-y-2 transition-all duration-300 ease-in-out text-left">
            <CardContent
              onClick={() => handlenavigation("/landing/mobile-app")}
              className="p-0 cursor-pointer"
            >
              <div className="text-3xl sm:text-4xl mt-3 mb-6 text-pink-500 bg-gray-100 rounded-lg w-fit p-3">
                <RiCloudLine />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-2xl font-semibold w-5/6 my-3 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent pr-4">
                Mobile App Development
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">
                Scalable cloud infrastructure and services for modern
                enterprises.
              </p>
              <Link
                href="/landing/mobile-app"
                className="relative inline-block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent text-base font-semibold transition-colors duration-300
                  after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px]
                  after:w-full after:bg-purple-600 after:scale-x-0 after:origin-left
                  after:transition-transform after:duration-300 hover:after:scale-x-100 mt-2"
              >
                Learn More →
              </Link>
            </CardContent>
          </Card>

          {/* Digital Marketing Card */}
          <Card className="bg-white shadow-lg shadow-pink-300 rounded-3xl py-6 px-6 sm:px-8 hover:shadow-xl hover:shadow-pink-400 hover:-translate-y-2 transition-all duration-300 ease-in-out text-left">
            <CardContent
              onClick={() => handlenavigation("/landing/digital-marketing")}
              className="p-0 cursor-pointer"
            >
              <div className="text-3xl sm:text-4xl mt-3 mb-6 text-pink-500 bg-gray-100 rounded-lg w-fit p-3">
                <MdOutlineHeadsetMic />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-2xl font-semibold w-5/6 my-3 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent pr-4">
                Visual Digital Marketing
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">
                Enhanced customer engagement and experience platforms.
              </p>
              <Link
                href="/landing/digital-marketing"
                className="relative inline-block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent text-base font-semibold transition-colors duration-300
                  after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px]
                  after:w-full after:bg-purple-600 after:scale-x-0 after:origin-left
                  after:transition-transform after:duration-300 hover:after:scale-x-100 mt-2"
              >
                Learn More →
              </Link>
            </CardContent>
          </Card>

          {/* Artificial Intelligence Card */}
          <Card className="bg-white shadow-lg shadow-pink-300 rounded-3xl py-6 px-6 sm:px-8 hover:shadow-xl hover:shadow-pink-400 hover:-translate-y-2 transition-all duration-300 ease-in-out text-left">
            <CardContent
              onClick={() => handlenavigation("/landing/ai-intelligence")}
              className="p-0 cursor-pointer"
            >
              <div className="text-3xl sm:text-4xl mt-3 mb-6 text-pink-500 bg-gray-100 rounded-lg w-fit p-3">
                <GoShieldCheck />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-2xl font-semibold w-5/6 my-3 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent pr-4">
                Artificial Intelligence
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">
                Advanced security solutions for digital assets protection.
              </p>
              <Link
                href="/landing/ai-intelligence"
                className="relative inline-block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent text-base font-semibold transition-colors duration-300
                  after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px]
                  after:w-full after:bg-purple-600 after:scale-x-0 after:origin-left
                  after:transition-transform after:duration-300 hover:after:scale-x-100 mt-2"
              >
                Learn More →
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;




