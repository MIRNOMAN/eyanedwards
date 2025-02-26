import React from 'react'

export default function TheLaserFundPamm() {
  return (
    <section className="relative w-full   text-white py-12 ">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover  bg-center opacity-30"
     
    ></div>
    
    {/* Content */}
    <div className=''>
    <div className="  text-center md:py-[100px] p-6 md:p-0  bg-white" >
      <h2 className="text-3xl md:text-[50px] md:leading-[55px] font-bold font-minion text-[#AA7C38]">The Laser Fund Pamm</h2>
      <p className="text-base text-center md:my-[40px] my-[20px] md:text-[20px] text-black font-montserrat font-normal md:px-[510px] md:leading-[45px] tracking-widest">
      Discover how licensed financial professionals are achieving 5-10% monthly returns passively with this cutting-edge automatic trading algorithm
      </p>
      <button className="mt-6 bg-yellow-500 text-[16px] md:leading-[29px] font-montserrat text-black font-normal px-6 py-3 rounded-2xl hover:bg-yellow-600 transition-all duration-300">
      Review Disclaimer
    </button>
    </div>
    </div>
    


  </section>
  )
}
