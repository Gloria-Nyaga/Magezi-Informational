"use client"

import React from "react";
import { Check, Mail, Phone } from "lucide-react";
const Contact= () => {
  return (
    <div className="px-2 sm:px-6 lg:px-40 py-4 sm:py-6 font-jost mt-10">
      <h1 className="font-bold text-center text-primary mb-2 sm:mb-3 text-lg sm:text-[30px]">
        Transparent Land Registration Made Easy
      </h1>
      <p className="text-center sm:mb-6 text-[16px] sm:text-[25px] text-black">
        Streamline Your Land Transactions with Our Secure and Efficient System
      </p>
      <div className="w-full mt-10 flex flex-col md:flex-row bg-secondary-light border-foreground rounded-lg overflow-hidden">
      <div className="flex-grow p-4 sm:p-6 text-lg sm:text-[16px] border-foreground sm:ml-30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-lg border-foreground border-foregroundsm:text-[16px] ">
          {[
            "User Friendly Interface",
            "Secure Transactions",
            "Smart Contracts",
            "Chat Rooms",
            "Legal Support",
            "Transparency",
            "Data Integrity",
          ].map((feature, index) => (
            <div key={index} className="flex items-center p-2 border-foreground">
              <div className="w-7 h-7 rounded-full  border-foreground flex items-center justify-center mr-2">
              <Check className="w-5 h-5 text-foreground bg-white border border-foreground rounded-full flex items-center justify-center" />

              </div>
              <span className="text-[16px] sm:text-[25px]">{feature}</span>
            </div>
          ))}
        </div>
      </div>


        <div className="bg-secondary p-4">
          {" "}
          <h2 className="font-bold mb-6 text-primary text-[20px] sm:text-[30px]">
            Contact Information
          </h2>
          <div className="space-y-4">
            <p className="flex items-center text-[20px] sm:text-[25px] gap-x-3">
              <Mail className="w-6 h-6 flex-shrink-0" />
              <span className="text-[16px] sm:text-[25px]">
                Email Address: <br />
                shawazi5@gmail.com
              </span>
            </p>
            <p className="flex items-center text-[20px] sm:text-[25px] gap-x-3">
              <Phone className="w-6 h-6 flex-shrink-0" />
              <span className="text-[16px] sm:text-[25px]">
                Phone Number: <br />
                +254 704264110
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;