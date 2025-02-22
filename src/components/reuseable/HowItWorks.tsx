import Image from 'next/image';
import React from 'react';
import backroundShadopicture from '@/assets/background.png';
import picture_1 from '@/assets/home/icons/works/work_1.png';
import picture_2 from '@/assets/home/icons/works/work_2.png';
import picture_3 from '@/assets/home/icons/works/works_3.png';

const steps = [
  {
    title: 'Click "Apply Now"',
    description: '“Fill out our quick application in just minutes.”',
    image: picture_1,
  },
  {
    title: 'Same Day Pre-Approvals',
    description: '“Send Us Your Experian Credit Report for Accurate and Same-Day Pre-Approval”',
    image: picture_2,
  },
  {
    title: 'Receive Your Funds',
    description: '“Funds can be deposited in as little as 3 business days.”',
    image: picture_3,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-black text-white z-[1] mt-[100px] md:py-[110px] py-[30px] px-4 md:px-[220px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-[-1] opacity-20">
        <Image
          src={backroundShadopicture}
          alt="Background Shadow"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="text-center md:flex justify-between items-center mt-5 mb-8">
        <h2 className="text-2xl md:text-left  md:text-[50px] text-[20px] font-semibold leading-[60px]">
          <span className="text-yellow-500 md:text-[50px] text-[20px] font-semibold leading-[60px]">
            How It Works:
          </span>{' '}
          Our pre-approval <br />process is simple, quick, and easy.
        </h2>

        <div className="text-center mt-8">
          <button className="bg-yellow-500 text-black px-12 leading-6 py-5 rounded-xl font-semibold hover:bg-yellow-600 transition">
            Apply Now
          </button>
        </div>
      </div>

      <div className="flex flex-col mt-[124px] md:flex-row gap-6 justify-center">
        {steps.map((step, index) => (
          <div key={index} className="bg-white text-black p-6 rounded-lg shadow-md w-full">
            <div className="flex flex-col p-[30px] items-center text-center">
              <Image
                src={step.image}
                alt={step.title}
                width={52}
                height={52}
                className="mb-4"
              />
              <h3 className="text-[20px] leading-7 text-center mt-3 font-bold mb-4">{step.title}</h3>
              <p className="text-[20px] px-12 text-center leading-7 font-normal">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
