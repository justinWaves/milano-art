import type { NextPage } from "next";
import { sanityClient, urlFor } from "../sanity";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import LandingSlider from "../components/LandingSlider";
import { GalleryItem } from "../typings";

interface GalleryProps {
  galleryItems: [GalleryItem];
}

const Home = ({ galleryItems }: GalleryProps) => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <LandingSlider />
      <About />
      <Gallery galleryItems={galleryItems} />
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

  const galleryItems = await sanityClient.fetch(query);

  return {
    props: {
      galleryItems,
    },
  };
};
