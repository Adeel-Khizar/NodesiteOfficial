"use client"
import { Rancher, SedaN } from '@/fonts'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='px-[5vw] pt-[60px]'>
        <div className='flex lg:flex-row flex-col items-center pb-5'>
        <div className='lg:w-[40%] w-full '>
            <h5 className={` text-md text-gray-500 pb-8 ${Rancher} `}>Work</h5>
            <h3 className={` lg:text-[4.5vw]  text-5xl pb-20 ${SedaN} `}>Project & Case Studies</h3>
            <p className={`text-lg   ${SedaN} `}>Web Design, Development and Custom Development</p>
        </div>
        <div className='lg:w-[60%] w-full'>
            <h5 className={` text-md  text-gray-500 pb-8 ${Rancher} `}>Work</h5>
            <h3 className={`lg:text-[4.5vw] text-5xl pb-20 ${SedaN} `}>More words - less code Say hi!</h3>
            <Link className={` text-lg  underline ${SedaN} `} href="/">Schedule a call - 2 clicks away</Link>
        </div>
        </div>
        
        <div className='w-full flex md:flex-row flex-col md:gap-0 gap-4   items-center justify-center text-center md:justify-between border-t-2 border-gray-900 py-4'>
            <p className={` text-sm text-500 ${SedaN} `} >Copyright 2024 All Right Reserved</p>
            <div className='flex items-center ' >
                <Link href='/' className={` px-2  border-r-2 border-black  ${SedaN} `}>Terms of Services </Link>
                <Link href='/' className={` px-2  ${SedaN} `} >Terms of Services </Link>

            </div>
        </div>
    </div>
  )
}

export default Footer