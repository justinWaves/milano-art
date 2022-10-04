import React from "react";
import Image from "next/image";
import MattHand from "../public/milano-hand.svg";
import matt2 from "../public/native-milano.jpg";
import matt3 from "../public/milano-tyson.png";

function LandingSlider() {
  return (
    <div className="  w-screen h-screen overflow-hidden grid place-content-center">
      <div className="mx-auto w-screen md:w-1/2 ">
        <Image src={matt3} className=" cursor-pointer" />
      </div>
    </div>
  );
}

export default LandingSlider;
