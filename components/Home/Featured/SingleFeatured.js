import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { urlForThumbnail } from "../../../pages/api/image";

// const Bg1 =
//   "https://res.cloudinary.com/dmf3o6v8g/image/upload/v1648585001/Blogging/Trend/pexels-olya-kobruseva-8358149_xahvev.jpg";
// const Bg2 =
//   "https://res.cloudinary.com/dmf3o6v8g/image/upload/v1648570523/Blogging/Trend/pexels-jess-bailey-designs-768474_uwegnc.jpg";
// const Bg3 =
//   "https://res.cloudinary.com/dmf3o6v8g/image/upload/v1648569889/Blogging/Trend/pexels-pixabay-267569_tdq6bb.jpg";
// const Bg4 =
//   "https://res.cloudinary.com/dmf3o6v8g/image/upload/v1648569889/Blogging/Trend/pexels-pixabay-261579_ivwdpk.jpg";

const style = {
  singleFeatured:
    "my-3 flex flex-col justify-center p-3 md:w-[40vw] h-[40vh] text-gray-200 font-bold",
  location:
    "mx-3 my-3 text-blue-600 text-3xl md:text-4xl text-center md:text-left font-bold",
  details: "my-3 text-xl md:text-2xl font-bold",
  price: "mx-3 my-1 md:my-3 text-lg md:text-2xl",
  contactContainer:
    "mx-auto md:mx-3 my-3  bg-blue-700 flex items-center justify-center max-w-fit px-3 md:px-4 py-1 md:py-2  hover:bg-opacity-[0.8] transition duration-[300ms] ",
  btn1: "text-md p-1 tracking-wide ",
  decription: "mx-3 text-xs font-normal my-3",
  specification: "flex flex-wrap",
  singleSpecification: "bg-blue-600 mx-1 md:mx-3 px-2 md:px-3 py-1 text-xs md:text-sm my-1 bg-opacity-[0.5]",
};
export const SingleFeatured1 = ({ featuredData1 }) => {
  const [View, setView] = useState(0);
  useEffect(() => {
    setView(window.innerWidth);
  }, []);
  const {
    name,
    price,
    marla,
    room,
    bath,
    lounge,
    kitchen,
    description1,
    image,
  } = featuredData1;
  const FeaturedBackground1 = styled.div`
    background: radial-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${(View < 500 && urlForThumbnail(image)) ||
      (View > 500 && View < 1000 && urlForThumbnail(image)) ||
      (View > 1000 && urlForThumbnail(image))});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
  `;

  // console.log(featuredData1);
  return (
    <FeaturedBackground1
      className={style.singleFeatured}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className={style.location}>{name}</div>
      {/* <div className={style.details}>{price}</div> */}
      <div className={style.specification}>
        <p className={style.singleSpecification}>{marla} Marla</p>
        <p className={style.singleSpecification}>{room} Rooms</p>
        <p className={style.singleSpecification}>{bath} Bath</p>
        <p className={style.singleSpecification}>{lounge} Lounge</p>
        <p className={style.singleSpecification}>{kitchen} Kitchen</p>
      </div>
      <p className={style.decription}>{description1}</p>
      <div className={style.price}>Rs.{price}</div>
      <a
        href="https://wa.me/+923343866227/?text="
        className={style.contactContainer}
        style={{ fontFamily: "Old Standard TT, serif" }}
      >
        <AiOutlineWhatsApp className="text-white mx-3 text-2xl" />
        <button className={style.btn1}>Whatsapp</button>
      </a>{" "}
    </FeaturedBackground1>
  );
};
export const SingleFeatured2 = ({ featuredData2 }) => {
  const [View, setView] = useState(0);
  useEffect(() => {
    setView(window.innerWidth);
  }, []);
  const {
    name,
    price,
    marla,
    room,
    bath,
    lounge,
    kitchen,
    description1,
    image,
  } = featuredData2;
  const FeaturedBackground2 = styled.div`
    background: radial-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${(View < 500 && urlForThumbnail(image)) ||
      (View > 500 && View < 1000 && urlForThumbnail(image)) ||
      (View > 1000 && urlForThumbnail(image))});
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
      <div className={style.location}>{name}</div>
      {/* <div className={style.details}>{price}</div> */}
      <div className={style.specification}>
        <p className={style.singleSpecification}>{marla} Marla</p>
        <p className={style.singleSpecification}>{room} Rooms</p>
        <p className={style.singleSpecification}>{bath} Bath</p>
        <p className={style.singleSpecification}>{lounge} Lounge</p>
        <p className={style.singleSpecification}>{kitchen} Kitchen</p>
      </div>
      <p className={style.decription}>{description1}</p>
      <div className={style.price}>Rs {price}</div>
      <a
        href="https://wa.me/+923343866227/?text="
        className={style.contactContainer}
        style={{ fontFamily: "Old Standard TT, serif" }}
      >
        <AiOutlineWhatsApp className="text-white mx-3 text-2xl" />
        <button className={style.btn1}>Whatsapp</button>
      </a>{" "}
    </FeaturedBackground2>
  );
};
