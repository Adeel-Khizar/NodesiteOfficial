"use client";
import React from "react";
import Image from "next/image";
import logoUrl from '/public/Capture-removebg-preview 1.png'

export default function Comingsoon(): JSX.Element {
  return (
    <div
      id="large-header"
      className="large-header bg-white flex flex-col items-center justify-center min-h-screen pt-24 pb-24 sm:px-8 px-4 md:px-16 mx-auto text-white"
    >
      <Image
        src={logoUrl}
        alt="logo img"
        style={{
          width: "250px",
          objectFit: "contain",
          marginBottom: "50px",
        }}
      />
      <h2 className="coming_soon text-black text-5xl pb-4">Get ready for something Special!</h2>
      <p className="coming_soon text-black text-3xl">
        We're working on something unique, and it's coming your way soon. Stay
        tuned!
      </p>
    </div>
  );
}
