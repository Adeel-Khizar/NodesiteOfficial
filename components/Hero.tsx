"use client"

import { Rancher, SedaN } from '@/fonts'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { GlobeDemo } from './Globe'
// import * as motion from "framer-motion/client";
// import { useAnimation, useInView } from 'framer-motion';
const Hero = () => {
  
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });
  // const mainControls = useAnimation();
  // const blackSlideControls = useAnimation();
  // const whiteSlideControls = useAnimation();

  // // Trigger animations on scroll when in view
  // useEffect(() => {
  //   if (isInView) {
  //     mainControls.start("visible");
  //     blackSlideControls.start("visible");
  //     whiteSlideControls.start("visible");
  //   }
  // }, [isInView]);

  return (
 
    <div  className='md:h-[100vh] hero w-full relative bg-transparent lg:flex-row flex-col flex '>
      
     <video autoPlay muted={true} loop={true} className="background-video absolute h-full w-full left-0 right-0 top-0 z-[-1] object-cover">
        <source src="./vecteezy_3d-animation-white-geometric-background-with-cubes_46549148.mp4" type="video/mp4" /> 
    </video>
        <div className='flex flex-col mt-[90px] font-light   gap-6 lg:gap-10 pt-[10vw] pl-[6vw]  lg:pl-[5vw] lg:pt-[5vw] w-full lg:max-w-[60%] '>
          <div  
            // ref={ref}
          style={{ position: "relative", overflow: "hidden" }} >
          {/* <motion.div
            variants={{
              hidden: { left: 0 },
              visible: { left: "100%" },
            }}
            initial="hidden"
            animate={whiteSlideControls}
            transition={{ duration: 1.5, delay: 1, ease: "easeIn" }}
            style={{
              position: "absolute",
              top: 4,
              bottom: 4,
              left: 0,
              right: 0,
              background: "#000000",
              zIndex: 1,
            }}
          /> */}
          
  <h1 style={{
                 lineHeight: '100%',
                 fontWeight: 900
            }} className={`text-black uppercase  text-[8vw] mb-5 lg:mb-6 md:text-[4.1vw] ${Rancher} `}>Your Trusted  Partner  <br></br> <span className="text-blue-900"> for Success </span></h1>
            <p className={`text-black pr-4 text- md:text-[1.5rem] ${SedaN} `}>We’re not just a service provider; we’re here to be your partner in innovation. By getting to know your goals, we develope personalized solutions that help you succeed. Let’s team up and make your dreams a reality!</p>
          </div>
          
              <div className='hero_atc flex'>
              
              <Link className={` flex transition-all ease-in-out bg-black px-[2rem] py-[.7rem] max-h-[3rem] h-[3rem] text-white rounded-full items-center justify-center ${SedaN} `} href='#portfolio'> View our portfolio </Link> 
              <span className='w-[3rem] h-[3rem] flex  rounded-full items-center justify-center border-2 border-black'>
              <svg className='h-[2rem] w-[1.25rem]' width="100%" height="100%" viewBox="0 0 24 25" fill="#fffff">

<path d="M15.7501 12.5C15.7507 12.6028 15.7318 12.7047 15.6945 12.7999C15.6571 12.8951 15.6021 12.9817 15.5326 13.0547L9.53264 19.3047C9.46271 19.3775 9.37969 19.4353 9.28833 19.4747C9.19696 19.5141 9.09903 19.5344 9.00014 19.5344C8.80041 19.5344 8.60887 19.4518 8.46764 19.3047C8.32641 19.1576 8.24707 18.958 8.24707 18.75C8.24707 18.5419 8.32641 18.3424 8.46764 18.1953L13.9426 12.5L8.46764 6.80467C8.32641 6.65755 8.24707 6.45803 8.24707 6.24998C8.24707 6.04193 8.32641 5.8424 8.46764 5.69529C8.60887 5.54818 8.80041 5.46553 9.00014 5.46553C9.19986 5.46553 9.39141 5.54818 9.53264 5.69529L15.5326 11.9453C15.6021 12.0183 15.6571 12.1049 15.6945 12.2001C15.7318 12.2952 15.7507 12.3972 15.7501 12.5Z" fill="#000000"></path>

</svg>   
             </span>
              </div>
        </div>
        <div className="w-full lg:py-0 pb-10 md:pb-0 z-10  top-[14%] lg:absolute lg:right-0 lg:max-w-[40vw]">
            <GlobeDemo/>
        </div>
    </div>

  )
}

export default Hero