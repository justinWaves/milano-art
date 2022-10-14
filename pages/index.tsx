import { sanityClient, urlFor } from "../sanity";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import LandingSlider from "../components/LandingSlider";
import { GalleryItem, MainPageImage } from "../typings";
import ContactScreen from "../components/ContactScreen";
import { useState } from "react";
import HandButton from "../components/HandButton";
import FloatingHand from "../components/FloatingHand";

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
    <div className="">
      <Head>
        <title>Matt Milano Art</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isContactScreenOpen ? (
        <ContactScreen handleClose={toggleContactMenu} />
      ) : (
        <></>
      )}
      <Header openContact={toggleContactMenu} />
      <LandingSlider mainImage={mainImage} />
      <Gallery galleryItems={galleryItems} openContact={toggleContactMenu} />
      <Footer openContact={toggleContactMenu} />
      {/* <FloatingHand
        onClick={toggleContactMenu}
        className="fixed bottom-0 right-0"
      /> */}
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
