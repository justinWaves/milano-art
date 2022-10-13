import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import MattPaints1 from "../public/matt-painting_1.jpg";
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
          <div className=" my-auto md:absolute md:bottom-20 mx-auto md:left-20 w-5/6 md:w-1/2 bg-slate-800 bg-opacity-50 lg:bg-opacity-0 p-5 rounded-lg h-fit">
            <h1 className="text-4xl">Meet Matt Milanio,</h1>
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
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="mx-auto my-auto z-0">
            <img src={"/matt-painting_1.jpg"} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className=" z-0 ">
            <img src={"/matt-painting_1.jpg"} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={3.5}
          style={{
            position: "relative",
          }}
        >
          <div className="absolute -bottom-80 left-10 z-0 ">
            <img src={"/matt-painting_3.jpg"} className="w-80" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={4.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="absolute -bottom-80 right-10 z-0 ">
            <img src={"/matt-painting_4.jpg"} className="w-80" />
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
          <div className="absolute bottom-10 text-2xl animate-bounce z-2">
            <MilanoHand className="w-10 animate-pulse fill-slate-200 md:fill-slate-700 " />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={1.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="mx-auto my-auto z-3 relative">
            <h1 className="text-6xl relative  text-white bg-black">
              Meet Matt Milano
            </h1>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default About;
