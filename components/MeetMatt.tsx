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
            <h1 className="text-4xl md:text-7xl font-bold text-center">Meet Matt Milano</h1>
            <p className="mt-5">
              Matt Milano is San Francisco based artist deep rooted in West
              Coast culture. Born north of the city, in Greenbrae, California
              Milano was raised in Novato. Since his formative years, Milano’s
              creativity was a conduit towards self-realization and personal
              growth. He continues to promote this ideal by advocating
              self-healing and mental health support through artistry in hopes
              to reconnect others to their essential human spirit using the
              implementation of creation Matt Milano has dedicated his talents
              to numerous local NPO and Charity Organizations to advocate art as
              catharsis. He has worked in collaboration with the Louis Merrill
              Foundation, the Wounded Warriors Foundation, and for benefit
              functions hosted by Secret Table, offering both live art
              performance and art donations to support their individual causes.
              Milano has established himself in the Bay Area community as not
              just an artist but as a humanitarian. Matt Milano draws
              inspiration through the observation of collective collaboration
              within his community. Fueled by the symbiotic relationship of
              complementary mediums, he is inspired by music and movement. Matt
              Milano captures intimate moments of individual self-expression and
              continues to foster his approach by teaching workshop classes out
              of his San Francisco based gallery The YAWAY Gallery.
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
