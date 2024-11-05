import { Rancher, SedaN } from '@/fonts'
import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='bg-[#FCF6F2] flex items-center justify-start h-auto  lg:flex-row flex-col-reverse   '>
        <div className='lg:w-[50%] w-full pl-[5vw] md:py-0 py-[40px]  flex flex-col h-full items-start justify-center'>
            <h3 className={` ${SedaN} text-2xl text-black `}>OUR WORK</h3>
            <h2 className={` ${Rancher} text-3xl md:text-7xl text-black pt-3 max-w-[800px] `}>Big ideas. Smart brands. Brilliant results.</h2>

        </div>
        <div className='h-full flex justify-end items-center m-auto w-[100%] lg:w-[50%]'>
           <Image alt='icon' src='/s3.jpg' height={1000} width={1000} />
        </div>
    </div>
  )
}

export default Banner