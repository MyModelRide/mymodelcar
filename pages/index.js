import Head from "next/head";
import React from "react";
import Home from "../components/Home/Home";
import Footer from "../components/Footer/Footer";
import Animator from "../components/UI/Animator";
import { scroller } from "react-scroll";
import HomeHeaderImage from "../components/HomeHeaderImage/HomeHeaderImage";
import Products from "../components/Products/Products";
import Introduction from "../components/Introduction/Introduction";
import AppInfo from "../components/AppInfo/AppInfo";
import Gallery from "../components/Gallery/Gallery";
const style = {
  wrapper: "bg-[#f1f1f3]",
};
export default function Main() {
  const onScroll = (value) => {
    if (typeof window !== "undefined") {
      // browser code
      scroller.scrollTo(`${value}`, {
        duration: 900,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  };
  return (
    <Animator>
      <div className={style.wrapper}>
        <Head>
          <title> My Model Ride | Selling Car Products </title>
          <meta name="description" content=" My Model Ride | Selling Car Products " />
          <link rel="icon" href="/logo.png" />
        </Head>
        <div className="">
          <Home onScroll={onScroll} />
        </div>
        <div className="">
          <Introduction />
        </div>
        <div className="">
          <Products />
        </div>
        <div className="">
          <HomeHeaderImage />
        </div>
        <div className="">
          <AppInfo />
        </div>
        <div className="">
          <Gallery />
        </div>
        <Footer onScroll={onScroll} />
        {/* this is the dicount coupon */}
      </div>
    </Animator>
  );
}
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
