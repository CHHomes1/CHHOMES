import React from "react";
import About from "../../components/About/About";
import Animator from "../../components/UI/Animator";
const style = {
  wrapper: "",
};
const index = () => {
  return (
    <Animator>
      <div className={style.wrapper}>
        <About />
      </div>
    </Animator>
  );
};

export default index;
