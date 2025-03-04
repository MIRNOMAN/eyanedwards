import React from 'react'
// import backround_banner from "@/assets/logo/banner_backround.png"

export default function StartYourOwnFundding() {
  return (
    <div
    // style={{ backgroundImage: `url(${backround_banner.src})` }}
    className="relative   rounded-b-[50px] md:rounded-b-[110px] pt-[150px] md:pt-[233px] text-center bg-opacity-95 bg-black text-white py-12 md:py-10  bg-cover bg-center"
  >
    <h1 className="text-3xl container px-4 md:px-[100px] font-minion sm:text-4xl md:leading-[55px] md:text-[50px] font-semibold">Launch Your <span className='text-yellow-400'>7-Figure Funding Business</span> in 90 Days </h1>
   <div className="mt-4 ">
   <p className="  md:px-[255px]  px-5 font-montserrat text-lg text-center  relative container md:text-2xl font-normal mx-auto  tracking-widest  py-4">
   Start a Highly-Profitable Funding
 Business Today and earn six to seven figures helping
businesses and individuals secure the funding they
 need no experience Needed!
    </p>
   </div>

    <div className=" w-full  md:max-w-7xl mx-auto ">
    <div className="   mx-auto md:px-4">
    <iframe className="md:w-full w-full md:p-8 md:h-[550px] h-[280px] md:rounded-[70px] rounded-2xl" src="https://www.youtube.com/embed/tvciZcF6BPg?si=N4L5TRRWOI1-WaTq" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
    </div>

    <button className="mt-6 bg-yellow-500 md:text-[14px]  text-[12px] font-montserrat text-black md:px-6 px-4 py-3 rounded-lg hover:bg-yellow-600 transition-all duration-300">
    Get Your Complimentary financial Review
    </button>
  </div>
  )
}
