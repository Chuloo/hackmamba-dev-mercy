import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Product from "../components/Product";
import Strategy from "../components/Strategy";
import Moto from "../components/Moto";
import Outcome from "../components/Outcome";
import Testimonial from "../components/Testimonial";
import Community from "../components/Community";


const Home = () => {
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
  </>
);
