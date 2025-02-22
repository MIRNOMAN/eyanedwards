import Image from 'next/image'
import React from 'react'
import ultimate_pic from "@/assets/home/ultimate_fund.png"

export default function UltimateFundingPage() {
  return (
    <section className=" container my-[100px]  md:flex  items-center justify-between bg-white">
    <div className="w-full lg:w-[60%] mt-[100px] flex justify-center">
      <Image src={ultimate_pic} alt="Funding Guide" className="" width={500} height={500}/>
    </div>
    <div className="w-full lg:w-[40%] p-8 mt-5">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-[#AA7C38]">
      Struggling to save money? Listen to this free audio called ‘Spender, Saver, Wealth Creator’ 
      </h2>
      <form className="space-y-4 ">
        <input type="text" placeholder="Name" className="w-full p-3 border-none bg-gray rounded-lg bg-gray-100 focus:outline-none" />
        <input type="email" placeholder="Email" className="w-full p-3 border-none bg-gray mt-5 rounded-lg bg-gray-100 focus:outline-none" />
        <input type="tel" placeholder="Phone Number" className="w-full p-3 border-none bg-gray mt-5 rounded-lg bg-gray-100 focus:outline-none" />
        <p className="text-sm font-normal text-gray-500 py-12">
          This form is protected by reCAPTCHA and the Google
          <a href="#" className="text-black font-bold"> Privacy Policy</a> and
          <a href="#" className="text-black font-bold"> Terms of Service</a> apply.
        </p>
        <button className=" px-16 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700">
          Free Access
        </button>
      </form>
    </div>
  </section>
  )
}
