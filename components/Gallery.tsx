import React, { useState } from "react";
import { urlFor } from "../sanity";
import { GalleryItem } from "../typings";
import PortableText from "react-portable-text";
import HandButton from "./HandButton";

interface GalleryProps {
  galleryItems: [GalleryItem];
  openContact: any;
}

function Gallery({ galleryItems, openContact }: GalleryProps) {
  const handleButtonClick = (cb: () => void) => {
    openContact(cb);
  };

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
        <div className=" w-screen bg-[url('/lightlang-bkgd.svg')] bg-fill bg-repeat-y bg-center">
          {/* <div className="w-screen h-20 bg-black  bg-opacity-50  bg-filter backdrop-blur-lg  "></div> */}
          <div className="bg-black  bg-opacity-50 w-fit rounded-bl-3xl rounded-br-3xl mx-auto bg-filter backdrop-blur-lg px-10 ">
            <h1 className="opacity-100 text-6xl lg:text-9xl text-slate-200 font-bold text-center pt-10 lg:pt-40 pb-10 lg:pb-5 ">
              gallery
            </h1>
          </div>
          {/* <MilanoWave3 className="w-screen " /> */}

          <div className="mt-20 pb-72">
            {/* Map of Gallery Items */}
            {galleryItems.map((item) => (
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
                      <HandButton onSubmit={handleButtonClick} />
                    </div>

                    <h1 className="text-4xl  font-bold">{item.title}</h1>
                    <p className="text-slate-500 text-xs">
                      Posted on {new Date(item._createdAt).toLocaleString()}
                    </p>
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
                    <HandButton onSubmit={handleButtonClick} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <MilanoWave2 className=" relative fill-white bottom-0 -mt-64" /> */}
      </div>
    </>
  );
}

export default Gallery;
