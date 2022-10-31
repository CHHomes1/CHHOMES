import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import { MainHeading, SmallHeading } from "../../UI/Heading";
import { MdStreetview } from "react-icons/md";
const BgImgLarge =
  "https://res.cloudinary.com/shariqcloud/image/upload/v1648195368/Quality%20Homes/Home/Untitled_design_hvuyfy.jpg";
const BgImgSmall =
  "https://res.cloudinary.com/shariqcloud/image/upload/v1648118647/Quality%20Homes/Home/img6_x3gjna.jpg";

const style = {
  home: "w-[100vw] h-[100vh] flex flex-col md:flex-row",
  homeDetails:
    "text-center md:text-left text-gray-200 md:text-gray-900 text-lg sm:text-lg md:text-md lg:text-sm my-6 md:my-6",
  first:
    "w-[85%] md:w-[45%] h-full justify-center md:justify-start flex flex-col px-6 mx-auto md:mx-0 md:mt-8",
  second: "w-[50%] hidden md:flex",
  homeImg: "scale-y-[0.8] scale-x-[0.7] my-auto rounded",
  button:
    "tracking-wide text-gray-50 my-4 md:my-3 hover:bg-orange-500 transiton duration-[300ms] mx-auto md:mx-0 w-[80%] sm:w-[80%] md:w-[40%] lg:w-[40%] px-1 py-1 sm:px-2 sm:py-2 md:px-8 md:py-2 lg:px-10 lg:py-2 bg-orange-400",
};
const Home = () => {
  const [View, setView] = useState(0);

  // const screenWidth = window.innerWidth;

  useEffect(() => {
    setView(window.innerWidth);
  }, []);
  const HomeBackground = styled.div`
    background: linear-gradient(
        rgba(0, 0, 0, ${View < 1000 ? 0.6 : 0}),
        rgba(0, 0, 0, ${View < 1000 ? 0.6 : 0})
      ),
      url(${(View < 500 && BgImgSmall) ||
      (View > 500 && View < 900 && BgImgSmall) ||
      (View > 900 && BgImgLarge)});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  `;
  return (
    <div className="w-[100vw] overflow-x-hidden">
      {/* <Parallax speed={-5}> */}
        <HomeBackground className={style.home}>
          {/* first side of the home */}
          <div className={style.first}>
            <SmallHeading headingText="VIEW THE MARVELLOUS" />
            <MainHeading headingText="Homes In Northern New Jersey" />
            <p
              className={style.homeDetails}
              style={{ fontFamily: "Andada Pro, serif" }}
            >
              Quality Homes Real Estate has provided a personalized and
              comprehensive approach to buying and selling homes in the Northern
              NJ region. We are a brokerage that places the interest of our
              clients above all else!
            </p>
            <button
              className={style.button}
              style={{ fontFamily: "Old Standard TT, serif" }}
            >
              Our Properties
            </button>
          </div>
          {/* second side of the image */}
          <Parallax className={style.second} speed={10}>
            <img
              src="https://res.cloudinary.com/shariqcloud/image/upload/v1648454353/Quality%20Homes/Properties/img22_toa3we.jpg"
              className={style.homeImg}
            />
          </Parallax>
        </HomeBackground>
      {/* </Parallax> */}
    </div>
  );
};

export default Home;
