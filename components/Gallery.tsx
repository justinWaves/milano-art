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
      className="overflow-hidden w-screen bg-gradient-to-r from-slate-700 to-slate-600 via-slate-900 animate-gradient-xy relative"
    >
      <div className="w-screen bg-[url('/lightlang-bkgd.svg')] bg-fill bg-repeat-y bg-center scroll-smooth">
        <div className="bg-black bg-opacity-100 w-fit rounded-bl-3xl rounded-br-3xl mx-auto bg-filter backdrop-blur-lg px-10">
          <h1 className="text-7xl lg:text-9xl font-bold text-slate-200 text-center pt-20 pb-7">
            Gallery
          </h1>
        </div>
        <Parallax speed={-25}>
          <div className="pt-[300px] md:pt-96 pb-[550px]">
            {sortedGalleryItems.map((item) => (
              <div className="flex flex-col z-4 lg:flex-col mx-auto lg:mx-5 mt-10 mb-[200px]">
                <div className="relative mx-3 md:mx-auto z-1 lg:w-5/6 border-t lg:border-b backdrop-blur-lg text-white bg-opacity-30 shadow-lg flex flex-col lg:flex-row py-5 justify-center rounded-tr-2xl rounded-tl-2xl lg:rounded-2xl">
                  {/* Image desktop */}
                  <div className="w-screen lg:w-1/2 hidden lg:flex lg:justify-between lg:flex-col md:relative xl:-top-20 md:top-1/2 z-2">
                    <img
                      src={urlFor(item.mainImage).url()!}
                      className="cursor-pointer my-auto"
                    />
                  </div>

                  {/* text container */}
                  <div className="w-full lg:w-1/2  pt-3 lg:py-5 lg:px-5 flex flex-col justify-center">
                    <div className="lg:flex hidden mb-10 mx-auto">
                      <HandButton onClick={handleButtonClick} />
                    </div>

                    <h1 className="text-5xl font-semibold mb-5 px-5">{item.title}</h1>
                    {/* image container mobile */}
                    <div className="w-full lg:hidden z-2 relative">
                      <img
                        src={urlFor(item.mainImage).url()!}
                        className="w-full shadow-lg cursor-pointer"
                      />
                    </div>
                    <div className="mt-5 overflow-hidden px-5">
  {item?.body ? (
    <PortableText
      dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
      projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
      content={item.body}
      serializers={{
        h1: (props: any) => (
          <h1 className="my-5 text-2xl font-bold" {...props} />
        ),
        h2: (props: any) => (
          <h1 className="my-5 text-xl font-bold" {...props} />
        ),
        li: ({ children }: any) => (
          <li className="ml-4 list-disc">{children}</li>
        ),
        link: ({ href, children }: any) => (
          <a href={href} className="text-blue-500 hover:underline">
            {children}
          </a>
        ),
      }}
    />
  ) : (
    <p className="text-slate-500">No Description</p>
  )}
</div>

                  </div>
                </div>

                {/* purchase container mobile */}
                <div className="mx-3 md:mx-auto z-1 lg:w-5/6 border-b backdrop-blur-lg text-slate-200 bg-opacity-30 flex lg:hidden lg:flex-row p-5 justify-center rounded-br-2xl rounded-bl-2xl lg:rounded-xl relative -top-0 shadow-md">
                  <div className="lg:hidden mx-auto mb-2">
                    <HandButton onClick={handleButtonClick} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default Gallery;
