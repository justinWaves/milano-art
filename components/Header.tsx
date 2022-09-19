import React from "react";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import milanoText from "../public/MILANO_logo.svg";

function Header() {
  return (
    <header
      className="  flex  justify-between fixed 
     p-3  mx-auto max-w-7xl  bg-black w-screen z-10 left-0 right-0 bg-filter backdrop-blur-xl bg-opacity-50 z-15"
    >
      <div
        className="flex items-center
         space-x-5 "
      >
        <Link href="/">
          <div className="object-fill w-44">
            <Image src={milanoText} alt="" />
          </div>
        </Link>
        <div
          className="hidden md:inline-flex items-center
         space-x-5 text-white"
        >
          <Link href="/about">
            <h3 className="cursor-pointer hover-animate-bounce hover:fill-sky-200">
              About
            </h3>
          </Link>
          <h3>Contact</h3>
          <a
            target="_blank"
            href="https://www.toneden.io/justinwaves/post/sun-will-rise"
          >
            <h3 className="text-black  bg-slate-200 py-1 rounded-full px-4 ">
              listen
            </h3>
          </a>
        </div>
      </div>
      <div className="flex items-center space-x-5  text-slate-200">
        <a href="/" target="_blank">
          <MenuIcon fontSize="large" />
        </a>
      </div>
    </header>
  );
}

export default Header;
