import React, { useState, useEffect } from "react";
import Clients from "./Clients/Clients";
import client from "../../pages/api/client";
import Newsletter from "./Newsletter/Newsletter";
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import Info from "./Info/Info";
import Featured from "./Featured/Featured";
import Header from "../Header/Header";
import CTA from "./CTA/CTA";
import Home from "./Home/Home";
import Card from "./Card/Card.js";
import Footer from "../Footer/Footer";
import { ParallaxProvider } from "react-scroll-parallax";
const style = {
  main: "overflow-x-hidden",
};
const Main = () => {
  const [FeaturedData, setFeaturedData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const p = await client.fetch(`*[_type == "featured"]`);
      setFeaturedData(p);
    };
    fetchData();
  }, []);
  // console.log(FeaturedData)
  return (
    <div className={style.main}>
      <ParallaxProvider>
        <Home />
        <Info />
        <Card />
      </ParallaxProvider>
      {FeaturedData.length > 0 && <Featured featuredData={FeaturedData} />}
      {/* <Clients /> */}
      <Newsletter />
      {/* <Footer /> */}
    </div>
  );
};

export default Main;
