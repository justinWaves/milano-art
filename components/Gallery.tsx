import React from "react";
import LightLang from "../public/milano-light-lang.svg";

function Gallery() {
  return (
    <div
      //   className="w-screen bg-gradient-to-r
      // from-blue-400
      // to-orange-500
      // via-purple-500
      // animate-gradient-xy"

      className="bg-slate-200"
    >
      <LightLang className="w-screen fill-slate-300" />
      <LightLang className="w-screen  fill-slate-300" />
      <div></div>
    </div>
  );
}

export default Gallery;
