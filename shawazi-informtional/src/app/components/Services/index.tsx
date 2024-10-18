import React from 'react';
import Image from 'next/image';

const Services = () => {
  return (
    <div className="font-jost mx-[3%] px-[3%] py-2 mb-16 mt-4">
      <section>
        <div id='Services'> </div>
        <div className="flex items-center justify-center mb-8">
          <hr className="w-1/4 sm:w-1/2 border-t-2 ml-4 border-[#3E1C00] mb-3" />
          <h1 className="mx-6 text-[30px] sm:text-[30px] md:text-[35px] font-bold lg:text-[35px] text-center">Services</h1>
          <hr className="w-1/4 sm:w-1/2 border-t-2 border-[#3E1C00] mb-3" />
        </div>
        <p className="text-center text-black mb-8 text-[16px] sm:text-[20px] md:text-3xl lg:text-[25px] mt-[4px]">
  Explore our services and their impact
</p>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mt-24">
          <div className="flex items-start max-w-[600px]">
            <div className="mr-4 flex-shrink-0">
              <Image src="/search.png" height={40} width={40} alt="Search" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
            </div>
            <div>
            <h3 className="text-[25px] sm:text-[16px] md:text-[25px] lg:text-[25px] font-semibold mb-1 text-secondary">Search</h3>
<p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[25px] text-black">
  Explore available land options, view detailed information, and gain insights about each property.
</p>
            </div>
          </div>

          <div className="flex items-start max-w-[600px]">
            <div className="mr-4 flex-shrink-0">
              <Image src="/contracts.png" height={40} width={40} alt="Contracts" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
            </div>
            <div>
              <h3 className="text-[25px] sm:text-[16px] md:text-[25px] lg:text-[25px] font-semibold mb-1 text-secondary">Contracts</h3>
              <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[25px] text-black">
                Efficient and secure transactions with smart contracts for automated, transparent agreements.
              </p>
            </div>
          </div>

          <div className="flex items-start max-w-[600px] mt-[10%]">
            <div className="mr-4 flex-shrink-0">
              <Image src="/transactions.png" height={40} width={40} alt="Transactions" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
            </div>
            <div>
              <h3 className="text-[25px] sm:text-[16px] md:text-[25px] lg:text-[25px] font-semibold mb-1 text-secondary">Transactions</h3>
              <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[25px] text-black">
                Enhanced security with encrypted communications, verified payments, and secure data storage for trustworthy transactions.
              </p>
            </div>
          </div>

          <div className="flex items-start max-w-[600px] mt-[10%]">
            <div className="mr-4 flex-shrink-0">
              <Image src="/negotiations.png" height={40} width={40} alt="Negotiations" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
            </div>
            <div>
              <h3 className="text-[25px] sm:text-[15px] md:text-[25px] lg:text-[25px] font-semibold mb-1 text-secondary">Negotiations</h3>
              <p className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[25px] text-black">
                Secure chatroom for negotiations, ensuring privacy and trust throughout the discussion. The chatroom allows users to invite their preferred lawyers to join the system.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;