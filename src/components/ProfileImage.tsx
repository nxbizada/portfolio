'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProfileImageProps {
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  alt,
  className = '',
  width,
  height,
  fill = false,
  priority = false
}) => {
  const [imageIndex, setImageIndex] = useState(0);
  
  // Array of fallback images in order of preference
  // Updated to use local images only - cache bust v2
  const imageSources = [
    '/images/images.jpg',
    '/images/image.jpg',
    // You can add more fallback images here if needed
  ];

  const handleImageError = () => {
    if (imageIndex < imageSources.length - 1) {
      setImageIndex(imageIndex + 1);
    }
  };

  const currentImageSrc = imageSources[imageIndex];

  return (
    <Image
      src={currentImageSrc}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      className={className}
      priority={priority}
      onError={handleImageError}
    />
  );
};

export default ProfileImage; 