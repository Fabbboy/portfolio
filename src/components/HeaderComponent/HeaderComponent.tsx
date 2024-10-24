"use client";
import { TerminalIcon } from "lucide-react";
import TitleComponent from "../TitleComponent";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

const HeaderComponent = () => {
  const openLink = (url: string) => {
    window.open(url);
  };

  return (
    <Card className="w-full bg-neutral-800 border-neutral-700 text-blue-100 p-4 rounded-xl shadow-md">
      <CardHeader className="p-0">
        <CardTitle>
          <nav className="flex justify-between items-center mx-auto">
            <TitleComponent title="Portfolio" />
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => openLink("https://github.com/fabbboy")}
                className="flex items-center  space-x-2 bg-neutral-800 hover:bg-neutral-600 text-neutral-100 font-semibold px-2 py-2 rounded-lg shadow-lg transition duration-300 border border-neutral-700"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="size-6 fill-current"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
                  ></path>
                </svg>
              </Button>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="items-center space-x-2 bg-neutral-800 hover:bg-neutral-600 text-neutral-100 font-semibold px-2 py-2 rounded-lg shadow-lg transition duration-300 border border-neutral-700 hidden md:flex"
                    >
                      <TerminalIcon className="w-6 h-6" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top" align="center">
                    <div className="p-2 bg-neutral-700 text-neutral-100 rounded-lg shadow-lg m-2">
                      <p className="text-sm font-semibold">Advanced Mode ;)</p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <Button
                variant="secondary"
                size="sm"
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded-lg shadow-lg transition duration-300"
              >
                <span>Get in Touch</span>
              </Button>
            </div>
          </nav>
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default HeaderComponent;
