import React from 'react'
import Image from 'next/image'
import icon_1 from "@/assets/OurService/Vector_4.png"
import icon_2 from "@/assets/OurService/Vector_5.png"
import icon_3 from "@/assets/OurService/Vector_6.png"
import icon_4 from "@/assets/OurService/Vector_7.png"
import icon_5 from "@/assets/OurService/Vector_8.png"

const sections = [
    {
      icon: icon_1,
      title: "Coaching & Expert Guidance",
      content: (
        <h1 className='text-[16px] font-montserrat leading-7 font-bold mt-[33px]'>
          4 Weekly Coaching Calls: 
          <span className='text-[16px] leading-7 font-normal'>
             in your first month, get personalized strategies tailored to your business.
          </span>
        </h1>
      ),
      additional: (
        <h1 className='text-[16px] font-montserrat leading-7 font-bold py-[33px]'>
          Ongoing Support: 
          <span className='text-[16px] leading-7 font-normal'>
             Monthly coaching calls for the next two months to refine and scale your processes.
          </span>
        </h1>
      )
    },
    {
      icon: icon_2,
      title: "On-Demand Support",
      content: (
        <h1 className='text-[16px] font-montserrat leading-7 font-bold'>
          Text/Email Support: 
          <span className='text-[16px] leading-7 font-normal'>
            Have questions? Get personalized answers, Monday through Friday, for three months.
          </span>
        </h1>
      )
    },
    {
      icon: icon_3,
      title: "AI-Powered Business Coach",
      content: (
        <h1 className='text-[16px] font-montserrat leading-7 font-bold mt-[33px]'>
          90 Days of 24/7 Guidance: 
          <span className='text-[16px] leading-7 font-normal'>
             Our AI coach provides instant advice, tools, and action plans whenever you need them.
          </span>
        </h1>
      )
    },
    {
      icon: icon_4,
      title: "Client Acquisition Mastery Program",
      content: (
        <h1 className='text-[16px] font-montserrat leading-7 font-bold mt-[33px]'>
          1-Year Exclusive Access: 
          <span className='text-[16px] leading-7 font-normal'>
             Step-by-step video training for marketing, branding, and sales.
          </span>
        </h1>
      ),
      additional: (
        <h1 className='text-[16px] font-montserrat leading-7 font-bold mt-[33px]'>
          Real-World Results: 
          <span className='text-[16px] leading-7 font-normal'>
             Gain the confidence to attract, convert, and retain high-ticket clients.
          </span>
        </h1>
      )
    },
    {
      icon: icon_5,
      title: "White-Label License to Our Business",
      content: (
        <h1 className='text-[16px] font-montserrat leading-7 font-bold mt-[33px]'>
          Marketing Materials: 
          <span className='text-[16px] leading-7 font-normal'>
             Access professionally crafted resources to grow your brand.
          </span>
        </h1>
      ),
      additional: (
        <h1 className='text-[16px] font-montserrat leading-7 font-bold mt-[33px]'>
          Funding Products: 
          <span className='text-[16px] leading-7 font-normal'>
             Offer your prospects a diverse suite of funding solutions.
          </span>
        </h1>
      ),
      description: (
        <h1 className='text-[16px] font-montserrat leading-7 font-bold mt-[33px]'>
          Sales Team (Optional): 
          <span className='text-[16px] leading-7 font-normal'>
           Let our world-class sales team
          close deals for you, freeing up your time to scale faster.
          </span>
        </h1>
      )
    }
];

export default function WhatYouGet() {
  return (
    <div className="bg-gray-900 text-white   items-center p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <div 
            key={index} 
            className="bg-black flex justify-center gap-6 px-[44px] py-[66px] rounded-[70px] md:w-[571px] shadow-lg"
          >
            <div className="bg-primary p-6 h-[62px] w-[84px] flex items-center justify-center rounded-full">
              <Image 
                src={section.icon} 
                alt={section.title} 
                width={50} 
                height={50} 
                className="object-contain h-[28px] w-[44px] rounded-full"
              />
            </div>
            <div className="ml-4">
              <h2 className="text-[24px] font-minion leading-[55px] font-bold text-primary">
                {section.title}
              </h2>
              <div className="mt-2">{section.content}</div>
              {/* Render additional content only if it exists */}
              {section.additional && <div className="text-gray-400">{section.additional}</div>}
              <div className="mt-2">{section.description}</div>
              {/* Render additional content only if it exists */}
              {section.description && <div className="text-gray-400">{section.description}</div>}
              
            </div>
            
          </div>
          
        ))}
      </div>
      <div className="text-center w-full mt-6">
        <button className="bg-yellow-500 text-black py-2 px-6 rounded-full text-lg font-semibold transition-transform transform hover:scale-105">
          Your Journey Starts Here
        </button>
      </div>
    </div>
  );
}
