import BlogBanner from '@/components/Blog/BlogBanner'
import ReuseComponent from '@/components/reuseable/Component/ReuseComponent'
import paterIcon from "@/assets/OurService/patner.png"
import Image from 'next/image'
import React from 'react'
import about_icon from "@/assets/home/icons/Vector.png";
import KeySteps from '@/components/Blog/KeySteps'

export default function page() {
  return (
    <div>
      <BlogBanner/>

      <div className='bg-black py-[50px]'>
      <ReuseComponent 
        leftContent={
        <div className="md:text-left px-7 md:px-0 text-center mt-[50px]">
        <div className="md:text-[45px] text-base text-[#E7A647] font-minion font-semibold md:leading-[55px]">Why Start a Funding Company?</div>
        <div><h1 className='text-[16px] font-normal leading-[29px] font-montserrat py-[50px] text-white'>The need for business and personal funding has skyrocketed in recent years. Small businesses and entrepreneurs often face challenges accessing traditional bank loans, creating a massive demand for alternative funding solutions. By providing these solutions, you can</h1></div>
        <div className="mt-[37px] space-y-[24px] md:space-y-[64px]">
        <div className="flex justify-start  gap-8">
        <Image src={about_icon} width={500} height={500} alt="Your Image"  className="md:h-[28px] h-[20px] md:w-[35px] w-[25px]"/>
        <h1 className="md:text-[22px] text-[14px]  text-white  font-semibold font-montserrat leading-7">Earn substantial commissions on every deal</h1>
        </div>
        <div className="flex justify-start items-center gap-8 ">
        <Image src={about_icon} width={500} height={500} alt="Your Image"  className="md:h-[28px] h-[20px] md:w-[35px] w-[25px]"/>
        <h1 className="md:text-[22px] text-[14px]  text-white font-montserrat font-semibold leading-7">Help businesses achieve their goals and grow.</h1>
        </div>
        <div className="flex justify-start items-center gap-8 ">
        <Image src={about_icon} width={500} height={500} alt="Your Image"  className="md:h-[28px] h-[20px] md:w-[35px] w-[25px]"/>
        <h1 className="md:text-[22px] text-[14px]  text-white font-montserrat font-semibold leading-7">Build a scalable, recession-proof business.</h1>
        </div>
        </div>
      </div>
      } 
        rightContent={
          <div className='md:ml-[100px] mt-[50px] md:mt-[100px]'>
          <Image src={paterIcon} width={500} height={500} alt="Your Image"  className=" md:h-[400px] md:w-[400px] h-full w-full"/>
        </div>
        }
      />
      </div>

      <KeySteps />
    </div>
  )
}
