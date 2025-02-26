import Image from 'next/image'
import React from 'react'
import about_icon from "@/assets/home/icons/Vector.png";

export default function WhyPartner() {
  return (
    <section className=" bg-black text-white py-12 px-4 md:px-2">
      <div className='container'>
      <div className="">
        <h2 className="text-3xl md:text-[50px] py-[30px] md:leading-[60px] font-semibold font-minion md:py-[100px]  text-[#D69E2E] mb-8">
        Why Partner with High Ticket Offer Financing?
        </h2>
        {/* first */}
        <div className="flex flex-col md:flex-row items-start  gap-4  md:gap-6">
          <div className="flex items-center text-[#D69E2E]">
          <Image src={about_icon} width={500} height={500} alt="Your Image"  className="md:h-[28px] h-[20px] md:w-[40px] w-[25px]"/>
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-lg font-montserrat md:text-[22px] md:leading-[29px]">Comprehensive Coaching</h3>
            <p className="font-normal font-montserrat text-lg tracking-normal md:text-[16px] mt-[30px] md:leading-[29px]">
              We provide 1:1 weekly coaching calls to help you navigate the startup process
              and scale your business quickly.
            </p>
          </div>
        </div>

        {/* second */}
        <div className="flex flex-col md:flex-row items-start mt-[65px]  gap-4  md:gap-6">
          <div className="flex items-center text-[#D69E2E]">
          <Image src={about_icon} width={500} height={500} alt="Your Image"  className="md:h-[28px] h-[20px] md:w-[40px] w-[25px]"/>
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-lg font-montserrat md:text-[22px] md:leading-[29px]">On-Demand Support</h3>
            <p className="font-normal font-montserrat text-lg tracking-normal md:text-[16px] mt-[30px] md:leading-[29px]">
            Get instant, actionable guidance with our 24/7 AI assistant and personalized text/email support for 3 months.
            </p>
          </div>
        </div>

        {/* third */}
        <div className="flex flex-col md:flex-row items-start mt-[65px]  gap-4  md:gap-6">
          <div className="flex items-center text-[#D69E2E]">
          <Image src={about_icon} width={500} height={500} alt="Your Image"  className="md:h-[28px] h-[20px] md:w-[40px] w-[25px]"/>
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-lg font-montserrat md:text-[22px] md:leading-[29px]">Client Acquisition Mastery</h3>
            <p className="font-normal font-montserrat text-lg tracking-normal md:text-[16px] mt-[30px] md:leading-[29px]">
            Access proven marketing strategies and step-by-step video training to attract and close clients effectively.
            </p>
          </div>
        </div>


        {/* fourth */}
        <div className="flex flex-col md:flex-row items-start mt-[65px]  gap-4  md:gap-6">
          <div className="flex items-center text-[#D69E2E]">
          <Image src={about_icon} width={500} height={500} alt="Your Image"  className="md:h-[28px] h-[20px] md:w-[40px] w-[25px]"/>
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-lg font-montserrat md:text-[22px] md:leading-[29px]">White-Label Business Model</h3>
            <p className="font-normal font-montserrat text-lg tracking-normal md:text-[16px] mt-[30px] md:leading-[29px]">
            Use our professionally designed marketing materials and funding solutions under your own brand.
            </p>
          </div>
        </div>


        {/* five */}
        <div className="flex flex-col md:flex-row items-start mt-[65px]  gap-4  md:gap-6">
          <div className="flex items-center text-[#D69E2E]">
          <Image src={about_icon} width={500} height={500} alt="Your Image"  className="md:h-[28px] h-[20px] md:w-[40px] w-[25px]"/>
          </div>
          <div className="text-left md:mb-[75px] mb-[30px]">
            <h3 className="font-semibold text-lg font-montserrat md:text-[22px] md:leading-[29px]">Scalable Income Potential</h3>
            <p className="font-normal font-montserrat text-lg tracking-normal md:text-[16px] mt-[30px] md:leading-[29px]">
            With a wide range of funding solutions, you can serve more clients and maximize your earnings.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
