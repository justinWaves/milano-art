import Image from "next/image";
import React from "react";
import { sanityClient, urlFor } from "../sanity";
import MilanoWave3 from "../public/milano-waves-3.svg";
import milanoLion from "../public/milano-lion.jpg";
import MilanoHand from "../public/milano-hand.svg";
import MilanoWave2 from "../public/milano-wave-2.svg";
import { GalleryItem } from "../typings";
import PortableText from "react-portable-text";

interface GalleryProps {
  galleryItems: [GalleryItem];
}

function Gallery({ galleryItems }: GalleryProps) {
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
        <div className=" w-screen bg-[url('/milano-lightlang-inverse.svg')] bg-fill lg:bg-cover bg-repeat-y bg-center fill-black">
          <div className="bg-black w-screen mx-auto  ">
            <h1 className="text-6xl lg:text-9xl text-slate-200 font-bold text-center pt-20 lg:pt-60 pb-10 lg:pb-24 animate-pulse ">
              gallery
            </h1>
          </div>
          <MilanoWave3 className="w-screen " />

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

                    <div className="group lg:hidden flex-col mx-auto cursor-pointer hidden text-center mb-5">
                      <MilanoHand className="w-20 group-hover:fill-slate-700 mx-auto hover:animate-pulse hover:animate-none fill-red-700 mt-5" />
                      <p className="text-xs mt-3 group-hover:text-slate-700 text-red-600 hover:animate-pulse ">
                        interested in purchasing?
                      </p>
                    </div>
                  </div>

                  {/* text container*/}
                  <div className=" w-full lg:w-1/2 px-3 pt-3  lg:py-5 lg:px-5 ">
                    <div className="group lg:flex flex-col mx-auto cursor-pointer hidden text-center mb-10 ">
                      <MilanoHand className="w-20  group-hover:fill-slate-700 mx-auto animate-pulse hover:animate-none fill-red-700" />
                      <p className="text-sm mt-3 text-red-600 group-hover:text-slate-700  ">
                        interested in purchasing?
                      </p>
                    </div>

                    <h1 className="text-4xl  font-bold">{item.title}</h1>
                    <p className="text-slate-500 text-xs">
                      Posted on {new Date(item._createdAt).toLocaleString()}
                    </p>
                    <div className="mt-5">
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
                <div className="w-5/6  mx-auto z-1 lg:w-5/6 bg-white bg-filter backdrop-blur-xl text-slate-200 bg-opacity-90  flex lg:hidden flex-col lg:flex-row  p-5 justify-center rounded-br-2xl rounded-bl-2xl  lg:rounded-xl relative -top-2 shadow-md">
                  <div className="group lg:hidden flex-col mx-auto cursor-pointer flex ">
                    <MilanoHand className="w-20 fill-red-600 mx-auto animate-pulse group-hover:animate-none group-hover:fill-slate-700" />
                    <p className="text-xs mt-3 text-red-600 group-hover:text-slate-700">
                      interested in purchasing?
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <MilanoWave2 className=" relative fill-white bottom-0 -mt-64" />
      </div>
    </>
  );
}

export default Gallery;
