import Banner from '@/components/reuseable/Banner'
import BrandingSection from '@/components/reuseable/BrandingSection'
import ReuseComponent from '@/components/reuseable/Component/ReuseComponent'
import Image from 'next/image'
import React from 'react'
import about_icon from "@/assets/home/icons/Vector.png";
import service_picture from "@/assets/OurService/patner.png";
import picture from "@/assets/OurService/What_You_Get.png";
import start_picture from "@/assets/OurService/start_now.png";
import pictureSection from "@/assets/OurService/What_makes_us_different.png";
import Card from '@/components/reuseable/Component/card'
import NoExperience from '@/components/OurService/NoExperience'
import DifferentSection from '@/components/OurService/DifferentSection'
import CustomExperience from '@/components/Home/CustomExperience'
import WhatYouGet from '@/components/OurService/WhatYouGet'


export default function page() {
  return (
    <div>
        <Banner
        subtitle="Start a Highly-Profitable Funding Business Today and earn six to seven figures helping businesses and individuals secure the funding they need no experience Needed!"
        videoSrc="/path-to-your-video.mp4" 
        buttonTitle ="Your Journey Starts Here"
        >
          Launch Your <span className='text-yellow-400'>7-Figure Funding Business</span> in 90 Days
        </Banner>

        <div className='py-[130px]'>
        <BrandingSection
              title="C.e.o, Founder"
              >82% of Entrepreneurs fail due to a lack of consistent cash flow, and 38% fail 
              due to running out of cash entirely. High Ticket Offer Financing is making it  possible for
              entrepreneurs to pursue their passions longer and without  running out of capital.</BrandingSection>
        </div>

        <ReuseComponent 
        leftContent={<div>
          <Image src={service_picture} width={500} height={500} alt="Your Image"  className="h-full w-full"/>
        </div>} 
        rightContent={
        <div className="md:text-left  px-7 md:px-0 text-center mt-[30px]">
          <div className="md:text-[40px] text-base font-semibold md:leading-[55px]">Why Partner with Us?</div>

          <div className="mt-[37px] space-y-[34px] md:space-y-[54px]">
          <div className="flex justify-start  gap-8">
          <Image src={about_icon} width={500} height={500} alt="Your Image"  className="md:h-[28px] h-[20px] md:w-[35px] w-[25px]"/>
          <h1 className="md:text-[22px] text-[14px]  text-[#4C4C4C]  font-semibold leading-7">Unlimited Product Suite: <span className="md:font-medium font-normal md:text-[16px] text-[14px]">We offer nearly 10 funding
            solutions, including 0% funding, no-doc lending, personal
            funding, business funding, Home Equity Lines of Credit,
            Access to Insurance Products, and more.</span></h1>
          </div>
          <div className="flex justify-start items-center gap-8 ">
          <Image src={about_icon} width={500} height={500} alt="Your Image"  className="md:h-[28px] h-[20px] md:w-[35px] w-[25px]"/>
          <h1 className="md:text-[22px] text-[14px]  text-[#4C4C4C]  font-semibold leading-7">Proven Success: <span className="md:font-medium font-normal md:text-[16px] text-[14px]"> From expert coaching to
              cutting-edge AI tools, we’ve got your back every step of
              the way.</span></h1>
          </div>
          <div className="flex justify-start items-center gap-8">
          <Image src={about_icon} width={500} height={500} alt="Your Image"  className="md:h-[28px] h-[20px] md:w-[35px] w-[25px]"/>
          <h1 className="md:text-[22px] text-[14px]  text-[#4C4C4C]  font-semibold leading-7">Unmatched Support:    <span className="md:font-medium font-normal md:text-[16px] text-[14px]">From expert coaching to
          cutting-edge AI tools, we’ve got your back every step of
          the way.</span></h1>
          </div>
          <div className="flex justify-start items-center gap-8">
          <Image src={about_icon} width={500} height={500} alt="Your Image"  className="md:h-[28px] h-[20px] md:w-[35px] w-[25px]"/>
          <h1 className="md:text-[22px] text-[14px]  text-[#4C4C4C]  font-semibold leading-7">Unlimited Potential:   <span className="md:font-medium font-normal md:text-[16px] text-[14px]">Leverage our white-label solutions to
          start and grow your business under your own brand.</span></h1>
          </div>
          
          </div>
        </div>
        }
      />
      <Card src={picture} alt="Description of the image" className="md:h-full md:w-[40%] px-6 md:px-0"/>
      <WhatYouGet/>
      <NoExperience/>
      <Card src={pictureSection} alt="Description of the image" className="md:h-full md:w-full px-6 md:px-0" />
      <DifferentSection/>
      <CustomExperience/>

      <ReuseComponent 
        leftContent={<div>
          <Image src={start_picture} width={500} height={500} alt="Your Image"  className="h-full w-full"/>
        </div>} 
        rightContent={
        <div className="md:text-left md:mt-[171px] mt-[71px] mx-auto px-6 md:px-0  text-center ">
          <div className="md:text-[50px] text-[30px]  text-base font-bold text-primary md:leading-[55px]">Get Started Today</div>

                <h1 className='mt-[55px] text-[20px] leading-7 font-medium tracking-wide'>Seats Are Limited. Take the first step towards building
                your high-ticket funding business.</h1>
                <button className="md:mt-[55px] mt-[35px] tracking-wide bg-yellow-500 text-black px-9 py-4 rounded-[16px] hover:bg-yellow-600 transition-all duration-300">
                Join Now
                </button>
          
        </div>
        }
      />
    </div>
  )
}
