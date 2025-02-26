import React from 'react'

export default function PammOverview() {
  return (
    <div className=" bg-black text-white p-5 flex justify-center min-h-screen">
    <div className="w-full container p-5">
        <h1 className="text-center text-yellow-500 md:py-[110px] font-minion md:text-[50px] md:leading-[57px] font-bold mb-5">
        PAMM OVERVIEW: Risk & Profit Projections
        </h1>
        
     <div className='md:flex justify-center items-center gap-[60px]'>
     <div className='md:space-y-16'>
       <div className="bg-white text-black p-5 md:rounded-[70px] md:w-[490px] md:p-[50px] mb-4">
            <div className="flex   mb-3">
                <div className="bg-yellow-500 text-white rounded-full md:w-[155px] w-[150px]  h-[40px] md:h-[60px] flex items-center justify-center text-lg font-bold mr-3">
                    01
                </div>
                
                <div >
                    <div>
                    <h2 className="text-yellow-500 pt-[40px] font-bold font-minion text-[24px] leading-[32px]">Monthly Profit Projections</h2>
                    </div>
           <p className="text-[16px] font-bold py-[40px] font-montserrat leading-[29px]">Target: <span className='text-[16px] font-normal font-montserrat leading-[29px]'>Achieve a net monthly profit of 10% of total fund value.</span></p>
           <p className="text-[16px] font-normal font-montserrat leading-[29px]">Yearly Projections: <span className='text-[16px] font-normal font-montserrat leading-[29px]'>Sustain compounded growth over 12 months, with an annualized target of 70-100% return.</span></p>
           </div>
            </div>
           
        </div>

        <div className="bg-white text-black p-5 md:rounded-[70px] md:w-[490px] md:p-[50px] mb-4">
            <div className="flex  mb-3">
                <div className="bg-yellow-500 text-white rounded-full md:w-[400px] md:h-[60px] w-[380px] h-[40px] flex items-center justify-center text-lg font-bold mr-3">
                    03
                </div>
               
                <div>
                    <div>
                    <h2 className="text-yellow-500 font-bold font-minion text-[24px] leading-[32px]">Risk Parameters</h2>
                    </div>
                <p className="text-[16px] font-normal pt-[40px] font-montserrat leading-[29px]">Capital Allocation: <span className='text-[16px] font-normal font-montserrat leading-[29px]'>Allocate no more than 5% of fund’s capital at risk at any given time across all open positions.</span></p>
            <p className="text-[16px] font-bold py-[40px] font-montserrat leading-[29px]" >Diversification: <span className='text-[16px] font-normal font-montserrat leading-[29px]'> Use uncorrelated strategies to reduce risk across classes.</span></p>
            <p className="text-[16px] font-normal font-montserrat leading-[29px]">Drawdown Recovery Plan: <span className='text-[16px] font-normal font-montserrat leading-[29px]'>Trigger risk adjustments if drawdown exceeds 15% to prevent further losses.</span></p>
              <p  className="text-[16px] font-normal pt-[40px] font-montserrat leading-[29px]">As the overall capital within the PAMM account grows, we are scheduled to adjust our risk parameters to lower levels. This strategic adjustment ensures enhanced capital preservation while maintaining steady performance, reflecting our commitment to disciplined risk management and long-term success</p>
                </div>
            </div>
           
        </div>
       </div>

        <div className='md:space-y-16'>
        
        <div className="bg-white text-black p-5 md:rounded-[70px] md:w-[490px] md:p-[50px] mb-4">
            <div className="flex  mb-3">
                <div className="bg-yellow-500 text-white rounded-full md:w-[100px] md:h-[60px] w-[110px] h-[40px] flex items-center justify-center text-lg font-bold mr-3">
                    02
                </div>
               <div>
               <h2 className="text-yellow-500 pt-[40px] font-bold font-minion text-[24px] leading-[32px]">Monthly Risk Parameters</h2>
               <p className="text-[16px] font-normal font-montserrat leading-[29px]">Maximum Risk Exposure: <span className='text-[16px] font-normal font-montserrat leading-[29px]'>Limit monthly drawdown to 10% of fund’s total capital.</span></p>
               </div>
            </div>
           
        </div>

        <div className="bg-white text-black p-5 md:rounded-[70px] md:w-[490px] md:p-[50px] mb-4">
            <div className="flex  mb-3">
                <div className="bg-yellow-500 text-white rounded-full md:w-[120px] md:h-[60px] w-[120px] h-[40px] flex items-center justify-center text-lg font-bold mr-3">
                    04
                </div>
               
                <div>
                    <div>
                    <h2 className="text-yellow-500  font-bold font-minion text-[24px] leading-[32px]">Strategy Enhancement</h2>
                    </div>
                <p className="text-[16px] font-normal pt-[40px] font-montserrat leading-[29px]">Adaptive Algorithm: <span className='text-[16px] font-normal font-montserrat leading-[29px]'>Continuously optimizes systems using real-time data and feedback loops.</span></p>
            <p className="text-[16px] font-bold py-[40px] font-montserrat leading-[29px]">Stress Testing: <span className='text-[16px] font-normal font-montserrat leading-[29px]'>Subject all models to extreme conditions.</span></p>
            <p className="text-[16px] font-normal font-montserrat leading-[29px]">Risk Monitoring: <span className='text-[16px] font-normal font-montserrat leading-[29px]'> Real-time monitoring with dashboard analytics.</span></p>
                </div>
            </div>
           
        </div>
        </div>
     </div>
    </div>
</div>
  )
}
