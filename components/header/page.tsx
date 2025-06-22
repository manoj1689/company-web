import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';



import { Menu, X } from "lucide-react";

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-4 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Link href={"/"}>
           <img className="w-40" src="/logo/logo.png" alt="Logo" />
          </Link>
           
          
        </div>
        <nav className="hidden lg:flex items-center space-x-4 lg:space-x-6">
          <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">
            Services
          </a>
          <a href="#techno" className="text-gray-700 hover:text-purple-600 transition-colors">
            Technology
          </a>
          
          <a href="#process" className="text-gray-700 hover:text-purple-600 transition-colors">
            Process
          </a>
          
          <a href="#testimonial" className="text-gray-700 hover:text-purple-600 transition-colors">
            Testimonial
          </a>
          <a href="#ourteam" className="text-gray-700 hover:text-purple-600 transition-colors">
            Our Team
          </a>


        </nav>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <div className="hidden lg:block">
          <a href="#contactus"> <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white rounded-2xl">
            Contact Us
          </Button> </a>
         
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-white shadow-md shadow-pink-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col space-y-4">
            <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">
              Services
            </a>
            <a href="#technology" className="text-gray-700 hover:text-purple-600 transition-colors">
              Technology
            </a>
            <a href="#solutions" className="text-gray-700 hover:text-purple-600 transition-colors">
              Solutions
            </a>
            <a href="#process" className="text-gray-700 hover:text-purple-600 transition-colors">
              Process
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-purple-600 transition-colors">
              Portfolio
            </a>
            <a href="#testimonial" className="text-gray-700 hover:text-purple-600 transition-colors">
              Testimonial
            </a>
            <a href="#ourblog" className="text-gray-700 hover:text-purple-600 transition-colors">
              Our Blogs
            </a>


            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white rounded-full w-full">
              Contact Us
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Page;