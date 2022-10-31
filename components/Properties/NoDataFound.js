import React from "react";
import { HiOutlineEmojiSad } from "react-icons/hi";
const NoDataFound = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <h2 className="text-blue-900 text-3xl md:text-3xl text-center">No proprerty here</h2>
      <HiOutlineEmojiSad className="text-2xl md:text-3xl text-blue-900"/>
    </div>
  );
};

export default NoDataFound;
