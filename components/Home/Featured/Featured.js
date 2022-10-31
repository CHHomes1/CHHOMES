import React from "react";
import Link from "next/link";
import { SingleFeatured1, SingleFeatured2 } from "./SingleFeatured";
import { ContentHeading } from "../../UI/Heading";
const style = {
  featured:
    "bg-stone-900 mt-24 p-12 bg-opacity-[1] w-[100vw] overflow-x-hidden",
  container: "flex flex-col md:flex-row justify-around",
  heading:
    "my-2 text-stone-400 text-3xl sm:text-3xl md:text-2xl lg:text-3xl my-6 mx-auto",
  moreButtonContainer: "",
  moreButton:
    "text-white hover:scale-[0.95] transition duration-[300ms] bg-orange-500 max-w-fit px-3 md:px-12 lg:px-18 py-2 md:py-3 lg:py-4 mx-auto mt-12 md:mt-12",
};
const Featured = ({ featuredData }) => {
  return (
    <div className={style.featured}>
      <div
        className={style.heading}
        style={{ fontFamily: "Old Standard TT, serif" }}
      >
        Featured Properties
      </div>
      <div className={style.container}>
        <SingleFeatured1 featuredData1={featuredData[0]} />
        <SingleFeatured2 featuredData2={featuredData[1]} />
      </div>
      {/* adding the button to move to more properties */}
      <div className={style.moreButtonContainer}>
        <Link href="/properties">
          <p
            className={style.moreButton}
            style={{ fontFamily: "Old Standard TT, serif" }}
          >
            More Properties
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Featured;
