import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Product from "../components/Product";
import Strategy from "../components/Strategy";
import Moto from "../components/Moto";
import Outcome from "../components/Outcome";
import Testimonial from "../components/Testimonial";
import Community from "../components/Community";
import JellyEffect from "../../src/jelly";
import SmoothScrollbar from "smooth-scrollbar";
import SoftScrollPlugin from "../../src/smooth-scroll.js";

const Home = () => {
  // useEffect(() => {
  //   window.addEventListener("load", () => {
  //     SmoothScrollbar.use(SoftScrollPlugin);
  //     const view = document.querySelector("#view-main");
  //     const scrollbar = SmoothScrollbar.init(view,{
  //       renderByPixels: false,
  //       damping: 0.075
  //     });
  //     // new JellyEffect({ scrollPos: () => {
  //     //   console.log(scrollbar.offset.y)
  //     //   return scrollbar.offset.y
  //     // } });
  //   });
  // }, []);

  return (

    <Layout>
      <Hero />
      <Product />
      <Strategy />
      <Moto />
      <Outcome />
      <Testimonial />
      <Community />
    </Layout>
  );
};

export default Home;

export const Head = () => (
  <>
    <title>Hackmamba</title>
    {/* <body data-cuberto-jelly id="view-main" style={{height: "100vh", width: "calc(100vw-8px)"}} /> */}
  </>
);
