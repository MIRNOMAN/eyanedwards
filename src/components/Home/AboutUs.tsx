import React from 'react'

export default function AboutUs() {
  return (
    <section className="bg-black mt-[150px] text-center text-white py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-[50px] font-semibold text-yellow-500 mb-4">
          About Us
        </h2>
        <p className="text-gray-300 mt-[30px] font-normal text-sm md:text-[16px] leading-relaxed">
          High Ticket Offer Financing is the United States&apos; leading funding
          platform for Entrepreneurs needing funding in industries banks don&apos;t
          typically finance. We specialize in business funding up to $3,000,000,
          Personal Funding up to $600,000, Little to No doc lending up to
          $150,000, and Financing for your customers up to $3,000,000.
        </p>

        <div className="mt-[58px] flex justify-center">
          <video
            className="w-full md:max-w-4xl md:rounded-[50px] rounded-2xl  bg-gray-700 "
            controls
          >
            <source src="your-video-url.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}
