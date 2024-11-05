import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Scrollbar } from 'swiper/modules';
import { clientReviews } from '@/constants';
import Image from 'next/image';
import {  Rancher, SedaN } from '@/fonts';

const Testimonials = () => {
  return (
    <div id="testimonials" className='pb-20 md:pb-10 py-[40px] lg:py-[50px] bg-black lg:px-0 px-4 z-[111] relative'>
      <div className='m-auto max-w-[900px]'>
        <h2 style={{ lineHeight: "100%" }} className={` ${Rancher} text-center text-white mb-10 lg:mb-20 text-3xl lg:text-[4.5vw]`}>
          Testimonials 
        </h2>
      </div>
      <Swiper
        scrollbar={{ hide: true }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        navigation={true}
        pagination={false}
        modules={[EffectCoverflow, Pagination, Navigation, Scrollbar]}
        breakpoints={{
          // For screens less than 1024px
          0: { // Below 1024px
            slidesPerView: 1,
          },
          1024: { // 1024px and above
            slidesPerView: 3,
          },
        }}
        className="mySwiper testimonialsSwiperr"
      >
        {clientReviews.map((reviews, index) => (
          <SwiperSlide key={index} className='flex flex-col gap-10   p-4 lg:p-16 bg-gray-900 rounded-3xl'>
            <div className='flex gap-20 flex-col'>
              <h2 className={` ${SedaN} text-white text-md text-center lg:text-xl tracking-wide		 `}>"{reviews.Review}"</h2>
              <div className='flex items-center justify-start gap-4'>
                <div className='lg:h-[90px] lg:w-[90px] h-[50px] w-[50px] rounded-full overflow-hidden'>
                  <Image height={500} width={500} src={reviews.profileImage} alt={reviews.profileName} />
                </div>
                <div className='flex flex-col text-white gap-2'>
                  <h2 className= {` ${Rancher} text-start `}>{reviews.profileName}</h2>
                  <h2 className={` ${SedaN} text-start text-gray-400 `}>{reviews.profileProfession}</h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
