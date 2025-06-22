import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";
import {
  FaFacebook,
  FaLinkedin,
  FaPaperPlane,
  FaTwitter,
} from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  const handlenavigation = (path: string) => {
    router.push(path);
  };
  return (
    <footer className="bg-white  px-4 sm:px-6 lg:px-16 relative">
      <div
        className="absolute top-5/6 right-0 w-24 h-24 md:w-40 md:h-40 bg-no-repeat bg-contain opacity-100 pointer-events-none z-0"
        style={{
          backgroundImage: "url('/watermark/Vector-2.png')",
          backgroundSize: "100px",
          backgroundPosition: " ",
        }}
      ></div>

      <div
        className="absolute top-5/6 left-1/3 w-24 h-24 md:w-32 md:h-32 bg-no-repeat bg-contain opacity-50 pointer-events-none z-0"
        style={{
          backgroundImage: "url('/watermark/Vector-3.png')",
          backgroundSize: "100px",
          backgroundPosition: " ",
        }}
      ></div>

      <div
        className="absolute left-0 w-24 h-24 md:w-40 md:h-40 bg-no-repeat bg-contain opacity-100 pointer-events-none z-0"
        style={{
          backgroundImage: "url('/watermark/Vector-2.png')",
          backgroundSize: "75px",
          backgroundPosition: " ",
          top: "55%",
        }}
      ></div>
      <div
        className="absolute w-24 top-1/2 left-1/2 h-24 md:w-40 md:h-40 bg-no-repeat bg-contain opacity-100 pointer-events-none z-0"
        style={{
          backgroundImage: "url('/watermark/Vector-2.png')",
          backgroundSize: "75px",
          backgroundPosition: " ",
        }}
      ></div>

      <div className="container mx-auto px-4 pt-16 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="space-y-4 ">
            <div>
              <Link
                href="/"
                className="flex items-center w-2/5 sm:w-1/2 md:w-1/2 gap-3 font-bold text-xl text-purple-600"
              >
                <img
                  onClick={() => handlenavigation("/landing")}
                  src="/logo/logo.png"
                  alt=""
                />
              </Link>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Our paper is sourced from FSC-certified mills. We plant enough
              trees to more than double our paper usage.
            </p>
            <div className="flex text-gray-600 gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61571089575897"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="hover:text-blue-600" size={25} />
              </a>
              <a
                href="https://www.instagram.com/eramlabs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram className=" hover:text-pink-600" size={25} />
              </a>
              <a
                href="https://www.linkedin.com/in/eram-labs-220344344/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className=" hover:text-blue-600" size={25} />
              </a>
              <a href="" target="" rel="">
                <FaTwitter className=" hover:text-blue-600" size={25} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg text-gray-800">
              Quick Links
            </h4>
            <div className="space-y-3 text-sm">
              <p
                onClick={() => handlenavigation("/about")}
                className="block text-gray-600 hover:text-gray-800 transition-colors hover:cursor-pointer "
              >
                About Us
              </p>
              <p
                onClick={() => handlenavigation("/services")}
                className="block text-gray-600 hover:text-gray-800  transition-colors hover:cursor-pointer "
              >
                Service
              </p>
              <p
                onClick={() => handlenavigation("/careers")}
                className="block text-gray-600 hover:text-gray-800  transition-colors hover:cursor-pointer "
              >
                Careers
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold mb-4 text-lg text-gray-800">
              Contact us
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <span className="text-gray-600">+91 8802346983</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                <div className="text-gray-600">
                  <div>123 Khadda Colony Badarpur </div>
                  <div>Border Delhi 110054</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <span className="text-gray-600">info@eramlabs.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h4 className="font-semibold mb-4 text-lg text-gray-800">
              SUBSCRIBE TO NEWSLETTER
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              Stay updated with our latest news and offers.
            </p>
            <div className="space-y-4">
              <div>
                <div className="flex mb-6">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-1 py-2 text-xs md:text-sm bg-gray-200 rounded-l md:w-fit lg:w-full"
                  />
                  <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 rounded-r">
                    <FaPaperPlane />
                  </button>
                </div>
                <p className=" text-xs md:text-sm text-gray-600 ">
                  Printed with <span className="text-red-500">❤</span> at our
                  facility in East-South India.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:mr-4">
            <p className="text-sm text-gray-600">
              © 2025 Eramlabs. All rights reserved.
            </p>
            <div className="">
              {/* Payment Icons */}
              <div className="flex items-center gap-4 md:gap-12 ">
                <div className=" text-neutral-500 text-xs flex items-center justify-center font-medium cursor-pointer"  onClick={() => handlenavigation("/privacy")}>
                  Privacy Policy
                </div>
                <div className=" text-neutral-500 text-xs flex items-center justify-center font-medium cursor-pointer" onClick={() => handlenavigation("/terms")}>
                  Terms of Service
                </div>
                {/* <div className=" text-neutral-500 text-xs flex items-center justify-center font-medium">
                  Cookie Policy
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// "use client";
// import { useRouter } from "next/navigation";
// import { MdLocationPin } from "react-icons/md";
// import { IoCallSharp } from "react-icons/io5";
// import { IoMdMail } from "react-icons/io";
// import {
//   FaFacebook,
//   FaLinkedin,
//   FaPaperPlane,
//   FaTwitter,
// } from "react-icons/fa";
// import { FiInstagram } from "react-icons/fi";

// const Footer = () => {
//   const router = useRouter();
//   const handlenavigation = (path: string) => {
//     router.push(path);
//   };
//   return (
//     <footer className="bg-white py-16 px-4 sm:px-6 lg:px-16 border-t relative">
//       <div className="container  mx-auto px-4  ">
//         <div
//           className="absolute top-5/6 right-0 w-24 h-24 md:w-40 md:h-40 bg-no-repeat bg-contain opacity-100 pointer-events-none z-0"
//           style={{
//             backgroundImage: "url('/sevice/vector2.png')",
//             backgroundSize: "100px",
//             backgroundPosition: " ",
//           }}
//         ></div>

//         <div
//           className="absolute top-5/6 left-3 w-24 h-24 md:w-32 md:h-32 bg-no-repeat bg-contain opacity-100 pointer-events-none z-0"
//           style={{
//             backgroundImage: "url('/sevice/vector3.png')",
//             backgroundSize: "100px",
//             backgroundPosition: " ",
//           }}
//         ></div>

//         <div
//           className="absolute left-0 w-24 h-24 md:w-40 md:h-40 bg-no-repeat bg-contain opacity-100 pointer-events-none z-0"
//           style={{
//             backgroundImage: "url('/sevice/vector2.png')",
//             backgroundSize: "75px",
//             backgroundPosition: " ",
//             top: "55%",
//           }}
//         ></div>
//         <div className="flex flex-col lg:flex-row w-full gap-4  border">
//           <div className="w-full lg:w-1/3 space-y-4">
//             <div className="flex start">
//               <img className="w-40 lg:w-48" src="/logo/logo.png" alt="logo" />
//             </div>
//             <p className="max-lg:text-sm lg:text-md text-gray-500 pr-4">
//               Our paper is sourced from FSC-certified mills. We plant enough
//               trees to more than double our paper usage.
//             </p>
//             <div className="flex space-x-4 mt-4 text-gray-500">
//               <p>
//                 <FaFacebook size={25} />
//               </p>
//               <p>
//                 <FaTwitter size={25} />
//               </p>
//               <p>
//                 <FaLinkedin size={25} />
//               </p>
//               <p>
//                 <FiInstagram size={25} />
//               </p>
//             </div>
//           </div>
//           <div className="flex w-full lg:w-1/3  lg:flex-row ">
//             <div className=" w-1/2 border">
//               <div className="font-semibold text-md md:text-lg   mb-4 text-gray-600">
//                 QUICK LINK
//               </div>
//               <div className="text-gray-600 ">
//                 <p
//                   onClick={() => handlenavigation("/about")}
//                   className="text-gray-700 hover:cursor-pointer max-md:text-sm md:text-md "
//                 >
//                   {" "}
//                   About Us
//                 </p>
//                 <p
//                   onClick={() => handlenavigation("/services")}
//                   className="text-gray-700 hover:cursor-pointer  max-md:text-sm md:text-md "
//                 >
//                   {" "}
//                   Services
//                 </p>
//                 <p
//                   onClick={() => handlenavigation("/careers")}
//                   className="text-gray-700 hover:cursor-pointer  max-md:text-sm md:text-md "
//                 >
//                   {" "}
//                   Careers
//                 </p>
//               </div>
//             </div>

//             <div className="w-full border ">
//               <div className="font-semibold text-md lg:text-lg mb-4  text-gray-600">
//                 CONTACT US
//               </div>
//               <div className="space-y-2 text-gray-600 ">
//                 <li className=" flex gap-3   max-lg:text-sm lg:text-md  ">
//                   <MdLocationPin size={20} />
//                   123 Khadda Colony Badarpur <br />
//                   Delhi 1100054
//                 </li>
//                 <li className=" flex gap-3 max-lg:text-sm lg:text-md">
//                   <IoCallSharp size={20} />
//                   +91 88023 46983
//                 </li>
//                 <li className=" flex gap-3 max-lg:text-sm lg:text-md">
//                   <IoMdMail size={20} />
//                   info@eramlabs.com
//                 </li>
//               </div>
//             </div>
//           </div>

//           <div className="lg:w-1/4 border ">
//             <div className="font-semibold text-md md:text-lg  mb-4 text-gray-600">
//               SUBSCRIBE TO NEWSLETTER
//             </div>
//             <p className="text-sm text-gray-600 mb-5">
//               Stay updated with our latest news and offers.
//             </p>
//             <div className="flex mb-6">
//               <input
//                 type="email"
//                 placeholder="Your email address"
//                 className="px-1 py-2 text-xs md:text-sm bg-gray-200 rounded-l w-1/2"
//               />
//               <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 rounded-r">
//                 <FaPaperPlane />
//               </button>
//             </div>
//             <p className=" max-lg:text-sm lg:text-md text-gray-600 ">
//               Printed with <span className="text-red-500">❤</span> at our
//               facility in East-South India.
//             </p>
//           </div>
//         </div>
//       </div>
//       <hr className=" container mx-auto mt-3 border  " />
//       <div className="container mx-auto flex md:flex-row flex-col md:text-sm text-xs gap-4 md:gap-0 mt-2 justify-between">
//         <p className="text-center">© 2025 Eramlabs. All rights reserved.</p>
//         <div className=" space-x-2  md:mt-0 text-center">
//           <a href="#">Privacy Policy</a>
//           <a href="#">Terms of Service</a>
//           <a href="#">Cookie Policy</a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
