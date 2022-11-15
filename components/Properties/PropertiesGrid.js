import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import NoDataFound from "./NoDataFound";
import { urlForThumbnail } from "../../pages/api/image";
import Animator1 from "../UI/Animator1";
import PropertiesFilter from "./PropertiesFilter";
const style = {
  wrapper: "flex flex-col w-[95%] md:w-[80%] my-2 mx-auto",
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
  wrapper1: "flex items-center flex-col md:flex-row justify-center",
  singleInput: "flex flex-col items-start mx-6 md:mx-12 my-6 md:my-1",
  input:
    "bg-blue-50 px-2 md:px-3 py-1 outline-none rounded w-[80vw] md:w-[25vw]",
  label: "text-blue-900 text-xl md:text-lg",
  btn: "bg-blue-600 text-white px-6 md:px-8 py-2 md:py-3 hover:bg-opacity-[0.92] transition duration-[300ms]",
};
const PropertiesGrid = ({
  plotsData,
  rentData,
  housesData,
  selectedcategory,
}) => {
  // handling the data
  const [DataToBeUsed, setDataToBeUsed] = useState([]);
  const [NewData, setNewData] = useState([]);
  const [IsClick, setIsClick] = useState(false);
  const [Max, setMax] = useState("");
  const [Min, setMin] = useState("");
  // const [IsFilterApplied, setIsFilterApplied] = useState(false);
  const MinChangeHandler = (e) => {
    setMin(e.target.value);
  };
  const MaxChangeHandler = (e) => {
    setMax(e.target.value);
  };
  useEffect(() => {
    setIsClick(false)
    setMin('')
    setMax('')
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
  const handleClick = () => {
    setIsClick(true);
    if (selectedcategory == "plots") {
      // parseFloat('100,000.00'.replace(/,/g, ''))
      console.log(plotsData);
      setNewData(
        plotsData.filter((value) => {
          if (
            parseFloat(+value.price.replace(/,/g, "")) >= +Min &&
            +value.price.replace(/,/g, "") <= +Max
          ) {
            return value;
          }
        })
      );
    }
    if (selectedcategory == "houses") {
      setNewData(
        housesData.filter((value) => {
          if (
            parseFloat(+value.price.replace(/,/g, "")) >= +Min &&
            +value.price.replace(/,/g, "") <= +Max
          ) {
            return value;
          }
        })
      );
    }
    if (selectedcategory == "rent") {
      setNewData(
        rentData.filter((value) => {
          if (
            parseFloat(+value.price.replace(/,/g, "")) >= +Min &&
            +value.price.replace(/,/g, "") <= +Max
          ) {
            return value;
          }
        })
      );
    }
  };
  // console.log(plotsData)
  return (
    <Animator1
      // className={style.wrapper}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className={style.wrapper1}>
        <div className={style.singleInput}>
          <label htmlFor="min" className={style.label}>
            Min Price
          </label>
          <input
            onChange={MinChangeHandler}
            value={Min}
            type="number"
            className={style.input}
            placeholder="Min Price..."
            id="min"
          />
        </div>
        <div className={style.singleInput}>
          <label htmlFor="max" className={style.label}>
            Max Price
          </label>
          <input
            onChange={MaxChangeHandler}
            value={Max}
            type="number"
            className={style.input}
            placeholder="Max Price..."
            id="max"
          />
        </div>
        <button onClick={() => handleClick()} className={style.btn}>
          Apply Filter
        </button>
      </div>
      {IsClick ? (
        NewData.length > 0 ? (
          NewData.map((single) => (
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
        )
      ) : DataToBeUsed.length > 0 ? (
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
