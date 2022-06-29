import React from "react";
import { Link } from "react-router-dom";
const BackAndCodeButton = () => {
  return (
    <div className="flex justify-between ">
      <Link to={"/"}>
        <div>
          <div className="bg-gray-400 w-fit absolute top-0 left-0 mt-4 ml-4 px-3 py-2 rounded-md font-semibold hover:bg-white cursor-pointer">
            Back
          </div>
        </div>
      </Link>
      <div>
        <div className="bg-gray-400 w-fit absolute top-0 right-0  px-3 py-2 rounded-md mt-4 mr-8 font-semibold hover:bg-white cursor-pointer">
          Code
        </div>
      </div>
    </div>
  );
};

export default BackAndCodeButton;
