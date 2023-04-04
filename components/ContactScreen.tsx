import React from "react";
import MilanoText from "../public/milano-text.svg";
// import MilanoHand from "../public/milano-hand.svg";
import CloseIcon from "@mui/icons-material/Close";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SubjectIcon from "@mui/icons-material/Subject";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

function ContactScreen({ handleClose }: any) {
  return (
    <div className="w-screen h-screen backdrop-blur-2xl bg-opacity-60 bg-black z-20 fixed s">
      <button
        onClick={() => handleClose()}
        className=" rounded-md border border-slate-100 hover:border-red-500 text-white hover:text-red-500 p-2 absolute right-2 top-2"
      >
        <CloseIcon fontSize="large" />
      </button>
      <div className="flex flex-col justify-center text-center h-screen">
        <MilanoText className="fill-slate-100 pt-5 mb-5 md:pt-5 w-2/3 md:w-1/4 mx-auto" />

        <div className="flex flex-row justify-around mx-auto">
          <a href="https://www.instagram.com/mattmilanoart/" target="_blank">
            <InstagramIcon className="text-white text-6xl m-2 " />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100063465401119"
            target="_blank"
          >
            <FacebookIcon className="text-white text-6xl m-2 " />
          </a>
        </div>
        {/* <MilanoHand className="fill-white w-1/6 mx-auto" /> */}
        <div className="grid place-content-center space-y-3 m-5 md:m-10 mb-10">
          <p className="text-white text-xs">
            For inquires regarding art purchases, collaborations, other requests
            use form below.
          </p>
          <div className="flex flex-row  ">
            <AccountCircleIcon className="fill-white text-4xl  h-8" />

            <input
              type="text"
              placeholder="Name"
              className="ml-3  px-2 rounded-sm w-full lg:w-5/6 mx-auto  "
            />
          </div>
          <div className="flex flex-row ">
            <EmailIcon
              className="fill-white h-8 text-4xl relative
            "
            />
            <input
              type="email"
              placeholder="Email"
              className="ml-3  px-2 rounded-sm w-full lg:w-5/6 mx-auto "
            />
          </div>
          <div className="flex flex-row ">
            <SubjectIcon className="text-white h-8 text-4xl" />
            <input
              type="text"
              placeholder="Subject"
              className="ml-3  px-2 rounded-sm w-full lg:w-5/6 mx-auto "
            />
          </div>
          <div className="flex flex-row ">
            <LocalPhoneIcon className="text-white h-8 text-4xl" />
            <input
              type="text"
              placeholder="Phone"
              className="ml-3  px-2 rounded-sm w-full lg:w-5/6 mx-auto "
            />
          </div>
          <textarea
            className="p-3 rounded-sm "
            name=""
            id=""
            placeholder="Message"
            cols={50}
            rows={4}
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
