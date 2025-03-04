import React from 'react'
import backroundShado from '@/assets/background.png'

export default function HtofInsuranceSolutions() {
  return (
    <section className="relative w-full   text-white py-12 ">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover  bg-center opacity-30"
     
    ></div>
    
    {/* Content */}
    <div className=''>
    <div className="relative  text-center md:py-[100px] p-6 md:p-0 z-[1] bg-black" >
        <div style={{ backgroundImage: `url(${backroundShado.src})` }} className='absolute inset-0 z-[-1] opacity-20'></div>
      <h2 className="text-2xl md:text-4xl font-bold font-minion text-yellow-500">Yellowbrick Financial</h2>
      <p className="text-xl md:text-2xl md:font-bold font-medium font-montserrat tracking-widest text-white leading-7 mt-3">WHY CHOOSE US</p>
      <p className="text-base text-start mt-[25px] md:text-[20px] font-montserrat font-normal md:px-[274px] md:leading-[35px] md:tracking-widest">
      From customized policies tonwealth preservation, legacy planning, and expert guidance, true financial
security begins with understanding how to protect your wealth in ways that outpace inflation, grow your
assets aggressively without risking your principal, and create a lasting legacy for future generations. By
mastering these principles, you can ensure your heirs build upon your achievements rather than starting
from scratch.
      </p>

      <p className="text-base text-start mt-[25px] md:text-[20px] font-montserrat font-normal md:px-[274px] md:leading-[35px] md:tracking-widest">
      At Yellowbrick, we are dedicated to equipping you with the tools, insights, and strategies to not only live a
      life of purpose and financial freedom but also leave a legacy that endures.
      </p>
      <button className="mt-6 bg-yellow-500 font-montserrat text-black font-normal px-6 py-3 rounded-2xl hover:bg-yellow-600 transition-all duration-300">
      Complimentary Financial Review
    </button>
    </div>
    </div>
    


  </section>
  )
}
