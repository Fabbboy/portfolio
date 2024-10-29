"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, NotebookIcon } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

type Props = {
  route: string;
  tooltip: string;
  setIsVisible: (isVisible: boolean) => void;
  icon: React.ReactNode;
  isMobile?: boolean;
};

const NavRouteComponent: React.FC<Props> = ({
  route,
  tooltip,
  setIsVisible,
  icon,
  isMobile,
}) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link href={route} passHref>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center justify-center space-y-1"
            onClick={() => setIsVisible(false)}
          >
            {!isMobile && icon}
            {isMobile && (
              <span className="text-md font-semibold">{tooltip}</span>
            )}
          </motion.button>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="top" align="center">
        <div className="p-2 bg-neutral-700 text-neutral-100 rounded-lg shadow-lg m-2">
          <p className="text-sm font-semibold">{tooltip}</p>
        </div>
      </TooltipContent>
    </Tooltip>
  );
};

export default function TaskbarComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const BUFFER_TIME = 2000;
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 640);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = useCallback(() => {
    setIsVisible(true);

    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => {
      setIsVisible(false);
    }, BUFFER_TIME);
  }, [BUFFER_TIME]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const showTaskbar = () => {
    setIsVisible(true);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
  };

  return (
    <div
      onMouseEnter={showTaskbar}
      onMouseLeave={() => handleScroll()}
      onTouchStart={showTaskbar}
      onTouchEnd={() => handleScroll()}
      className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[400px] h-20 flex justify-center items-center"
    >
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
              tooltip="Home"
              setIsVisible={setIsVisible}
              icon={<Home className="w-5 h-5" />}
              isMobile={isMobile}
            />
            <NavRouteComponent
              route="/blog"
              tooltip="Blog"
              setIsVisible={setIsVisible}
              icon={<NotebookIcon className="w-5 h-5" />}
              isMobile={isMobile}
            />
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
