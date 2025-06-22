import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TbMessageCircle } from "react-icons/tb";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { IoPaperPlaneOutline } from "react-icons/io5";
import emailjs from "@emailjs/browser";

export default function GetInTouchSection() {
  const contactRef = useRef<HTMLElement>(null);
  const form = useRef<HTMLFormElement>(null);
  const [contactVisible, setContactVisible] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setContactVisible(true);
          if (contactRef.current) observer.unobserve(contactRef.current);
        }
      });
    }, observerOptions);

    if (contactRef.current) observer.observe(contactRef.current);
    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setMessage("");
    setMessageType("");
    const formEl = form.current;
    if (!formEl) return;

    const name = formEl.user_name.value.trim();
    const email = formEl.user_email.value.trim();
    const msg = formEl.message.value.trim();

    setErrors({ name: "", email: "", message: "" });
    let hasError = false;
    const newErrors = { name: "", email: "", message: "" };

    if (!name) {
      newErrors.name = "Name is required";
      hasError = true;
    }
    if (!email) {
      newErrors.email = "Email is required";
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
      hasError = true;
    }
    if (!msg) {
      newErrors.message = "Message is required";
      hasError = true;
    }
    if (hasError) {
      setErrors(newErrors);
      setIsSending(false);
      return;
    }

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setMessage("✅ Your message has been sent successfully!");
      setMessageType("success");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setMessage("❌ Failed to send your message. Please try again later.");
      setMessageType("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contactus" ref={contactRef} className="relative py-16 px-4 sm:px-4 lg:px-16 bg-[#E6F1FF] overflow-hidden">
      <div className="container mx-auto relative z-10">
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold my-4 leading-tight text-center transition-all duration-700 ${contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <span className="bg-gradient-to-l from-purple-500 to-pink-500 bg-clip-text  text-transparent">
            Get in touch Anytime
          </span>
        </h2>
        <p className={`text-gray-500 max-w-xl md:max-w-3xl lg:max-w-4xl text-md md:text-lg lg:text-xl mx-auto mb-12 transition-all duration-700 delay-100 ${contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Reach out to discuss your vision, explore possibilities, and bring innovation to your business.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className={`${contactVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"} transition-all duration-700 delay-200`}>
            <Card className="p-8 border">
              <CardContent className="px-5 py-3">
                <div className="flex gap-6 mb-6">
                  <TbMessageCircle className="text-6xl text-blue-500 bg-blue-100 p-3 rounded-full" />
                  <div className="text-start">
                    <p className="text-2xl font-normal mb-1">Send us a Message</p>
                    <p className="text-base">We'll get back to you within 24hrs</p>
                  </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                  <div>
                    <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" name="user_name" id="user_name" className="w-full mt-2 p-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                    {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="user_email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" name="user_email" id="user_email" className="w-full p-3 mt-2 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                    {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea name="message" id="message" rows={4} className="w-full p-3 mt-2 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required></textarea>
                    {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
                  </div>
                  {message && (
                    <p className={`text-center ${messageType === "success" ? "text-green-600" : "text-red-600"} text-sm mt-2`}>{message}</p>
                  )}
                  <Button type="submit" disabled={isSending} className="w-full h-14 text-lg bg-gradient-to-r from-pink-500 to-purple-600 flex justify-center items-center rounded-lg">
                    {isSending ? "Sending..." : <>Send Message <IoPaperPlaneOutline className="text-2xl ml-2" /></>}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className={`mt-8 lg:mt-0 ${contactVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"} transition-all duration-700 delay-300`}>
            <img className=" mb-4 rounded-md hover:scale-105 transition-all duration-500" src="/landing/client/office.png" alt="Office" />
            <div className="flex flex-col sm:flex-row justify-between gap-6">
              <div className="flex gap-4 bg-white p-4 w-full sm:w-1/2 rounded-xl shadow-xl">
                <div>
                  <div className="text-blue-500 bg-blue-100 rounded-full text-5xl">
                    <LuPhone className="p-3" />
                  </div>
                </div>

                <div className="text-start">
                  <h1 className="text-lg font-medium">Phone</h1>
                  <h3 className="text-base text-gray-600">+918802346983</h3>
                </div>
              </div>
              <div className="flex gap-4 bg-white p-4 w-full sm:w-1/2 rounded-xl shadow-xl">
                <div><div className="text-blue-400 bg-blue-100 rounded-full text-5xl">
                  <MdOutlineEmail className="p-3" />
                </div></div>

                <div className="text-start">
                  <h1 className="text-lg font-medium">Email</h1>
                  <h3 className="text-base text-gray-600">info@eramlabs.com</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
