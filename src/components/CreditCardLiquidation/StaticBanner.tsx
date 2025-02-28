import backround_banner from "@/assets/logo/banner_backround.png"
import banner_icon from "@/assets/CreditCard/Vector_9.png"
import Image from "next/image";

export default function StaticBanner() {
  return (
    <div
    style={{ backgroundImage: `url(${backround_banner.src})` }}
    className="relative   rounded-b-[50px] md:rounded-b-[110px] pt-[150px] md:pt-[233px] text-center bg-opacity-95 bg-black text-white py-12 md:py-10  bg-cover bg-center"
  >
    <h1 className="text-3xl container md:px-[100px] font-minion sm:text-4xl md:leading-[55px] md:text-[50px] font-semibold">If You Are An  <span className='text-yellow-400'>Entrepreneur</span> and Have Never Gotten A Free <span className='text-yellow-400'>Financial Review</span></h1>
   <div className="mt-4 ">
   <span className=" text-lg font-montserrat sm:text-xl text-center  relative container md:text-2xl font-normal mx-auto  tracking-widest  py-4">
    Watch this Video
    <Image src={banner_icon} alt="icons" width={50} height={50} className="h-[70px] hidden  md:block w-[110px] absolute md:-right-[140px] top-5 z-[1]"  />
    </span>
   </div>

    <div className=" w-full  max-w-5xl mx-auto px-4">
    <div className="  md:max-w-5xl  mx-auto px-4">
    <iframe className="md:w-full w-full md:p-8 md:h-[450px] h-[280px] md:rounded-[70px] rounded-2xl" src="https://www.youtube.com/embed/GZ36JbqF2v4?si=3Y0hETJxBKYoP6vi" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
      </div>
    </div>

    <button className="mt-6 bg-yellow-500 md:text-[14px]  text-[12px] font-montserrat text-black md:px-6 px-4 py-3 rounded-lg hover:bg-yellow-600 transition-all duration-300">
    Get Your Complimentary financial Review
    </button>
  </div>
  )
}
