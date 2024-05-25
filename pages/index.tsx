import { sanityClient, urlFor } from "../sanity";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import LandingSlider from "../components/LandingSlider";
import { GalleryItem, MainPageImage } from "../typings";
import ContactScreen from "../components/ContactScreen";
import { useState } from "react";

interface GalleryProps {
  galleryItems: [GalleryItem];
  mainImage: [MainPageImage];
}

const Home = ({ galleryItems, mainImage }: GalleryProps) => {
  const [isContactScreenOpen, setIsContactScreenOpen] = useState(false);

  const toggleContactMenu = () => {
    setIsContactScreenOpen(!isContactScreenOpen);
  };

  return (
    <div className="relative h-screen">
      
      <Head>
        <title>Matt Milano Art</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isContactScreenOpen ? (
        <ContactScreen handleClose={toggleContactMenu} />
      ) : (
        <></>
      )}
      <div className="relative min-h-screen">
        <div className="">
          <Header openContact={toggleContactMenu} />

          <LandingSlider mainImage={mainImage} />
          <Gallery
            galleryItems={galleryItems}
            openContact={toggleContactMenu}
          />
        </div>
      
        <Footer openContact={toggleContactMenu} />
      </div>
      
    </div>
  );
};

export default Home;

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
