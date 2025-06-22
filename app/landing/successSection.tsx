import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SuccessSection = () => {
  const successCards = [
    {
      title: "Robo Guru",
      description:
        "Robo Guru is a go-to staffing platform connecting workers and employers. Post or find jobs across multiple categories, streamlining recruitment for all parties. Download the app now!",
      image: "/landing/success/roboguru.png",
      downloads: "2M+",
      visitors: "2.8M+",
    },
    {
      title: "Behrupiya",
      description:
        "Behrupiya is your ultimate photo editing app, connecting creativity and users. Discover or create stunning edits across various styles, making photo enhancement effortless for everyone. Download the app now!",
      image: "/landing/success/behrupiya.png",
      downloads: "2M+",
      visitors: "2.8M+",
    },
    {
      title: "LeelaLand",
      description:
        "LeelaLand is your ultimate online chatting app, connecting people and conversations. Discover or start exciting chats across various topics, making social connections effortless for everyone. Download the app now!",
      image: "/landing/success/leelaLand.png",
      downloads: "856k+",
      visitors: "0.8M+",
    },
    {
      title: "Ohgrt",
      description:
        "OhGrt is your one-stop hub for all things audio, video, and voice! Effortlessly convert text to speech, extract audio, and even clone voices with ease. Connect your projects and bring your ideas to life — download the app now!",
      image: "/landing/success/ohgrt.png",
      downloads: "2M+",
      visitors: "2.8M+",
    },
  ];

  return (
    <section className="relative px-4 sm:px-4 lg:px-16 bg-gradient-to-r from-[#FFFDF4] to-[#FFEEBA] overflow-hidden"> 
      <div className="absolute -top-16 right-20 w-40 h-40 bg-[#eeeb2c] rounded-full"></div>
      {/* <div className="absolute bottom-0 left-1/3 w-32 h-32 bg-[#89b2d3] rounded-full"></div> */}

      <div className="container mx-auto text-center pt-16 relative">
        <div className="flex items-center justify-center">
             <p className="text-violet-500 text-xs md:text-sm font-medium bg-pink-100 rounded-full px-4 py-1">
          Portfolio
        </p>
        </div>
       
        <h2 className="text-3xl  md:text-4xl lg:text-5xl font-bold my-4  leading-tight">
          <span className="bg-gradient-to-l from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Success Stories
          </span>
        </h2>
        <p className="text-gray-500 max-w-xl md:max-w-3xl lg:max-w-4xl  text-md md:text-lg lg:text-xl mx-auto mb-12">
          Explore how we've transformed ideas into powerful digital realities.
        </p>

        <div className="flex w-full">
          <div className="w-full lg:w-3/4">
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              autoPlay
              interval={3000}
              stopOnHover
              transitionTime={800}
              showIndicators
            >
              {successCards.map((card, index) => (
                <div key={index}>
                  <div className="container mx-auto  py-12 px-4">
                    <div className="flex flex-col md:flex-row md:space-x-8 items-center justify-center">
                      <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
                        <h3 className="text-4xl font-bold mb-4 text-start text-blue-950">
                          {card.title}
                        </h3>
                        <p className="text-gray-600 mb-6 text-start">
                          {card.description}
                        </p>

                        <div className="flex justify-center md:justify-start w-5/6 space-x-2">
                          {["google-play", "app-store", "visit-website"].map((icon) => (
                            <a key={icon}  href="#" className="inline-flex items-center bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 ">
                              <img  src={`/landing/success/${icon}.png`} alt={icon} className="" />
                            </a>
                          ))}
                        </div>

                        <div className="grid grid-cols-2 w-full md:w-5/6 mt-16 text-start">
                          <div>
                            <div className="text-2xl font-bold text-black">{card.downloads}</div>
                            <div className="text-sm font-semibold text-gray-600">Downloads</div>
                          </div>
                          <div className="border-l-4 border-gray-400 px-4">
                            <div className="text-2xl font-bold text-black">{card.visitors}</div>
                            <div className="text-sm font-semibold text-gray-600">No of Visitors</div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full md:w-1/2 flex justify-center">
                        <img src={card.image} alt={card.title} className="w-full max-w-md" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>

          <div className="hidden lg:flex lg:w-1/4 items-end">
            <img
              src="/landing/success/curl-girl.png"
              alt="Girl pointing"
              className="w-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
