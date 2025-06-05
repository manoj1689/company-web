"use client";
import { useRouter } from "next/navigation";
import { MdLocationPin } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaFacebook, FaLinkedin, FaPaperPlane, FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";



const Footer =()=>{

  const router=useRouter();
const handlenavigation=(path:string)=>{
  router.push(path);
}
    return (
      <footer className="bg-white py-12 border-t relative">
        <div className="max-w-7xl  mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
              <div className=" md:ml-0 ml-5">
              <div className="flex items-center">
                <img className="w-1/3 md:w-2/3" src="/logo.png" alt="" />
              </div>
              <p className="text-xs md:text-sm text-gray-600 mt-4">
                Our paper is sourced from FSC-certified mills. We plant enough trees to more than double our paper usage.
              </p>
              <div className="flex space-x-4 mt-4 text-gray-500">
                <p><FaFacebook /></p>
                <p><FaTwitter /></p>
                <p><FaLinkedin /></p>
                <p><FiInstagram /></p>
              </div>
            </div>

         <div className="w-full  sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 ">
  <h4 className="font-semibold text-xs md:text-sm ml-6 md:ml-0 md:text-center mb-3 text-gray-600">QUICK LINK</h4>
  <ul className="space-y-2 text-gray-600 text-sm">
    <li onClick={() => handlenavigation('/about')} className="text-gray-700 hover:cursor-pointer  md:text-sm text-xs"> About Us</li>
    <li onClick={() => handlenavigation('/services')} className="text-gray-700 hover:cursor-pointer md:text-sm text-xs"> Services</li>
    <li onClick={() => handlenavigation('/careers')} className="text-gray-700 hover:cursor-pointer md:text-sm text-xs"> Careers</li>
  </ul>
</div>


          <div className="mr-28 w-full ">
            <h4 className="font-semibold text-xs md:text-sm mb-3  text-gray-600">CONTACT US</h4>
            <div className="space-y-2 text-gray-600 text-sm ">            
              <li className=" flex gap-3 md:text-sm text-xs "><MdLocationPin />123 Khadda Colony Badarpur Border<br/>Delhi 1100054</li>              
              <li className=" flex gap-3 md:text-sm text-xs"><IoCallSharp />+91 88023 46983</li>
              <li className=" flex gap-3 md:text-sm text-xs"><IoMdMail />info@eramlabs.com</li>
            </div>
          </div>
 
          <div className=" ">
            <h4 className="font-semibold text-xs md:text-sm mb-3 text-gray-600">SUBSCRIBE TO NEWSLETTER</h4>
            <p className="text-xs text-gray-600 mb-5">Stay updated with our latest news and offers.</p>
            <div className="flex mb-6">
              <input type="email" placeholder="Your email address" className="p-1 text-xs md:text-sm bg-gray-200 rounded-l w-full" />
              <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 rounded-r">
                <FaPaperPlane />
              </button>
            </div>
            <p className=" text-xs md:text-sm text-gray-600 ">Printed with <span className="text-red-500">❤</span> at our facility in East-South India.</p>
          </div>
        </div>
        <hr className=" container mx-auto mt-3 " />
        <div className="container mx-auto mt-10 pt-4 text-center flex justify-between text-xs text-gray-500">
          <p>© 2025 Eramlabs. All rights reserved.</p>
          <div className=" space-x-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </footer>
    )
}

export default Footer;