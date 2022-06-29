import React from "react";
import { Link } from "react-router-dom";
import GitStar from "../components/GitStar";
import Header from "../components/Header";

import design1 from "../Images/design1.png";

const Home = () => {
  return (
    <div>
      <GitStar />
      <Header />
      <div className="flex mx-auto bg-gray-200">
        <div className="grid grid-cols-4 ">
          <Link to="/design1">
            <div>
              <img src={design1} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
