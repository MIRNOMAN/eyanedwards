import Image, { StaticImageData } from 'next/image'
import React from 'react'

// Reusable Card Component
interface CardProps {
  src: string | StaticImageData;  // Allow both string URL and StaticImageData
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const Card: React.FC<CardProps> = ({ src, alt, width = 1000, height = 1000, className = "" }) => {
  return (
    <div className='container py-[50px] flex justify-center'>
      {typeof src === 'string' ? (
        <Image 
          src={src} 
          width={width} 
          height={height} 
          alt={alt}  
          className={`h-[${height}px] w-[${width}px] ${className}`} 
        />
      ) : (
        <Image 
          src={src} 
          width={width} 
          height={height} 
          alt={alt}  
          className={`h-[${height}px] w-[${width}px] ${className}`} 
        />
      )}
    </div>
  );
}

export default Card;
