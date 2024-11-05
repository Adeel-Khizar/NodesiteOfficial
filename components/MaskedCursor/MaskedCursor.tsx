"use client";
import React, { useEffect, useState } from "react";
import "./maskedcursor.css";
import { motion } from "framer-motion";

// Define types for the mouse position state
interface MousePosition {
  x: number;
  y: number;
}

const MaskedCursor: React.FC = () => {
  // Define cursor coordinates with types
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  // Define if mouse is hovered on element
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Track mouse position on mousemove event
  useEffect(() => {
    const setFromEvent = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  // Dynamic size for the mask (50px by default, 450px when hovered)
  const size: number = isHovered ? 450 : 50;

  return (
    <div className="container">
      {/* Dynamic masking div */}
      <motion.div
        className="mask"
        style={{
          // Dynamically set the mask position based on mouse position
          maskPosition: `${mousePosition.x - size / 2}px ${mousePosition.y - size / 2}px`,
          WebkitMaskPosition: `${mousePosition.x - size / 2}px ${mousePosition.y - size / 2}px`,
          // Dynamically set the mask size based on hover state
          maskSize: `${size}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ ease: "backOut", duration: 0.4 }}
      >
        <h1
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          not <br /> found
        </h1>
      </motion.div>

      {/* Default text */}
      <div className="">
        <h1>
          404 <br /> page
        </h1>
      </div>
    </div>
  );
};

export default MaskedCursor;
