import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Product from "../components/Product";
import Strategy from "../components/Strategy";
import Moto from "../components/Moto";
import Outcome from "../components/Outcome";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Product />
      <Strategy />
      <Moto />
      <Outcome />
    </Layout>
  );
};

export default Home;

export const Head = () => <title>Hackmamba</title>;
