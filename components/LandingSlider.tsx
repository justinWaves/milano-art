import React from "react";
import Image from "next/image";
import matt3 from "../public/milano-tyson.png";
import { MainPageImage } from "../typings";
import { urlFor } from "../sanity";

function LandingSlider({ mainImage }: any) {
  return (
    <div className="  w-screen h-screen overflow-hidden grid place-content-center">
      <div className="mx-auto w-screen md:w-1/2 ">
        <img
          src={urlFor(mainImage[0].mainImage).url()!}
          className=" cursor-pointer"
        />
      </div>
    </div>
  );
}

export default LandingSlider;
