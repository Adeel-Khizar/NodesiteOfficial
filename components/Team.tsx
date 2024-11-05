// Testimonials.tsx
import { useCursor } from '../hooks/CursorContext'; // Adjust the path as necessary
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Scrollbar } from 'swiper/modules';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Rancher, SedaN } from '@/fonts';
import { TeamInfo } from '@/constants';
import 'swiper/css/scrollbar';

const tabsData = [
  { id: 1, title: "Head of Sales" },
  { id: 2, title: "Management" },
  { id: 3, title: "Sales Coordinator" },
  { id: 4, title: "Shopify Developer" },
  { id: 5, title: "Wordpress Developer" },
  { id: 6, title: "Hubspot Developer" },
  { id: 7, title: "Internee" }
];

const Team: React.FC = () => {
  const { cursorText, setCursorText } = useCursor();
  const [isMobile, setIsMobile] = useState(false);
  const [active, setActive] = useState<string | undefined>(tabsData[0].title);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filterMembers = (item: typeof TeamInfo[0]) => {
    if (Array.isArray(item.tag)) {
      return item.tag.some((tag:any) => tag.tags === active);
    }
    return item.tag === active;
  };

  return (
    <div id="team" className='z-[11] relative flex bg-white flex-col items-center py-[50px] justify-start'>
      <h2 className={`text-4xl ${Rancher} text-center text-black md:text-7xl pb-3`}>Our team of friends</h2>
      <p className={`text-md text-center md:text-xl text-black ${SedaN}`}>Each And Every One Is A Pleasure To Work With</p>
      <div className='teamTabs md:overflow-auto overflow-x-scroll   md:flex gap-4 md:flex-wrap p-5 items-center justify-center w-full'>
        {tabsData.map((item) => (
          <div 
            key={item.id} 
            onClick={() => setActive(item.title)} 
            className={`cursor-pointer min-w-fit ${active === item.title ? 'active' : ''}`} // Adjust active class condition
          >
            {item.title}
          </div>
        ))}
      </div>
      <div 
        className='w-[100%] relative px-6 lg:pl-0 py-0 md:py-7 pr-0 lg:pr-14'
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
          direction='horizontal'
          slidesPerView={isMobile ? 1 : 3.1}
          spaceBetween={0}
          mousewheel={true}
          scrollbar={true}
          modules={[Mousewheel, Scrollbar]}
          className="mySwiper TeamS lg:px-[5%] rounded-lg overflow-hidden"
        >
          {TeamInfo.filter(filterMembers).map((item) => (
            <SwiperSlide key={item.id} className='bg-transparent flex flex-col p-8 rounded-lg'>
              <div className='item'>
                <div className='flex h-full transform rotate-1 flex-col items-start gap-6 justify-between'>
                  <div className='relative'>
                    <div style={{ background: `${item.backgroundColor}` }} className={`absolute h-[70%] rounded-2xl -z-10 w-full bottom-0 left-0`}></div>
                    <Image
                      style={{ objectFit: "cover" }}
                      src={item.profileImage}
                      height={1500}
                      width={1500}
                      alt={item.profileName}
                      loading="lazy" // Explicitly setting lazy loading
                      sizes="(max-width: 768px) 100vw, 50vw" // Adjust sizes for responsiveness
                    />
                  </div>
                  <div className='flex flex-col text-black text-start'>
                    <h3 className={` ${Rancher} text-md lg:text-xl font-bold`}>{item.profileName}</h3>
                    <h5 className={`text-sm lg:text-md ${SedaN}`}>{item.profileProfession}</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
