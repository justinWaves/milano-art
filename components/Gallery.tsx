import Image from "next/image";
import React from "react";
import LightLangInverse from "../public/milano-lightlang-inverse.svg";
import milanoLion from "../public/milano-lion.jpg";

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
      <div className="bg-black w-screen mx-auto ">
        <h1 className="text-6xl text-white text-center p-5">Gallery</h1>
      </div>
      <LightLangInverse className="w-screen fill-black" />
      <LightLangInverse className="w-screen fill-black" />

      <div className="flex flex-col md:flex-row mx-auto  md:mx-5  absolute top-40">
        <div className="w-screen md:w-2/3 shadow-xl">
          <Image src={milanoLion}></Image>
        </div>
        <div className="w-5/6 mx-auto md:w-1/4 bg-filter backdrop-blur-xl text-slate-300 bg-opacity-50  flex flex-col  p-5 justify-center  rounded-xl">
          <h1 className="text-4xl">Milano Lion</h1>
          <p>
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
