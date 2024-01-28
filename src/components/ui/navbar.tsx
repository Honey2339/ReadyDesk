import React from "react";
import { Space_Grotesk } from "next/font/google";
import { cn } from "@/utils/cn";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["700"] });

const Navbar = () => {
  return (
    <nav
      className={cn(
        spaceGrotesk.className,
        "bg-transparent p-4 fixed w-full top-0 z-50"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div
          className={cn(
            spaceGrotesk.className,
            "text-lime-400 text-xl underline"
          )}
        >
          ReadyDesk
        </div>

        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white max-sm:hidden hover:text-gray-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white max-sm:hidden hover:text-gray-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
