import React from "react";
import Link from "next/link";
import ThemeToggleButton from "./ThemeToggleButton";

const Header = () => {
  return (
    <header className="sticky-top top-0 left-0 w-full bg-transparent z-50">
      <nav className="bg-white/40 border-gray-200 px-2 backdrop-blur sm:px-4 py-2.5 rounded dark:bg-dark-900/80">
        <div className="max-w-7xl flex flex-wrap justify-between items-center mx-auto">
          <Link href="/">
            <div className="flex items-center">
              <img src="/logo.png" alt="IG-Down Logo" className="h-10 mr-3" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                IG-Down
              </span>
            </div>
          </Link>
          <div className="flex items-center md:order-2">
            <ThemeToggleButton />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
