// Portfolio.tsx
import { useCursor } from '../hooks/CursorContext'; // Adjust the path as necessary
import { porfolioCards } from '@/constants';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import 'swiper/css';
import { Rancher, SedaN } from '@/fonts';

const Portfolio: React.FC = () => {
  const { cursorText, setCursorText } = useCursor();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    hover: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: 'white',
    },
  };

  const handleSlideClick = (index: number) => {
    const realIndex = swiperRef.current.swiper.realIndex;
    if (index === (realIndex + 1) % porfolioCards.length) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div id="portfolio" className="h-auto lg:px-10 px-4 lg:pt-10 pt-6 z-[111] relative bg-black text-white">
      <h2 className={`${Rancher} lg:text-[5vw] text-3xl lg:pb-10 font-bold`}>Portfolio <span className="text-white">highlights</span></h2>
      <p className={`text-lg text-gray-300 pt-4 ${SedaN}`}>
        Over 200 successful websites launched. From landing pages to corporate projects, we make you shine online
      </p>
      <div className="w-full md:pt-8 pt-4 h-auto relative">
        <motion.div
          className='cursor flex items-center justify-center'
          variants={variants}
          animate={cursorText ? 'hover' : 'default'}
        >
          {cursorText && (
            <span className={`text-black text-xl font-bold ${Rancher}`}>{cursorText}</span>
          )}
        </motion.div>
        <Swiper
          ref={swiperRef}
          spaceBetween={ isMobile ? 10: 25}
          loop={true}
          slidesPerView={ isMobile ? 1.1: 1.5}
          className="w-full flex flex-wrap h-auto pt-10 gap-6"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Keep track of the real index
        >
          {porfolioCards.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{ transform: index === activeIndex ? 'scale(1)' : 'scale(0.9)' }}
              className={`flex cursor-default rounded-2xl overflow-hidden items-start justify-center ${index === activeIndex ? 'opacity-100' : 'opacity-50'}`}
              onClick={() => handleSlideClick(index)}
              onMouseEnter={() => {
                if (index === (activeIndex + 1) % porfolioCards.length) {
                  setCursorText('NEXT');
                }
              }}
              onMouseLeave={() => setCursorText('')}
            >
              <div>
                <video
                  style={{
                    pointerEvents: 'none'
                  }}
                  controls
                  autoPlay
                  loop
                  muted
                >
                  <source src={item.projectImage} type="video/webm" />
                </video>
              </div>
              <div className="flex bg-[#1f1d1c] justify-between">
                <div className='p-3'>
                  <h3 className={`text-white text-start text-2xl md:text-3xl ${Rancher}`}>{item.projectTitle}</h3>
                  <h5 className={`text-gray-300 text-start text-sm md:text-2xl md:pt-2 ${SedaN}`}>{item.projectSubtitle}</h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
