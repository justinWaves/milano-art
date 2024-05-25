import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import MilanoHand from "../public/milano-hand.svg";
import Footer from "./Footer";

function About() {
  return (
    <div className="">
      <Parallax pages={2} style={{ top: "0", left: "0" }}>
        <ParallaxLayer
          offset={1}
          speed={1}
          className=" bg-[url('/matt-painting_4.jpg')] overflow-scroll bg-center bg-cover  mt-[60px]  w-screen text-slate-100 flex justify-center"
        >
          <div className=" my-auto bg-black bg-opacity-30 backdrop-blur-md  px-5 pb-40 py-10 pt-20 w-[900px] rounded-lg shadow-md ">
            {/* <h1 className="text-4xl md:text-7xl font-bold text-center">
              Meet Matt Milano
            </h1> */}
            <img src="/milano-flower-head.png" className="h-[300px] mx-auto" />
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
              <img src={"/matt-painting_3.jpg"} className="" />
            </div>
          </div>
        </ParallaxLayer>
        
        <ParallaxLayer
          offset={0}
          speed={3.5}
          style={{
            position: "relative",
          }}
        >
          <div className="absolute top-[500px] left-10 z-0 ">
            <img
              src={"/matt-painting_1.jpg"}
              className="w-1/2 relative top-20"
            />
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
          <div className="absolute w-[300px] bottom-[500px] right-10 z-0  ">
            <img
              src={"/matt-painting_4.jpg"}
              className=" "
            />
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
            <MilanoHand className="w-10 animate-pulse fill-slate-100 mx-auto" />
            <p className="text-xs text-white mt-2 ">scroll to learn more</p>

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
             <div className="text-2xl relative  text-black text-center p-2 font-light  px-20 rounded-3xl  bg-white bg-opacity-80 backdrop-blur-md">
            {/* <p className="mx-auto">Made</p> */}
            <img src="milano-SF-vibe.png" className="w-[200px]" />
            </div> 
          </div>
        </ParallaxLayer>
      </Parallax>
      {/* <Footer /> */}
    </div>
  );
}

export default About;
