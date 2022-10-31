import React,{useState,useEffect} from "react";
import styled from "styled-components";
const BgImg =
  "https://res.cloudinary.com/shariqcloud/image/upload/v1648468327/Quality%20Homes/Properties/pexels-chris-goodwin-32870_2_c5iehw.jpg";

const style = {
  info: "text-gray-200 flex flex-col items-center justify-center text-center my-16",
  infoHeadig:
    "w-[90%] md:w-[80%] text-2xl sm:text-3xl md:text-4xl lg:text-4xl my-6",
  infoDetails: "w-[90%] md:w-[80%] text-md sm:text-md md:text-md lg:text-md",
};

const Info = () => {
  const [View, setView] = useState(0);
  useEffect(() => {
    setView(window.innerWidth);
  }, []);
  const InfoBackground = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)),
      url(${(View < 500 && BgImg) ||
      (View > 500 && View < 1000 && BgImg) ||
      (View > 1000 && BgImg)});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    width: 100vw;
    height: 70vh;
  `;
  return (
    <InfoBackground className={style.info}>
      <div
        className={style.infoHeadig}
        style={{ fontFamily: "Poppins, serif" }}      >
        Choosing the right Real Estate is the most important decision one makes
        in preparing for their property search.
      </div>
      <div
        className={style.infoDetails}
        style={{ fontFamily: "Poppins, serif" }}      >
        Our experienced agents are passionate, knowledgeable, and will provide
        the guidance and support to meet your specific needs. You will be
        partnered with a group of knowledgeable and engaged agents to assist in
        navigating an ever-changing market, making smart real estate decisions,
        and even enjoy the process. Contact us for a free consultation with no
        obligation. We would love the opportunity to assist with your Real
        Estate needs. We look forward to establishing a relationship with you.
      </div>
    </InfoBackground>
  );
};

export default Info;
