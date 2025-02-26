import Image from 'next/image';
import React from 'react'
import vecteez1 from '@/assets/groupEconomics/ion_cash.png'
import vecteez2 from '@/assets/groupEconomics/codicon_workspace-trusted.png'
import vecteez3 from '@/assets/groupEconomics/codicon_comment-unresolved.png'




const steps = [
    {
      title: 'Cash Protection',
      description: "Regulated brokers must separate your funds from their operational accounts, meaning your money is safeguarded even in the unlikely event of financial difficulties.",
      image: vecteez1,
    },
    {
      title: 'Market Transparency',
      description: 'With regulated brokers, you benefit from access to fair and transparent markets. Their pricing, fees, and spreads are clearly disclosed, ensuring no surprises. This lets you trade with confidence, knowing the playing field is level.',
      image: vecteez2,
    },
    {
      title: 'Dispute Resolution',
      description: 'Regulatory bodies offer formal channels to resolve issues fairly if a dispute arises. This layer of accountability ensures your voice is heard and your rights are upheld.',
      image: vecteez3,
    },
  ];
  

export default function WhatMakeDifferent() {
  return (
    <section className="relative font-montserrat  text-white  py-[20px] md:py-[110px] px-4 md:px-[220px]">
        {/* Background Image */}
       
    
       
    
        <div className="flex flex-col  md:flex-row gap-6 justify-center">
          {steps.map((step, index) => (
            <div key={index} className="bg-black text-white p-6 rounded-lg shadow-md w-full">
              <div className="flex flex-col md:p-[30px] p-3 items-center text-center">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={52}
                  height={52}
                  className="mb-4"
                />
                <h3 className="text-[20px] font-montserrat leading-7 text-center mt-3 font-bold mb-4">{step.title}</h3>
                <p className="text-[14px] font-montserrat md:px-12  text-center leading-7 font-normal">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}
