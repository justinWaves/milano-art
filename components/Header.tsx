import React, { useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CottageIcon from "@mui/icons-material/Cottage";
import MilanoText from "../public/milano-text.svg";
import MilanoHand from "../public/milano-hand.svg";
import { useSpring, animated, config } from "react-spring";

function Header({ openContact }: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuAnimation = useSpring({
    config: config.default,
    from: { opacity: 0, filter: "blur(1.5rem)" },
    to: {
      opacity: isMenuOpen ? 1 : 0,
      filter: isMenuOpen ? "blur(0rem)" : "blur(1.5rem)",
    },
  });

  return (
    <>
      <header
        className="flex justify-between fixed px-2 md:rounded-md
 p-2  mx-auto max-w-7xl  bg-white w-screen z-10 left-0 right-0 bg-filter backdrop-blur-xl bg-opacity-50"
      >
        <div
          className="flex items-center
     space-x-5 "
        >
          <Link href="/">
            <div className="object-fill w-44 cursor-pointer">
              <MilanoText className="w-44  fill-slate-900" />
            </div>
          </Link>
          <div
            className="hidden lg:inline-flex items-center
     space-x-5 text-slate-900"
          >
            <Link href="/about">
              <h3 className="cursor-pointer  hover:text-sky-100  bg-slate-900 bg-opacity-50 hover:bg-opacity-30 py-1 rounded-full px-4 text-white">
                about
              </h3>
            </Link>
            {/* <Link href="/">
              <h3 className="cursor-pointer hover:animate-pulse hover:text-red-600  bg-slate-200 py-1 rounded-full px-4 ">
                shop
              </h3>
            </Link> */}
            {/* <Link href="/">
              <h3 className="cursor-pointer hover:animate-pulse hover:text-red-600">
                about
              </h3>
            </Link> */}
            <div onClick={() => openContact()}>
              <h3 className="cursor-pointer  hover:text-sky-100  bg-slate-900 bg-opacity-50 hover:bg-opacity-30 py-1 rounded-full px-4 text-white">
                contact
              </h3>
            </div>
            {/* <h3 className="text-black  bg-slate-200 py-1 rounded-full px-4 ">
              community
            </h3> */}
          </div>
        </div>

        <button
          className=" rounded-md border border-slate-600 p-2 block lg:hidden"
          onClick={toggleMenu}
        >
          <MenuIcon
            fontSize="large"
            className="hover:fill-red-600 hover:animate-pulse"
          />
        </button>
      </header>

      {/* Menu when opened */}

      {isMenuOpen ? (
        <animated.div
          style={menuAnimation}
          className=" flex fixed 
p-3  mx-auto  bg-white h-screen w-screen first-letter z-10  bg-filter backdrop-blur-xl bg-opacity-50 z-15"
        >
          <button
            className=" rounded-md border border-slate-600 hover:text-red-700 p-2 absolute right-2 top-2"
            onClick={toggleMenu}
          >
            <CloseIcon fontSize="large" />
          </button>
          <div className="mx-auto my-auto">
            <Link href="/">
              <div className="flex flex-row group" onClick={toggleMenu}>
                <MilanoHand className="w-10 fill-red-700 invisible group-hover:visible" />
                <CottageIcon className="text-6xl text-slate-900 hover:text-red-700 cursor-pointer pl-2" />
              </div>
            </Link>
            {/* <div className="flex flex-row group">
              <MilanoHand className="w-10 fill-red-700 invisible group-hover:visible" />
              <h1 className="text-6xl text-slate-900 hover:text-red-700 cursor-pointer pl-2">
                shop
              </h1>
            </div> */}
            <Link href="/about">
              <div className="flex flex-row group" onClick={toggleMenu}>
                <MilanoHand className="w-10 fill-red-700 invisible group-hover:visible" />
                <h1 className="text-6xl text-slate-900 hover:text-red-700 cursor-pointer pl-2">
                  about
                </h1>
              </div>
            </Link>

            {/* <div className="flex flex-row group">
              <MilanoHand className="w-10 fill-red-700 invisible group-hover:visible" />
              <h1 className="text-6xl text-slate-900 hover:text-red-700 cursor-pointer pl-2">
                about
              </h1>
            </div> */}
            <div
              className="flex flex-row group"
              onClick={() => {
                openContact();
                toggleMenu();
              }}
            >
              <MilanoHand className="w-10 fill-red-700 invisible group-hover:visible" />
              <h1 className="text-6xl text-slate-900 hover:text-red-700 cursor-pointer pl-2">
                contact
              </h1>
            </div>
            {/* <div className="flex flex-row group">
              <MilanoHand className="w-10 fill-red-700 invisible group-hover:visible" />
              <h1 className="text-6xl text-slate-900 hover:text-red-700  cursor-pointer pl-2">
                community
              </h1>
            </div> */}
          </div>
        </animated.div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Header;
