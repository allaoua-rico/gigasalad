import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Grid from "../components/Grid";
import TopSlider from "../components/TopSlider";

import styles from "../styles/Home.module.css";
import GetStarted from "../components/GetStarted";
import BottomSlider from "../components/BottomSlider";
import Joining from "../components/Joining";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <TopSlider />
      <Grid />
      <GetStarted />
      <BottomSlider />
      <Joining />
      <Testimonials />
    <Footer/>
    </div>
  );
}
