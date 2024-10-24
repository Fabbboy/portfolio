"use client";
import { useState, useEffect } from "react";
import { Home, Briefcase, User, MessageSquare } from "lucide-react";

export default function TaskbarComponent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleHover = () => {
    setIsVisible(true);
  };

  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleClick}
      className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[400px] h-20 flex justify-center items-center"
    >
      <nav
        className={`h-12 w-[300px] bg-neutral-800 text-white flex justify-around items-center shadow-lg rounded-full transition-all duration-300 ${
          isVisible ? "translate-y-[-0.1rem]" : "translate-y-12"
        }`}
      >
        <button
          className="flex flex-col items-center justify-center space-y-1"
          onClick={handleClick}
        >
          <Home className="w-5 h-5" />
        </button>
        <button
          className="flex flex-col items-center justify-center space-y-1"
          onClick={handleClick}
        >
          <Briefcase className="w-5 h-5" />
        </button>
        <button
          className="flex flex-col items-center justify-center space-y-1"
          onClick={handleClick}
        >
          <User className="w-5 h-5" />
        </button>
        <button
          className="flex flex-col items-center justify-center space-y-1"
          onClick={handleClick}
        >
          <MessageSquare className="w-5 h-5" />
        </button>
      </nav>
    </div>
  );
}
