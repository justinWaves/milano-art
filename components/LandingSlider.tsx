import React from "react";
import Image from "next/image";
import matt3 from "../public/milano-tyson.png";
import { MainPageImage } from "../typings";
import { urlFor } from "../sanity";

function LandingSlider({ mainImage }: any) {
  return (
    <div className="  w-screen h-screen overflow-hidden grid place-content-center shadow-lg p-5">
      <div className="mx-auto w-4/5 mt-20 sm:w-1/2 ">
        <img
          src={urlFor(mainImage[0].mainImage).url()!}
          className=" cursor-pointer"
        />
      </div>
    </div>
  );
}

export default LandingSlider;
