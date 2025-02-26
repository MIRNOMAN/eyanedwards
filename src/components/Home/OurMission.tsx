import Image from 'next/image'
import React from 'react'
import backroundShado from '@/assets/background.png'
import mission_1 from '@/assets/home/our_mission_1.png'
import mission_2 from '@/assets/home/our_mission_2.png'


export default function OurMission() {
  return (
    <section className="relative w-full  text-white py-12 ">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-30"
     
    ></div>
    
    {/* Content */}
    <div className=''>
    <div className="relative  text-center md:py-[100px] z-[1] bg-black" >
        <div style={{ backgroundImage: `url(${backroundShado.src})` }} className='absolute inset-0 z-[-1] opacity-20'></div>
      <h2 className="text-2xl md:text-[50px] md:leading-[55px] font-bold md:py-[5px] font-minion py-[25px] text-yellow-500">Our Mission</h2>
      <p className="text-lg text-center py-[25px] md:py-[5px]  md:text-[40px] font-normal font-montserrat md:px-[374px] md:leading-[50px] tracking-widest">
        Empowering businesses and individuals with financial solutions to bring dreams to life.
      </p>
    </div>
    </div>
    
    {/* Image Section */}
    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 ">
      <Image
        src={mission_1}
        alt="Luxury Yacht"
        width={600}
        height={600}
        className="w-full h-full object-cover"
      />
      <Image
        src={mission_2}
        alt="Luxury Cars"
        width={600}
        height={600}
        className="w-full h-full object-cover"
      />
    </div>
  </section>
  )
}
