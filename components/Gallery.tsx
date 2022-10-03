import Image from "next/image";
import React from "react";
import LightLangInverse from "../public/milano-lightlang-inverse.svg";
import milanoLion from "../public/milano-lion.jpg";
import MilanoHand from "../public/milano-hand.svg";

function Gallery() {
  return (
    <div
      className="w-screen bg-gradient-to-r
      from-blue-400
      to-orange-500
      via-purple-500
      animate-gradient-xy
      shadow-lg relative"
    >
      <div className="bg-black w-screen mx-auto  ">
        <h1 className="text-7xl text-slate-200 font-bold text-center p-5 ">
          Gallery
        </h1>
      </div>
      <LightLangInverse className="w-screen fill-black" />
      <LightLangInverse className="w-screen fill-black" />
      <LightLangInverse className="w-screen fill-black" />
      {/* description container */}
      <div className="flex flex-col z-4 md:flex-col mx-auto  md:mx-5 absolute top-44">
        <div className=" w-4/6  mx-auto z-1 md:w-5/6 bg-white bg-filter backdrop-blur-xl text-slate-200 bg-opacity-10  flex flex-col md:flex-row  p-5 justify-center rounded-tr-2xl rounded-tl-2xl   md:rounded-2xl">
          <div className="w-full md:w-1/2 "></div>
          {/* text container*/}
          <div className=" w-full md:w-1/2 p-5">
            <div className="md:flex flex-col mx-auto cursor-pointer hidden text-center ">
              <MilanoHand className="w-20 hover:fill-red-700 mx-auto hover:animate-pulse hover:animate-none fill-red-100" />
              <p className="text-xs mt-3 hover:text-red-600 hover:animate-pulse ">
                interested in owning?
              </p>
            </div>

            <h1 className="text-4xl mt-10 font-bold">Milano Lion</h1>
            <p className="mt-3">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil)
            </p>
          </div>
        </div>
        {/* image container */}
        <div className="w-screen md:w-1/2 shadow-xl md:absolute z-2 md:bottom-10 max-h-full min-h-500 ">
          <Image src={milanoLion} className=""></Image>
        </div>
        <div className="w-5/6  mx-auto z-1 md:w-5/6 bg-white bg-filter backdrop-blur-xl text-slate-200 bg-opacity-20  flex md:hidden flex-col md:flex-row  p-5 justify-center rounded-br-2xl rounded-bl-2xl  md:rounded-xl relative -top-5 shadow-md">
          <div className="md:hidden flex-col mx-auto cursor-pointer flex ">
            <MilanoHand className="w-20 fill-sky-300 mx-auto animate-pulse hover:animate-none hover:fill-red-100" />
            <p className="text-xs mt-3 text-sky-300 animate-pulse">
              interested in owning?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
