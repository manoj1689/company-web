import React, { useRef, useState, useEffect } from "react";
import { RiLinkedinLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";

function OurTeam() {
  const teamRef = useRef<HTMLElement>(null);
  const [visibleTeamMembers, setVisibleTeamMembers] = useState<boolean[]>(
    new Array(4).fill(false)
  );

  const teamMembers = [
    {
      name: "David Miller",
      role: "Chief Executive Officer",
      img: "/career/team1.jpg",
      linkedin: "https://www.linkedin.com/",
      twitter: "https://twitter.com/", 
    },
    {
      name: "Emily Zhang",
      role: "Chief Technical Officer",
      img: "/career/team.jpg",
      linkedin: "https://www.linkedin.com/",
      twitter: "https://twitter.com/", 
    },
    {
      name: "Alexa John",
      role: "Chief Operating Officer",
      img: "/career/lifeat.jpg",
      linkedin: "https://www.linkedin.com/", 
      twitter: "https://twitter.com/", 
    },
    {
      name: "Jonathan Craig",
      role: "Chief Strategy Officer",
      img: "/career/team2.jpg",
      linkedin: "https://www.linkedin.com/", 
      twitter: "https://twitter.com/", 
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          teamMembers.forEach((_, index) => {
            setTimeout(() => {
              setVisibleTeamMembers((prev) => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
            }, 300 + index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (teamRef.current) {
      observer.observe(teamRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={teamRef}
      id="ourteam"
      className="relative py-16 px-4 sm:px-4 lg:px-16 bg-[#EDFFF9] overflow-hidden"
    >
      {/* Decorative images */}
      <div className="absolute left-2 bottom-2 md:-left-12 md:-bottom-10 flex flex-col gap-2 md:gap-4">
        <img
          src="/landing/team/trop.png"
          alt="Decorative trop"
          className="w-12 md:w-20 lg:w-72"
        />
      </div>
      <div className="absolute right-2 top-2 md:right-0 md:top-2 flex flex-col gap-2 md:gap-4">
        <img
          src="/landing/team/elip.png"
          alt="Decorative elip"
          className="w-12 md:w-20 lg:w-40"
        />
      </div>
      <div className="absolute right-2 top-2 md:right-0 md:top-32 flex flex-col gap-2 md:gap-4">
        <img
          src="/landing/team/cir.png"
          alt="Decorative cir"
          className="w-12 md:w-20 lg:w-16"
        />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="flex items-center justify-center">
          <p className="text-violet-500 text-xs md:text-sm font-medium bg-pink-100 rounded-full px-4 py-1">
            Testimonial
          </p>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold my-4 leading-tight">
          <span className="bg-gradient-to-l from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Our Team
          </span>
        </h2>

        <p className="text-gray-500 max-w-xl md:max-w-3xl lg:max-w-4xl text-md md:text-lg lg:text-xl mx-auto mb-12">
          Meet the visionaries shaping the future of AI technology
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-700 ease-out
                ${visibleTeamMembers[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                group`}
              style={{
                transitionDelay: `${300 + index * 100}ms`,
              }}
            >
              <img
                src={member.img} 
                alt={member.name}
                className="w-64 h-64 mx-auto mb-3 rounded-full object-cover shadow-lg transform transition-transform duration-300 ease-out group-hover:scale-105"
              />
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>

              <div className="mt-4 flex justify-center space-x-4">
                <a
                  href={member.linkedin}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`${member.name} LinkedIn`}
                  className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center hover:bg-black hover:text-white hover:scale-110 transition-all duration-300"
                >
                  <RiLinkedinLine className="w-4 h-4" />
                </a>
                <a
                  href={member.twitter} 
                  target="_blank"
                  rel="noopener noreferrer" 
                  aria-label={`${member.name} X`}
                  className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center hover:bg-black hover:text-white hover:scale-110 transition-all duration-300"
                >
                  <CiTwitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;