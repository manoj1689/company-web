import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';



const innerNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-white shadow-sm  px-4 sm:px-4 lg:px-8 py-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Link href={"/"}>
           <img className="w-40" src="/logo/logo.png" alt="Logo file" />
          </Link>
          </div>
    
        {/* <div className="hidden lg:block">
          <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white rounded-2xl">
            Contact Us
          </Button>
        </div> */}
      </div>
      
    </header>
  )
}

export default innerNavbar;