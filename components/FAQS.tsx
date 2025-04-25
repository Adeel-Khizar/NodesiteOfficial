import { faqs } from "@/constants";
import { Rancher, SedaN, OswaldFont, PoppinsFont } from "@/fonts";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQ {
  id: number;
  header: string;
  text: string;
}

const FAQS: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const toggleAccordion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  useEffect(() => {
    const buttons = buttonRefs.current;

    const handleMouseMove = (e: MouseEvent, index: number) => {
      const button = buttons[index];
      if (!button) return;

      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      button.style.setProperty("--mouse-x", `${x}px`);
      button.style.setProperty("--mouse-y", `${y}px`);
    };

    const mouseMoveListeners = faqs.map((_, index) => {
      return (e: MouseEvent) => handleMouseMove(e, index);
    });

    buttons.forEach((button, index) => {
      if (button) {
        button.addEventListener("mousemove", mouseMoveListeners[index]);
      }
    });

    return () => {
      buttons.forEach((button, index) => {
        if (button) {
          button.removeEventListener("mousemove", mouseMoveListeners[index]);
        }
      });
    };
  }, []);

  return (
    <section className="relative bg-black py-16 px-4 sm:px-6 lg:px-8 z-50">
      <style jsx global>{`
        .glow-effect {
          position: relative;
          overflow: hidden;
        }

        .glow-effect::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            600px circle at var(--mouse-x) var(--mouse-y),
            rgba(255, 255, 255, 0.1),
            transparent 40%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          border-radius: 0.75rem 0.75rem 0 0;
        }

        .glow-effect:hover::before {
          opacity: 1;
        }
      `}</style>

      <div className="max-w-[1720px] w-full mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${OswaldFont} text-4xl sm:text-5xl lg:text-6xl text-white mb-4`}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`${PoppinsFont} text-lg text-gray-300 max-w-2xl mx-auto`}
          >
            Quick answers to common questions about our services and support.
          </motion.p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: faq.id * 0.1 }}
              className="overflow-hidden"
            >
              <motion.div
                className={`border-b border-gray-800 transition-colors duration-200 ${
                  hoveredId === faq.id ? "border-gray-600" : ""
                }`}
                onHoverStart={() => setHoveredId(faq.id)}
                onHoverEnd={() => setHoveredId(null)}
              >
                <button
                  ref={(el) => (buttonRefs.current[index] = el)}
                  onClick={() => toggleAccordion(faq.id)}
                  className={`glow-effect w-full flex justify-between rounded-t-xl items-center py-5 px-4 text-left focus:outline-none transition-colors duration-200 ${
                    activeId === faq.id ? "bg-gray-900" : "hover:bg-gray-900/50"
                  }`}
                >
                  <h3
                    className={`${PoppinsFont} text-xl sm:text-2xl text-white`}
                  >
                    {faq.header}
                  </h3>
                  <motion.div
                    animate={{ rotate: activeId === faq.id ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 flex-shrink-0"
                  >
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: { duration: 0.3 },
                          opacity: { duration: 0.2, delay: 0.1 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.3 },
                          opacity: { duration: 0.2 },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-6 pt-6 rounded-b-xl bg-gray-900/80 border-t border-gray-800 mb-[10px]">
                        <p className={`${PoppinsFont} text-gray-300 text-lg`}>
                          {faq.text}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQS;
