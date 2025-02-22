
import StaticBanner from '@/components/CreditCardLiquidation/StaticBanner'
import UltimateFundingPage from '@/components/CreditCardLiquidation/UltimateFundingPage'
import BrandingSection from '@/components/reuseable/BrandingSection'
import ReuseComponent from '@/components/reuseable/Component/ReuseComponent'
import vectorIcon from '@/assets/CreditCard/vector_10.png'
import Image from 'next/image'
import React from 'react'
import HtofInsuranceSolutions from '@/components/CreditCardLiquidation/HtofInsuranceSolutions'

export default function page() {
  return (
    <div>
        <StaticBanner/>
        <UltimateFundingPage/>
        <BrandingSection
              title="Alexis  Holifield"
              >“If your income provides for your upkeep, it will become your downfall</BrandingSection>

        <ReuseComponent 
        leftContent={<div className='md:p-10'>
          <Image src={vectorIcon} width={500} height={500} alt="Your Image"  className="h-full w-full"/>
        </div>} 
        rightContent={
        <div className="md:text-left mx-auto md:p-10 md:mr-48 md:px-0  text-center mt-[60px]">
          <p className="md:text-[18px] text-base font-medium md:pt-[120px]  tracking-wide md:leading-[27px]">Here at HTOF Insurance Solutions, we understand the hard work it takes to build your success. Whether you’re a driven professional or a visionary entrepreneur, your wealth represents years of dedication, passion, and perseverance.</p>
          <button className=" px-16 py-3 bg-yellow-600 text-white font-semibold rounded-2xl mt-[65px] hover:bg-yellow-700">
          Get Your Complimentary financial Review
        </button>
        </div>
        }
      />    

      <HtofInsuranceSolutions/>  
    </div>
  )
}
