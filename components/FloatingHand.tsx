import React, { useState } from "react";
import MilanoHand from "../public/milano-hand.svg";

function FloatingHand({ onClick }: any) {
  return (
    <div className="fixed bottom-10 right-10 z-96">
      <button
        className="h-32 group cursor-pointer relative grid place-items-center"
        onClick={() => onClick()}
      >
        <div className=" w-28 h-28 rounded-full bg-slate-200 backdrop-blur-md bg-opacity-30 absolute z-0 -left-9 group-hover:animate-ping"></div>
        <MilanoHand className="absolute z-1 w-20 hover:w-22 fill-red-500 opacity-50 mx-auto group-hover:animate-none group-hover:opacity-100 group-hover:fill-red-500" />

        <p className="text-xs mt-3 text-red-500  group-hover:fill-red-500 relative top-16">
          contact
        </p>
      </button>
    </div>
  );
}

export default FloatingHand;
