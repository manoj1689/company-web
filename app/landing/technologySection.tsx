"use client";
import React from "react";
import "../../styles/TechSection.css"

const TechnologySection = () => {
    return (
        <section
        id="techno"
         className="py-16 px-4 sm:px-6 lg:px-16 bg-[#F1FFF2] relative">
            <div className="absolute right-0 sm:right-0 bottom-0 sm:bottom-0 lg:top-1/3 hidden md:flex flex-col gap-4 opacity-100 pointer-events-none">
        <img
          src="/Ellip2.png"
          alt="Decorative shape"
          className="w-20 sm:w-24 md:w-30 lg:w-36 object-contain"
        />
      </div>
      <div className="absolute left-56 top-10 flex max-lg:hidden flex-col gap-4 opacity-50">
        <img src="/watermark/Vector.png" alt="Image1" className="w-32" />
      </div>
      <div className="absolute right-10  bottom-10 flex max-lg:hidden flex-col gap-4 opacity-50">
        <img src="/watermark/Vector-2.png" alt="Image2" className="w-32" />
      </div>
      <div className="absolute -right-0  top-0 flex max-lg:hidden flex-col gap-4 opacity-50">
        <img src="/watermark/Vector-3.png" alt="Image3" className="w-32" />
      </div>
        

            <div className="containers mx-auto text-center">
                <div className="flex justify-center items-center">
                    <p className="text-violet-500 text-md font-medium bg-pink-100 rounded-full px-4 mb-2">
                        Our Expertise
                    </p>
                </div>


                <h2 className="text-4xl sm:text-5xl font-bold my-4">
                    <span className="bg-gradient-to-l from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Our Technologies
                    </span>
                </h2>

                <p className="text-gray-500 max-w-3xl text-lg mx-auto mb-12">
                    Leveraging powerful frameworks and languages to ensure scalable,
                    secure, and efficient digital solutions.
                </p>
            </div>

                <div className="max-w-7xl mx-auto">
                    <div className="tech-grid">
                        <div className="mains">
    <div className="containers honeycomb py-12">
      <div className="cell"><div className="content cell-1"></div></div>
      <div className="cell"><div className="content cell-2"></div></div>
      <div className="cell"><div className="content cell-3"></div></div>
      <div className="cell"><div className="content cell-4"></div></div>
      <div className="cell"><div className="content cell-5"></div></div>
      <div className="cell"><div className="content cell-6"></div></div>
      <div className="cell"><div className="content cell-7"></div></div>
      <div className="cell"><div className="content cell-8"></div></div>
      <div className="cell"><div className="content cell-9"></div></div>
      <div className="cell"><div className="content cell-10"></div></div>
      <div className="cell"><div className="content cell-11"></div></div>
      <div className="cell"><div className="content cell-12"></div></div>
      <div className="cell"><div className="content cell-13"></div></div>
      <div className="cell"><div className="content cell-14"></div></div>
      <div className="cell"><div className="content cell-15"></div></div>
      <div className="cell"><div className="content cell-16"></div></div>
      <div className="cell"><div className="content cell-17"></div></div>
    </div>
  </div>
                    </div>
                </div>


        </section>
    );
};

export default TechnologySection;