import React from 'react'
import backroundShado from '@/assets/background.png'

export default function The_Laser_Fund_Pamm() {
  return (
    <section className="relative w-full   text-white py-12 ">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover  bg-center opacity-30"
     
    ></div>
    
    {/* Content */}
    <div className=''>
    <div className="relative  text-center md:py-[150px] p-6 md:p-0 z-[1] bg-black" >
        <div style={{ backgroundImage: `url(${backroundShado.src})` }} className='absolute inset-0 z-[-1] opacity-20'></div>
        <p className="text-xl md:text-2xl md:font-bold font-medium font-montserrat tracking-widest text-white leading-7 mt-3">TO ADDRESS THESE CHALLENGES</p>
      <h2 className="md:text-3xl text-2xl md:text-[50px] font-bold mt-[30px] md:leading-[55px] font-minion text-yellow-500">The Laser Fund Pamm</h2>
      
      <p className="text-base text-center mt-[25px] md:text-[16px] font-montserrat font-normal md:px-[570px] leading-[29px] tracking-widest">
      Adheres to stringent company mandates and collaborates exclusively with carefully selected, reputable brokers.
      </p>
      
    </div>
    </div>
    


  </section>
  )
}
