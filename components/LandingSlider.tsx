import React from "react";
import Image from "next/image";
import matt3 from "../public/milano-tyson.png";
import { MainPageImage } from "../typings";
import { urlFor } from "../sanity";

function LandingSlider({ mainImage }: any) {
  return (
    <div className=" pt-10 bg-slate-100  w-screen h-screen overflow-hidden grid place-content-center  shadow-lg p-5">
      <div className="mx-auto w-5/6  sm:w-1/2 sm:mt-10">
        <img
          src={urlFor(mainImage[0].mainImage).url()!}
          className=" cursor-pointer"
        />
      </div>
    </div>
  );
}

export default LandingSlider;
