"use client"
import React from 'react'
import Navbar from "@/components/inner-navbar"
import TermsAndConditionsPage from './Term&condtn'
import Footer from '@/components/footer/page'
function page() {
  return (
    <div>
        <Navbar/>
        <TermsAndConditionsPage/>
        <Footer/>
    </div>
  )
}

export default page