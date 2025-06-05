import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SuccessSection = () => {
    return (
        <section className="px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-50 to-orange-50 relative overflow-hidden pt-12">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#FFDA21] rounded-full mr-20 -mt-20"></div>
                <img
                        src="/curl-girl.png"
                        alt="Girl pointing"
                        className="absolute left-96 bottom-10 w-full sm:w-full h-48 sm:h-full z-10   object-contain"
                    />
            <div className="container mx-auto text-center">
                <div className="flex justify-center items-center">
                    <p className="text-violet-500 text-md font-medium bg-pink-100 rounded-full px-4 mb-2">
                        Portfolio
                    </p>
                </div>

                <h2 className="text-4xl sm:text-5xl font-bold my-4">
                    <span className="bg-gradient-to-l from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Success Stories
                    </span>
                </h2>

                <p className="text-gray-500 max-w-3xl text-lg mx-auto mb-12">
                    Explore how we've transformed ideas into powerful digital realities.
                </p>

                <div className="relative">
                    <Carousel
                        showThumbs={false}
                        showStatus={false}
                        infiniteLoop={true}
                        autoPlay={true}
                        interval={2000}
                        stopOnHover={true}
                        transitionTime={800}
                        showIndicators={true}
                    >
                        {/* ROBOGURU */}
                        <div>
                            <section
                                id="portfolio"
                                className="px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-50 to-orange-50 relative overflow-hidden"
                            >
                           
                                 {/* Fixed "Girl Pointing" Image */}
                
                                <div className="container mx-auto mt-14">
                                    <div className="flex flex-col md:flex-row md:space-x-8 items-center justify-center">
                                        <div className="flex-1 mb-8 md:mb-0 text-center md:text-left">
                                            <h3 className="text-4xl text-start font-bold mb-4 Roboto text-blue-950">Robo Guru</h3>
                                            <p className="text-gray-600 mb-6 text-start">
                                                Robo Guru is a go-to staffing platform connecting workers and employers. Post or find jobs
                                                across multiple categories, streamlining recruitment for all parties. Download the app now!
                                            </p>

                                            <div className="flex justify-center md:justify-start space-x-1">
                                                <a href="#" className="inline-flex items-center bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 mb-2">
                                                    <img src="google-play.png" alt="Google Play" className="h-8 mr-2" />
                                                </a>
                                                <a href="#" className="inline-flex items-center bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 mb-2">
                                                    <img src="app-store.png" alt="App Store" className="h-8 mr-2" />
                                                </a>
                                                <a href="#" className="inline-flex items-center bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 mb-2">
                                                    <img src="visit-website.png" alt="Website" className="h-8 mr-2" />
                                                </a>
                                            </div>
                                            <div className="grid grid-cols-2 mb-6 w-5/6 mt-16 text-start md:mx-0">
                                                <div>
                                                    <div className="text-2xl font-bold text-black">2M+</div>
                                                    <div className="text-sm text-gray-600">Downloads</div>
                                                </div>
                                                <div>
                                                    <div className="text-2xl font-bold text-black">2.8M+</div>
                                                    <div className="text-sm text-gray-600">No of Visitors</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-1 mb-8 md:mb-0 flex justify-center">
                                            <div className="relative flex ml-14 justify-center space-x-4">
                                                <img
                                                    src="/roboguru-1.png"
                                                    alt="RoboGuru 1"
                                                    className="w-40 sm:w-48 h-80 sm:h-96 rounded-3xl object-cover z-10"
                                                />
                                                <img
                                                    src="/roboguru-2.png"
                                                    alt="RoboGuru 2"
                                                    className="w-40 sm:w-48 h-80 sm:h-96 rounded-3xl object-cover z-20"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Behrupiya */}
                        <div>
                            <section
                                id="portfolio"
                                className="px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-50 to-orange-50 relative overflow-hidden"
                            >
                                <div className="container mx-auto mt-14">
                                    <div className="flex flex-col md:flex-row md:space-x-8 items-center justify-center">
                                        <div className="flex-1 mb-8 md:mb-0 text-center md:text-left">
                                            <h3 className="text-4xl text-start font-bold mb-4 Roboto text-blue-950">Behrupiya</h3>
                                            <p className="text-gray-600 mb-6 text-start">
                                                Behrupiya is your ultimate photo editing app, connecting creativity and users. Discover or create stunning edits across various styles, making photo enhancement effortless for everyone. Download the app now!
                                            </p>

                                            <div className="flex justify-center md:justify-start space-x-1">
                                                <a href="#" className="inline-flex items-center bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 mb-2">
                                                    <img src="google-play.png" alt="Google Play" className="h-8 mr-2" />
                                                </a>
                                                <a href="#" className="inline-flex items-center bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 mb-2">
                                                    <img src="app-store.png" alt="App Store" className="h-8 mr-2" />
                                                </a>
                                                <a href="#" className="inline-flex items-center bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 mb-2">
                                                    <img src="visit-website.png" alt="Website" className="h-8 mr-2" />
                                                </a>
                                            </div>
                                            <div className="grid grid-cols-2 w-5/6 mt-16 text-start md:mx-0">
                                                <div>
                                                    <div className="text-2xl font-bold text-black">2M+</div>
                                                    <div className="text-sm text-gray-600">Downloads</div>
                                                </div>
                                                <div>
                                                    <div className="text-2xl font-bold text-black">2.8M+</div>
                                                    <div className="text-sm text-gray-600">No of Visitors</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-1 mb-8 md:mb-0 flex justify-center">
                                            <div className="relative flex ml-0 justify-center space-x-4">
                                                <img
                                                    src="/landing/behrupiya.png"
                                                    alt="Behrupiya"
                                                    className="w-40 sm:w-48 h-80 sm:h-96 rounded-3xl object-cover z-10"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* LeelaLand */}
                        <div>
                            <section
                                id="portfolio"
                                className="px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-50 to-orange-50 relative overflow-hidden"
                            >
                                <div className="container mx-auto mt-14">
                                    <div className="flex flex-col md:flex-row md:space-x-8 items-center justify-center">
                                        <div className="flex-1 mb-8 md:mb-0 text-center md:text-left">
                                            <h3 className="text-4xl text-start font-bold mb-4 Roboto text-blue-950">LeelaLand</h3>
                                            <p className="text-gray-600 mb-6 text-start">
                                                LeelaLand is your ultimate online chatting app, connecting people and conversations. Discover or start exciting chats across various topics, making social connections effortless for everyone. Download the app now!
                                            </p>

                                            <div className="flex justify-center md:justify-start space-x-1">
                                                <a href="#" className="inline-flex items-center bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 mb-2">
                                                    <img src="google-play.png" alt="Google Play" className="h-8 mr-2" />
                                                </a>
                                                <a href="#" className="inline-flex items-center bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 mb-2">
                                                    <img src="app-store.png" alt="App Store" className="h-8 mr-2" />
                                                </a>
                                                <a href="#" className="inline-flex items-center bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 mb-2">
                                                    <img src="visit-website.png" alt="Website" className="h-8 mr-2" />
                                                </a>
                                            </div>
                                            <div className="grid grid-cols-2 mb-6 w-5/6 mt-16 text-start md:mx-0">
                                                <div>
                                                    <div className="text-2xl font-bold text-black">2M+</div>
                                                    <div className="text-sm text-gray-600">Downloads</div>
                                                </div>
                                                <div>
                                                    <div className="text-2xl font-bold text-black">2.8M+</div>
                                                    <div className="text-sm text-gray-600">No of Visitors</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-1 mb-8 md:mb-0 flex justify-center">
                                            <div className="relative flex justify-center space-x-4">
                                                <img
                                                    src="/landing/leelaLand.png"
                                                    alt="LeelaLand"
                                                    className="w-40 sm:w-48 h-80 sm:h-96 rounded-3xl object-cover z-10"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* OHGRT-AUDIO */}
                        <div>
                            <section
                                id="portfolio"
                                className="px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-50 to-orange-50 relative overflow-hidden"
                            >
                                <div className="container mx-auto mt-14">
                                    <div className="flex flex-col md:flex-row md:space-x-8 items-center justify-center">
                                        <div className="flex-1 mb-8 md:mb-0 text-center md:text-left">
                                            <h3 className="text-4xl text-start font-bold mb-4 Roboto text-blue-950">Ohgrt</h3>
                                            <p className="text-gray-600 mb-6 text-start">
                                                OhGrt is your one-stop hub for all things audio, video, and voice! Effortlessly convert text to
                                                speech, extract audio, and even clone voices with ease. Connect your projects and bring your ideas
                                                to life download the app now!
                                            </p>

                                            <div className="flex justify-center md:justify-start space-x-1">
                                                <a href="#" className="inline-flex items-center bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 mb-2">
                                                    <img src="google-play.png" alt="Google Play" className="h-8 mr-2" />
                                                </a>
                                                <a href="#" className="inline-flex items-center bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 mb-2">
                                                    <img src="app-store.png" alt="App Store" className="h-8 mr-2" />
                                                </a>
                                                <a href="#" className="inline-flex items-center bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 mb-2">
                                                    <img src="visit-website.png" alt="Website" className="h-8 mr-2" />
                                                </a>
                                            </div>
                                            <div className="grid grid-cols-2 mb-6 w-5/6 mt-16 text-start md:mx-0">
                                                <div>
                                                    <div className="text-2xl font-bold text-black">2M+</div>
                                                    <div className="text-sm text-gray-600">Downloads</div>
                                                </div>
                                                <div>
                                                    <div className="text-2xl font-bold text-black">2.8M+</div>
                                                    <div className="text-sm text-gray-600">No of Visitors</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-1 mb-8 md:mb-0 flex justify-center">
                                            <div className="relative flex justify-center space-x-4">
                                                <img
                                                    src="/landing/ohgrt.png"
                                                    alt="Ohgrt"
                                                    className="w-40 sm:w-48 h-80 sm:h-96 rounded-3xl object-cover z-10"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </Carousel>

                  

                </div>

            </div>
        </section>
    );
};

export default SuccessSection;

