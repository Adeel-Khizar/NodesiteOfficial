// Testimonials.tsx
import { useCursor } from '../hooks/CursorContext'; // Adjust the path as necessary
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import Link from 'next/link';
import { clientTestimonials } from '@/constants';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Rancher, SedaN } from '@/fonts';

const Solutions: React.FC = () => {
  const { cursorText, setCursorText } = useCursor();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="services" className='z-[11] relative flex lg:flex-row flex-col items-center py-[50px] justify-start bg-black'>
      <div className='w-[100%] pt-[3%] lg:pt-0 lg:w-[60%] text-white pl-6  lg:pl-10 pr-4'>
        <h2 className={` ${Rancher} text text-3xl lg:text-[4.5vw]`} style={{ lineHeight: '110%' }}>
          Strategic approach with (*studio like) creativity
        </h2>
        <p className={`text-gray-600 mt-8 ${SedaN} `} >
          Whether you’re testing ideas or need a quick turnaround, our subscription allows you to scale and adapt effortlessly on web.
        </p>
        <div className='hero_atc my-8 flex'>
          <Link className={` flex transition-all text-lg ease-in-out bg-white px-[2rem] lg:px-[3rem] py-[.7rem] max-h-[3rem] h-[3rem] text-black rounded-full items-center justify-center ${SedaN} `} href='/'>
            What Our Client Says
          </Link>
          <span className='w-[3rem] h-[3rem] flex rounded-full items-center justify-center border-2 border-white'>
            <svg className='h-[2rem] w-[1.25rem]' width="100%" height="100%" viewBox="0 0 24 25" fill="#fffff">
              <path d="M15.7501 12.5C15.7507 12.6028 15.7318 12.7047 15.6945 12.7999C15.6571 12.8951 15.6021 12.9817 15.5326 13.0547L9.53264 19.3047C9.46271 19.3775 9.37969 19.4353 9.28833 19.4747C9.19696 19.5141 9.09903 19.5344 9.00014 19.5344C8.80041 19.5344 8.60887 19.4518 8.46764 19.3047C8.32641 19.1576 8.24707 18.958 8.24707 18.75C8.24707 18.5419 8.32641 18.3424 8.46764 18.1953L13.9426 12.5L8.46764 6.80467C8.32641 6.65755 8.24707 6.45803 8.24707 6.24998C8.24707 6.04193 8.32641 5.8424 8.46764 5.69529C8.60887 5.54818 8.80041 5.46553 9.00014 5.46553C9.19986 5.46553 9.39141 5.54818 9.53264 5.69529L15.5326 11.9453C15.6021 12.0183 15.6571 12.1049 15.6945 12.2001C15.7318 12.2952 15.7507 12.3972 15.7501 12.5Z" fill="#ffffff"></path>
            </svg>
          </span>
        </div>
      </div>
      <div 
        className='w-[100%] relative lg:w-[40%] px-6 lg:pl-0 py-14 pr-0 lg:pr-14'
        onMouseEnter={() => setCursorText('SCROLL')}
        onMouseLeave={() => setCursorText('')}
      >
        <motion.div
          className={`cursor flex items-center justify-center`}
          variants={{ default: { opacity: 0 }, hover: { opacity: 1 }}}
          animate={cursorText ? 'hover' : 'default'}
        >
          {cursorText && (
            <span className="text-black text-lg z-[1111111] relative italic font-bold">{cursorText}</span>
          )}
        </motion.div>
        <Swiper
          direction={isMobile ? 'horizontal' : 'vertical'}
          slidesPerView={isMobile ? 1.2 : 1.2}
          spaceBetween={20}
          mousewheel={true}
          pagination={{ clickable: false }}
          modules={[Mousewheel]}
          className="mySwiper lg:px-[5%] rounded-lg overflow-hidden testimonialSwiper"
        >
          {clientTestimonials.map((item) => (
            <SwiperSlide key={item.id} className='bg-[#1A1C21] flex flex-col p-8 rounded-lg'>
              <div className='flex h-full flex-col items-start justify-between'>
                <div className='min-h-[150px] min-w-[150px]'>
                  <Image
                    style={{ height: '150px', width: '150px', objectFit: 'contain' }}
                    className='min-h-[150px] min-w-[150px]'
                    src={item.icon}
                    height={150}
                    width={150}
                    alt={item.title}
                  />
                </div>
                <div className='flex flex-col text-white text-start gap-4'>
                  <h3 className={` text-xl  lg:text-3xl font-bold ${Rancher} `}>{item.title}</h3>
                  <h5 className={`  text-sm lg:text-md ${SedaN} `}>{item.subtitle}</h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Solutions;
