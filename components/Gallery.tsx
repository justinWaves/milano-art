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
      <div className="bg-white w-screen mx-auto ">
        <h1 className="text-7xl text-slate-700 font-bold text-center p-3 mt-20">
          Gallery
        </h1>
      </div>
      <LightLangInverse className="w-screen fill-white" />
      <LightLangInverse className="w-screen fill-white" />

      <div className="flex flex-col md:flex-row mx-auto  md:mx-5  absolute top-44">
        <div className="w-screen md:w-2/3 shadow-xl">
          <Image src={milanoLion}></Image>
        </div>
        <div className="w-5/6 mx-auto md:w-1/4 bg-black bg-filter backdrop-blur-xl text-slate-200 bg-opacity-50  flex flex-col  p-5 justify-center  rounded-xl">
          <div className="flex flex-col mx-auto cursor-pointer ">
            <MilanoHand className="w-20 fill-sky-200 mx-auto animate-pulse hover:animate-none hover:fill-red-100" />
            <p className="text-xs mt-3 text-sky-200 animate-pulse">
              interested in owning?
            </p>
          </div>

          <h1 className="text-4xl mt-10 font-bold">Milano Lion</h1>
          <p className="mt-3">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
