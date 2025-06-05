"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const ServiceSection = () => {
  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center">
          <p className="text-violet-500 text-md font-medium bg-pink-100 rounded-full px-4 mb-2">What We Deliver</p>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold my-4">
          <span className="bg-gradient-to-l from-purple-500 to-pink-500 bg-clip-text text-transparent ">
            Services We Offer
          </span>
        </h2>
        <p className="text-gray-500 max-w-4xl text-md sm:text-lg md:text-xl lg:text-xl mx-auto mb-12">
          Our specialized services blend innovation with expertise, helping you to thrive in the digital economy.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Web Development */}
          <Card className="bg-white shadow-lg shadow-pink-300 rounded-xl p-6 hover:shadow-xl hover:shadow-pink-400 hover:-translate-y-2 transition-all duration-300 ease-in-out">
            <CardContent className="p-0 text-left">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Web Development
              </h3>
              <p className="text-sm sm:text-md md:text-lg text-gray-500 mb-4">
                Advanced analytics and AI solutions for data-driven decision making.
              </p>
              <Link
                href="/web-development"
                className="relative inline-block text-purple-600 text-sm transition-colors duration-300
                  after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] 
                  after:w-full after:bg-purple-600 after:scale-x-0 after:origin-left 
                  after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                Learn More →
              </Link>
            </CardContent>
          </Card>

          {/* Mobile App Development */}
          <Card className="bg-white shadow-lg shadow-pink-300 rounded-xl p-6 hover:shadow-xl hover:shadow-pink-400 hover:-translate-y-2 transition-all duration-300 ease-in-out">
            <CardContent className="p-0 text-left">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Mobile App Development
              </h3>
              <p className="text-sm sm:text-md md:text-lg text-gray-500 mb-4">
                Scalable cloud infrastructure and services for modern enterprises.
              </p>
              <Link
                href="/mobile-dev"
                className="relative inline-block text-purple-600 text-sm transition-colors duration-300
                  after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] 
                  after:w-full after:bg-purple-600 after:scale-x-0 after:origin-left 
                  after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                Learn More →
              </Link>
            </CardContent>
          </Card>

          {/* Digital Marketing */}
          <Card className="bg-white shadow-lg shadow-pink-300 rounded-xl p-6 hover:shadow-xl hover:shadow-pink-400 hover:-translate-y-2 transition-all duration-300 ease-in-out">
            <CardContent className="p-0 text-left">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Visual Digital Marketing
              </h3>
              <p className="text-sm sm:text-md md:text-lg text-gray-500 mb-4">
                Enhanced customer engagement and experience platforms.
              </p>
              <Link
                href="/digital-marketing"
                className="relative inline-block text-purple-600 text-sm transition-colors duration-300
                  after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] 
                  after:w-full after:bg-purple-600 after:scale-x-0 after:origin-left 
                  after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                Learn More →
              </Link>
            </CardContent>
          </Card>

          {/* Artificial Intelligence */}
          <Card className="bg-white shadow-lg shadow-pink-300 rounded-xl p-6 hover:shadow-xl hover:shadow-pink-400 hover:-translate-y-2 transition-all duration-300 ease-in-out">
            <CardContent className="p-0 text-left">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Artificial Intelligence
              </h3>
              <p className="text-sm sm:text-md md:text-lg text-gray-500 mb-4">
                Advanced security solutions for digital assets protection.
              </p>
              <Link
                href="/artificial-intelligence"
                className="relative inline-block text-purple-600 text-sm transition-colors duration-300
                  after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] 
                  after:w-full after:bg-purple-600 after:scale-x-0 after:origin-left 
                  after:transition-transform after:duration-300 hover:after:scale-x-100"
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
