import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

function About() {
  return (
    <div className="">
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
        <ParallaxLayer
          offset={1}
          speed={2}
          className="bg-black bg-[url('/matt-bg.jpg')] bg-center bg-cover bg-fixed w-screen text-white flex justify-center"
        >
          <div className=" absolute bottom-20 mx-auto md:left-20 w-5/6 md:w-1/2 bg-slate-800 bg-opacity-50 md:bg-opacity-0 p-5 rounded-lg">
            <h1 className="text-4xl">
              Meet Matt Milanio, one of San Francisco's rising contemporary
              artists
            </h1>
            <p>
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
          <div className="absolute bottom-10 text-2xl animate-bounce">
            <ArrowCircleDownIcon className="text-6xl animate-pulse text-slate-700" />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default About;
