"use client"
import React from 'react'
import Navbar from "@/components/inner-navbar"
import Footer from '@/components/footer/page'
import PrivacyData from './PrivacyData'

function page() {
  return (
    <div>
        <Navbar/>
        <PrivacyData/>
        <Footer/>

    </div>
  )
}

export default page