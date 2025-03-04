import BlogBanner from '@/components/Blog/BlogBanner'
import ReuseComponent from '@/components/reuseable/Component/ReuseComponent'
import paterIcon from "@/assets/OurService/patner.png"
import Image from 'next/image'
import React from 'react'
import about_icon from "@/assets/home/icons/Vector.png";
import KeySteps from '@/components/Blog/KeySteps'
import WhyPartner from '@/components/Blog/WhyPartner'
import HowMuch from '@/components/Blog/HowMuch'
import GetStartedToday from '@/components/Blog/GetStartedToday'
import FaithBusinessSection from '@/components/Blog/FaithBusinessSection'

export default function page() {
  return (
    <div>
      <BlogBanner/>

      <div className='bg-black py-[20px] md:py-[50px]'>
      <ReuseComponent 
        leftContent={
        <div className="md:text-left md:px-7 md:px-0 text-center md:mt-[50px]">
        <div className="md:text-[45px] text-xl text-[#E7A647] font-minion font-semibold md:leading-[55px]">Why Start a Funding Company?</div>
        <div><h1 className='md:text-[16px] text-[13px] font-normal leading-[29px] tracking-normal font-montserrat py-[20px] md:py-[50px] text-white'>The need for business and personal funding has skyrocketed in recent years. Small businesses and entrepreneurs often face challenges accessing traditional bank loans, creating a massive demand for alternative funding solutions. By providing these solutions, you can</h1></div>
        <div className="mt-[37px] space-y-[14px] md:space-y-[64px]">
        <div className="flex justify-start gap-4  md:gap-8">
        <Image src={about_icon} width={500} height={500} alt="Your Image"  className="md:h-[28px] h-[20px] md:w-[35px] w-[25px]"/>
        <h1 className="md:text-[22px] text-[13px]  text-white text-left font-semibold font-montserrat leading-7">Earn substantial commissions on every deal</h1>
        </div>
        <div className="flex justify-start items-center gap-8 ">
        <Image src={about_icon} width={500} height={500} alt="Your Image"  className="md:h-[28px] h-[20px] md:w-[35px] w-[25px]"/>
        <h1 className="md:text-[22px] text-[13px] text-left text-white font-montserrat font-semibold leading-7">Help businesses achieve their goals and grow.</h1>
        </div>
        <div className="flex justify-start items-center gap-8 ">
        <Image src={about_icon} width={500} height={500} alt="Your Image"  className="md:h-[28px] h-[20px] md:w-[35px] w-[25px]"/>
        <h1 className="md:text-[22px] text-[13px] text-left  text-white font-montserrat font-semibold leading-7">Build a scalable, recession-proof business.</h1>
        </div>
        </div>
      </div>
      } 
        rightContent={
          <div className='md:ml-[150px] mt-[50px] md:mt-[100px]'>
          <Image src={paterIcon} width={500} height={500} alt="Your Image"  className=" md:h-[400px] md:w-[400px] h-full w-full"/>
        </div>
        }
      />
      </div>

      <KeySteps />
      <FaithBusinessSection/>
      <WhyPartner/>
      <HowMuch/>
      <GetStartedToday/>
    </div>
  )
}
