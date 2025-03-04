import React from 'react'

export default function BlogBanner() {
  return (
    <div className="container mx-auto p-6 md:p-12 mt-[120px] md:mt-[200px]">
      <div className="grid grid-cols-1 md:grid-cols-3 md:space-x-[100px] space-y-14 md:space-y-0">
        {/* Large Section */}
        <div className="md:col-span-2 h-64 md:h-[600px]  rounded-2xl">
        <iframe className="md:w-full w-full md:h-full h-[280px] md:rounded-[30px] rounded-2xl" src="https://www.youtube.com/embed/mRKJTzM-qTk?si=I4ACGMsJGhCJ8F7s" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div>
        
        {/* Small Sections */}
        <div className="md:flex flex-col hidden  md:gap-[40px]  md:space-y-0">
          <div className="bg-gray-400 h-28  md:h-[200px] md:w-[300px] rounded-2xl">
          <iframe className="md:w-full w-full md:h-full h-[280px] md:rounded-[30px] rounded-2xl" src="https://www.youtube.com/embed/mRKJTzM-qTk?si=I4ACGMsJGhCJ8F7s" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          </div>
          <div className="bg-gray-400 h-28  md:h-[200px] md:w-[300px] rounded-2xl">
          <iframe className="md:w-full w-full md:h-full h-[280px] md:rounded-[30px] rounded-2xl" src="https://www.youtube.com/embed/mRKJTzM-qTk?si=I4ACGMsJGhCJ8F7s" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          </div>
        </div>
      </div>
 
      {/* Text Section */}
      <div className="md:mt-[20px]  mt-[100px]">
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
