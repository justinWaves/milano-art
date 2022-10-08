import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import MilanoHand from "../public/milano-hand.svg";
import MilanoText from "../public/milano-text.svg";
import MilanoWave from "../public/milano-wave-divider.svg";

import MilanoPeople from "../public/milano-people.png";
import MilanoSFVibe from "../public/milano-SF-vibe.png";
// import MilanoFlowerHead from "../public/milano-flower-head.png";

const imageList = [MilanoPeople, MilanoSFVibe];
let index = 0;

index = Math.floor(Math.random() * imageList.length);

function Footer() {
  return (
    <div className=" mt-10">
      <div className="w-screen md:w-2/3  mx-auto -mb-10 p-5 bg-white max-w-xl">
        <Image src={imageList[index]}></Image>
      </div>
      <MilanoWave className="" />
      <div className="bg-slate-200 flex flex-col w-screen relative bottom-0">
        <div>
          <div className=" bg-black flex flex-col">
            <div className="p-5 md:p-5 pt-10 flex flex-col md:flex-row justify-between ">
              <div className="flex flex-col ">
                <MilanoText className="fill-slate-200 w-44 mx-auto" />
              </div>
              <hr className="mt-10 mb-10" />
              <div className=" flex flex-row justify-between ">
                <div>
                  {/* <Link href="/">
                  <MilanoText className="fill-slate-200" />
                </Link> */}
                  <div className="text-slate-300 ">
                    <Link href="/">
                      <h2 className="hover:text-red-600 cursor-pointer">art</h2>
                    </Link>
                    <h2 className="hover:text-red-600 cursor-pointer">shop</h2>
                    {/* <h2 className="hover:text-red-600 cursor-pointer">about</h2> */}
                    <h2 className="hover:text-red-600 cursor-pointer">
                      contact
                    </h2>
                    <h2 className="hover:text-red-600 cursor-pointer">
                      community
                    </h2>
                  </div>
                </div>
                <Link href="/">
                  <a>
                    <MilanoHand className="fill-slate-200 hover:fill-red-600 hover:animate-pulse w-20 ml-5" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className=" px-2 p-2  flex flex-row justify-between bg-black text-slate-700 text-xs">
            <p>
              Design and build by{" "}
              <a
                href="https://justinwaves.github.io/jw-portfolio-2021/"
                className="text-sky-300"
              >
                Justin Weisberg
              </a>
            </p>
            <p>© 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
