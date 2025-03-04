import React from 'react';
import Image from 'next/image';
import pictureSection1 from "@/assets/CreditCard/Meet_The_Team.png";
import vectorIcon from '@/assets/CreditCard/shild.png';
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
      
      
      <BrandingSection title="Alexis Holifield">
      “If your income provides for your upkeep, it will become your downfall
      </BrandingSection>

      <UltimateFundingPage />

      <ReuseComponent 
        leftContent={
          <div className='md:p-10'>
            <Image src={vectorIcon} width={500} height={500} alt="Vector Icon" className="h-full w-full" />
          </div>
        } 
        rightContent={
          <div className="md:text-left mx-auto md:p-10 md:mr-48 md:px-0 text-center mt-[60px]">
            <p className="md:text-[18px] text-base font-medium md:pt-[20px] tracking-wide md:leading-[27px]">
              Here at HTOF Insurance Solutions, we understand the hard work it takes to build your success. Whether you’re a driven professional or a visionary entrepreneur, your wealth represents years of dedication, passion, and perseverance.
            </p>
            <button className="md:px-16 px-5 py-3 bg-yellow-600 text-white font-semibold rounded-2xl mt-[65px] hover:bg-yellow-700">
              Get Your Complimentary Financial Review
            </button>
          </div>
        }
      />    

      <HtofInsuranceSolutions />  

      <Card src={pictureSection1} alt="Meet The Team" className="md:h-full md:w-[450px] w-[70%] px-6 md:px-0" />

      {/* Meet the Team Section */}
      <MeetTeamReuseable 
        meetleftContent={
          <div className="md:h-[890px] md:w-[650px]">
            <Image src={Image1} alt="King Edwards" width={900} height={900} className="object-cover md:h-[890px] md:w-[650px] md:rounded-l-[100px]" />
          </div>
        }
        meetrightContent={
          <div className="bg-black md:h-[890px] md:w-[650px] md:rounded-r-[100px] md:px-[66px] px-5 md:py-[90px] py-8">
            <h2 className="md:text-[50px] text-[30px] font-minion font-bold leading-[55px] text-yellow-500">King Edwards</h2>
            <h3 className="md:text-[24px] text-[20px] font-montserrat font-bold leading-[34px] text-white mt-4">King, a visionary, funding expert, and author</h3>
            <p className="mt-[42px] text-[16px] font-normal leading-7 text-white font-montserrat text-gray-300">
              Born in Los Angeles and raised in New York, King draws inspiration from both cities. L.A. exposed him to the glamorous Hollywood lifestyle, while New York instilled a sense of grit and determination.
            </p>
            <p className="mt-[42px] text-[16px] font-normal leading-7 font-montserrat text-white text-gray-300">
            In his first professional project, King embarked on the creation of HighTicketOfferFinancing.com. This innovative venture aimed to provide alternative funding solutions for entrepreneurs operating in industries traditionally overlooked by banks. Through this endeavor, he sought to help consultants and entrepreneurs earn significant profits, develop and sell high-value products and services, and safeguard themselves from legal implications using HTOF’s comprehensive workflows, standard operating procedures, and contract templates.
            </p>
            <p className="mt-[42px] text-[16px] font-normal leading-7 font-montserrat text-white text-gray-300">
            With a focus on helping entrepreneurs thrive and achieve remarkable financial milestones, King has received accolades such as the Man of the Moment and Made Man Award for his achievements.Through unwavering determination and an unwavering focus on the next best move, King aims to rewrite the rules of the game and help his clients leave an indelible mark on their respective industries and their family’s lives.
            </p>
          </div>
        }
      />

      <MeetTeamReuseable 
        meetleftContent={
          <div className="bg-black md:h-[890px] md:w-[650px] md:rounded-l-[100px] md:px-[66px] px-5 md:py-[90px] py-8">
            <h2 className="md:text-[50px] text-[30px] font-bold font-minion leading-[55px] text-yellow-500">Alexis Holifield</h2>
            <h3 className="md:text-[24px] text-[20px] font-bold font-montserrat leading-[34px] mt-4 text-white">Co-Founder of The Millennial Millionaire</h3>
            <p className="mt-[42px] text-[16px] font-normal text-white leading-7 font-montserrat text-gray-300">
            Alexis Holifield, began her journey to learning the laws of building generational wealth at the early age of 17 years old. She began her journey by attending a seminar put on by T. Harv Eker &quot;Secrets Of The Millionaire Mind&quot;. Immediately, she began creating an archive of these &quot;well-kept secrets of the wealthy&quot; for the world to know. She went on to graduate with honors and complete a masters degree in life through first hand experience of wealth building, in addition the Multi-Millionaires she continues to be mentored by.
            </p>
            <p className="mt-[42px] text-[16px] font-normal text-white leading-7 font-montserrat text-gray-300">
            As a Licensed Insurance Broker, Financial Strategist, & Wealth Planner, Alexis dedicates her time as a coach and a mentor sharing Financial Intelligence and Investment Education to cultivate the minds of Millennials all over the nation. Her mission to advise families, individuals, and business owners to begin or enhance their journey to financial freedom to increase and preserve wealth is expressed in her ability to transform the paradigm, and financial states of her client. Specializing in Estate Planning, Cash Value Life Insurance, Retirement, and Executive Business Planning.
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
            <Image src={Image4} alt="Gene Santos" width={900} height={900} className="object-cover md:h-[1100px]   md:w-[650px] md:rounded-l-[100px]" />
          </div>
        }
        meetrightContent={
          <div className="bg-black md:h-[1100px] md:w-[650px] md:rounded-r-[100px] md:px-[66px] px-5 md:py-[90px] py-8">
            <h2 className="md:text-[50px] text-[30px] font-bold font-minion leading-[55px] text-yellow-500">Gene Santos</h2>
            <h3 className="md:text-[24px] text-[20px] font-bold font-montserrat leading-[34px] text-white mt-4">Financial Advisor</h3>
            <p className="mt-[42px] text-[16px] font-normal text-white font-montserrat leading-7 text-gray-300">
            Gene Santos is a distinguished financial advisor specializing in comprehensive wealth
management for high net worth individuals and families. With over a decade of strategic experience in the finance and insurance industry, Gene has established himself as a trusted
advisor to discerning clients seeking sophisticated financial solutions.

            </p>
            <p className="mt-[42px] text-[16px] font-normal text-white font-montserrat leading-7 text-gray-300">
            Demonstrating exceptional performance, Gene has successfully written over $25 million in life
insurance coverage, strategically managed in excess of $2.4 million in client assets, and
facilitated more than $15 million in annuity premiums. His practice is precisely calibrated to
serve high net worth clients, delivering nuanced financial strategies that address the complex
wealth management needs of successful professionals and entrepreneurs.

            </p>
            <p className="mt-[42px] text-[16px] text-white font-normal font-montserrat leading-7 text-gray-300">
            Specializing in advanced retirement planning, comprehensive estate strategies, and tailored
investment optimization, Gene provides a strategic approach that goes beyond standard
financial advising. His expertise lies in crafting customized financial solutions that protect and
grow wealth, with a keen understanding of the unique financial challenges facing high-net-worth
individuals.

            </p>
            <p className="mt-[42px] text-[16px] font-normal text-white font-montserrat leading-7 text-gray-300">
            Gene&apos;s client-focused methodology combines rigorous financial acumen with a commitment to
building long-term, trust-based relationships. By offering personalized guidance and strategic
insights, he empowers clients to make informed decisions that align with their most significant
financial objectives and legacy planning goals.
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
            <h1 className="md:text-[50px] text-[30px]  font-minion font-bold md:pt-[90px] pt-7 text-[#AA7C38] tracking-wide md:leading-[75px]">
              Ready to get started?
            </h1>
            <p className="md:text-[18px] text-base text-[#4C4C4C] font-montserrat font-medium md:py-[30px] tracking-wide md:leading-[27px]">
              Start Securing Your Future Today!
            </p>
            <button className="md:px-16 px-5 md:text-[16px] text-[12px] py-3 bg-yellow-600 mt-4 font-montserrat text-white font-semibold rounded-2xl hover:bg-yellow-700">
              Get Your Complimentary Financial Review
            </button>
          </div>
        }
      />    
    </div>
  );
}
