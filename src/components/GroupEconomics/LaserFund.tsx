import React from 'react'
import backroundShado from '@/assets/background.png'
import logoPicture from "@/assets/logo/logo_3.png"
import Image from 'next/image'

export default function LaserFund() {
  return (
    <section className="bg-black text-white z-[1] md:mt-[100px] md:py-[110px] py-10 md:px-[200px] relative">
  <div 
    className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat opacity-30"
    style={{ backgroundImage: `url(${backroundShado?.src})` }}
  ></div>

  <div className="text-center  mt-5 mb-8">
    <div className="text-2xl md:flex justify-center items-center gap-5 ">
      <div className='md:w-1/2 text-left md:px-28 px-5 font-montserrat' >
                <h1 className='text-[16px] leading-7 font-normal'>LASER FUND PAMM is a private copy trader that seeks to capitalize on the intersection of advanced trading algorithms, data-driven decision-making, and market dynamics</h1>
                <h1 className='text-[16px] leading-7 font-normal mt-10'>By leveraging proprietary automation strategies, we aim to achieve consistent gains for our Participants while maintaining a disciplined approach to risk management. </h1>
                <h1 className='text-[16px] leading-7 font-normal mt-10'>Our PAMM is committed to delivering above-market returns through diversification, robust backtesting, and adaptive algorithms designed for various market conditions.</h1>
      </div>
      <div className='md:w-1/2 flex justify-center items-center mt-16 md:mt-0'>
                  <Image src={logoPicture} alt='picture leser found' width={700} height={700} className='h-full md:w-[350px] w-[200px]'/>
      </div>
    </div>
  </div>

  
</section>
  )
}
