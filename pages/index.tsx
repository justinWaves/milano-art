import { sanityClient, urlFor } from "../sanity";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
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

  const openContactMenu = (cb: boolean) => {
    setIsContactScreenOpen(cb);
  };

  return (
    <div className="">
      <Head>
        <title>Matt Milano Art</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isContactScreenOpen ? (
        <ContactScreen isMenuOpen={openContactMenu} />
      ) : (
        <></>
      )}
      <Header />
      <LandingSlider mainImage={mainImage} />
      <About />
      <Gallery galleryItems={galleryItems} openContact={openContactMenu} />
      <Footer />
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
