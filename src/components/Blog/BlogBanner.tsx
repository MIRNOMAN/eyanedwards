import React from 'react'

export default function BlogBanner() {
  return (
    <div className="container mx-auto p-6 md:p-12 mt-[200px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px]">
        {/* Large Section */}
        <div className="md:col-span-2 bg-[#D9D9D9] h-64 md:h-[600px] rounded-2xl"></div>
        
        {/* Small Sections */}
        <div className="flex flex-col gap-[50px]">
          <div className="bg-gray-400 h-28 bg-[#ABABAB] md:h-[180px] rounded-2xl"></div>
          <div className="bg-gray-400 h-28 bg-[#ABABAB] md:h-[180px] rounded-2xl"></div>
        </div>
      </div>

      {/* Text Section */}
      <div className="mt-8 ">
        <h2 className="text-xl md:text-[50px] font-semibold md:leading-[60px] md:pt-[50px] text-[#AA7C38] font-minion text-gray-800">
          How to Start a Profitable Funding Business
        </h2>
        <p className="mt-4 text-gray-600 text-sm md:text-[16px] md:pr-[470px] font-normal md:leading-[29px]   md:pb-[50px]">
          Are you an entrepreneur seeking a lucrative opportunity in the financial services industry? 
          Starting a funding company might be the perfect path to building a scalable and high-income business. 
          With the right strategies, resources, and systems in place, you can tap into the multi-billion-dollar business 
          funding market. In this guide, we’ll cover everything you need to know about starting a funding company, 
          why it’s a high-demand industry, and how High Ticket Offer Financing can help you fast-track your success.
        </p>
      </div>
    </div>
  )
}
