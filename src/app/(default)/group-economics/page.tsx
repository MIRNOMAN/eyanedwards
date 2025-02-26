import Banner from '@/components/reuseable/Banner'
import ReuseComponent from '@/components/reuseable/Component/ReuseComponent'
import imagevalue from "@/assets/groupEconomics/pictureImage.png"
import ourMission from "@/assets/groupEconomics/Our_Mission.png"
import React from 'react'
import Image from 'next/image'
import LaserFund from '@/components/GroupEconomics/LaserFund'
import PammCopyTrade from '@/components/GroupEconomics/PammCopyTrade'
import vecteezy_2023 from '@/assets/groupEconomics/vecteezy_2023-global.png'
import historical from '@/assets/groupEconomics/Historical_Data.png'
import ssPicture1 from '@/assets/groupEconomics/Screenshot_1.png'
import ssPicture2 from '@/assets/groupEconomics/Screenshot_2.png'
import ssPicture3 from '@/assets/groupEconomics/Screenshot_3.png'
import ssPicture4 from '@/assets/groupEconomics/Screenshot_4.png'
import ssPicture5 from '@/assets/groupEconomics/Screenshot_5.png'
import ssPicture6 from '@/assets/groupEconomics/Screenshot_6.png'
import ssPicture7 from '@/assets/groupEconomics/Screenshot_7.png'
import ssPicture8 from '@/assets/groupEconomics/Screenshot_8.png'
import ssPicture9 from '@/assets/groupEconomics/Screenshot_9.png'
import ssPicture10 from '@/assets/groupEconomics/Screenshot_10.png'
import ssPicture11 from '@/assets/groupEconomics/Screenshot_11.png'
import ssPicture12 from '@/assets/groupEconomics/Screenshot_12.png'

import what_make_different from '@/assets/groupEconomics/What_makes_us_different_.png'

import The_Laser_Fund_Pamm from '@/components/CreditCardLiquidation/The_Laser_Fund_Pamm'
import Card from '@/components/reuseable/Component/card'
import WhatMakeDifferent from '@/components/GroupEconomics/WhatMakeDifferent'
import PammOverview from '@/components/GroupEconomics/PammOverview'
import TheLaserFundPamm from '@/components/GroupEconomics/TheLaserFundPamm'

export default function page() {
  return (
    <div>
         <Banner
                subtitle={
                  <span className="flex justify-center px-[450px]">
                    Trading involves substantial risk, and past performance does not guarantee future results. A liability waiver must be signed before joining.
                  </span>
                }
                videoSrc="/path-to-your-video.mp4" 
                buttonTitle ="Review Disclaimer"
                >
                  <h1 className='font-minion'>Withdraw Your Money At <span className='text-yellow-400'>Anytime</span> </h1>
                </Banner>


                          <ReuseComponent 
                  leftContent={
                    <div className='md:p-10 mx-4'>
                      <Image src={imagevalue} width={500} height={500} alt="Financial Growth" className="h-full w-full" />
                    </div>
                  }
                  rightContent={
                    <div className="md:text-left mx-auto md:p-10 md:mr-28 md:px-0 px-6 md:mt-28 mt-10 text-center">
                      <Image src={ourMission} width={500} height={500} alt="Financial Growth" className="[50px] w-[320px]" />
                      <p className="md:text-[16px] text-base font-montserrat font-normal md:py-[30px] tracking-wide md:leading-[29px]">
                      To empower new and experienced traders by providing access to cutting-edge algorithmic trading technology to help you experience above average market growth, while seeing below average market loss. We achieve this through a disciplined trading strategy that incorporates effective risk management and a dynamic take profit system. At The Laser Fund: PAMM, we are committed to driving financial growth, protecting capital, and achieving sustainable returns through transparent and disciplined risk management strategies
                      </p>
                    
                    </div>
                  }
                />    


      <LaserFund />
      <PammCopyTrade/>
      <The_Laser_Fund_Pamm/>


      <ReuseComponent 
                  leftContent={
                    <div className='md:p-10 mx-4'>
                      <Image src={vecteezy_2023} width={800} height={800} alt="Financial Growth" className="h-full w-full" />
                    </div>
                  }
                  rightContent={
                    <div className="md:text-left mx-auto md:p-10 md:mr-18 md:px-0 px-6  mt-10 text-center">
                      <h1 className='font-minion md:text-[50px] font-bold text-[#AA7C38] md:leading-[66px]'>Why We Choose Regulated Brokers</h1>
                      <p className="md:text-[16px] text-base font-montserrat font-normal md:py-[30px] tracking-wide md:leading-[29px]">
                      A regulated broker is a financial service provider licensed by recognized regulatory bodies, such as the Financial Conduct Authority (FCA) in the UK or the Securities and Exchange Commission (SEC) in the United States. These regulators impose rigorous requirements on brokers, including regular audits, secure handling of client funds, and adherence to ethical practices. 
                      </p>
                      <p className="md:text-[16px] text-base font-montserrat font-normal md:py-[30px] tracking-wide md:leading-[29px]">
                      At the LASER FUND PAMM, we believe our participants&apos; cash safety begins with the brokers we partner with. This is why we partner exclusively with regulated brokers: institutions that operate under the strict oversight of financial authorities, ensuring fairness, transparency, and accountability in every transaction.
                      </p>
                    
                    </div>
                  }
                />   


                 <Card src={what_make_different} alt="Meet The Team" className="md:h-full md:w-[750px] px-6 md:px-0" /> 
                 
                 <WhatMakeDifferent/>
                 <PammOverview/>

                 <Card src={historical} alt="Meet The Team" className="md:h-full md:w-[750px] px-6 md:px-0 bg-cover" /> 
                 <Card src={ssPicture1} alt="Meet The Team" className="md:h-full md:w-full px-6 md:px-0 bg-cover bg-inherit" /> 
                 <Card src={ssPicture2} alt="Meet The Team" className="md:h-full md:w-full px-6 md:px-0  bg-cover bg-inherit" /> 
                 <Card src={ssPicture3} alt="Meet The Team" className="md:h-full md:w-full px-6 md:px-0  bg-cover bg-inherit" /> 
                 <Card src={ssPicture4} alt="Meet The Team" className="md:h-full md:w-full px-6 md:px-0  bg-cover bg-inherit" /> 
                 <Card src={ssPicture5} alt="Meet The Team" className="md:h-full md:w-full px-6 md:px-0  bg-cover bg-inherit" /> 
                 <Card src={ssPicture6} alt="Meet The Team" className="md:h-full md:w-full px-6 md:px-0  bg-cover bg-inherit" /> 
                 <Card src={ssPicture7} alt="Meet The Team" className="md:h-full md:w-full px-6 md:px-0  bg-cover bg-inherit" /> 
                 <Card src={ssPicture8} alt="Meet The Team" className="md:h-full md:w-full px-6 md:px-0  bg-cover bg-inherit" /> 
                 <Card src={ssPicture9} alt="Meet The Team" className="md:h-full md:w-full px-6 md:px-0  bg-cover bg-inherit" /> 
                 <Card src={ssPicture10} alt="Meet The Team" className="md:h-full md:w-full px-6 md:px-0  bg-cover bg-inherit" /> 
                 <Card src={ssPicture11} alt="Meet The Team" className="md:h-full md:w-full px-6 md:px-0  bg-cover bg-inherit" /> 
                 <Card src={ssPicture12} alt="Meet The Team" className="md:h-full md:w-full px-6 md:px-0  bg-cover bg-inherit" /> 


                <TheLaserFundPamm/>
               
    </div>
  )
}
