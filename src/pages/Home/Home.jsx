import React from "react";
import { Header, NewsLetter, Services } from "../../components";
import BestSellers from "../../components/BestsSellers/bestSellers";
import WatchFeatures from "../../components/WatchFeatures/watchFeatures";

const Home = () => {
  return (
    <div className="">
      <Header />
      <Services />
      <BestSellers />
      <WatchFeatures />
      <NewsLetter />
    </div>
  );
};

export default Home;
