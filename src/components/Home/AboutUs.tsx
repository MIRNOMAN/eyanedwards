import React from 'react'

export default function AboutUs() {
  return (
    <section className="bg-black md:mt-[150px] pet-10 text-center text-white md:py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-[50px] font-minion font-semibold text-yellow-500 mb-4">
          About Us
        </h2>
        <p className="text-gray-300 mt-[30px] font-normal align-top tracking-widest  text-base md:text-[21px] leading-[30px]">
          High Ticket Offer Financing is the United States&apos; leading funding
          platform for Entrepreneurs needing funding in industries banks don&apos;t
          typically finance. We specialize in business funding up to $3,000,000,
          Personal Funding up to $600,000, Little to No doc lending up to
          $150,000, and Financing for your customers up to $3,000,000.
        </p>

        <div className="mt-[58px] flex justify-center">
        <iframe className="md:w-full w-full md:p-8 md:h-[450px] h-[280px] md:rounded-[70px] rounded-2xl" src="https://www.youtube.com/embed/Oc2QVi4RdwU?si=7Xol3Y8jyLhIUMLZ" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
      </div>
    </section>
  )
}
