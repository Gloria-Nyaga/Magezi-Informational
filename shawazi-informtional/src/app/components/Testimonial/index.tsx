"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
const ratingsData = [
  {
    text: "This land registration system revolutionized my property transaction experience. From searching for land details to finalizing the contract, the process was transparent and efficient. The integration of Google Cloud Vision for payment verification assured me of the system's reliability.",
    author: "Nyaga Gloria",
    role: "Real Estate Investor",
    image: "/images/gloria.jpg"
  },
  {
    text: "The service was outstanding! I found exactly what I was looking for and the support team was incredibly helpful.",
    author: "Valentine Nkatha",
    role: "Home owner",
    image: "/images/valentine.jpg"
  },
  {
    text: "The Shawazi platform made my property search so much easier. The support team was quick to assist, and I had a seamless experience throughout.",
    author: "Brenda Khamali",
    role: "Home owner",
    image: "/images/brenda.jpg"
  },
  {
    text: "Shawazi service was outstanding! I found exactly what I was looking for and the support team was incredibly helpful. It was easier and fast and I highly recommend it.",
    author: "Maureen Gatweri",
    role: "Land seller",
    image: "/images/maureen.png"
  },
];
const Ratings = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? ratingsData.length - 1 : prevIndex - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === ratingsData.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <div className="w-full px-2 sm:px-4 lg:px-16 py-10 font-jost">
      <div className="m-10 mb-4">
        <div className="flex items-center justify-center mb-8">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-6 h-6 text-secondary" fill="currentColor" />
          ))}
        </div>
        <div className="flex items-center mb-4 justify-between">
          <button
            className="w-8 h-8 sm:w-10 sm:h-10 text-black border border-gray-400 rounded-lg flex items-center justify-center cursor-pointer mx-1"
            onClick={handlePrev}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <p className="text-[16px] sm:text-[25px] text-black text-center mx-2 flex-grow">
            {ratingsData[currentIndex].text}
          </p>
          <button
            className="w-8 h-8 sm:w-10 sm:h-10 text-black border border-gray-400 rounded-lg flex items-center justify-center cursor-pointer mx-1"
            onClick={handleNext}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center mt-8">
          <div className="flex items-center gap-x-3 sm:gap-x-6">
            <Image src={ratingsData[currentIndex].image} height={400} width={400} alt={ratingsData[currentIndex].author} className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mr-4" />
            <div className='text-[16px] sm:text-[25px]'>
              <p className="font-semibold">{ratingsData[currentIndex].author}</p>
              <p className="text-black">{ratingsData[currentIndex].role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ratings;