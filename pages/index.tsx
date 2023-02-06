import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../container/Header";
import Banner from "../container/Banner";
import Services from "../container/Services";
import NewArrivals from "../container/NewArrivals";
import PopularCategories from "../container/PopularCategories";
import ListBrand from "../container/ListBrand";
import Footer from "../container/Footer";
import Collection from "../container/Collection";
import LastestBlog from "../container/LastestBlog";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Banner />
        <br />
        <NewArrivals />
        <br />
        <PopularCategories />
        <br />
        <ListBrand />
        <br />
        <Collection />
        <br />
        <LastestBlog />
        <br />
        <Services />
        <Footer />
      </main>
    </>
  );
}
