"use client";
import { Button } from "@/src/components/ui/button";
import axiosInstance from "@/src/lib/axiosInterceptor";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React, { MouseEventHandler, useState } from "react";
import toast, { ToastBar, Toaster } from "react-hot-toast";

const Pulse = () => {
  const formObj = {
    fullName: "Not Needed",
    email: "",
    company: "Not Needed",
    designation: "Not Needed",
    country: "Not Needed",
    call: "yes",
  };
  const [formData, setFormData] = useState(formObj);
  const [hasError, setHasError] = useState(false);
  const handleSubmit = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(formData.email)) {
      const response = await fetch("/api/newsletter-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          response.json();
          if (response.status === 200 || response.status === 201) {
            setFormData(formObj);
            toast.success("Form submitted successfully");
          }
        })
        .catch((error) => {
          toast.error("Error Occured");
        });
    } else {
      setHasError(true);
      toast.error("Invalid Email");
    }
  };

  return (
    <section
      id="newsletter"
      className="scroll-mt-24 px-4 pt-[60px] pb-[120px] rounded-[20px] container mx-auto"
    >
      <div className="bg-roadshow-border p-[1px] mx-auto rounded-[20px]">
        <div className="relative pt-[40px] pb-[60px] px-4 md:px-20 rounded-[20px] bg-[url('/images/ecosystem/pulse-callout.webp')] bg-cover bg-center">
          <div className="relative z-10 mx-auto">
            <div className="flex flex-col items-center">
              <Image
                src="/images/resources/pulse.svg"
                alt="pulse logo"
                width={226}
                height={114}
                className="mx-auto md:mx-0"
              />
              <h2 className="pt-10 text-white text-h6 md:text-h3 font-montserrat font-medium md:font-semibold">
                Subscribe to Pulse, our monthly newsletter
              </h2>
              <p className="max-w-[674px] pt-2.5 text-left lg:text-center text-white text-p2 font-open-sans">
                Stay ahead with insights that matter. Get the latest updates on quantum security,
                Web3 innovation, and everything shaping the future of blockchain delivered straight
                to your inbox.
              </p>
              <div className="pt-10 flex flex-col lg:flex-row gap-2.5 relative">
                <input
                  type="email"
                  placeholder="Email here"
                  className={`w-full sm:w-[357px] px-5 py-[10px] rounded-full bg-background text-buttons text-white-1 placeholder-white-1 focus:outline-none focus:ring-2 transition-all duration-300 border ${
                    hasError
                      ? "border-red-500 focus:ring-red-500"
                      : "border-[#573F77] focus:ring-white"
                  }`}
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formObj, email: e.target.value });
                    setHasError(false);
                  }}
                />
                <Button
                  className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]"
                  onClick={handleSubmit}
                >
                  <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                  <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                    Subscribe
                    <MoveRight className="ml-2 w-5 h-5 text-[#ffffff] group-hover:text-[#601dff] transition-all duration-400 group-hover:translate-x-1" />
                  </span>
                </Button>

                {/* Move Toaster here */}
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
        </div>
      </div>
    </section>
  );
};

export default Pulse;
