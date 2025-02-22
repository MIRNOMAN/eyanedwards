import React from 'react';
import Image from 'next/image';
import pictureSection1 from "@/assets/CreditCard/Meet_The_Team.png";
import vectorIcon from '@/assets/CreditCard/vector_10.png';
import Image1 from "@/assets/CreditCard/Rectangle3.png";
import Image2 from "@/assets/CreditCard/Rectangle4.png";
import Image3 from "@/assets/CreditCard/vecteezy.png";  // Fixed double slash issue
import Image4 from "@/assets/CreditCard/Rectangle5.png";

import StaticBanner from '@/components/CreditCardLiquidation/StaticBanner';
import UltimateFundingPage from '@/components/CreditCardLiquidation/UltimateFundingPage';
import BrandingSection from '@/components/reuseable/BrandingSection';
import ReuseComponent from '@/components/reuseable/Component/ReuseComponent';
import HtofInsuranceSolutions from '@/components/CreditCardLiquidation/HtofInsuranceSolutions';
import Card from "@/components/reuseable/Component/card";
import MeetTeamReuseable from "@/components/reuseable/MeetTeam/MeetTeamReuseable";
import ClientSuccessStories from "@/components/CreditCardLiquidation/ClientSuccessStories";

export default function Page() {
  return (
    <div>
      <StaticBanner />
      <UltimateFundingPage />
      
      <BrandingSection title="Alexis Holifield">
        &quot;If your income provides for your upkeep, it will become your downfall&quot;
      </BrandingSection>

      <ReuseComponent 
        leftContent={
          <div className='md:p-10'>
            <Image src={vectorIcon} width={500} height={500} alt="Vector Icon" className="h-full w-full" />
          </div>
        } 
        rightContent={
          <div className="md:text-left mx-auto md:p-10 md:mr-48 md:px-0 text-center mt-[60px]">
            <p className="md:text-[18px] text-base font-medium md:pt-[120px] tracking-wide md:leading-[27px]">
              Here at HTOF Insurance Solutions, we understand the hard work it takes to build your success. Whether you’re a driven professional or a visionary entrepreneur, your wealth represents years of dedication, passion, and perseverance.
            </p>
            <button className="px-16 py-3 bg-yellow-600 text-white font-semibold rounded-2xl mt-[65px] hover:bg-yellow-700">
              Get Your Complimentary Financial Review
            </button>
          </div>
        }
      />    

      <HtofInsuranceSolutions />  

      <Card src={pictureSection1} alt="Meet The Team" className="md:h-full md:w-[450px] px-6 md:px-0" />

      {/* Meet the Team Section */}
      <MeetTeamReuseable 
        meetleftContent={
          <div className="md:h-[890px] md:w-[650px]">
            <Image src={Image1} alt="King Edwards" width={900} height={900} className="object-cover md:h-[890px] md:w-[650px] md:rounded-l-[100px]" />
          </div>
        }
        meetrightContent={
          <div className="bg-black md:h-[890px] md:w-[650px] md:rounded-r-[100px] px-[66px] py-[90px]">
            <h2 className="md:text-[50px] text-[30px] font-bold leading-[55px] text-yellow-500">King Edwards</h2>
            <h3 className="md:text-[24px] text-[20px] font-bold leading-[34px] text-white mt-4">King, a visionary, funding expert, and author</h3>
            <p className="mt-[42px] text-[16px] font-normal leading-7 text-gray-300">
              Born in Los Angeles and raised in New York, King draws inspiration from both cities. L.A. exposed him to the glamorous Hollywood lifestyle, while New York instilled a sense of grit and determination.
            </p>
            <p className="mt-[42px] text-[16px] font-normal leading-7 text-gray-300">
              King founded HighTicketOfferFinancing.com to provide alternative funding solutions for entrepreneurs. His work empowers clients to develop high-value products, generate significant profits, and legally safeguard themselves.
            </p>
          </div>
        }
      />

      <MeetTeamReuseable 
        meetleftContent={
          <div className="bg-black md:h-[890px] md:w-[650px] md:rounded-l-[100px] px-[66px] py-[90px]">
            <h2 className="md:text-[50px] text-[30px] font-bold leading-[55px] text-yellow-500">Alexis Holifield</h2>
            <h3 className="md:text-[24px] text-[20px] font-bold leading-[34px] mt-4 text-white">Co-Founder of The Millennial Millionaire</h3>
            <p className="mt-[42px] text-[16px] font-normal leading-7 text-gray-300">
              Alexis began studying generational wealth at 17, attending seminars like T. Harv Eker&lsquo;s &lsquo;Secrets of the Millionaire Mind.&lsquo; She now shares financial intelligence and investment education as a Licensed Insurance Broker and Wealth Planner.
            </p>
          </div>
        }
        meetrightContent={
          <div className="md:h-[890px] md:w-[650px]">
            <Image src={Image2} alt="Alexis Holifield" width={900} height={900} className="object-cover md:h-[890px] md:w-[650px] md:rounded-r-[100px]" />
          </div>
        }
      />

      <MeetTeamReuseable 
        meetleftContent={
          <div className="md:h-[1100px] md:w-[650px]">
            <Image src={Image4} alt="Gene Santos" width={900} height={900} className="object-cover md:h-[1100px] md:w-[650px] md:rounded-l-[100px]" />
          </div>
        }
        meetrightContent={
          <div className="bg-black md:h-[1100px] md:w-[650px] md:rounded-r-[100px] px-[66px] py-[90px]">
            <h2 className="md:text-[50px] text-[30px] font-bold leading-[55px] text-yellow-500">Gene Santos</h2>
            <h3 className="md:text-[24px] text-[20px] font-bold leading-[34px] text-white mt-4">Financial Advisor</h3>
            <p className="mt-[42px] text-[16px] font-normal leading-7 text-gray-300">
              With over a decade of experience, Gene specializes in wealth management for high-net-worth individuals. He has managed over $2.4 million in client assets and facilitated $15 million in annuity premiums.
            </p>
          </div>
        }
      />

      <ClientSuccessStories />

      {/* Call-to-Action Section */}
      <ReuseComponent 
        leftContent={
          <div className='md:p-10 mx-4'>
            <Image src={Image3} width={500} height={500} alt="Financial Growth" className="h-full w-full" />
          </div>
        }
        rightContent={
          <div className="md:text-left mx-auto md:p-10 md:mr-28 md:px-0 px-6 text-center">
            <h1 className="md:text-[50px] text-base font-bold md:pt-[90px] pt-7 text-[#AA7C38] tracking-wide md:leading-[75px]">
              Ready to get started?
            </h1>
            <p className="md:text-[18px] text-base font-medium md:py-[30px] tracking-wide md:leading-[27px]">
              Start Securing Your Future Today!
            </p>
            <button className="px-16 py-3 bg-yellow-600 mt-4 text-white font-semibold rounded-2xl hover:bg-yellow-700">
              Get Your Complimentary Financial Review
            </button>
          </div>
        }
      />    
    </div>
  );
}
