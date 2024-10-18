"use client";
import Image from 'next/image';

const LandingPage = () => {
  return (
    <>
      <main className=" p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-white flex flex-col items-center mx-auto max-w-9xl mb-90 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10">
        <div
          id="home"
          className="flex flex-col md:flex-row items-stretch justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 mt-4"
        >
          <div className="flex-1 flex flex-col justify-center md:text-left md:ml-4 lg:ml-10">
            <h1 className="text-3xl sm:text-5xl md:text-4xl lg:text-4xl xl:text-5xl xl:mb-1 2xl:text-7xl text-[#508408] font-bold mb-3 2xl:mb-16">
              Transparent Land Transactions
            </h1>


<div className="flex-grow flex flex-col justify-center">
  <p className="text-base sm:text-lg md:text-lg lg:text-[25px] xl:text-[25px] 2xl:text-2.5xl text-black mb-3 2xl:mb-16 md:text-left">
  Experience a seamless and transparent process in land registration
  and transactions. Empowering buyers and sellers with trust and
  efficiency.
</p>
</div>

<div className="flex flex-row gap-2 sm:gap-4 mt-4 md:mt-5 justify-start">
  <button className="px-2 py-1 sm:px-4 sm:py-2 md:px-4 md:py-2 lg:px-10 lg:py-4 bg-[#3E1C00] text-white font-bold shadow-md hover:bg-[#D3B683] rounded-lg text-sm lg:text-[25px] 2xl:text-lg">
    Sign Up for Free
  </button>
  <button className="px-2 py-1 sm:px-4 sm:py-2 md:px-4 md:py-2 lg:px-10 lg:py-4 border-2 border-[#3E1C00] text-[#3E1C00] font-bold shadow-md hover:bg-[#D3B683] hover:text-white rounded-lg text-sm lg:text-[25px] 2xl:text-lg">
    Learn More
  </button>
</div>

          </div>
          <div className="flex-1 flex items-center mt-2 justify-center md:justify-start md:mr-4 lg:mr-8">
            < Image src="/images/land-image.jpg"
              width={500}
              height={40}
              alt="Land Image"
              className="w-full h-full object-cover md:max-h-[400px] lg:max-h-[500px] 2xl:max-h-[600px] md:max-w-[100%] lg:max-w-[100%] 2xl:max-w-[100%] md:object-cover rounded-lg md:rounded-xl lg:rounded-2xl" // Adjusting border radius for larger screens
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default LandingPage;