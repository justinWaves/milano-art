import React, { useState } from "react";
import ContactScreen from "../components/ContactScreen";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import { sanityClient } from "../sanity";
import { GalleryItem } from "../typings";

interface galleryProps {
  galleryItems: [GalleryItem];
}

function gallery({ galleryItems }: galleryProps) {
  const [isContactScreenOpen, setIsContactScreenOpen] = useState(false);

  const toggleContactMenu = () => {
    setIsContactScreenOpen(!isContactScreenOpen);
  };

  return (
    <div className="">
      {isContactScreenOpen ? (
        <ContactScreen handleClose={toggleContactMenu} />
      ) : (
        <></>
      )}
      <div className="relative min-h-screen bg-slate-200">
        
          <Header openContact={toggleContactMenu} />
          <div className="pt-16">
          <Gallery
            galleryItems={galleryItems}
            openContact={toggleContactMenu}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default gallery;

export const getServerSideProps = async () => {
  const query = `*[_type == "galleryItem"]{
      _id,
      _createdAt,
      title,
    mainImage, 
    body
    }
    `;

  const mainImageQuery = `*[_type == "mainPageImage"]{
      title,
   mainImage, 
  caption
    }
    `;

  const mainImage = await sanityClient.fetch(mainImageQuery);
  const galleryItems = await sanityClient.fetch(query);

  return {
    props: {
      galleryItems,
      mainImage,
    },
  };
};
