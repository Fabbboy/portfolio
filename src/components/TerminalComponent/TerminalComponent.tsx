"use client";
import { useEffect, useRef } from "react";

const TerminalComponent = () => {
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-11/12 md:w-7/12 h-1/2 bg-zinc-900 shadow-lg rounded-lg">
      <div className="flex items-center justify-between w-full p-3 bg-neutral-800 rounded-t-lg">
        <h1 className="text-lg font-semibold text-neutral-100">Terminal</h1>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>

      <div
        ref={terminalRef}
        className="flex flex-col flex-start w-full h-96 p-3 space-y-2 overflow-y-auto bg-zinc-900 rounded-b-lg no-scrollbar"
      ></div>
    </div>
  );
};

export default TerminalComponent;
