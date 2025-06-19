"use client";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import ServiceSection from "./service";
import HeaderSection from "./header";
import FeatureSection from "./features";
import ProcessSection from "./process";
import StartAiSection from "./startai";
import RelatedSection from "./related";
import Header1 from "@/components/header1";

function Service(){
 return(
    <div className="bg-pink-100">
    <Header1/>
       <HeaderSection/>
       <ServiceSection/>
       <FeatureSection/>
       <ProcessSection/>
       <StartAiSection/>
       <RelatedSection/> 
     <Footer/>
       
    </div>
  );
}
export default Service