import React from "react";
import SingleCard from "./SingleCard";
import { ContentHeading } from "../../UI/Heading";
import { MdOutlineSell, MdSell } from "react-icons/md";
import { AiOutlineCrown, AiFillCrown } from "react-icons/ai";
import { BsHouse, BsHouseFill } from "react-icons/bs";
const style = {
  card: "flex flex-col my-12 d:my-16 ",
  cardContainer: "flex flex-wrap md:no-wrap items-center justify-center gap-12",
};
const Card = () => {
  return (
    <div className={style.card}>
      <ContentHeading headingText="OUR SERVICES" />
      {/* adding the cards */}
      <div className={style.cardContainer}>
        <SingleCard
          heading="Looking to buy"
          details="You can visit our dedicated page to have the right path to own a house"
          icon={<AiOutlineCrown />}
          iconActive={<AiFillCrown />}
        />
        <SingleCard
          heading="Looking to rent"
          details="You can visit out homes and use our system to find you a better home to live in"
          icon={<BsHouse />}
          iconActive={<BsHouseFill />}
        />
        <SingleCard
          heading="Looking to sell"
          details="You can visit our dedicated page to have the right path to sell a house"
          icon={<MdOutlineSell />}
          iconActive={<MdSell />}
        />
      </div>
    </div>
  );
};

export default Card;
