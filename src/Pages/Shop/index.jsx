import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { BreadCrumb, Col, Row, Container } from "../../Components";
import { useUiStore } from "../../Components/store";
import { useShopContext } from "../../hooks";
import Content from "./Content";
import Sidebar from "./Sidebar/index";
import MobileSidebar from "./Sidebar/MobileSidebar";

const Shop = ({ categories }) => {
  const [filter, setFilter] = useState({
    status: [],
    category: [],
    brand: [],
    price: [],
  });

  const searchText = useLocation().state?.searchText;

  const { setIsOpeningFilterProduct, isOpeningFilterProduct } = useUiStore();

  const handleOnSelectCate = (category) => {
    const id = category.databaseId;
    const isExisting = filter.category.find((item) => item.databaseId === id);

    if (isExisting) {
      setFilter({
        ...filter,
        category: [
          ...filter?.category.filter((item) => item.databaseId !== id),
        ],
      });
    } else setFilter({ ...filter, category: [...filter?.category, category] });
  };

  const handleOnSelectStatus = (status) => {
    const isExisting = filter.status.find((item) => item.id === status.id);

    if (isExisting) {
      setFilter({
        ...filter,
        status: [...filter?.status.filter((item) => item.id !== status.id)],
      });
    } else setFilter({ ...filter, status: [...filter?.status, status] });
  };

  const handleOnRemoveStatus = (status) => {
    setFilter({
      ...filter,
      status: [...filter?.status.filter((item) => item.id !== status.id)],
    });
  };

  const handleOnRemoveCate = (category) => {
    const id = category.databaseId;
    setFilter({
      ...filter,
      category: [...filter?.category.filter((item) => item.databaseId !== id)],
    });
  };

  const handleFilterPrice = (price) => {
    setFilter({ ...filter, price });
  };

  console.log(isOpeningFilterProduct);

  const { Provider } = useShopContext();

  return (
    <div>
      <Provider
        value={{
          filter,
          setFilter,
          handleOnSelectCate,
          handleOnSelectStatus,
          handleOnRemoveCate,
          handleOnRemoveStatus,
          handleFilterPrice,
        }}
      >
        <BreadCrumb
          label={searchText ? `Search Results for: ${searchText}` : "Products"}
          isForSearching={searchText}
          offPath={searchText}
        />
        <div className="lg:hidden">
          <div
            className={`fixed  w-[400px] overflow-auto top-0 h-[100vh] bg-white z-[99999999999] transition-all duration-500 ease-linear ${
              isOpeningFilterProduct ? "-left-full" : "left-[0]"
            }  `}
          >
            <div className="py-[18px] px-5 bg-[#1c2224] text-white text-[16px] font-semibold font-poppins flex justify-between">
              <h5>Product Filters </h5>
              <button
                onClick={() => setIsOpeningFilterProduct(true)}
                className="w-[26px] h-[26px] leading-[26px] bg-white rounded-full text-black font-bold"
              >
                <i className="fa fa-times"></i>
              </button>
            </div>
            <div className="py-5 px-[10px]">
              <MobileSidebar />
            </div>
          </div>
        </div>
        <div className="py-20 relative">
          <Container>
            <Row>
              <Col
                className={
                  "w-full hidden md:block lg:w-3/12 order-2 mt-10 md:mt-0  md:order-1"
                }
              >
                <div className="">
                  <Sidebar categories={categories} />
                </div>
              </Col>
              <Col className={"w-full lg:w-9/12 order-1 md:order-2"}>
                <Content />
              </Col>
            </Row>
          </Container>
        </div>
      </Provider>
    </div>
  );
};

export default Shop;
