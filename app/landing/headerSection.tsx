import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Star } from "lucide-react";

const avatars = ["user1.png", "user2.png", "user3.png", "total.png"];

const AvatarStack = () => (
  <div className="flex">
    {avatars.map((img, i) => (
      <img
        key={i}
        src={`/${img}`}
        alt={`user-${i}`}
        className={`w-14 h-14 rounded-full border-2 border-white object-cover ${
          i === 0 ? "ml-0" : i === 1 ? "-ml-4" : i === 2 ? "-ml-6" : "-ml-8"
        }`}
      />
    ))}
  </div>
);

const Rating = () => (
  <div className="text-sm text-gray-600">
    <div className="font-semibold">500+ Happy Clients</div>
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className="w-3 sm:w-4 h-3 sm:h-4 fill-yellow-400 text-yellow-400" />
      ))}
      <span className="ml-1 text-xs sm:text-sm">4.9/5</span>
    </div>
  </div>
);

const HeroContent = ({ badge, title, subtitle, image, floatBoxes }) => (
  <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <div className="space-y-4 sm:space-y-6">
          <p className="text-orange-500 text-xs sm:text-sm text-start bg-[#FF5D5D1A] w-fit px-4 py-1 rounded-xl font-medium">
            {badge}
          </p>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-start font-bold leading-tight">
            {title} <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">AI Solutions</span>
          </h1>
          <p className="text-gray-600  text-md sm:text-lg md:text-xl lg:text-xl text-left mx-auto mb-12 ">{subtitle}</p>
          <div className="flex items-center space-x-4 sm:space-x-6">
            <AvatarStack />
            <Rating />
          </div>
        </div>
        <div className="relative">
          {floatBoxes && (
            <div className="absolute inset-0 z-0">
              <div className="absolute w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-30 top-0 right-0" />
              <div className="absolute w-36 sm:w-48 h-36 sm:h-48 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-30 bottom-0 right-12" />
            </div>
          )}
          <div className={`relative z-10 ${!floatBoxes ? 'w-full' : 'w-5/6'}`}>
            <Image src={image} alt="Hero Image" width={500} height={600} className="rounded-2xl w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

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
      <div>
        <HeroContent
          badge="Inspiring Progress"
          title="Boost Your Business with Cutting-Edge"
          subtitle="Leverage advanced AI capabilities to elevate your operations and customer experiences."
          image="/landing/front.png" floatBoxes={undefined}        />
      </div>

      <div>
        <HeroContent
          badge="Empowering Innovation"
          title="Accelerate Your Digital Transformation with"
          subtitle="Advanced AI-driven mobile and web solutions tailored to scale your business and deliver exceptional user experiences."
          image="/girl.png"
          floatBoxes
        />
      </div>

      <div className="bg-[#F7F5F6]">
        <HeroContent
          badge="Igniting Creativity"
          title="Supercharge Your Digital Strategy with"
          subtitle="Stay ahead of the curve by implementing smart, data-driven AI tools and technologies."
          image="/landing/front2.png"
          floatBoxes
        />
      </div>

      <div>
        <HeroContent
          badge="Catalyzing Change"
          title="Supercharge Your Digital Strategy with"
          subtitle="Stay ahead of the curve by implementing smart, data-driven AI tools and technologies."
          image="/landing/front3.png"
          floatBoxes
        />
      </div>
    </Carousel>
  );
};

export default HeaderSection;