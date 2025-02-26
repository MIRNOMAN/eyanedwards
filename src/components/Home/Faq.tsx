"use client" 

import React from 'react'
import { faqData } from '../constants/FaqData'
import { ChevronsDown } from 'lucide-react' // Using lucide-react

export default function Faq() {
    const [openItems, setOpenItems] = React.useState<string[]>([]);

    function toggleItem(question: string): void {
        setOpenItems((prevOpenItems) =>
            prevOpenItems.includes(question)
                ? prevOpenItems.filter((item) => item !== question)
                : [...prevOpenItems, question]
        );
    }

  return (
    <section className="py-[50px] lg:py-[150px] px-4 md:px-6 lg:px-8 bg-[#F5F5F5]">
    <div className="max-w-5xl mx-auto">
      <h2 className="md:text-[40px] text-[30px] font-bold text-center font-minion text-[#AA7C38] leading-[60px] mb-8 ">
        Frequently asked questions
      </h2>


      {/* FAQ Items */} 
      <div className="mt-[60px] space-y-7  md:space-y-[60px]"> 
        {faqData.Funding.map(
          ({ question, answer }) => (
            <div
              key={question}
              className="bg-[#ECECEC] shadow rounded-[20px] overflow-hidden"
            >
              <button
                onClick={() => toggleItem(question)}
                className="w-full flex justify-between items-center py-4 pl-7 text-left hover:bg-gray-50"
              >
                <span className="font-normal  lg:font-medium font-montserrat text-default text-[14px] lg:text-base w-[250px] lg:w-full">{question}</span>
                
                <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#ECECEC]"> {/* Add bg-primary */}
                  <ChevronsDown
                    className={`w-10 h-8   text-[#AA7C38] transition-transform duration-200
                      ${openItems.includes(question) ? "rotate-180 " : ""}`}
                  />
                </div>
              </button>

              {openItems.includes(question) && (
                <div className="px-4 pb-4 text-black font-montserrat">{answer}</div>
              )}
            </div>
          )
        )}
      </div>

    </div>
  </section>
  )
} 
