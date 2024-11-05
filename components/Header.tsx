"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import NodeLogo from '../public/Capture-removebg-preview 1.png';
import { megaMenu, Nav_links } from '@/constants';
import Link from 'next/link';

const Header = () => {
    const [menu, setMenu] = useState(false);
    // const [hover, setHover] = useState(false);
    
    const toggleMenu = () => {
        setMenu(prev => !prev);
    };
    
    // const toggleHover = () => {
    //     setHover(prev => !prev);
    // };

    return (
        <div className='bg-white  lg:fixed  cursor-default top-0  fixed lg:z-[1111111111] z-[1111111] min-h-[80px] lg:min-h-[90px] py-[1rem] md:px-[2.5rem] px-[1rem] flex lg:flex-row flex-col lg:gap-0 gap-10 items-start lg:items-center md:justify-between  w-full'>
            <div>
                <Link  href="/">
                <Image className='w-auto h-[45px] lg:h-[55px]' src={NodeLogo} height={75} alt='Node Logo' />
                </Link>
            </div>
            <div className={menu ? `flex lg:flex-row flex-col gap-6 lg:gap-[2rem] items-start lg:items-center h-full justify-center` : `hidden lg:flex lg:flex-row flex-col gap-6 lg:gap-[2rem] items-start lg:items-center h-full justify-center`}>
                {Nav_links.map(link => (
                    <div 
                    //  onMouseEnter={link.label === "Services +" ? toggleHover : undefined} 
                    // onMouseLeave={link.label === "Services +" ? toggleHover : undefined} 
                    
                    className="relative" key={link.id}>
                        <Link  
                            onClick={ () => {
                                setMenu(prev => !prev);
                            }}
                            className="text-lg text-black" 
                            href={link.url} 
                           
                        >
                            {link.label}
                        </Link>
                        {/* {link.label === "Services +" && hover && (
                          <Link href={link.url} >
                            <div className={hover ?  `grid mega__Menu gap-3  z-[1111111111111] min-w-[30rem] grid-cols-2 absolute -mt-2 pt-10  sideanime` : `grid mega__Menu gap-3  z-[1111111111111] min-w-[30rem] grid-cols-2 absolute -mt-2 pt-10 `  }>
                                {megaMenu.map((service) => (
                                    <div className='h-auto flex w-full flex-col items-start justify-center gap-4 shadow-md shadow-gray-500 p-2 rounded-md bg-white' key={service.id}>
                                        <h3 className="text-[16px] font-bold">{service.title}</h3>
                                        <p className="text-[12px]">{service.description}</p>
                                    </div>
                                ))}
                            </div>
                            </Link>
                        )} */}
                    </div>
                ))}
            </div>
            <div className={menu ? `hero_atc flex` : ` hero_atc hidden lg:flex`}>
                <Link onClick={ () => {
                                setMenu(prev => !prev);
                            }} className='flex transition-all ease-in-out bg-black px-[2rem] py-[.7rem] max-h-[3rem] h-[3rem] text-white rounded-full items-center justify-center' href='/contact'>
                    Contact Us
                </Link>
                <span className='w-[3rem] h-[3rem] flex rounded-full items-center justify-center border-2 border-black'>
                    <svg className='h-[2rem] w-[1.25rem]' width="100%" height="100%" viewBox="0 0 24 25" fill="#ffffff">
                        <path d="M15.7501 12.5C15.7507 12.6028 15.7318 12.7047 15.6945 12.7999C15.6571 12.8951 15.6021 12.9817 15.5326 13.0547L9.53264 19.3047C9.46271 19.3775 9.37969 19.4353 9.28833 19.4747C9.19696 19.5141 9.09903 19.5344 9.00014 19.5344C8.80041 19.5344 8.60887 19.4518 8.46764 19.3047C8.32641 19.1576 8.24707 18.958 8.24707 18.75C8.24707 18.5419 8.32641 18.3424 8.46764 18.1953L13.9426 12.5L8.46764 6.80467C8.32641 6.65755 8.24707 6.45803 8.24707 6.24998C8.24707 6.04193 8.32641 5.8424 8.46764 5.69529C8.60887 5.54818 8.80041 5.46553 9.00014 5.46553C9.19986 5.46553 9.39141 5.54818 9.53264 5.69529L15.5326 11.9453C15.6021 12.0183 15.6571 12.1049 15.6945 12.2001C15.7318 12.2952 15.7507 12.3972 15.7501 12.5Z" fill="#000000"></path>
                    </svg>
                </span>
            </div>
         
            <div className='absolute lg:hidden flex items-center right-[1rem] top-[1.5rem] '>
                <svg onClick={toggleMenu} width="33px" height="33px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
                    {menu ? (
                        <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#0F0F0F" />
                    ) : (
                        <path fill="#000000" fillRule="evenodd" d="M18 5a1 1 0 100-2H2a1 1 0 000 2h16zm-4 4a1 1 0 100-2H6a1 1 0 100 2h8zm5 3a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-5 5a1 1 0 100-2H6a1 1 0 100 2h8z" />
                    )}
                </svg>
            </div>
        </div>
    );
};

export default Header;
