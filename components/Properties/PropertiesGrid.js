import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import NoDataFound from "./NoDataFound";
import { urlForThumbnail } from "../../pages/api/image";
import Animator1 from "../UI/Animator1";
const style = {
  wrapper: "flex flex-col w-[95%] md:w-[80%] my-2",
  singleProperty:
    "flex flex-col md:flex-row items-center my-6 md:my-8 bg-[#090333] px-6 md:px-8 py-8 rounded-lg ",
  propertyContainer: " ml-0 md:ml-12",
  name: "text-3xl md:text-3xl font-bold text-blue-100 text-center md:text-left my-3",
  specification: "flex flex-wrap",
  description: "text-sm my-3 text-blue-100 text-center md:text-left",
  singleSpecification:
    "bg-blue-500 mr-3 px-2 md:px-3 py-1 text-xs md:text-sm my-1 bg-opacity-[0.5] text-white",
  price: "font-bold text-2xl md:text-2xl text-blue-100 my-2 md:my-4",
  contactContainer:
    "text-white bg-blue-700 flex items-center justify-center max-w-fit px-3 md:px-4 py-1 md:py-2 my-2  hover:bg-opacity-[0.8] transition duration-[300ms] mx-auto md:mx-0 mt-6",
  btn1: "text-md p-1 tracking-wide",
};
const PropertiesGrid = ({
  plotsData,
  rentData,
  housesData,
  selectedcategory,
}) => {
  // handling the data
  const [DataToBeUsed, setDataToBeUsed] = useState([]);
  useEffect(() => {
    if (selectedcategory == "plots") {

      setDataToBeUsed(plotsData);
    }
    if (selectedcategory == "houses") {

      setDataToBeUsed(housesData);
    }
    if (selectedcategory == "rent") {
      setDataToBeUsed(rentData);
    }
  }, [plotsData, rentData, housesData, selectedcategory]);
  // console.log(selectedcategory);
  return (
    <Animator1
      // className={style.wrapper}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {DataToBeUsed.length > 0 ? (
        DataToBeUsed.map((single) => (
          <div className={style.singleProperty} key={single.name}>
            {/* the image of the property */}
            <Image
              src={urlForThumbnail(single.image)}
              width={350}
              height={350}
            />
            {/* the content side of the property */}
            <div className={style.propertyContainer}>
              <h2 className={style.name}>{single.name}</h2>
              {selectedcategory !== "plots" && (
                <div
                  className={style.specification}
                  style={{ fontFamily: "Old Standard TT, serif" }}
                >
                  <p className={style.singleSpecification}>
                    {single.marla ? single.marla : ""} Marla
                  </p>
                  <p className={style.singleSpecification}>
                    {single.room ? single.room : ""} Rooms
                  </p>
                  <p className={style.singleSpecification}>
                    {single.bath ? single.bath : ""} Bath
                  </p>
                  <p className={style.singleSpecification}>
                    {single.lounge ? single.lounge : ""} Lounge
                  </p>
                  <p className={style.singleSpecification}>
                    {single.kitchen ? single.kitchen : ""} Kitchen
                  </p>
                </div>
              )}
              <p
                className={style.price}
                style={{ fontFamily: "Old Standard TT, serif" }}
              >
                Rs.{single.price}
              </p>
              <p className={style.description}>
                {single.description1 ? single.description1 : ""}
              </p>
              <p className={style.description}>
                {single.description1 ? single.description2 : ""}
              </p>

              <a
                href="https://wa.me/+923343866227/?text="
                className={style.contactContainer}
              >
                <AiOutlineWhatsApp className="text-white mx-1 text-2xl" />
                <button className={style.btn1}>Whatsapp</button>
              </a>
            </div>
          </div>
        ))
      ) : (
        <NoDataFound />
      )}
    </Animator1>
  );
};

export default PropertiesGrid;
