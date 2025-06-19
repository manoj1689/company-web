"use client"; // if Next.js 13 app dir

import Image from "next/image";
import "../../styles/AgileSection.css";

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative py-12 px-4 sm:px-4 lg:px-8 bg-[#FFFFFF] "
    >
      <div className="absolute left-2 bottom-2 md:left-10 md:bottom-1/3 flex flex-col gap-2 md:gap-4">
        <img
          src="/landing/process/1.png"
          alt="Image 1"
          className="w-12 md:w-20 lg:w-48"
        />
      </div>
      <div className="absolute right-2 bottom-2 md:right-10 md:bottom-1/3 flex flex-col gap-2 md:gap-4">
        <img
          src="/landing/process/1.png"
          alt="Image 1"
          className="w-12 md:w-20 lg:w-28"
        />
      </div>

      <div className="absolute left-2 top-2 md:left-44 md:top-20 flex flex-col gap-2 md:gap-4">
        <img
          src="/landing/process/2.png"
          alt="Image 1"
          className="w-12 md:w-20 lg:w-48"
        />
      </div>
      <div className="absolute right-2 top-2 md:right-44 md:top-5 flex flex-col gap-2 md:gap-4">
        <img
          src="/landing/process/2.png"
          alt="Image 1"
          className="w-12 md:w-20 lg:w-32"
        />
      </div>
      <div className="container mx-auto text-center relative z-20 ">
        <div className="flex items-center justify-center">
          <p className="text-violet-500 text-xs md:text-sm font-medium bg-pink-100 rounded-full px-4 py-1">
            Process
          </p>
        </div>

        <h2 className="text-3xl  md:text-4xl lg:text-5xl font-bold my-4  leading-tight">
          <span className="bg-gradient-to-l from-purple-500 to-pink-500 bg-clip-text text-transparent ">
            How we work
          </span>
        </h2>
        <p className="text-gray-500 max-w-xl md:max-w-3xl lg:max-w-4xl  text-md md:text-lg lg:text-xl mx-auto ">
          Our strategic process ensures your project is agile, transparent, and
          aligned with your business goals.
        </p>
        {/* How We Work */}
        <div className="agile-section pb-0 snipcss-VtE4g tether-element-attached-top tether-element-attached-center tether-target-attached-top tether-target-attached-center">
          <div className="container-fluid fluid-2">
            <div className="row">
              <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20">
                <div
                  className="aos-init aos-animate w-full md:w-1/2 "
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="flex flex-col common-heading items-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Reshape Your Business With Our Agile Development Process
                      </span>
                    </h2>

                    <div className="relative w-full mx-auto">
                      <img
                        src="/landing/process/agile.png"
                        alt="Agile Process"
                        className="w-auto h-auto"
                      />
                    </div>

                    <p className=" sm:text-base md:text-lg lg:text-xl bg-blue-300 p-3 rounded-md mt-5 text-blue-950" 
                     >Become the next big thing by implementing our robust Agile
                      development process.</p>
                  </div>
                </div>

                {/* Process image - hidden on small, shown on md+ */}
                <div className="hidden md:block w-full md:w-2/3 p-0 ">
                  <img
                    src="/landing/process/process.png"
                    alt="Development Process"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div className="col-xl-6 agile-develop-mobile-list mt-5">
                <div className="row services-list">
                  <div className="col-lg-4 col-sm-6 mb-lg-5 mb-md-4 mb-3">
                    <a href="#" className="item d-flex flex-column">
                      <h3 className="py-0">Customer Satisfaction</h3>
                      <p>
                        We follow a customer-centric approach, ensuring that the
                        final product meets our customer’s expectations.
                      </p>
                    </a>
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-lg-5 mb-md-4 mb-3">
                    <a href="#" className="item d-flex flex-column">
                      <h3 className="py-0">Team Collaboration</h3>
                      <p>
                        We promote teamwork and collaboration, maintaining
                        transparency with customers by keeping all communication
                        channels open.
                      </p>
                    </a>
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-lg-5 mb-md-4 mb-3">
                    <a href="#" className="item d-flex flex-column">
                      <h3 className="py-0">Faster Time-to-Market</h3>
                      <p>
                        By breaking down the development process into smaller
                        iterations, customers can respond quickly to market
                        demands and gain a competitive edge.
                      </p>
                    </a>
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-lg-5 mb-md-4 mb-3">
                    <a href="#" className="item d-flex flex-column">
                      <h3 className="py-0">Cost Efficiency</h3>
                      <p>
                        We focus on delivering value early and frequently,
                        allowing businesses to prioritize features based on
                        their value and return on investment.
                      </p>
                    </a>
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-lg-5 mb-md-4 mb-3">
                    <a
                      href="/service/72/managed-cloud-services"
                      className="item d-flex flex-column"
                    >
                      <h3 className="py-0">Enhanced Flexibility</h3>
                      <p>
                        Our solutions enable businesses to adapt to changing
                        requirements, ensuring that the final product aligns
                        with the evolving needs of the business.
                      </p>
                    </a>
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-lg-5 mb-md-4 mb-3">
                    <a href="#" className="item d-flex flex-column">
                      <h3 className="py-0">High Quality</h3>
                      <p>
                        We emphasize continuous testing and feedback, ensuring
                        that quality is built into the product from the early
                        stages.
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
