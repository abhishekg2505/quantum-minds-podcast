"use client";

import { useState } from "react";
import axiosInstance from "@/src/lib/axiosInterceptor";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useRef } from "react";
import { Button } from "@/src/components/ui/button";
import { MoveRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidated = validateForm();
    // const { name, email, message } = formData;
    // if (!name || !email || !message) {
    //   toast.error("All fields are required");
    //   return;
    // }
    if (!isValidated) {
      return;
    }
    try {
      const response = await axiosInstance.post("/api/contact-us", formData);
      if (response.status === 200) {
        toast.success("Form submitted successfully");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name) newErrors.name = "* Name is required";
    if (!formData.email) newErrors.email = "* Email is required";
    if (!formData.message || formData?.message?.trim().length == 0)
      newErrors.message = "* Message is required";

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".video-wrapper", {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power2.out",
      }).from(
        ".form-wrapper",
        {
          opacity: 0,
          y: 70,
          duration: 1,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="rounded-lg bg-background">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex border border-violet-3 rounded-[30px] text-sm lg:text-base lg:rounded-[50px] overflow-hidden">
          <div className="w-2/5 hidden lg:block">
            <div className="video-wrapper relative h-full">
              <video
                autoPlay
                muted
                loop
                playsInline
                className={`absolute inset-0 w-full h-full object-cover`}
              >
                <source src="/videos/contact/contact-form-left.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="form-wrapper w-full lg:w-3/5 px-4 lg:px-12 py-8 lg:py-12">
            <form onSubmit={handleSubmit} className="lg:pt-16 space-y-6">
              {[
                { label: "Name", type: "text", name: "name", placeholder: "Enter your Name here" },
                {
                  label: "Email",
                  type: "email",
                  name: "email",
                  placeholder: "Enter your Email here",
                },
              ].map((field, index) => (
                <div key={index}>
                  <label htmlFor={field.name} className="block text-white-3 mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    className="w-full p-3 rounded-full bg-background border border-violet-3 text-white-3"
                  />
                  <p className="text-red-500">
                    {field.label === "Name" ? error.name : error.email}
                  </p>
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-white-3 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Leave your message here"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-[20px] min-h-48 bg-background border border-violet-3 text-white-3"
                />
                <p className="text-red-500">{error.message}</p>
              </div>
              <Button
                type="submit"
                className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]"
              >
                <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                  Submit
                  <MoveRight className="ml-2 w-5 h-5 text-[#ffffff] group-hover:text-[#601dff] transition-all duration-400 group-hover:translate-x-1" />
                </span>
              </Button>
            </form>
            <Toaster
              position="bottom-right"
              toastOptions={{
                style: {
                  background: "#1a1a1a",
                  color: "#fff",
                  borderRadius: "10px",
                },
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
