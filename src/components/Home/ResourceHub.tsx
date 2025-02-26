import React from 'react'
import Image from 'next/image';
import backroundShadopicture from "@/assets/background.png";
import pictureRacktange_1 from "@/assets/home/Rectangle_1.png"
import pictureRacktange_2 from "@/assets/home/Rectangle_2.png"
import pictureRacktange_3 from "@/assets/home/Rectangle_3.png"

const steps = [
    {
  
      description: "“How to Start a Profitable Business Funding Company”",
      image: pictureRacktange_3, // Add the correct image path
    },
{

  description: "“Why Putting God at the Center of Your Business is the Key to True Success”",
      image: pictureRacktange_2, // Add the correct image path
    },
    {
    
      description: " “The Ultimate Guide to Bank Funding for Entrepreneur How to Secure Capital for Your Business”",
      image: pictureRacktange_1, // Add the correct image path
    },
  ];
  

export default function ResourceHub() {
  return (
    <section className="bg-black text-white z-[1] md:mt-[100px] py-[20px] md:px-[220px] relative">
  <div 
    className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat opacity-30"
    style={{ backgroundImage: `url(${backroundShadopicture?.src})` }}
  ></div>

  <div className="text-center flex justify-between items-center md:mt-[40px] mt-[20px] mb-8">
    <div className="text-3xl font-minion flex-grow  md:text-[50px] text-[#E7A647] text-[20px] font-semibold md:leading-[56px]">
      <h1>Resource Hub</h1>
    </div>
  </div>

  <div className="flex flex-col md:mt-[124px] md:mb-[100px] mb-10 px-5 md:flex-row gap-[80px] justify-center items-center">
    {steps.map((step, index) => (
      <div key={index} className="bg-white md:h-[600px] h-[450px] rounded-[40px] shadow-md w-[300px] md:w-[400px]">
        <div className="flex items-center text-center">
          <Image
            src={step.image}
            alt={step.description}
            width={500}
            height={500}
            className="md:h-[400px] h-[300px]   w-full object-cover"
          />
        </div>
        <p className="text-[18px] md:py-[62px] py-5 md:px-[70px] px-5 font-minion text-black text-center leading-7 font-semibold">
          {step.description}
        </p>
      </div>
    ))}
  </div>
</section>

  )
}
