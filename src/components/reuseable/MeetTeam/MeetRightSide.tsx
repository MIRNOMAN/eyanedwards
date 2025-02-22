import React, { ReactNode } from 'react'

interface LeftSideProps {
    meetrightContent: ReactNode;
}


export default function MeetRightSide({ meetrightContent }: LeftSideProps) {
  return (
    <div>{meetrightContent}</div>
  )
}
