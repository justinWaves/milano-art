import React from "react";
import Image from "next/image";
import MattHand from "../public/milano-hand.svg";
import matt2 from "../public/native-milano.jpg";
import matt3 from "../public/milano-tyson.png";

function LandingSlider() {
  return (
    <div className="  w-screen h-screen  ">
      {/* <MattHand className="w-1/2 mx-auto" /> */}
      {/* <Image src={MattHand} className="" /> */}

      <div className="mx-auto w-screen md:w-1/3 pt-20">
        <Image src={matt3} className="shadow-md" />
      </div>
    </div>
  );
}

export default LandingSlider;
