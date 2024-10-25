"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home } from "lucide-react";
import Link from "next/link";

type Props = {
  route: string;
  setIsVisible: (isVisible: boolean) => void;
  icon: React.ReactNode;
};

const NavRouteComponent: React.FC<Props> = ({ route, setIsVisible, icon }) => {
  return (
    <Link href={route} passHref>
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="flex flex-col items-center justify-center space-y-1"
        onClick={() => setIsVisible(false)}
      >
        {icon}
      </motion.button>
    </Link>
  );
};

export default function TaskbarComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showIndicator, setShowIndicator] = useState(true);
  const TIMEOUT = 1000;
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const startHideTimeout = useCallback(() => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => {
      setIsVisible(false);
      setShowIndicator(true);
    }, TIMEOUT);
  }, [TIMEOUT]);

  useEffect(() => {
    if (isVisible) {
      setShowIndicator(false);
    } else {
      const indicatorTimer = setTimeout(() => setShowIndicator(true), 1000);
      return () => clearTimeout(indicatorTimer);
    }
  }, [isVisible]);

  const showTaskbar = () => {
    setIsVisible(true);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current); // Clear timeout on show
  };

  return (
    <div
      onMouseEnter={showTaskbar}
      onMouseLeave={startHideTimeout} // Only triggers timeout when mouse leaves
      onTouchStart={showTaskbar}
      onTouchEnd={startHideTimeout} // Triggers timeout on touch end
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
            className="absolute bottom-6 transform -translate-x-1/2 text-2xl"
          >
            🚀
          </motion.div>
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
            <NavRouteComponent
              route="/"
              setIsVisible={setIsVisible}
              icon={<Home className="w-5 h-5" />}
            />
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
