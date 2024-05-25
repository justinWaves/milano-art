import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import MilanoHand from "../public/milano-hand.svg";

function About() {
  return (
    <div className="">
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
        <ParallaxLayer
          offset={1}
          speed={1}
          className="bg-black bg-[url('/matt-bg.jpg')] bg-center bg-cover  w-screen text-white flex justify-center"
        >
          <div className=" my-auto md:absolute md:bottom-20 mx-auto md:left-20 w-5/6  bg-slate-800 backdrop-blur-md bg-opacity-50 px-5 py-10 pt-20  rounded-lg shadow-md ">
            <h1 className="text-4xl md:text-7xl font-bold text-center">
              Meet Matt Milano
            </h1>
            <p className="mt-5">
              Matt Milano is a San Francisco-based artist deeply rooted in West
              Coast culture. Born in Greenbrae, California, and raised in
              Novato, Milano's creativity has always been a conduit for
              self-realization and personal growth. He continues to promote
              these ideals by advocating for self-healing and mental health
              support through artistry, aiming to reconnect others to their
              essential human spirit through the power of creation. <br />
              <br />
              Matt Milano has dedicated his talents to numerous local non-profit
              and charity organizations, advocating for art as a form of
              catharsis. He has collaborated with the Louis Merrill Foundation,
              the Wounded Warriors Foundation, and participated in benefit
              events hosted by Secret Table, offering live art performances and
              art donations to support their individual causes.
              <br />
              <br /> In the Bay Area community, Milano is recognized not just as
              an artist but as a humanitarian. He draws inspiration from the
              collective collaboration within his community, fueled by the
              symbiotic relationship of complementary mediums, including music
              and movement. Matt Milano captures intimate moments of individual
              self-expression and continues to foster this approach by teaching
              workshop classes at his San Francisco-based gallery, The YAWAY
              Gallery.
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
          <div className="flex flex-col h-screen w-screen justify-center">
            <div className="mx-auto my-auto z-0 relative">
              <img src={"/matt-painting_1.jpg"} className="" />
            </div>
          </div>
        </ParallaxLayer>
        {/* 
        <ParallaxLayer
          offset={0}
          speed={3.5}
          style={{
            position: "relative",
          }}
        >
          <div className="absolute -bottom-80 lg:-bottom-80 left-10 z-0 ">
            <img
              src={"/matt-painting_3.jpg"}
              className="w-1/2 relative top-20"
            />
          </div>
        </ParallaxLayer> */}
        {/* 
        <ParallaxLayer
          offset={0}
          speed={4.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="absolute -bottom-96 lg:-bottom-96 right-10 z-0 w-1/2 ">
            <img
              src={"/matt-painting_4.jpg"}
              className="top-96 lg:top-0  relative  "
            />
          </div>
        </ParallaxLayer> */}

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
            <MilanoHand className="w-10 animate-pulse fill-slate-700 " />

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
            <h1 className="text-6xl relative  text-white bg-black p-2  px-20 rounded-3xl bg-opacity-60 backdrop-blur-md">
              Meet Matt Milano
            </h1>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default About;
