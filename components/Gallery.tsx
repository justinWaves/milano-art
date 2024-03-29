import React, { useState } from "react";
import { urlFor } from "../sanity";
import { GalleryItem } from "../typings";
import PortableText from "react-portable-text";
import HandButton from "./HandButton";
import MilanoWave2 from "../public/milano-wave-2.svg";
import { Parallax } from "react-scroll-parallax";
interface GalleryProps {
  galleryItems: [GalleryItem];
  openContact: any;
}

function Gallery({ galleryItems, openContact }: GalleryProps) {
  const handleButtonClick = (cb: () => void) => {
    openContact(cb);
  };

  const sortedGalleryItems = galleryItems.sort((a, b) => {
    return new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime();
  });

  return (
    <div
      className="overflow-hidden
      w-screen 
      bg-gradient-to-r
      from-slate-700
      to-slate-600
      via-slate-900
      animate-gradient-xy
       relative "
    >
      <div className=" w-screen bg-[url('/lightlang-bkgd.svg')] bg-fill bg-repeat-y bg-center scroll-smooth">
        {/* <div className="w-screen h-20 bg-black  bg-opacity-50  bg-filter backdrop-blur-lg  "></div> */}
        <div className="bg-black bg-opacity-100 w-fit rounded-bl-3xl rounded-br-3xl mx-auto bg-filter backdrop-blur-lg px-10    ">
          <h1 className="text-6xl lg:text-9xl font-thin text-slate-200  text-center pt-20 pb-5   ">
            gallery
          </h1>
        </div>
        <Parallax speed={-25}>
          {/* <MilanoWave3 className="w-screen " /> */}

          <div className="mt-80 pb-[40vh] ">
            {/* Map of Gallery Items */}
            {sortedGalleryItems.map((item) => (
              <div className="flex flex-col z-4 lg:flex-col mx-auto  lg:mx-5 mt-20 ">
                <div className="relative w-5/6  mx-auto z-1 lg:w-5/6 bg-white bg-filter backdrop-blur-xl text-slate-900 bg-opacity-90 flex flex-col lg:flex-row  p-5 justify-center rounded-tr-2xl rounded-tl-2xl lg:rounded-2xl">
                  {/* Image desktop*/}
                  <div className="w-screen lg:w-1/2 hidden lg:flex lg:justify-between lg:flex-col md:relative xl:-top-20 md:top-1/2 z-2 ">
                    <img
                      src={urlFor(item.mainImage).url()!}
                      className=" cursor-pointer my-auto"
                    />
                  </div>

                  {/* text container*/}
                  <div className=" w-full lg:w-1/2 px-3 pt-3  lg:py-5 lg:px-5 flex flex-col justify-center">
                    <div className="lg:flex  hidden mb-10 mx-auto">
                      <HandButton onClick={handleButtonClick} />
                    </div>

                    <h1 className="text-5xl font-thin ">{item.title}</h1>
                    {/* <p className="text-slate-500 text-xs">
                      Posted on {new Date(item._createdAt).toLocaleString()}
                    </p> */}
                    <div className="mt-5 overflow-hidden">
                      <PortableText
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                        content={item.body}
                        serializers={{
                          h1: (props: any) => (
                            <h1
                              className="my-5 text-2xl font-bold"
                              {...props}
                            />
                          ),
                          h2: (props: any) => (
                            <h1 className="my-5 text-xl font-bold" {...props} />
                          ),
                          li: ({ children }: any) => (
                            <li className="ml-4 list-disc">{children}</li>
                          ),
                          link: ({ href, children }: any) => (
                            <a
                              href={href}
                              className="text-blue-500 hover:underline"
                            >
                              {children}
                            </a>
                          ),
                        }}
                      />
                    </div>
                  </div>
                </div>
                {/* image container mobile */}
                <div className="w-screen lg:hidden z-2">
                  <img
                    src={urlFor(item.mainImage).url()!}
                    className="mx-auto shadow-lg cursor-pointer "
                  />
                </div>
                {/* purchase container mobile */}
                <div className="w-5/6  mx-auto z-1 lg:w-5/6 bg-white bg-filter backdrop-blur-xl text-slate-200 bg-opacity-90  flex lg:hidden  lg:flex-row  p-5 justify-center rounded-br-2xl rounded-bl-2xl  lg:rounded-xl relative -top-0 shadow-md">
                  <div className="lg:hidden mx-auto mb-2">
                    <HandButton onClick={handleButtonClick} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Parallax>
      </div>

      {/* <MilanoWave2 className=" relative  -bottom-1 -mt-24 md:-mt-44" /> */}
    </div>
  );
}

export default Gallery;
