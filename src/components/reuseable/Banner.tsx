// "use client"

import React from "react";
// import backround_banner from "@/assets/logo/banner_backround.png";


interface BannerProps {
  children: React.ReactNode;
  subtitle: React.ReactNode;
  src: string;
  buttonTitle: string;
}

export default function Banner({subtitle,  buttonTitle, children }: BannerProps) {
  return (
    <div
      // style={{ backgroundImage: `url(${backround_banner.src})` }}
      className="relative   md:rounded-b-[110px] pt-[150px] md:pt-[233px] text-center bg-opacity-95 bg-black text-white py-12 md:py-16 md:px-4 bg-cover bg-center"
    >
      <h1 className="text-3xl md:container  md:text-[50px] md:leading-[60px]  font-semibold">{children}</h1>
      <p className="mt-4 font-montserrat text-center  text-xl  md:text-[24px] tracking-widest  mx-auto  md:leading-[40px]  py-4">
        {subtitle}
      </p>

      <div className="mt-6  md:max-w-6xl  mx-auto md:px-4">
      <iframe   className="md:w-full w-full md:p-8 md:h-[550px] h-[280px] md:rounded-[70px] rounded-2xl" src="https://www.youtube.com/embed/EleiblVKYU8?si=7Xptxa2rDh8L3j_T" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
  {/* <ReactPlayer
        url='https://www.youtube.com/embed/au2n7VVGv_c?si=ZVETWqoRxY7mMy8x&modestbranding=1&rel=0&showinfo=0&controls=1'
        controls={true}  // Show minimal controls
        playing={false}  // Don't autoplay
        width="100%"
        height="100%"
        config={{
          youtube: {
            playerVars: { modestbranding: 1, rel: 0, showinfo: 0 }
          }
        }}
      /> */}
      </div>

      <button className="mt-6 bg-yellow-500  font-montserrat font-normal text-[16px] text-black md:px-6 px-2 md:py-3 py-2 rounded-lg hover:bg-yellow-600 transition-all duration-300">
        {buttonTitle}
      </button>
    </div>
  );
}
