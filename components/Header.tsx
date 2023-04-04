import React, { useEffect, useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CottageIcon from "@mui/icons-material/Cottage";
import MilanoText from "../public/milano-text.svg";
import MilanoHand from "../public/milano-hand.svg";
import { useSpring, animated, config } from "react-spring";

function Header({ openContact }: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  // if (show) {
  //   setTimeout(() => {
  //     handleShow(false);
  //   }, 500);
  // }

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
        className={`transition ease-in-out duration-1000 flex justify-between fixed px-2 md:rounded-md
 p-2  mx-auto max-w-7xl  w-screen z-10 left-0 right-0 border-b  ${
   show ? "bg-black" : "bg-white"
 } ${
          show && " bg-filter backdrop-blur-sm bg-opacity-60  "
        } border-slate-400 border-opacity-5`}
      >
        <div
          className="flex items-center
     space-x-5 "
        >
          <Link href="/">
            <div className="object-fill w-44 cursor-pointer">
              <MilanoText
                className={`w-28 transition ease-in-out duration-1000  p-3 ${
                  show ? "fill-slate-200    " : "fill-slate-900  "
                }`}
              />
            </div>
          </Link>
          <div
            className="hidden lg:inline-flex items-center
     space-x-5 text-slate-900"
          >
            <Link href="/about">
              <h3
                className={`group transition ease-in-out duration-1000 cursor-pointer   font-thin text-lg bg-opacity-50 hover:bg-opacity-30 py-1 rounded-full px-4 ${
                  show
                    ? "text-slate-200 bg-opacity-50"
                    : "text-slate-900 bg-opacity-0"
                }`}
              >
                About
                <span
                  className={` block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] ${
                    show ? "bg-slate-200 " : "bg-slate-900 "
                  }`}
                ></span>
              </h3>
            </Link>

            <Link href="/gallery">
              <h3
                className={`group transition ease-in-out duration-1000 cursor-pointer  font-thin text-lg   bg-opacity-50 hover:bg-opacity-30 py-1 rounded-full px-4 ${
                  show
                    ? "text-slate-200 bg-opacity-50"
                    : "text-slate-900 bg-opacity-0"
                }`}
              >
                Gallery
                <span
                  className={` block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] ${
                    show ? "bg-slate-200 " : "bg-slate-900 "
                  }`}
                ></span>
              </h3>
            </Link>

            <div onClick={() => openContact()}>
              <h3
                className={`group transition ease-in-out duration-1000 cursor-pointer   font-thin text-lg bg-opacity-50 hover:bg-opacity-30 py-1 rounded-full px-4 ${
                  show
                    ? "text-slate-200 bg-opacity-50"
                    : "text-slate-900 bg-opacity-0"
                }`}
              >
                Contact
                <span
                  className={` block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] ${
                    show ? "bg-slate-200 " : "bg-slate-900 "
                  }`}
                ></span>
              </h3>
            </div>
          </div>
        </div>

        <button
          className={`rounded-md border  ${
            show ? "border-slate-200 " : "border-slate-900 "
          } p-2 block lg:hidden`}
          onClick={toggleMenu}
        >
          <MenuIcon
            fontSize="medium"
            className={` hover:animate-spin transition-all duration-500 ${
              show ? "text-slate-200 " : "text-slate-900 "
            }`}
          />
        </button>
      </header>

      {/* Menu when opened */}

      {isMenuOpen ? (
        <animated.div
          style={menuAnimation}
          className=" flex fixed 
p-3  mx-auto  bg-black h-screen w-screen first-letter z-10  bg-filter backdrop-blur-xl bg-opacity-50 z-15"
        >
          <button
            className=" rounded-md border border-slate-200 hover:bg-white hover:bg-opacity-20 p-2 absolute right-2 top-2 text-slate-200 transition-all duration-500"
            onClick={toggleMenu}
          >
            <CloseIcon fontSize="medium" />
          </button>
          <div className="mx-auto my-auto">
            <Link href="/">
              <div className="flex flex-row group" onClick={toggleMenu}>
                <MilanoHand className="w-10 fill-slate-900 invisible " />

                <div className="relative group cursor-pointer">
                  <MilanoHand className="w-1/2 fill-slate-200  cursor-pointer pl-2 group-hover:fill-sky-300 transition-all duration-1000 z-10" />
                  <div className="bg-sky-300 bg-opacity-30 absolute z-0 w-44 h-44 bottom-2 -left-2 rounded-full invisible group-hover:visible animate-ping"></div>
                </div>
              </div>
            </Link>

            <Link href="/about">
              <div className="flex flex-row group" onClick={toggleMenu}>
                <MilanoHand className="w-10 fill-sky-200 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <h1 className="text-6xl text-slate-200 font-thin  cursor-pointer pl-2 group">
                  about
                  <span
                    className={` block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] mt-2 bg-slate-200 
                  `}
                  ></span>
                </h1>
              </div>
            </Link>
            <Link href="/gallery">
              <div className="flex flex-row group" onClick={toggleMenu}>
                <MilanoHand className="w-10 fill-sky-200 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <h1 className="text-6xl text-slate-200 font-thin  cursor-pointer pl-2 group">
                  gallery
                  <span
                    className={` block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] mt-2 bg-slate-200 
                  `}
                  ></span>
                </h1>
              </div>
            </Link>

            <div
              className="flex flex-row group"
              onClick={() => {
                openContact();
                toggleMenu();
              }}
            >
              <MilanoHand className="w-10 fill-sky-200 opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <h1 className="text-6xl text-slate-200 font-thin cursor-pointer pl-2 group">
                contact
                <span
                  className={` block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] mt-2 bg-slate-200 
                  `}
                ></span>
              </h1>
            </div>
            <div className="flex flex-row group">
              <MilanoHand className="w-10 fill-sky-200 opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <h1 className="text-6xl text-slate-200 font-thin   cursor-pointer pl-2">
                community
                <span
                  className={` block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] mt-2 bg-slate-200 
                  `}
                ></span>
              </h1>
            </div>
          </div>
        </animated.div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Header;
