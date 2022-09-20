import React from "react";
import Image from "next/image";
import matt1 from "../public/13007201_10209269190713285_601260331351754684_n.jpg";

function LandingSlider() {
  return (
    <div className="h-screen w-screen">
      <Image src={matt1} />
    </div>
  );
}

export default LandingSlider;
