import React, { useState } from "react";
import MilanoHand from "../public/milano-hand.svg";

function HandButton({ onClick }: any) {
  return (
    <button
      className="h-32 group cursor-pointer relative grid place-items-center"
      onClick={() => onClick()}
    >
      <div className=" w-28 h-28 rounded-full bg-slate-200  absolute z-0 -left-3 group-hover:animate-ping"></div>
      <MilanoHand className="absolute z-1 w-20 hover:w-22 fill-red-500 mx-auto group-hover:animate-none group-hover:fill-red-800" />

      <p className="text-xs mt-3 text-red-500 group-hover:text-red-800 relative top-16">
        click for inquiries
      </p>
    </button>
  );
}

export default HandButton;
