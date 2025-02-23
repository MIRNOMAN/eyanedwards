import Image from 'next/image';
import React from 'react'
import Branding_picture from "@/assets/home/branding.png";

interface BrandingSectionProps {
  children: React.ReactNode;
  title: string;
}

export default function BrandingSection({children, title}: BrandingSectionProps) {
  return (
    <div className="container w-full flex flex-col items-center space-y-6  md:px-8 lg:px-16">
      {/* AS SEEN ON SECTION */}
      <div className="  rounded-2xl p-6 text-center w-full ">
        <Image src={Branding_picture} className='h-full w-full' alt="As Seen On" width={900} height={900} />
      </div>

      {/* QUOTE SECTION */}
      <div className="bg-black text-white text-center p-6 rounded-3xl w-full ">
        <p className="text-sm font-normal leading-5 md:leading-[55px] md:text-[28px]">
          {children}
        </p>
        <p className="my-6 md:text-2xl text-xl  text-yellow-500 italic font-semibold">{title}</p>
      </div>
    </div>
  )
}
