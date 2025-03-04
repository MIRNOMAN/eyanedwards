import AboutUs from "@/components/Home/AboutUs";
import UltimateFunding from "@/components/Home/UltimateFunding";
import Banner from "@/components/reuseable/Banner";
import BrandingSection from "@/components/reuseable/BrandingSection";
import ReuseComponent from "@/components/reuseable/Component/ReuseComponent";
import about_picture from "@/assets/home/about_picture.png";
import finding_picture from "@/assets/home/finding.png";
import about_icon from "@/assets/home/icons/Vector.png";
import picture2 from "@/assets/OurService/Bigger_Funding.png";
import Image from "next/image";
import OurMission from "@/components/Home/OurMission";
import HowItWorks from "@/components/reuseable/HowItWorks";
import CustomExperience from "@/components/Home/CustomExperience";
import ResourceHub from "@/components/Home/ResourceHub";
import Faq from "@/components/Home/Faq";
import ContactUs from "@/components/Home/ContactUs";
import Card from "@/components/reuseable/Component/card";





export default function Home() {
  return (
    <div className="">
      <Banner
      subtitle={
        <span className="flex justify-center md:px-[580px]">
          Access funding up to $4,000,000 to grow your business or achieve personal milestones.
        </span>
      }
      src="https://youtu.be/au2n7VVGv_c?si=z78a_rSkpqvUijGN" 
      buttonTitle ="Check My Funding Eligibility"
      ><h1 className="font-minion">Fund Your <span className='text-yellow-400 font-minion'>Dreams</span> Fuel Your <span className='text-yellow-500 font-minion'>Future</span></h1></Banner>
      
      <BrandingSection
      title="C.e.o, Founder"
      ><h1>Our mission is to create more
      millionaire entrepreneurs by ensuring you have all the funding you need to start and scale your
      business aggressively.</h1></BrandingSection>
      <UltimateFunding/>
      <AboutUs/>


      <ReuseComponent 
        leftContent={<div>
          <Image src={about_picture} width={500} height={500} alt="Your Image"  className="h-full w-full"/>
        </div>} 
        rightContent={
        <div className="md:text-left mx-auto px-6 md:px-0  text-center mt-[30px]">
          <div className="md:text-[40px] font-minion text-base font-semibold md:leading-[55px]">Fast, flexible, and stress-free funding solutions tailored to your needs.</div>

          <div className="mt-[37px] space-y-[24px]">
          <div className="flex justify-start items-center gap-8">
          <Image src={about_icon} width={500} height={500} alt="Your Image"  className="h-[28px] w-[35px]"/>
          <h1 className="text-[20px] font-montserrat text-black  font-medium">Quick approvals</h1>
          </div>
          <div className="flex justify-start items-center gap-8 ">
          <Image src={about_icon} width={500} height={500} alt="Your Image"  className="h-[28px] w-[35px]"/>
          <h1 className="text-[20px] font-montserrat  text-black  font-medium">Competitive rates</h1>
          </div>
          <div className="flex justify-start items-center gap-8">
          <Image src={about_icon} width={500} height={500} alt="Your Image"  className="h-[28px] w-[35px]"/>
          <h1 className="text-[20px] text-black  font-montserrat  font-medium">Personalized support</h1>
          </div>
          </div>
          
        </div>
        }
      />

      <OurMission />


      <ReuseComponent 
        leftContent={<div>
          <Image src={finding_picture} width={500} height={500} alt="Your Image"  className="h-full w-full"/>
        </div>} 
        rightContent={
        <div className="md:text-left px-7 md:px-0 text-center md:mt-[30px]">
          <div className="md:text-[50px] mt-8 md:mt-0  text-xl text-[#AA7C38] font-minion font-bold md:leading-[55px]">Funding Options: Simplify Choice</div>

          <div className="mt-[37px] space-y-[34px] md:space-y-[54px]">
          <div className="flex justify-start  gap-8">
          <Image src={about_icon} width={500} height={500} alt="Your Image"  className="md:h-[28px] h-[20px] md:w-[35px] w-[25px]"/>
          <h1 className="md:text-[22px] text-[14px]  text-[#4C4C4C] text-left font-semibold font-montserrat leading-7">Long term, Low Interest Small Business Loans: <span className="md:font-medium font-normal font-montserrat md:text-[16px] text-[14px]">Up to $3M in Funding for entrepreneurs
          seeking to expand, hire staff, market or buy equipment for their business.</span></h1>
          </div>
          <div className="flex justify-start items-center gap-8 ">
          <Image src={about_icon} width={500} height={500} alt="Your Image"  className="md:h-[28px] h-[20px] md:w-[35px] w-[25px]"/>
          <h1 className="md:text-[22px] text-[12px]  text-[#4C4C4C] text-left font-montserrat font-semibold leading-7">Personal Funding: <span className="md:font-medium font-normal md:text-[16px] font-montserrat text-[14px]">Up to $600K in Funding for individuals, or entrepreneurs, who do not yet
              qualify for traditional business funding or have goals like home renovation, education, or
              personal investments.</span></h1>
          </div>
          <div className="flex justify-start items-center gap-8">
          <Image src={about_icon} width={500} height={500} alt="Your Image"  className="md:h-[28px] h-[20px] md:w-[35px] w-[25px]"/>
          <h1 className="md:text-[22px] text-[12px]  text-left text-[#4C4C4C] font-montserrat font-semibold leading-7">No Doc Funding:  <span className="md:font-medium font-normal md:text-[16px] font-montserrat text-[14px]">Up to $200K in funding for individuals that do not have proof of income.</span></h1>
          </div>
          <div className="flex justify-start items-center gap-8">
          <Image src={about_icon} width={500} height={500} alt="Your Image"  className="md:h-[28px] h-[20px] md:w-[35px] w-[25px]"/>
          <h1 className="md:text-[22px] text-[12px] text-left text-[#4C4C4C] font-montserrat font-semibold leading-7">Home Equity Lines of Credit: <span className="md:font-medium font-normal md:text-[16px] font-montserrat text-[14px]">Up to $4M in funding for individuals who own Real
          Estate.</span></h1>
          </div>
          </div>
        </div>
        }
      />
      <Card  src={picture2} alt="funding page" className="md:h-full md:w-full  h-7 px-6 md:px-0"/>
     <HowItWorks/>
     <CustomExperience/>
     <ResourceHub/>
     <Faq/>
     <ContactUs/>
    </div>
  );
}

