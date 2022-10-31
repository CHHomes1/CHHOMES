import React from "react";
import Properties from "../../components/Properties/Properties";
import Animator from "../../components/UI/Animator";

const style = {
  wrapper: "",
};
const index = () => {
  return (
    <Animator>
      <div className={style.wrapper}>
        <Properties />
      </div>
    </Animator>
  );
};

export default index;
