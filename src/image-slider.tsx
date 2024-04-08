import React, { useState } from 'react';

import './image-slider.css';
import {
  ArrowBigLeft,
  ArrowBigRight,
  CircleDotIcon,
  CircleIcon,
} from 'lucide-react';

interface ImageSliderProps {
  images: {
    url: string;
    alt: string;
  }[];
}

export default function ImageSlider(props: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    console.log('handleLeftClick');
    console.log(currentIndex);
    if (currentIndex === 0) return setCurrentIndex(props.images.length - 1);

    setCurrentIndex(currentIndex - 1);
  };

  const handleRightClick = () => {
    console.log('handleRightClick');
    console.log(currentIndex);

    if (currentIndex === props.images.length - 1) return setCurrentIndex(0);

    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          overflow: 'hidden',
        }}
      >
        {props.images.map((image, index) => (
          <img
            key={index}
            className='image-slider-img'
            src={image.url}
            alt={image.alt}
            style={{ translate: `${currentIndex * -100}%` }}
          />
        ))}
      </div>
      <button
        onClick={() => handleLeftClick()}
        style={{ left: 0 }}
        className='image-slider-btn'
      >
        <ArrowBigLeft />
      </button>
      <button
        onClick={() => handleRightClick()}
        style={{ right: 0 }}
        className='image-slider-btn'
      >
        <ArrowBigRight />
      </button>
      <div className='image-slider-dots'>
        {props.images.map((_, index) => (
          <button
            className='image-slider-dot'
            key={index}
            onClick={() => setCurrentIndex(index)}
          >
            {currentIndex === index ? <CircleDotIcon /> : <CircleIcon />}
          </button>
        ))}
      </div>
    </div>
  );
}
