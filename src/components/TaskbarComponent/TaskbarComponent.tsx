"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Briefcase, User, MessageSquare } from "lucide-react";

export default function TaskbarComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showIndicator, setShowIndicator] = useState(true);
  let hideTimer: NodeJS.Timeout;

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startHideTimeout = () => {
    if (hideTimer) clearTimeout(hideTimer);
    hideTimer = setTimeout(
      () => {
        setIsVisible(false);
        setShowIndicator(true);
      },
      isMobile ? 4000 : 3000
    );
  };

  useEffect(() => {
    if (isVisible) {
      setShowIndicator(false);
      startHideTimeout();
    } else {
      const indicatorTimer = setTimeout(() => setShowIndicator(true), 1000);
      return () => clearTimeout(indicatorTimer);
    }
  }, [isVisible, isMobile]);

  const showTaskbar = () => {
    setIsVisible(true);
    startHideTimeout();
  };

  return (
    <div
      onMouseEnter={showTaskbar}
      onMouseLeave={startHideTimeout}
      onTouchStart={showTaskbar}
      className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[400px] h-20 flex justify-center items-center"
    >
      <AnimatePresence>
        {!isVisible && showIndicator && (
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: -10, opacity: 1 }}
            exit={{ y: 0, opacity: 0 }}
            transition={{
              y: { repeat: Infinity, repeatType: "reverse", duration: 0.8 },
              opacity: { duration: 0.4, ease: "easeInOut" },
            }}
            className="absolute bottom-6 transform -translate-x-1/2 rounded-full bg-blue-500 w-2 h-2"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isVisible && (
          <motion.nav
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 12,
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="h-12 w-[300px] bg-neutral-800 text-white flex justify-around items-center shadow-lg rounded-full"
          >
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center justify-center space-y-1"
              onClick={() => setIsVisible(false)}
            >
              <Home className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center justify-center space-y-1"
              onClick={() => setIsVisible(false)}
            >
              <Briefcase className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center justify-center space-y-1"
              onClick={() => setIsVisible(false)}
            >
              <User className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center justify-center space-y-1"
              onClick={() => setIsVisible(false)}
            >
              <MessageSquare className="w-5 h-5" />
            </motion.button>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
