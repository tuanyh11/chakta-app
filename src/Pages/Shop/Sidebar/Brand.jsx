import React from "react";
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <div>
      {" "}
      <div className="py-10 px-[30px] border border-[#f7f7f7]">
        <h4 className="pb-[13px] mb-5 border-b-[2px] text-dark-color font-semibold text-2xl font-poppins">
          Brand
        </h4>
        <ul>
          {[...new Array(5).keys()].map((index) => {
            return (
              <li
                key={index}
                className="pb-[15px] last:pb-0 flex items-center justify-between"
              >
                <Link to={`/shop?brand=${index}`}>
                  Auto Parts
                </Link>
                <span className="">({1})</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Brand;
