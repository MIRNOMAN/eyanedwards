import React from 'react'
import ReuseComponent from '../reuseable/Component/ReuseComponent'
import Image from 'next/image'
import start_picture from "@/assets/OurService/start_now.png";

export default function GetStartedToday() {
  return (
    <div className='bg-black  md:py-[77px] py-5'>
        <ReuseComponent 
        leftContent={
    <div className="md:text-left md:mt-[71px] mt-[2px] mx-auto px-6 md:px-0  text-center ">
          <div className="md:text-[50px] text-[28px]  text-base font-bold text-primary leading-[35px] font-minion md:leading-[55px]">Ready to get started?</div>

                <h1 className='mt-[43px] md:mr-[280px] tracking-wide md:text-[16px] text-[13px] leading-7 text-white font-montserrat font-normal '>Visit High Ticket Offer Financing today and take the first step toward launching your 7-figure funding company.</h1>
                <button className="md:mt-[43px] mt-[35px] font-montserrat tracking-wide bg-yellow-500 text-black px-9 py-3 rounded-[16px] hover:bg-yellow-600 transition-all duration-300">
                Start Now
                </button>
          
        </div>    
    } 
        rightContent={
            <div>
            <Image src={start_picture} width={500} height={500} alt="Your Image"  className="mx-auto md:h-[426px] h-[226px] w-[226px] md:w-[426px] mt-10 md:mt-0"/>
          </div>
        }
      />
    </div>
  )
}
