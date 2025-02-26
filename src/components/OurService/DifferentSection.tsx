import Image from 'next/image';
import React from 'react';
import picture_1 from '@/assets/OurService/Vector_1.png';
import picture_2 from '@/assets/OurService/Vector_2.png';
import picture_3 from '@/assets/OurService/Vector_3.png';

const steps = [
  {
    title: 'Tailored for the High-Ticket Industry',
    description: "We understand the challenges and opportunities unique to high-ticketoffers.",
    image: picture_1,
  },
  {
    title: 'Actionable Insights',
    description: 'Learn from experts who’ve been there and done that.',
    image: picture_2,
  },
  {
    title: 'Freedom & Flexibility',
    description: 'Build your business on your terms, with a team of experts supporting you every step of the way.',
    image: picture_3,
  },
];

export default function DifferentSection() {
  return (
    <section className="relative font-montserrat  text-white   py-[110px] px-4 md:px-[220px]">
    {/* Background Image */}
   

   

    <div className="flex flex-col  md:flex-row gap-6 justify-center">
      {steps.map((step, index) => (
        <div key={index} className="bg-black text-white p-6 rounded-lg shadow-md w-full">
          <div className="flex flex-col p-[30px] items-center text-center">
            <Image
              src={step.image}
              alt={step.title}
              width={52}
              height={52}
              className="mb-4"
            />
            <h3 className="text-[20px] leading-7 text-center mt-3 font-bold mb-4">{step.title}</h3>
            <p className="text-[16px] px-12 text-center leading-7 font-normal">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
  )
}
