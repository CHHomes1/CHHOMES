import React from "react";
import Link from "next/link";
import useWindowSize from "../../../hooks/windowSize";
import Image from "next/image";
const style = {
  wrapper: "h-[74vh] md:h-[70vh] w-[100vw] flex flex-col h-[70%]",
  heading:
    "text-4xl md:text-7xl text-blue-900 my-2 md:my-8 w-full md:w-[60%] text-center md:text-left font-bold",
  heading1:
    "text-2xl md:text-5xl text-blue-900 my-3 md:my-8 w-full md:w-[85%] text-center md:text-left",
  smallHeading: "text-xl md:text-3xl text-blue-900 text-center md:text-left mt-3 md:mt-12",
  para: "text-blue-900 text-md md:text-md lg:text-md my-3 md:my-8 text-center md:text-left",
  para1:
    "text-blue-900 text-sm md:text-lg my-3 md:my-4 w-[70%] text-center md:text-left",
  para2:
    "text-blue-900 text-sm md:text-lg my-3 md:mb-5 w-[70%] text-center md:text-left",
  para3:
    "text-blue-900  my-4 md:mb-5 w-[70%] font-thin text-xs text-center md:text-left",
  btn: "px-4 md:px-5 py-2 md:py-2  transition duration-[300ms] hover:scale-[0.98]  mx-auto md:mx-0 text-white bg-blue-600",
  right:
    "flex flex-col my-0 md:my-36 lg:my-36 px-4 md:mt-12 md:mt-2 md:ml-12 items-center md:items-start",
  main1: "flex flex-col md:flex-row mx-auto w-[100%]",
  left: "flex items-center justify-center",
  left1: "flex items-center justify-center scale-[0.8]",
};

const Home = ({}) => {
  const { width } = useWindowSize();
  return (
    <div className={style.wrapper}>
      {/* ------------------------------------------------ */}
      <div className="flex items-center justify-center mx-auto w-[100%] md:w-[80%] flex-col">
        <div className="">
          {/* <SwiperSlide> */}
          <div className={style.main1}>
            <div className={style.left}>
              <Image
                src="/img10.jpg"
                alt="image of the home"
                width={300}
                height={300}
              />
            </div>
            <div className={style.right}>
              <h2
                className={style.smallHeading}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Welcome To 
              </h2>
              <h2
                className={style.heading}
                style={{ fontFamily: "Old Standard TT, serif" }}
                >
                CH Homes & Developers
              </h2>
              <h2
                className={style.para}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Our estate deals in all kind of properties including selling plots on easy installments, buy/sell of houses and rent.
              </h2>
              <Link href="/properties">
                <button
                  style={{ fontFamily: "Poppins, sans-serif" }}
                  className={style.btn}
                >
                  View our Properties
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
