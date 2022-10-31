import React from "react";
import Clients from "./Clients/Clients";
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
const Main = ({featuredData}) => {
  return (
    <div className={style.main}>
      <ParallaxProvider>
        <Home />
        <Info />
        <Card />
      </ParallaxProvider>
      <Featured featuredData={featuredData} />
      <Clients />
      <Newsletter />
      {/* <Footer /> */}
    </div>
  );
};

export default Main;
