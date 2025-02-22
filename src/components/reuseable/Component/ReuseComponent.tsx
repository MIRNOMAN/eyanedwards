import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

import { ReactNode } from 'react';

interface ReuseComponentProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
}

export default function ReuseComponent({leftContent, rightContent}: ReuseComponentProps) {
  return (
    <div className='container mx-auto my-[130px]'>
        <div className='md:flex  justify-center gap-[75px] '>
            {/* Left side */}
            <div className="w-full  ">
               <LeftSide leftContent={leftContent} />
            </div>

            {/* Right side */}
            <div className="w-full ">
                <RightSide rightContent={rightContent} />
            </div>
        </div>
    </div>
  )
}
