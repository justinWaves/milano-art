import React from "react";
import Image from "next/image";
import matt1 from "../public/13007201_10209269190713285_601260331351754684_n.jpg";
import matt2 from "../public/native-milano.jpg";

function LandingSlider() {
  return (
    <div className="  w-screen h-screen  ">
      {/* <Image src={matt1} className="" />
      <Image src={matt2} className="" /> */}
      <Image src={matt2} layout="fill" objectFit="cover" priority />
    </div>
  );
}

export default LandingSlider;
