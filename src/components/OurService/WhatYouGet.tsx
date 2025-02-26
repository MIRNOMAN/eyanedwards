import React from 'react'
import Image from 'next/image'
import icon_1 from "@/assets/OurService/Vector_4.png"
import icon_2 from "@/assets/OurService/Vector_5.png"
import icon_3 from "@/assets/OurService/Vector_6.png"
import icon_4 from "@/assets/OurService/Vector_7.png"
import icon_5 from "@/assets/OurService/Vector_8.png"


export default function  WhatYouGet() {
  return (
    <div className="  text-white md:p-5 flex justify-center min-h-screen">
    <div className="w-full container p-5">
      
        
     <div className='md:flex justify-center  gap-[60px]'>
     <div className='md:space-y-16'>
       <div className="bg-black text-white p-5 md:rounded-[70px] rounded-3xl md:w-[550px] md:p-[50px] mb-4">
            <div className="flex   mb-3">
                <div className="bg-[#AA7C38] text-white rounded-full md:w-[105px] w-[160px]  h-[50px] md:h-[60px] flex items-center justify-center text-lg font-bold mr-3">
                <Image src={icon_1} width={500} height={500} alt="Your Image"  className="md:h-[28px] h-[20px] md:w-[35px] w-[25px]"/>
                </div>
                
                <div >
                    <div>
                    <h2 className="text-[#E7A647]   font-bold font-minion text-[24px] md:leading-[55px]">Coaching & Expert Guidance</h2>
                    </div>
           <p className="text-[16px] font-bold py-[40px] font-montserrat leading-[29px]">4 Weekly Coaching Calls: <span className='text-[14px] font-normal font-montserrat leading-[29px]'> In your first month, get personalized strategies tailored to your business</span></p>
           <p className="text-[16px] font-bold font-montserrat leading-[29px]">Ongoing Support: <span className='text-[14px] font-normal font-montserrat leading-[29px]'>Monthly coaching calls for the next
           two months to refine and scale your processe</span></p>
           </div>
            </div>
           
        </div>

        <div className="bg-black text-white p-5 md:rounded-[70px] rounded-3xl md:w-[550px] md:p-[50px] mb-4">
            <div className="flex   mb-3">
                <div className="bg-[#AA7C38] text-white rounded-full md:w-[105px] w-[170px]  h-[50px] md:h-[60px] flex items-center justify-center text-lg font-bold mr-3">
                <Image src={icon_2} width={500} height={500} alt="Your Image"  className="md:h-[28px] h-[20px] md:w-[35px] w-[25px]"/>
                </div>
                
                <div >
                    <div>
                    <h2 className="text-[#E7A647]   font-bold font-minion text-[24px] leading-[32px]">AI-Powered Business Coach</h2>
                    </div>
                    <p className="text-[16px] font-bold py-[40px] font-montserrat leading-[29px]">90 Days of 24/7 Guidance: <span className='text-[14px] font-normal font-montserrat leading-[29px]'> Our AI coach provides
instant advice, tools, and action plans whenever you
need them</span></p>
           
           </div>
            </div>
           
        </div>

        <div className="bg-black text-white p-5 md:rounded-[70px] rounded-3xl md:w-[550px] md:p-[50px] mb-4">
            <div className="flex  mb-3">
                <div className="bg-[#AA7C38] text-white rounded-full md:w-[130px] md:h-[60px] w-[150px] h-[50px] flex items-center justify-center text-lg font-bold mr-3">
                <Image src={icon_3} width={500} height={500} alt="Your Image"  className="md:h-[28px] h-[20px] md:w-[35px] w-[25px]"/>
                </div>
               
                <div>
                    <div>
                    <h2 className="text-[#E7A647] font-bold font-minion text-[24px] leading-[32px]">White-Label License to Our Business</h2>
                    </div>
                <p className="text-[16px] font-normal pt-[40px] font-montserrat leading-[29px]">Marketing Materials:  <span className='text-[16px] font-normal font-montserrat leading-[29px]'>Access professionally crafted
                resources to grow your brand.</span></p>
                <p className="text-[16px] font-bold py-[40px] font-montserrat leading-[29px]">Funding Products: <span className='text-[14px] font-normal font-montserrat leading-[29px]'>  Offer your clients a comprehensive
                suite of funding solutions.</span></p>
           <p className="text-[16px] font-bold font-montserrat leading-[29px]">Sales Team (Optional):  <span className='text-[14px] font-normal font-montserrat leading-[29px]'> Let our world-class sales team
           close deals for you, freeing up your time to scale faster.</span></p>
                </div>
            </div>
           
        </div>
       </div>

        <div className='md:space-y-16'>
        
        <div className="bg-black text-white p-5 md:rounded-[70px] rounded-3xl md:w-[550px] md:p-[50px] mb-4">
            <div className="flex  mb-3">
                <div className="bg-[#AA7C38] text-white rounded-full md:w-[110px] md:h-[60px] w-[160px] h-[50px] flex items-center justify-center text-lg font-bold mr-3">
                <Image src={icon_4} width={500} height={500} alt="Your Image"  className="md:h-[28px] h-[20px] md:w-[35px] w-[25px]"/>
                </div>
               <div>
               <h2 className="text-[#E7A647] font-bold font-minion text-[24px] leading-[32px]">On-Demand Support</h2>
               <p className="text-[16px] font-bold py-[40px] font-montserrat leading-[29px]">Text/Email Support: <span className='text-[14px] font-normal font-montserrat leading-[29px]'>  Have questions? Get
personalized
answers, Monday through Friday, for three
months.</span></p>
          
               </div>
            </div>
           
        </div>

        <div className="bg-black text-white p-5 md:rounded-[70px] rounded-3xl md:w-[550px] md:p-[50px] mb-4">
            <div className="flex  mb-3">
                <div className="bg-[#AA7C38] text-white rounded-full md:w-[150px] md:h-[60px] w-[180px] h-[50px] flex items-center justify-center text-lg font-bold mr-3">
                <Image src={icon_5} width={500} height={500} alt="Your Image"  className="md:h-[28px] h-[20px] md:w-[35px] w-[25px]"/>
                </div>
               
                <div>
                    <div>
                    <h2 className="text-[#E7A647]   font-bold font-minion text-[24px] leading-[32px]">Client Acquisition Mastery Program</h2>
                    </div>
                    <p className="text-[16px] font-bold py-[40px] font-montserrat leading-[29px]">1-Year Exclusive Access: <span className='text-[14px] font-normal font-montserrat leading-[29px]'> Step-by-step video training
to master marketing, branding, and sales using our
proven AI strategies.</span></p>
           <p className="text-[16px] font-bold font-montserrat leading-[29px]">Real-World Results: <span className='text-[14px] font-normal font-montserrat leading-[29px]'> Gain the confidence to attract,
           convert, and retain high-ticket clients.</span></p>
                </div>
            </div>
           
        </div>

        <div className='flex justify-center '>
        <button className="md:mt-[5px] mt-[15px] font-montserrat tracking-wide bg-[#E7A647] text-black px-9 py-4 rounded-[30px] hover:bg-yellow-600 transition-all duration-300">
        Your Journey Starts Here
                </button>
        </div>
        </div>
     </div>
    </div>
</div>
  );
}
