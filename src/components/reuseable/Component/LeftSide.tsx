import React from 'react'

import  { ReactNode } from 'react';

interface LeftSideProps {
    leftContent: ReactNode;
}

export default function LeftSide({ leftContent }: LeftSideProps) {
  return (
    <div>{leftContent}</div>
  );
}
