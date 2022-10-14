import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import MilanoHand from "../public/milano-hand.svg";
import MilanoText from "../public/milano-text.svg";
import FooterWave from "../public/footer-wave.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import MilanoPeople from "../public/milano-people.png";
import MilanoSFVibe from "../public/milano-SF-vibe.png";
import HandButton from "./HandButton";
// import MilanoFlowerHead from "../public/milano-flower-head.png";

const imageList = [MilanoPeople, MilanoSFVibe];
let index = 0;

index = Math.floor(Math.random() * imageList.length);

function Footer() {
  return (
    <div className="-mt-2 relative">
      <div className="w-screen md:w-5/6 lg:w-4/5 xl:w-1/2 mx-auto md:-mb-20 lg:-mb-40 xl:-mb-60 p-20  bg-white ">
        <Image src={imageList[index]} layout="responsive"></Image>
      </div>
      <FooterWave className="" />
      <div className="bg-slate-200 flex flex-col w-screen relative bottom-0">
        <div>
          <div className=" bg-black flex flex-col">
            <div className="p-5 md:p-5 pt-10 flex flex-col md:flex-row justify-between ">
              <div className="flex flex-col ">
                <MilanoText className="fill-slate-200 w-44 mx-auto mb-3" />
                <div className="flex flex-row justify-around mx-auto">
                  <a
                    href="https://www.instagram.com/mattmilanoart/"
                    target="_blank"
                  >
                    <InstagramIcon className="text-white text-5xl m-1 " />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100063465401119"
                    target="_blank"
                  >
                    <FacebookIcon className="text-white text-5xl m-1 " />
                  </a>
                </div>
              </div>
              <hr className="mt-10 mb-10" />
              <div className=" flex flex-row justify-between ">
                <div>
                  {/* <Link href="/">
                  <MilanoText className="fill-slate-200" />
                </Link> */}
                  <div className="text-slate-300 ">
                    <Link href="/about">
                      <h2 className="hover:text-red-600 cursor-pointer">
                        about
                      </h2>
                    </Link>

                    <h2 className="hover:text-red-600 cursor-pointer">
                      contact
                    </h2>
                  </div>
                </div>

                <a>
                  <MilanoHand className="fill-slate-800 hover:fill-red-600 hover:animate-pulse w-20 ml-5" />
                </a>
              </div>
            </div>
          </div>
          <div className=" px-2 p-2  flex flex-row justify-between bg-black text-slate-700 text-xs">
            <p>
              Design and build by{" "}
              <a
                href="https://justinwaves.github.io/jw-portfolio-2021/"
                className="text-slate-500"
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
