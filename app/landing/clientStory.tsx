import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { VscQuote } from "react-icons/vsc";

export default function ClientStory() {
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);
  const testimonialsRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselInnerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [parentContainerWidth, setParentContainerWidth] = useState(0); // New state for parent width

  const testimonials = [
    {
      name: "Michael Anderson",
      role: "CEO",
      company: "TechVision Inc",
      content:
        "MobiRizer's AI solutions have transformed our business operations. The intelligent automation has increased our efficiency by 300% and reduced costs, giving us a significant competitive edge.",
      img: "/landing/client/person1.jpg",
      borderColor: "border-pink-300",
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      company: "Innovate Tech",
      content:
        "The AI-powered mobile app developed by MobiRizer has revolutionized how we interact with our customers. The predictive analytics are incredibly accurate and insightful.",
      img: "/landing/client/person2.jpg",
      borderColor: "border-purple-300",
    },
    {
      name: "Raj Patel",
      role: "Founder",
      company: "DataSmart Solutions",
      content:
        "Working with MobiRizer has been exceptional. Their expertise in AI and machine learning helped us build a cutting-edge analytics platform that truly delivers.",
      img: "/landing/client/person3.jpg",
      borderColor: "border-pink-300",
    },
    {
      name: "Emma Johnson",
      role: "Director of Innovation",
      company: "FutureTech Labs",
      content:
        "Implementing MobiRizer's AI solutions has given us a competitive edge in the market. Our customer satisfaction scores have increased by 45% since launch.",
      img: "/landing/client/person2.jpg",
      borderColor: "border-purple-300",
    },
    {
      name: "David Kim",
      role: "Head of Product",
      company: "NextGen Solutions",
      content:
        "The team at MobiRizer delivered beyond our expectations. Their AI platform has streamlined our operations and provided valuable insights for growth.",
      img: "/landing/client/person1.jpg",
      borderColor: "border-pink-300",
    },
    {
      name: "Aisha Khan",
      role: "Marketing Manager",
      company: "Global Brands",
      content:
        "MobiRizer's analytics dashboard is a game-changer. It provides real-time insights that are actionable and incredibly easy to understand.",
      img: "/landing/client/person2.jpg",
      borderColor: "border-purple-300",
    },
    {
      name: "Carlos Sanchez",
      role: "Operations Director",
      company: "Logistics Pro",
      content:
        "Their intelligent automation has significantly reduced our manual workload, allowing our team to focus on more strategic and valuable tasks.",
      img: "/landing/client/person3.jpg",
      borderColor: "border-pink-300",
    },
    {
      name: "Emily White",
      role: "CFO",
      company: "FinTech Innovations",
      content:
        "The cost savings and increased efficiency from MobiRizer's AI solutions have directly impacted our bottom line positively and sustainably.",
      img: "/landing/client/person1.jpg",
      borderColor: "border-purple-300",
    },
  ];

  const duplicatedTestimonials = [
    ...testimonials.slice(-testimonials.length),
    ...testimonials,
    ...testimonials.slice(0, testimonials.length),
  ];

  const initialIndex = testimonials.length;
  const totalSlides = duplicatedTestimonials.length;

  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };
    const testimonialsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTestimonialsVisible(true);
        }
      });
    }, observerOptions);

    if (testimonialsRef.current) {
      testimonialsObserver.observe(testimonialsRef.current);
    }

    return () => {
      if (testimonialsRef.current) {
        testimonialsObserver.unobserve(testimonialsRef.current);
      }
    };
  }, []);

  // Combined and robust size calculation
  const calculateSizes = useCallback(() => {
    if (carouselInnerRef.current) {
      const cardElement = carouselInnerRef.current.querySelector(
        ".testimonial-card"
      ) as HTMLElement;
      if (cardElement) {
        setCardWidth(cardElement.offsetWidth);
      }
      const parentContainer = carouselInnerRef.current.parentElement;
      if (parentContainer) {
        setParentContainerWidth(parentContainer.offsetWidth);
      }
    }
  }, []);

  useEffect(() => {
    calculateSizes();
    window.addEventListener("resize", calculateSizes);

    const timeoutId = setTimeout(calculateSizes, 100);

    return () => {
      window.removeEventListener("resize", calculateSizes);
      clearTimeout(timeoutId);
    };
  }, [calculateSizes]);

  const getCarouselTransform = useCallback(() => {
    if (
      !carouselInnerRef.current ||
      cardWidth === 0 ||
      parentContainerWidth === 0
    ) {
      return "translateX(0px)";
    }

    const gap = 20;
    const itemWidthWithGap = cardWidth + gap;

    const newTranslateX =
      parentContainerWidth / 2 -
      (currentIndex * itemWidthWithGap + cardWidth / 2);

    return `translateX(${newTranslateX}px)`;
  }, [currentIndex, cardWidth, parentContainerWidth]);

  useEffect(() => {
    if (carouselInnerRef.current) {
      if (!isTransitioning) {
        carouselInnerRef.current.style.transition = "none";
      } else {
        carouselInnerRef.current.style.transition =
          "transform 0.7s ease-in-out";
      }
    }

    if (currentIndex >= totalSlides - testimonials.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(
          initialIndex + (currentIndex - (totalSlides - testimonials.length))
        );
      }, 700);
    } else if (currentIndex < testimonials.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(initialIndex + (currentIndex % testimonials.length));
      }, 700);
    } else {
      setIsTransitioning(true);
    }
  }, [
    currentIndex,
    totalSlides,
    testimonials.length,
    initialIndex,
    isTransitioning,
  ]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(initialIndex + index);
  };

  // Auto-play interval
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]); // Re-run effect when currentIndex changes to reset interval

  return (
    <section
      ref={testimonialsRef}
      id="testimonial"
      className="relative py-12 px-4 sm:px-4 lg:px-8 bg-[#E7F0FF] overflow-hidden"
      style={{
        background: "#E7F0FF",
      }}
    >
      <div className="absolute left-2 top-2 md:left-20 md:top-2 opacity-100 flex flex-col gap-2 md:gap-4">
        <img
          src="/landing/client/1.png"
          alt="Image 1"
          className="w-12 md:w-20 lg:w-40"
        />
      </div>

      <div className="absolute right-2 top-2 md:right-20 md:top-2 opacity-100 flex flex-col gap-2 md:gap-4">
        <img
          src="/landing/client/2.png"
          alt="Image 1"
          className="w-12 md:w-20 lg:w-40"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center py-0 relative">
          <div
            className={`inline-flex items-center justify-center transition-all duration-700 ${
              testimonialsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-purple-500 text-xs md:text-sm font-medium bg-pink-100 rounded-full px-4 py-1">
              Testimonial
            </span>
          </div>

          <h2
            className={`text-3xl  md:text-4xl lg:text-5xl font-bold my-4  leading-tight bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text  transition-all duration-700 delay-100 ${
              testimonialsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <span className="bg-gradient-to-l from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Client Success Stories
            </span>
          </h2>

          <p
            className={`text-gray-500 max-w-xl md:max-w-3xl lg:max-w-4xl  text-md md:text-lg lg:text-xl mx-auto mb-12 transition-all duration-700 delay-200 ${
              testimonialsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Real experiences from businesses that have transformed with our AI
            solutions
          </p>

          <div
            className={`
              absolute top-1/2 -translate-y-1/2 right-4 flex gap-2
              md:absolute md:top-2/3 md:right-52
              lg:static lg:mt-4 lg:mb-8 lg:flex lg:justify-end lg:gap-2
              transition-all duration-700 delay-300
              ${
                testimonialsVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4"
              }
            `}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full w-10 h-10 border border-gray-300 bg-white hover:border-purple-400 hover:bg-blue-50 hover:scale-110 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full w-10 h-10 border border-gray-300 bg-white hover:border-purple-400 hover:bg-blue-50 hover:scale-110 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </Button>
          </div>
        </div>

        <div
          className={`relative w-full overflow-hidden mx-auto py-10 `}
          style={{
            transition: testimonialsVisible
              ? "opacity 700ms ease-in-out, transform 700ms ease-in-out"
              : "none",
            transitionDelay: "400ms",
            opacity: testimonialsVisible ? 1 : 0,
            transform: testimonialsVisible
              ? "translateY(0)"
              : "translateY(8px)",
          }}
        >
          <div
            ref={carouselInnerRef}
            className="flex gap-5"
            style={{
              transform: getCarouselTransform(),
              width: `${
                totalSlides * (cardWidth > 0 ? cardWidth : 300) +
                (totalSlides - 1) * 20
              }px`,
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => {
              let realIndex = index - initialIndex;
              if (realIndex < 0) realIndex += testimonials.length;
              if (realIndex >= testimonials.length)
                realIndex -= testimonials.length;

              const isCurrent = index === currentIndex;
              const isPrev = index === currentIndex - 1;
              const isNext = index === currentIndex + 1;

              let cardOpacity = 0.4;
              let cardScale = 0.8;
              let cardZIndex = 1;

              if (isCurrent) {
                cardOpacity = 1;
                cardScale = 1.05;
                cardZIndex = 10;
              } else if (isPrev || isNext) {
                cardOpacity = 0.7;
                cardScale = 0.9;
                cardZIndex = 7;
              }

              return (
                <Card
                  key={index}
                  className={`p-2 testimonial-card flex-shrink-0
                    w-[200px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px]
                    ${
                      isCurrent
                        ? "bg-white border-0 shadow-xl"
                        : `bg-blue-50/80 border-2 ${testimonial.borderColor}`
                    }
                    rounded-2xl
                  `}
                  style={{
                    opacity: cardOpacity,
                    transform: `scale(${cardScale})`,
                    zIndex: cardZIndex,
                    transition: "all 0.7s ease-in-out",
                    minWidth: "280px",
                  }}
                >
                  

                  <CardContent className=" relative">

                    <div className="absolute -top-5 left-0 text-6xl font-serif leading-none opacity-100 ">
                    <VscQuote size={32} className="text-pink-500  opacity-100" />
                  </div>

                    <div className="flex justify-between items-start mb-0 py-5">
                      <div className="flex-1">
                        <div className="font-bold text-gray-900 text-lg mb-1">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-500 font-medium">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                      <Image
                        src={testimonial.img}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full  w-20 h-20  object-cover ml-4 transition-all duration-300 hover:scale-110"
                      />
                    </div>

                    <p className="text-gray-700 text-base leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div
          className={`flex justify-center mb-10 items-center gap-2 transition-all duration-700 delay-500 ${
            testimonialsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                index ===
                (currentIndex - initialIndex + testimonials.length) %
                  testimonials.length
                  ? "bg-gradient-to-l from-purple-500 to-pink-500 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
