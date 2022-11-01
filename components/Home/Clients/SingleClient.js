import React from "react";

const style = {
  singleClient:
    "my-6 text-gray-50 italic w-[80%] md:w-[30%] text-center md:text-left ",
  clientReview: "",
  clientName: "my-6 font-bold",
};
const SingleClient = ({ name, review }) => {
  return (
    <div
      className={style.singleClient}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className={style.clientReview}>&quot;{review}&quot;</div>
      <div
        className={style.clientName}
        style={{ fontFamily: "Cormorant Garamond, serif" }}
      >
        {name}
      </div>
    </div>
  );
};

export default SingleClient;
