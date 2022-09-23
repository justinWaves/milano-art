import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import LandingSlider from "../components/LandingSlider";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <LandingSlider />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
