import React from "react";
import Contact from "../../components/Contact/Contact";
import Animator from "../../components/UI/Animator";

const style = {
  wrapper: "",
};
const index = () => {
  return (
    <Animator>
      <div className={style.wrapper}>
        <Contact />
      </div>
    </Animator>
  );
};

export default index;
