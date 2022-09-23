import Image from "next/image";
import React from "react";
import LightLang from "../public/milano-light-lang.svg";
import milanoLion from "../public/milano-lion.jpg";

function Gallery() {
  return (
    <div
      //   className="w-screen bg-gradient-to-r
      // from-blue-400
      // to-orange-500
      // via-purple-500
      // animate-gradient-xy"
      className="bg-slate-200 relative "
    >
      <LightLang className="w-screen fill-slate-300" />
      <LightLang className="w-screen  fill-slate-300" />

      <div className="flex flex-row absolute top-10 mx-10  gap-10">
        <div className="w-2/3 shadow-xl ">
          <Image src={milanoLion}></Image>
        </div>
        <div className="w-1/3 bg-white bg-opacity-70  flex flex-col p-5 justify-center pt-10 rounded-xl">
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
