import React, { useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useSpring, animated, config } from "react-spring";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuAnimation = useSpring({
    config: config.molasses,

    from: { opacity: 0, height: "0px" },
    to: {
      opacity: isMenuOpen ? 1 : 0,
      height: isMenuOpen ? "100vh" : "0px",
    },
  });

  return isMenuOpen ? (
    <animated.div
      style={menuAnimation}
      className=" flex fixed 
    p-3  mx-auto max-w-7xl  bg-white w-screen  first-letter z-10 left-0 right-0 bg-filter backdrop-blur-xl bg-opacity-50 z-15"
    >
      <button
        className=" rounded-md border border-slate-600 p-2 absolute right-3 top-3"
        onClick={openMenu}
      >
        <CloseIcon fontSize="large" />
      </button>
      <div className="mx-auto my-auto">
        <h1 className="text-6xl text-slate-900 hover:border-l-4 border-red-600 cursor-pointer pl-2">
          art
        </h1>

        <h1 className="text-6xl text-slate-900 hover:border-l-4 border-red-600 cursor-pointer pl-2">
          shop
        </h1>
        <h1 className="text-6xl text-slate-900 hover:border-l-4 border-red-600 cursor-pointer pl-2">
          about
        </h1>
        <h1 className="text-6xl text-slate-900 hover:border-l-4 border-red-600 cursor-pointer pl-2">
          community
        </h1>
      </div>
    </animated.div>
  ) : (
    <header
      className="  flex  justify-between fixed 
 p-3  mx-auto max-w-7xl  bg-white w-screen z-10 left-0 right-0 bg-filter backdrop-blur-xl bg-opacity-50 z-15"
    >
      <div
        className="flex items-center
     space-x-5 "
      >
        <Link href="/">
          <div className="object-fill w-44">
            <svg
              className="fill-white!"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 2142 556"
            >
              <image
                x="2"
                y="2"
                width="2138"
                height="553"
                xlinkHref="data:img/png;base64,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"
              />
            </svg>
            {/* <MilanoText className="w-44 h-20 fill-white" /> */}
          </div>
        </Link>
        <div
          className="hidden md:inline-flex items-center
     space-x-5 text-slate-900"
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
              Community
            </h3>
          </a>
        </div>
      </div>

      <button
        className=" rounded-md border border-slate-600 p-2"
        onClick={openMenu}
      >
        <MenuIcon fontSize="large" />
      </button>
    </header>
  );
}

export default Header;
