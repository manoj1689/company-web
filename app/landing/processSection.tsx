"use client"; // if Next.js 13 app dir

import Image from "next/image";
import "../../styles/AgileSection.css"

export default function ProcessSection() {
  return (
    <section id="process"  className="py-16 px-4 sm:px-6 lg:px-8 " >
        <div className="container mx-auto text-center">
                <div className="flex items-center justify-center">
          <p className="text-violet-500 text-md font-medium bg-pink-100 rounded-full px-4 mb-2">Process</p>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold my-4">
          <span className="bg-gradient-to-l from-purple-500 to-pink-500 bg-clip-text text-transparent ">
            How we work
          </span>
        </h2>
        <p className="text-gray-500 max-w-4xl text-md sm:text-lg md:text-xl lg:text-xl mx-auto mb-12">
          Our strategic process ensures your project is agile, transparent, and aligned with your business goals.
        </p>
         
        </div>
        {/* How We Work */}
        <div className="agile-section pb-0 snipcss-VtE4g tether-element-attached-top tether-element-attached-center tether-target-attached-top tether-target-attached-center">
          <div className="container-fluid fluid-2">
            <div className="row">
              <div className="col-xl-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                <div className="flex flex-col common-heading items-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Reshape Your Business With Our Agile Development Process
                    </span>
                  </h2>

                  <Image
                    src="https://toxsl.com/themes/new/img/agile-process/agile-process2.png"
                    alt="Agile Process"
                    width={700}
                    height={500}
                    className="text-center"
                    style={{ width: '70%' }}
                  />
                  <p className="sub-heading mt-5 mx-auto">
                    Become the next big thing by implementing our robust Agile development process.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 agile-outer-wrapper offset-xl-1 aos-init aos-animate" data-aos="fade-left" data-aos-delay="250">
                <div className="our-process-div">
                  <h4>
                    Our <br /> Process
                  </h4>
                </div>
                <div className="agile-list">
                  <div className="agile-child child-1">
                    <div className="inner-agilee">
                      <div className="counter-div">01</div>
                      <div className="agile-content-wrapper">
                        <h5>Customer Satisfaction</h5>
                        <p>
                          We follow a customer-centric approach, ensuring that the final product meets our customer’s expectations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="agile-child child-2">
                    <div className="inner-agilee">
                      <div className="counter-div">02</div>
                      <div className="agile-content-wrapper">
                        <h5>Team Collaboration</h5>
                        <p>
                          We promote teamwork and collaboration, maintaining transparency with customers by keeping all communication channels open.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="agile-child child-3">
                    <div className="inner-agilee">
                      <div className="counter-div">03</div>
                      <div className="agile-content-wrapper">
                        <h5>Faster Time-to-Market</h5>
                        <p>
                          By breaking down the development process into smaller iterations, customers can respond quickly to market demands and gain a competitive edge.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="agile-child child-4">
                    <div className="inner-agilee">
                      <div className="counter-div">04</div>
                      <div className="agile-content-wrapper">
                        <h5>Cost Efficiency</h5>
                        <p>
                          We focus on delivering value early and frequently, allowing businesses to prioritize features based on their value and return on investment.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="agile-child child-5">
                    <div className="inner-agilee">
                      <div className="counter-div">05</div>
                      <div className="agile-content-wrapper">
                        <h5>Enhanced Flexibility</h5>
                        <p>
                          Our solutions enable businesses to adapt to changing requirements, ensuring that the final product aligns with the evolving needs of the business.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="agile-child child-6">
                    <div className="inner-agilee">
                      <div className="counter-div">06</div>
                      <div className="agile-content-wrapper">
                        <h5>High Quality</h5>
                        <p>
                          We emphasize continuous testing and feedback, ensuring that quality is built into the product from the early stages.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 agile-develop-mobile-list mt-5">
                <div className="row services-list">
                  <div className="col-lg-4 col-sm-6 mb-lg-5 mb-md-4 mb-3">
                    <a href="#" className="item d-flex flex-column">
                      <h3 className="py-0">Customer Satisfaction</h3>
                      <p>
                        We follow a customer-centric approach, ensuring that the final product meets our customer’s expectations.
                      </p>
                    </a>
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-lg-5 mb-md-4 mb-3">
                    <a href="#" className="item d-flex flex-column">
                      <h3 className="py-0">Team Collaboration</h3>
                      <p>
                        We promote teamwork and collaboration, maintaining transparency with customers by keeping all communication channels open.
                      </p>
                    </a>
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-lg-5 mb-md-4 mb-3">
                    <a href="#" className="item d-flex flex-column">
                      <h3 className="py-0">Faster Time-to-Market</h3>
                      <p>
                        By breaking down the development process into smaller iterations, customers can respond quickly to market demands and gain a competitive edge.
                      </p>
                    </a>
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-lg-5 mb-md-4 mb-3">
                    <a href="#" className="item d-flex flex-column">
                      <h3 className="py-0">Cost Efficiency</h3>
                      <p>
                        We focus on delivering value early and frequently, allowing businesses to prioritize features based on their value and return on investment.
                      </p>
                    </a>
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-lg-5 mb-md-4 mb-3">
                    <a href="/service/72/managed-cloud-services" className="item d-flex flex-column">
                      <h3 className="py-0">Enhanced Flexibility</h3>
                      <p>
                        Our solutions enable businesses to adapt to changing requirements, ensuring that the final product aligns with the evolving needs of the business.
                      </p>
                    </a>
                  </div>
                  <div className="col-lg-4 col-sm-6 mb-lg-5 mb-md-4 mb-3">
                    <a href="#" className="item d-flex flex-column">
                      <h3 className="py-0">High Quality</h3>
                      <p>
                        We emphasize continuous testing and feedback, ensuring that quality is built into the product from the early stages.
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
