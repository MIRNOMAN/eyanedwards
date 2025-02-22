import React, { ReactNode } from 'react'





interface RightSideProps {
    rightContent: ReactNode; // You can replace 'any' with a more specific type if known
}

export default function RightSide({rightContent}: RightSideProps) {
    return (
        <div>
           {rightContent}
        </div>
    );
}
