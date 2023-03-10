import React from "react";
import { Link } from "react-router-dom";
import { useBlogContext } from "../../../hooks";
import urlSlug from 'url-slug'

const Categories = () => {
  const { state } = useBlogContext();

  const categories = state?.categories?.edges;

  return (
    <div>
      <div className="p-10  border-[2px] ">
        <h4 className="pb-[13px] mb-5 border-b-[2px] text-dark-color font-semibold text-2xl font-poppins">
          Categories
        </h4>
        <ul>
          {categories?.map((category) => {
            const id = category?.node?.categoryId
            const name = urlSlug(category.node.name)
            const count = category?.node?.count
            return (
              <li
                key={id}
                className="pb-[15px] last:pb-0 flex items-center justify-between"
              >
                <Link
                  className="hover:text-main-color transition-main"
                  to={`/blog?categoryId=${id}&categoryName=${name}&year=${state?.year}`}
                >
                  <i className="fa-solid fa-angle-right mr-[10px] text-xs"></i>
                  {name}
                </Link>
                <span className="">({count})</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
