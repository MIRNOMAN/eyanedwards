import Banner from '@/components/reuseable/Banner'
import ReuseComponent from '@/components/reuseable/Component/ReuseComponent'
import imagevalue from "@/assets/groupEconomics/pictureImage.png"
import ourMission from "@/assets/groupEconomics/Our_Mission.png"
import React from 'react'
import Image from 'next/image'
import LaserFund from '@/components/GroupEconomics/LaserFund'

export default function page() {
  return (
    <div>
         <Banner
                subtitle="Trading involves substantial risk, and past performance does not guarantee future results. A liability waiver must be signed before joining"
                videoSrc="/path-to-your-video.mp4" 
                buttonTitle ="Review Disclaimer"
                >
                  Withdraw Your Money At <span className='text-yellow-400'>Anytime</span> 
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
            <p className="md:text-[16px] text-base font-normal md:py-[30px] tracking-wide md:leading-[29px]">
            To empower new and experienced traders by providing access to cutting-edge algorithmic trading technology to help you experience above average market growth, while seeing below average market loss. We achieve this through a disciplined trading strategy that incorporates effective risk management and a dynamic take profit system. At The Laser Fund: PAMM, we are committed to driving financial growth, protecting capital, and achieving sustainable returns through transparent and disciplined risk management strategies
            </p>
          
          </div>
        }
      />    


      <LaserFund />
    </div>
  )
}
