import React, { ReactNode } from 'react'


interface LeftSideProps {
    meetleftContent: ReactNode;
}

export default function MeetLeftSide({ meetleftContent }: LeftSideProps) {
  return (
    <div>{meetleftContent}</div>
  )
}
