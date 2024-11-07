"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../libs/utils";
import { SedaN } from "@/fonts";

export const DirectionAwareHover = ({
  imageUrl,
  title,
  children,
  childrenClassName,
  imageClassName,
  className,
}: {
  imageUrl: string;
  title: string;
  children: React.ReactNode | string;
  childrenClassName?: string;
  imageClassName?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [hover, setHover] = useState(false); // We just need to track if we are hovering

  const handleMouseEnter = () => {
    setHover(true); // Set hover state to true when mouse enters
  };

  const handleMouseLeave = () => {
    setHover(false); // Set hover state to false when mouse leaves
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={ref}
      className={cn(
        "h-full w-full bg-transparent rounded-lg overflow-hidden group/card relative",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          className="relative rounded-lg h-full w-full"
          initial="initial"
          whileHover={hover ? "left" : "initial"} // Use left animation on hover
          exit="exit"
        >
          <motion.div 
           className="group-hover/card:block rounded-lg hidden workHoverOverlay absolute inset-0 w-full h-full z-10 transition duration-500" />
          <motion.div
            variants={variants}
            className="h-full w-full rounded-lg relative bg-gray-50 dark:bg-black"
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          >
            <h1
              style={{
                fontWeight: 900,
              }}
              className={`${SedaN} font-extrabold absolute top-0 border-2 rounded-lg border-black z-40 text-3xl bg-white p-3 text-black left-0`}
            >
              {title}
            </h1>
            <Image
              alt="image"
              className={cn(
                "h-full w-full object-cover rounded-lg scale-[1.15]",
                imageClassName
              )}
              width="1000"
              height="1000"
              src={imageUrl}
            />
          </motion.div>
          <motion.div
            variants={textVariants}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className={cn(
              "text-white absolute bottom-4 left-4 z-40",
              childrenClassName
            )}
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

// Variant only for left-side hover effect
const variants = {
  initial: {
    x: 0,
    y: 0,
  },
  exit: {
    x: 0,
    y: 0,
  },
  left: {
    x: 20, // Animate from the left side
  },
};

// Variant for text with the same left-side animation
const textVariants = {
  initial: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  exit: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  left: {
    x: 20,
    opacity: 1, // Text also appears from the left
  },
};
