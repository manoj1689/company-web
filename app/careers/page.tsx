"use client"

import Footer from "@/components/footer/page";
import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import HeaderSection from "./header";
import CultureSection from "./culture";
import BenefitsSection from "./benifits";
import OpeningsSection from "./openings";
import LifeSection from "./life";
import QuestionSection from "./question";
import Navbar from "@/components/inner-navbar";


const App: React.FC = () => {
 

 

  return (
    <div className="">
     
      <Navbar/>
      <HeaderSection/>
      <CultureSection/>
      <BenefitsSection/>
      <OpeningsSection/>
      <LifeSection/>
      <QuestionSection/>
     <Footer />
    </div>
  );
};

export default App;