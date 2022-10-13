import React from "react";
import MilanoHand from "../public/milano-hand.svg";
import CloseIcon from "@mui/icons-material/Close";

function ContactScreen({ handleClose }: any) {
  return (
    <div className="w-screen h-screen backdrop-blur-lg bg-opacity-60 bg-black z-20 fixed scroll-smooth">
      <button
        onClick={() => handleClose()}
        className=" rounded-md border border-slate-100 hover:border-red-500 text-white hover:text-red-500 p-2 absolute right-2 top-2"
      >
        <CloseIcon fontSize="large" />
      </button>
      <div className="flex flex-col justify-between text-center h-screen">
        <MilanoHand className="fill-slate-100 mt-5" />
        <p className="text-white text-xs mt-3">inquire about art purchases</p>

        <div className="grid place-content-center space-y-5 m-10">
          <input
            type="text"
            placeholder="Name"
            className="p-3 rounded-sm w-full lg:w-5/6 mx-auto"
          />
          <input
            type="text"
            placeholder="Email"
            className="p-3 rounded-sm w-full lg:w-5/6 mx-auto"
          />
          <input
            type="text"
            placeholder="Subject"
            className="p-3 rounded-sm w-full lg:w-5/6 mx-auto"
          />
          <textarea
            className="p-3 rounded-sm "
            name=""
            id=""
            placeholder="Message"
            cols={50}
            rows={8}
          ></textarea>
          <button className="h-10 bg-sky-200 hover:bg-sky-400  text-slate-900">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactScreen;
