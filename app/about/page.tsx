"use client"

import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import HeaderSection from "./header";
import MissionSection from "./mission";
import HistorySection from "./history";
import LeaderSection from "./leader";
import Joinsection from "./join";
import Navbar from "@/components/inner-navbar";

function About(){
  return (
    <div className=" ">

     <Navbar/>
     <HeaderSection/>
     <MissionSection/>
     <HistorySection/>
     <LeaderSection/>
     <Joinsection/>
     <Footer />
    </div>
  );
};

export default About;