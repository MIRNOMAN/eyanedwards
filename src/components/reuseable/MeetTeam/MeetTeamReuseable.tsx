import React, { ReactNode } from 'react'
import MeetLeftSide from './MeetLeftSide';
import MeetRightSide from './MeetRightSide';

interface ReuseComponentProps {
  meetleftContent: ReactNode;
  meetrightContent: ReactNode;
}

export default function MeetTeamReuseable({meetleftContent, meetrightContent}: ReuseComponentProps) {
  return (
   <div className='container mx-auto my-[130px]  md:px-28'>
           <div className='md:flex  justify-center  '>
               {/* Left side */}
               <div className="md:w-1/2  ">
                  <MeetLeftSide meetleftContent={meetleftContent} />
               </div>
   
               {/* Right side */}
               <div className="md:w-1/2 ">
                   <MeetRightSide meetrightContent={meetrightContent} />
               </div>
           </div>
           </div>
  )
}
