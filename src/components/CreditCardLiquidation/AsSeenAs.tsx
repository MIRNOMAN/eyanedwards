import Image from 'next/image';
import React from 'react'
import Branding_picture from "@/assets/home/branding.png";
import financial from "@/assets/logo/yellowBrick.png"

export default function AsSeenAs() {
  return (
    <div className="container w-full md:mb-[60px] mt-6 md:mt-[80px] flex flex-col items-center space-y-6 px-5  md:px-8 lg:px-28">
      {/* AS SEEN ON SECTION */}
      <div className="  rounded-2xl  text-center w-full ">
        <Image src={Branding_picture} className='h-full w-full' alt="As Seen On" width={900} height={900} />
      </div>

      {/* QUOTE SECTION */}
      <div className="bg-black text-white text-center md:py-[80px] md:px-[100px] p-5  rounded-3xl w-full ">
        <p className="text-lg font-minion  font-normal leading-5 md:leading-[55px] md:text-[32px]">
        “If your income provides for your upkeep, it will become your downfall
        </p>
        <p className="my-6  md:text-[35px] text-xl  text-[#E7A647] md:leading-[55px] font-adelia font-normal">Alexis Holifield</p>
        {/* DID YOU KNOW SECTION */}
        <div className="mt-8 mb-6">
          <p className="md:text-[28px] text-xl text-[#E7A647] md:leading-[45px] font-adelia font-normal">
            Did You Know?
          </p>
        </div>
        <div>
        <Image src={financial} className='h-full w-[40%] mx-auto' alt="logo finicial" width={900} height={900} />
        </div>
      </div>
    </div>
  )
}
