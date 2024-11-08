import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Scrollbar, Mousewheel, Autoplay } from 'swiper/modules';
import { clientReviews } from '@/constants';
import Image from 'next/image';
import { Rancher, SedaN } from '@/fonts';

const Testimonials = () => {
  return (
    <div
      style={{
        scrollMarginTop: '50px',
      }}
      id="testimonials"
      className="pb-20 md:pb-10 py-[40px] lg:py-[50px] bg-black lg:px-0 px-4 z-[111] relative"
    >
      <div className="m-auto max-w-[900px]">
        <h2
          style={{ lineHeight: '100%' }}
          className={` ${Rancher} text-center text-white mb-10 lg:mb-20 text-3xl lg:text-[4.5vw]`}
        >
          Testimonials
        </h2>
      </div>
      <Swiper
        scrollbar={{ hide: true }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500, // Adjusted delay for smoother transition
          disableOnInteraction: false, // Keeps autoplay working after interaction
        }}
        mousewheel={true}
        navigation={true}
        pagination={false}
        speed={600} // Set speed of transition (in ms)
        modules={[EffectCoverflow, Pagination, Navigation, Mousewheel, Scrollbar, Autoplay]} // Add Autoplay to the modules
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper testimonialsSwiperr"
        style={{ transitionDuration: '0.6s' }} // Optional: global transition duration on all elements
      >
        {clientReviews.map((reviews, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col gap-10 p-4 lg:p-16 bg-gray-900 rounded-3xl"
          >
            <div className="flex gap-20 flex-col">
              <h2
                className={` ${SedaN} text-white text-md text-center lg:text-xl tracking-wide`}
              >
                "{reviews.Review}"
              </h2>
              <div className="flex items-center justify-start gap-4">
                <div className="flex flex-col m-auto text-white gap-2">
                  <h2
                    style={{
                      fontWeight: '900',
                      letterSpacing: '0.1rem',
                    }}
                    className={` ${SedaN} text-center text-2xl`}
                  >
                    {reviews.profileName}
                  </h2>
                  <h2 className={` ${SedaN} text-center text-md text-gray-400`}>
                    {reviews.profileProfession}
                  </h2>
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
