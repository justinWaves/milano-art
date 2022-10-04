import React from "react";
import MilanoHandSVG from "../public/milano-hand.svg";

function MilanoHand() {
  return (
    <div className="group lg:flex flex-col mx-auto cursor-pointer hidden text-center ">
      <MilanoHandSVG className="w-40 group-hover:fill-yellow-100 mx-auto animate-pulse hover:animate-none fill-red-700" />
      <p className="text-sm mt-3 text-red-600 group-hover:text-yellow-100  ">
        interested in owning?
      </p>
    </div>
  );
}

export default MilanoHand;
