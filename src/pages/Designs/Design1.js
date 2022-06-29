import React from "react";
import BackAndCodeButton from "../../components/BackAndCodeButton";

const Design1 = () => {
  var h = 10;
  var w = 10;
  return (
    <div className="bg-gradient-to-r from-[#1a1b1a] to-[#0f0f0f] h-[100vh] w-[100vw] relative ">
      <BackAndCodeButton />
      <div className="flex h-[100vh] items-center justify-center ">
        <div className={` w-20 h-20 bg-white`}></div>
        <div className={` w-80 h-20 bg-red-500 rotate-45 animate-pulse`}></div>
      </div>
    </div>
  );
};

export default Design1;
