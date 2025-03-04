import Image from 'next/image'
import React from 'react'
import about_icon from "@/assets/home/icons/Vector.png";

export default function HowMuch() {
  return (
    <section className=' text-black py-12 px-4 md:px-2'>
   <div className='container'>
   <div className="">
        <h2 className="text-3xl md:text-[50px]  md:leading-[60px] font-semibold font-minion md:pt-[95px]  text-[#AA7C38] mb-8">
        How Much Can You Earn with a Funding Business?
        </h2> 
        <p className='font-normal font-montserrat text-lg tracking-widest md:text-[16px] mt-[14px] md:leading-[29px]'>The earning potential in the business funding industry is enormous. Here’s an example:</p>
        </div>


        <div className="flex flex-row items-start mt-[65px]  gap-4  md:gap-9">
          <div className="flex items-center text-[#D69E2E]">
          <Image src={about_icon} width={500} height={500} alt="Your Image"  className="md:h-[28px] h-[20px] md:w-[40px] w-[25px]"/>
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-lg font-montserrat md:text-[22px] md:leading-[29px]">Average deal size: $50,000</h3>
          </div>
        </div>

        <div className="flex flex-row items-start md:mt-[40px] mt-[20px]  gap-4  md:gap-9">
          <div className="flex items-center text-[#D69E2E]">
          <Image src={about_icon} width={500} height={500} alt="Your Image"  className="md:h-[28px] h-[20px] md:w-[40px] w-[25px]"/>
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-lg font-montserrat md:text-[22px] md:leading-[29px]">Your commission: 5-10%</h3>
          </div>
        </div>

        <div className="flex flex-row items-start md:mt-[40px] mt-[20px]  gap-4  md:gap-9">
          <div className="flex items-center text-[#D69E2E]">
          <Image src={about_icon} width={500} height={500} alt="Your Image"  className="md:h-[28px] h-[20px] md:w-[40px] w-[25px]"/>
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-lg font-montserrat md:text-[22px] md:leading-[29px]">Profit per deal: $2,500–$5,000</h3>
          </div>
        </div>



        <h2 className="text-3xl md:text-[50px]  md:leading-[60px] md:tracking-widest font-semibold font-minion md:pt-[95px]  pt-10 text-[#AA7C38] mb-8">
        Conclusion
        </h2> 
        <p className='font-normal md:mr-[250px] md:mb-[50px] font-montserrat text-lg md:tracking-widest md:text-[16px] mt-[5px] md:leading-[29px]'>Incorporating God into your business isn&apos;t just about achieving financial success; it&apos;s about fulfilling your divine calling, serving others, and building a legacy that glorifies Him.

        When you trust God as your ultimate CEO, you gain clarity, confidence, and purpose in your entrepreneurial journey. As Matthew 5:16 reminds us:</p>
        <p className="font-normal md:mr-[250px] md:mb-[50px] font-montserrat text-lg md:tracking-widest md:text-[16px] mt-[5px] md:leading-[29px]">
          When you trust God as your ultimate CEO, you gain clarity, confidence, and purpose in your entrepreneurial
          journey. As Matthew 5:16 reminds us:
        </p>
        <blockquote className="border-l-4 border-amber-600 pl-4 italic mb-4 font-normal md:mr-[250px] md:mb-[50px] font-montserrat text-lg md:tracking-widest md:text-[16px] mt-[5px] md:leading-[29px]">
          &quot;Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.&quot;
        </blockquote>
        <p className="font-normal md:mr-[250px] md:mb-[50px] font-montserrat text-lg md:tracking-widest md:text-[16px] mt-[5px] md:leading-[29px]">
          Are you ready to invite God into your business? Start today, and watch how He transforms your efforts into
          something extraordinary.
        </p>
   </div>
    </section>
  )
}
