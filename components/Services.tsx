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

const Services: React.FC = () => {
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
    <div className='z-[11] relative flex lg:flex-row flex-col items-center pt-[50px] md:py-[50px] justify-start bg-black'>
      <div className='w-[100%] pt-[3%] lg:pt-0 lg:w-[60%] text-white pl-6  lg:pl-10 pr-4'>
        <h2 className={` ${Rancher} text text-4xl lg:text-[4.5vw]`} style={{ lineHeight: '100%' }}>
           Your Vision, 
           <br></br>
           <span className='text-[#4CC9FE]  font-bold'>
           Our Expertise
           </span>
        </h2>
        <p className={`text-gray-200 text-lg sm:text-2xl mt-8 ${SedaN} `} >
        Got a big idea? Let’s bring it to life. Our team of skilled professionals is ready to turn your vision into reality. With a focus on cutting-edge technology and personalized service, we deliver results.
        </p>
       
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
                <div className='md:w-[150px] md:h-[150px] w-[100px] h-[100px] min-h-[100px] min-w-[100px] md:min-h-[150px] md:min-w-[150px]'>
                  <Image
                  style={{
                    objectFit: 'contain'
                  }}
                    className='min-h-[100px] md:w-[150px] md:h-[150px] w-[100px] h-[100px] min-w-[100px]  md:min-h-[120px] md:min-w-[150px] object-contain'
                    src={item.icon}
                    height={250}
                    width={250}
                    alt={item.title}
                  />
                </div>
                <div className='flex flex-col text-white text-start gap-4'>
                  <h3 className={` text-2xl text-[#4CC9FE]  lg:text-3xl font-bold ${Rancher} `}>{item.title}</h3>
                  <h5 className={`  text-sm lg:text-lg ${SedaN} `}>{item.subtitle}</h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Services;
