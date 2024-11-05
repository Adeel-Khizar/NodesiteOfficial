"use client";
import FAQS from "@/components/FAQS";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import ProjectCount from "@/components/ProjectCount";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import { CursorProvider } from "@/hooks/CursorContext";

import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

const Home = () => {
    const ref = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"], // Scroll range for the target
    });
  
    // Opacity transformation for the Hero component
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]); // Fades out from 1 to 0
  
    // Add smooth scroll behavior to the entire page
    useEffect(() => {
      document.documentElement.style.scrollBehavior = "smooth";
      return () => {
        document.documentElement.style.scrollBehavior = "auto";
      };
    }, []);
  return (
    <div>
      <motion.div
        className="fixed top-0 left-0 right-0 h-screen z-10"
        style={{
          opacity: heroOpacity, // Apply opacity transformation
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
      >
        <Hero />
      </motion.div>

      <div className="relative z-[111] mt-[100vh]"> {/* Ensure enough height to scroll */}
        <ProjectCount />
      </div>
      <CursorProvider>
      <Portfolio />
      <Services/>

      {/* <Solutions /> */}
      <Testimonials/>
      <Team/>
      <FAQS/>
    </CursorProvider>
    </div>
  )
}

export default Home