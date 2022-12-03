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

// import MilanoFlowerHead from "../public/milano-flower-head.png";

const imageList = [MilanoPeople, MilanoSFVibe];
let index = 0;

index = Math.floor(Math.random() * imageList.length);

function Footer({ openContact }: any) {
  return (
    <div className="-mt-2 relative h-screen">
      <div className="w-screen h-fit md:w-5/6 lg:w-3/5 xl:w-1/2 mx-auto p-10 md:p-0 bg-white relative top-20 mt-40 lg:mt-0">
        <Image src={imageList[index]} layout="responsive"></Image>
      </div>
      <FooterWave className="relative -bottom-1" />
      <div className=" flex flex-col w-screen relative bottom-0">
        <div>
          <div className=" bg-black flex flex-col">
            <div className="p-5 md:p-5 pt-10 flex flex-col md:flex-row justify-between ">
              <div className="flex flex-col ">
                <div className="flex flex-row justify-around mx-auto">
                  <Link href="/">
                    <MilanoText className="fill-slate-200 w-32 mr-3 mx-auto mb-3 cursor-pointer" />
                  </Link>
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
                <div className="flex flex-col justify-center">
                  {/* <Link href="/">
                    <MilanoText className="fill-slate-200 mb-3" />
                  </Link> */}
                  <div className="text-slate-300 ">
                    <Link href="/about">
                      <h2 className="hover:text-red-600 cursor-pointer">
                        about
                      </h2>
                    </Link>

                    <h2
                      className="hover:text-red-600 cursor-pointer"
                      onClick={() => openContact()}
                    >
                      contact
                    </h2>
                    <Link href="/privacy-policy">
                      <h2 className="hover:text-red-600 cursor-pointer">
                        Privacy Policy
                      </h2>
                    </Link>
                    <Link href="/terms-of-service">
                      <h2 className="hover:text-red-600 cursor-pointer">
                        Terms of Service
                      </h2>
                    </Link>
                  </div>
                </div>

                <div
                  className="group cursor-pointer"
                  onClick={() => openContact()}
                >
                  <MilanoHand className="fill-slate-800 hover:fill-red-600 hover:animate-pulse w-20 ml-5" />
                  <p className="text-xs text-slate-800 group-hover:text-red-600 text-center ml-3 mt-1">
                    reach out
                  </p>
                </div>
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
