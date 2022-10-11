import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import MilanoHand from "../public/milano-hand.svg";

function About() {
  return (
    <div className="">
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
        <ParallaxLayer
          offset={1}
          speed={2}
          className="bg-black bg-[url('/matt-bg.jpg')] bg-center bg-cover  w-screen text-white flex justify-center"
        >
          <div className=" my-auto lg:absolute lg:bottom-20 mx-auto lg:left-20 w-5/6 lg:w-1/2 bg-slate-800 bg-opacity-50 lg:bg-opacity-0 p-5 rounded-lg h-fit">
            <h1 className="text-4xl">
              Meet Matt Milanio, one of San Francisco's rising contemporary
              artists
            </h1>
            <p className="mt-3">
              Its rare today that an artist rises amongst the ranks of the
              greats. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="absolute bottom-5 text-2xl animate-bounce">
            <MilanoHand className="w-10 animate-pulse fill-slate-200 md:fill-slate-700 " />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default About;
