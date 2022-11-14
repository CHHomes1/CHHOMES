import React from "react";
import Counter from "./Counter/Counter";
const style = {
  about: "w-[95%] md:w-[90%] mx-auto flex flex-col items-center justify-center",
  side1: "w-full md:w-[45%] h-full mx-auto",
  side2:
    "w-full md:w-[45%] flex items-center justify-center mx-auto hidden md:flex",
  heading:
    "font-bold text-5xl sm:text-6xl md:text-5xl lg:text-5xl my-8 text-blue-900",
  details: "text-blue-900 py-3 ",
  divider: "border-b-[1px] border-gray-200 p-2",
  coutnerContainer: "",
  signature:
    "my-8 flex justify-around items-center w-[70%] md:w-[60%] mx-auto md:mx-0",
  img: "",
  name: "text-xl sm:text-xl md:text-3xl lg:text-3xl italic ",
  signatureImg: "scale-[0.7] md:scale-[0.95]",
  locationHeading:'font-bold text-2xl sm:text-3xl md:text-3xl lg:text-3xl my-8 text-blue-900',

};
const About = () => {
  return (
    <div className={style.about}>
      <div className="flex my-24 mx-auto">
        <div className={style.side1}>
          <h2
            className={style.heading}
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Our estate deals in all kind of properties including selling plots
            on easy installments, buy/sell of houses and rent.
          </h2>
          <p
            className={style.details}
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Our experienced agents are passionate, knowledgeable, and will
            provide the guidance and support to meet your specific needs. You
            will be partnered with a group of knowledgeable and engaged agents
            to assist in navigating an ever-changing market, making smart real
            estate decisions, and even enjoy the process.
          </p>
          <div className={style.divider}></div>
          <div className={style.coutnerContainer}>
            <Counter />
          </div>
          {/* adding the signature */}
          {/* <div className={style.signature}>
            <img
              src="https://res.cloudinary.com/shariqcloud/image/upload/v1649881629/Estate1/1649881617380_fsgbp2.png"
              alt=""
              className={style.signatureImg}
            />
            <h2
              className={style.name}
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              _Sharique
            </h2>
          </div> */}
          {/* ADDING THE MAP LOCATION OF THE OFFICE */}
          <div className={style.map}>
            <h2 className={style.locationHeading}>Location</h2>
            <div style={{ width: "100%" }}>
              <iframe
                width="60%"
                height="500"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ch%20Homes%20Main%20Barki%20Road%20Barka%20Stop+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.maps.ie/distance-area-calculator.html">
                  measure acres/hectares on map
                </a>
              </iframe>
            </div>
          </div>
        </div>
        <div className={style.side2}>
          <img
            src="/img7.jpg"
            alt=""
            className={style.img}
            style={{ clipPath: "polygon(0 0, 100% 10%, 100% 88%, 1% 100%)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
