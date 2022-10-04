import Image from "next/image";
import React from "react";
import { sanityClient, urlFor } from "../sanity";

import milanoLion from "../public/milano-lion.jpg";
import MilanoHand from "../public/milano-hand.svg";
import MilanoWave2 from "../public/milano-wave-2.svg";
import { GalleryItem } from "../typings";

interface GalleryProps {
  galleryItems: GalleryItem[];
}

function Gallery({ galleryItems }: GalleryProps) {
  console.log(galleryItems);
  return (
    <>
      <div
        className="overflow-hidden
      w-screen bg-gradient-to-r
      from-blue-400
      to-orange-500
      via-purple-500
      animate-gradient-xy
       relative"
      >
        <div className=" w-screen bg-[url('/milano-lightlang-inverse.svg')] bg-fill md:bg-cover bg-repeat-y bg-center fill-black">
          <div className="bg-black w-screen mx-auto  ">
            <h1 className="text-7xl text-slate-200 font-bold text-center p-10 ">
              gallery
            </h1>
          </div>
          {/* gallery item container */}
          <div className="flex flex-col z-4 md:flex-col mx-auto  md:mx-5  mt-40 pb-64">
            <div className="relative w-5/6  mx-auto z-1 md:w-5/6 bg-white bg-filter backdrop-blur-xl text-slate-900 bg-opacity-80  flex flex-col md:flex-row  p-5 justify-center rounded-tr-2xl rounded-tl-2xl   md:rounded-2xl">
              <div className="w-screen md:w-1/2 hidden md:flex md:justify-between md:flex-col md:relative xl:-top-20 md:top-1/2 z-2 ">
                <Image src={milanoLion} className="cursor-pointer"></Image>
                <div className="group md:flex lg:hidden flex-col mx-auto cursor-pointer hidden text-center mb-5">
                  <MilanoHand className="w-20 group-hover:fill-yellow-100 mx-auto hover:animate-pulse hover:animate-none fill-red-700" />
                  <p className="text-xs mt-3 group-hover:text-yellow-100 text-red-600 hover:animate-pulse ">
                    interested in owning?
                  </p>
                </div>
              </div>

              {/* text container*/}
              <div className=" w-full md:w-1/2 p-10">
                <div className="group lg:flex flex-col mx-auto cursor-pointer hidden text-center ">
                  <MilanoHand className="w-40 group-hover:fill-yellow-100 mx-auto animate-pulse hover:animate-none fill-red-700" />
                  <p className="text-sm mt-3 text-red-600 group-hover:text-yellow-100  ">
                    interested in owning?
                  </p>
                </div>

                <h1 className="text-4xl mt-10 font-bold">Milano Lion</h1>
                <p className="mt-3">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil)
                </p>
              </div>
            </div>
            {/* image container mobile */}
            <div className="w-screen  md:hidden z-2 ">
              <Image src={milanoLion} className=""></Image>
            </div>

            <div className="w-5/6  mx-auto z-1 md:w-5/6 bg-white bg-filter backdrop-blur-xl text-slate-200 bg-opacity-70  flex md:hidden flex-col md:flex-row  p-5 justify-center rounded-br-2xl rounded-bl-2xl  md:rounded-xl relative -top-2 shadow-md">
              <div className="group md:hidden flex-col mx-auto cursor-pointer flex ">
                <MilanoHand className="w-20 fill-red-600 mx-auto animate-pulse group-hover:animate-none group-hover:fill-yellow-100" />
                <p className="text-xs mt-3 text-red-600 group-hover:text-yellow-100">
                  interested in owning?
                </p>
              </div>
            </div>
          </div>
        </div>
        <MilanoWave2 className=" relative fill-white bottom-0 -mt-64" />
      </div>
    </>
  );
}

export default Gallery;

export const getServerSideProps = async () => {
  const query = `*[_type == "galleryItem"]{
    _id,
    _createdAt,
    title,
  mainImage, 
  body
  }
  `;
  const galleryItems = await sanityClient.fetch(query);

  return {
    props: {
      galleryItems,
    },
  };
};
