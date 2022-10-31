import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Bg1 =
  "https://res.cloudinary.com/dmf3o6v8g/image/upload/v1648585001/Blogging/Trend/pexels-olya-kobruseva-8358149_xahvev.jpg";
const Bg2 =
  "https://res.cloudinary.com/dmf3o6v8g/image/upload/v1648570523/Blogging/Trend/pexels-jess-bailey-designs-768474_uwegnc.jpg";
const Bg3 =
  "https://res.cloudinary.com/dmf3o6v8g/image/upload/v1648569889/Blogging/Trend/pexels-pixabay-267569_tdq6bb.jpg";
const Bg4 =
  "https://res.cloudinary.com/dmf3o6v8g/image/upload/v1648569889/Blogging/Trend/pexels-pixabay-261579_ivwdpk.jpg";

// const Trending1 = styled.div`
//   background: radial-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
//     url(${(screenWidth < 500 && Bg1) ||
//     (screenWidth > 500 && screenWidth < 1000 && Bg1) ||
//     (screenWidth > 1000 && Bg1)});
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
//   background-attachment: auto;
// `;
// const Trending2 = styled.div`
//   background: radial-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
//     url(${(screenWidth < 500 && Bg2) ||
//     (screenWidth > 500 && screenWidth < 1000 && Bg2) ||
//     (screenWidth > 1000 && Bg2)});
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
//   background-attachment: auto;
// `;
// const Trending3 = styled.div`
//   background: radial-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
//     url(${(screenWidth < 500 && Bg2) ||
//     (screenWidth > 500 && screenWidth < 1000 && Bg2) ||
//     (screenWidth > 1000 && Bg2)});
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
//   background-attachment: auto;
// `;
// const Trending4 = styled.div`
//   background: radial-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
//     url(${(screenWidth < 500 && Bg2) ||
//     (screenWidth > 500 && screenWidth < 1000 && Bg2) ||
//     (screenWidth > 1000 && Bg2)});
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
//   background-attachment: auto;
// `;
const style = {
  singleFeatured:
    "my-3 flex flex-col justify-center p-3 md:w-[40vw] h-[40vh] text-gray-200 font-bold",
  location:
    "my-3 text-orange-400 text-lg md:text-lg text-center md:text-left font-bold",
  details: "my-3 text-xl md:text-2xl font-bold",
  price: "my-3 text-lg md:text-2xl",
  button: "text-orange-400 text-md border-move-animation-orange p-1 ",
  decription: "text-sm font-normal",
  specification: "",
  singleSpecification: "",
};
export const SingleFeatured1 = ({ featuredData1 }) => {
  const [View, setView] = useState(0);
  useEffect(() => {
    setView(window.innerWidth);
  }, []);
  const FeaturedBackground1 = styled.div`
    background: radial-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${(View < 500 && "/img20.jpg") ||
      (View > 500 && View < 1000 && "/img20.jpg") ||
      (View > 1000 && "/img20.jpg")});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
  `;

  return (
    <FeaturedBackground1
      className={style.singleFeatured}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className={style.location}>New Jersey 07601</div>
      <div className={style.details}>242 Stanley Pl, Hackensack</div>
      <div className={style.specification}>
        <p className={style.singleSpecification}>{marla} Marla</p>
        <p className={style.singleSpecification}>{rooms} Rooms</p>
        <p className={style.singleSpecification}>{bath} Bath</p>
        <p className={style.singleSpecification}>{lounge} Lounge</p>
        <p className={style.singleSpecification}>{kitchen} Kitchen</p>
      </div>
      <p className={style.decription}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis officia
        dignissimos cumque. Doloremque, eveniet. Iste, repellat dolor, est nam
        earum incidunt culpa harum nemo dolores, dolorum nisi aspernatur
        possimus ipsam?
      </p>
      <div className={style.price}>$453,000</div>
      <button className={style.button}>View Listing</button>
    </FeaturedBackground1>
  );
};
export const SingleFeatured2 = ({ featuredData2 }) => {
  const [View, setView] = useState(0);
  useEffect(() => {
    setView(window.innerWidth);
  }, []);
  const FeaturedBackground2 = styled.div`
    background: radial-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${(View < 500 && "/img20.jpg") ||
      (View > 500 && View < 1000 && "/img20.jpg") ||
      (View > 1000 && "/img20.jpg")});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
  `;

  return (
    <FeaturedBackground2
      className={style.singleFeatured}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className={style.location}>New Jersey 07601</div>
      <div className={style.details}>140 Stanley Pl, Hackensack</div>
      <div className={style.specification}>
        <p className={style.singleSpecification}>{marla} Marla</p>
        <p className={style.singleSpecification}>{rooms} Rooms</p>
        <p className={style.singleSpecification}>{bath} Bath</p>
        <p className={style.singleSpecification}>{lounge} Lounge</p>
        <p className={style.singleSpecification}>{kitchen} Kitchen</p>
      </div>
      <p className={style.decription}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis officia
        dignissimos cumque. Doloremque, eveniet. Iste, repellat dolor, est nam
        earum incidunt culpa harum nemo dolores, dolorum nisi aspernatur
        possimus ipsam?
      </p>
      <div className={style.price}>$721,000</div>
      <button className={style.button}>View Listing</button>
    </FeaturedBackground2>
  );
};
