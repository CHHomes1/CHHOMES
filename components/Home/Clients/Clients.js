import React from "react";
import SingleClient from "./SingleClient";

const style = {
  clients: "bg-[#090333] w-[100vw] overflow-x-hidden p-12",
  container: "flex flex-wrap md:no-wrap gap-4 justify-around",
  heading:
    "text-blue-200  text-3xl sm:text-3xl md:text-2xl lg:text-3xl mx-auto text-center md:text-left",
};
const Clients = () => {
  return (
    <div className={style.clients}>
      <div
        className={style.heading}
        style={{ fontFamily: "Old Standard TT, serif" }}
      >
        Our Reviews
      </div>

      <div className={style.container}>
        <SingleClient
          name="William Barley"
          review="The difference in finding a good realtor and a great realtor is in the details. Michael, Nancy, and their team focus on those details."
        />
        <SingleClient
          name="Mike Roger"
          review="Both of us were very comfortable with Mercedes Peralta knowledge and professionalism. Not to mention that we think they are darn nice people too"
        />
        <SingleClient
          name="Jow dank"
          review="They fulfilled all of our expectations. I would very highly recommend Calcagno & Hamilton as a real estate agent."
        />
      </div>
    </div>
  );
};

export default Clients;
