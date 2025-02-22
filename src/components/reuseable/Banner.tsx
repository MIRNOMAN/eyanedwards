import React from "react";
import backround_banner from "@/assets/logo/banner_backround.png";

interface BannerProps {
  children: React.ReactNode;
  subtitle: React.ReactNode;
  videoSrc: string;
  buttonTitle: string;
}

export default function Banner({subtitle, videoSrc, buttonTitle, children }: BannerProps) {
  return (
    <div
      style={{ backgroundImage: `url(${backround_banner.src})` }}
      className="relative  rounded-b-[50px] md:rounded-b-[110px] pt-[150px] md:pt-[233px] text-center bg-opacity-95 bg-black text-white py-12 md:py-16 px-4 bg-cover bg-center"
    >
      <h1 className="text-3xl container sm:text-4xl md:text-5xl font-semibold">{children}</h1>
      <p className="mt-4 text-lg sm:text-xl container md:text-2xl font-normal mx-auto px-[255px] tracking-widest  py-4">
        {subtitle}
      </p>

      <div className="mt-6 w-full max-w-3xl mx-auto px-4">
        <video className="w-full rounded-lg md:rounded-[40px] h-auto" controls>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <button className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition-all duration-300">
        {buttonTitle}
      </button>
    </div>
  );
}
