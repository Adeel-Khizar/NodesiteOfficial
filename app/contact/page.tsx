"use client";

import { Rancher, SedaN } from '@/fonts';
import React, { useState } from 'react';

export default function Contact() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // Append your access key
    formData.append("access_key", "bd7ffb83-e3d3-4b88-9b15-2a8d8fa9156d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await response.json();
      if (result.success) {
        setPopupMessage("Form submitted successfully!");
        setPopupVisible(true);
      } else {
        setPopupMessage("Form submission error. Please try again.");
        setPopupVisible(true);
      }
    } catch (error: any) {
      setPopupMessage("Error sending form: " + error.message);
      setPopupVisible(true);
    }
  }

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className=" mt-[90px]  bg-black pb-16 md:pb-32">
      <div className="p-[5vw]">
      </div>
      <div className='p-[5%] md:px-[5vw] md:mt-0 mt-[0px] relative w-[100%] md:w-[80%] overflow-hidden m-auto'>
        <form onSubmit={handleSubmit} className='bg-transparent w-full z-20 relative rounded-3xl gap-8 contact_form flex flex-col p-[5%] md:p-[3vw] border-2 border-gray-300'>
          <h2 className={`${Rancher} text-4xl lg:text-[4vw] text-center w-full md:mb-8`}>Get In Touch</h2>

          <div className='flex gap-8 flex-col w-full'>
            <div className='flex gap-4 w-full items-center justify-start'>
              <input 
                className={`w-full bg-transparent ${SedaN} `}
                type="text" 
                name="name" 
                placeholder='Enter your name *' 
                required 
              />
            </div>

           

          </div>

          <div className='w-full flex gap-4'>
            <input 
              className={`w-full bg-transparent ${SedaN} `}
              type="email" 
              name="email" 
              placeholder='Enter your email *' 
              required 
            />
          </div>

          <div className='flex gap-4 w-full items-center justify-start'>
              <input 
                className={` w-full bg-transparent ${SedaN} `}
                type="text" 
                name="phone" 
                placeholder='Enter phone number *' 
                required 
              />
            </div>
            <div className='flex gap-4 w-full items-center justify-start'>
              <input 
                className={`w-full bg-transparent ${SedaN} `} 
                type="text" 
                name="subject" 
                placeholder='Enter subject *' 
                required 
              />
            </div>
          <div className='flex gap-4 items-center justify-start'>
            <textarea 
              className={`w-full bg-transparent border-black ${SedaN} `} 
              name="message" 
              placeholder='Enter your message (optional) ' 
            />
          </div>

          <button type="submit" className={`bg-black font-bold hover:shadow-lg hover:shadow-green-400 transition-shadow duration-500 text-lg my-4 md:text-2xl text-white py-2 px-10 min-w-fit w-fit rounded-md mx-auto ${SedaN} `}>Submit</button>
        </form>
      </div>

      {popupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-green bg-opacity-0 z-50">
          <div className="bg-white flex items-center justify-center flex-col rounded-lg p-6 shadow-lg transform transition-all duration-300 scale-100">
            <h2 className="text-2xl mb-4">Thanks for submitting the form! We’ll get back to you soon.</h2>
            <button onClick={closePopup} className="bg-black hover:shadow-lg hover:shadow-white text-xl text-white px-4 py-2 rounded">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
