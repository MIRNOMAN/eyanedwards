
import React from 'react'
import backroundShado from '@/assets/background.png'



export default function NoExperience() {
  return (
    <section className="relative w-full  text-white py-12 ">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-30"
     
    ></div>
    
    {/* Content */}
    <div className=''>
    <div className="relative  text-center px-6 md:px-0 md:py-[100px] py-10 z-[1] bg-black" >
        <div style={{ backgroundImage: `url(${backroundShado.src})` }} className='absolute inset-0 z-[-1] opacity-20'></div>
      <h2 className="text-3xl md:text-4xl font-bold font-minion text-yellow-500">No Experience Needed</h2>
      <p className="text-base text-center mt-[25px] md:text-[20px] font-montserrat font-normal md:px-[374px] md:leading-[50px] md:tracking-widest">
      You don’t need years of experience or a big budget to start
      your own funding business. You just need the right partner. High Ticket Offer Financing empowers you with everything you need to build a sustainable, high-revenue business.
      </p>
    </div>
    </div>
    


  </section>
  )
}
