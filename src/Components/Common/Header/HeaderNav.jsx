import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { useDebounce } from "../../../hooks";
import Col from "../Col/Col";
import Container from "../Container/Container";
import Row from "../Row/Row";
// import "./header.css";
import { getHeaderData, searchProducts } from "../../../api/index";
import { useCartStore } from "../../store";
import ResHeaderNav from "./ResHeaderNav";
import ButtonV1 from "../Button/Button";
import HeaderCart from "./HeaderCart";

// lg, md, sm, xs display

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [sticky, setSticky] = useState(false);

  const [text, setText] = useState("");

  const nav = useNavigate()


  const handleOnSearch = async () => {
    const data = await searchProducts(text)
    if (data?.length > 1 || data?.length === 0)
      nav("/shop", { state: { products: data, searchText: text } })
    if (data?.length === 1) {
      nav(`/product/${data?.[0]?.node?.name}`, { state: { product: data?.[0]?.node, searchText: text } })
    }
  };

  const { data: headerData = [] } = useQuery({
    queryKey: ["data"],
    queryFn: () =>
      getHeaderData().then(
        (res) => res?.data?.menus?.edges?.[0]?.node?.menuItems?.nodes
      ),
  });



  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { items, length } = useCartStore()
  // console.log(length());
  // console.log(items.reduce((prevValue, currentValue) => prevValue + currentValue.quantity,
  //   0));

  return (
    <div
      className={` transition-all duration-200  ${sticky
        ? "bg-white  z-[9999999] fixed top-0 left-0 right-0 shadow-[0px_7px_12px_0px_rgb(225_225_225_/50%)] "
        : ""
        }`}
    >
      <Container className={"xl:max-w-[1420px]"}>
        <div className="flex justify-between items-center py-[15px] xl:py-0">
          <Link to="/">
            <img
              className="w-[192px] h-auto max-w-full"
              src="https://klbtheme.com/chakta/wp-content/uploads/2021/01/logo.png"
              alt="Chakta – Auto Parts Shop WooCommerce Theme"
            />
          </Link>

          {/* default: off xl: display */}
          <nav className="hidden xl:flex items-center">
            {headerData?.map((nav) => {
              const slug = nav?.label?.replace(" ", "-")?.toLowerCase();
              const children = nav?.childItems?.edges;
              const isHasChildren = children?.length > 0;
              return (
                <div key={nav?.databaseId} className="relative group">
                  <Link
                    className="text-[16px] font-poppins hover:text-main-color transition-main  py-[34px] px-[15px] block font-semibold text-dark-color uppercase"
                    to={`/${slug}`}
                  >
                    {nav?.label}
                    {isHasChildren && (
                      <i className="fa-solid fa-chevron-down ml-1 text-[10px] -translate-y-[2px] font-bold"></i>
                    )}
                  </Link>
                  <div className="absolute top-[120%] left-0 transition-main  w-[200px] bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible z-[9999] group-hover:top-full after:inset-0 after:absolute after:h-2 after:z-[9999] after:-translate-y-2  ">
                    {children?.map((child) => {
                      const slug = child?.node?.label
                        ?.replace(" ", "-")
                        ?.toLowerCase();

                      return (
                        <Link
                          className="text-[16px] font-poppins hover:text-main-color transition-main  py-2 border border-t-0 px-[15px] block font-semibold text-dark-color uppercase"
                          to={`/${slug}`}
                          key={child?.node?.id}
                        >
                          {child?.node?.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </nav>

          {/* default: off xl: display */}
          <div className="hidden xl:flex  items-center">
            <div className="relative">
              <input
                type="text"
                className="h-[45px] w-[170px] rounded-[22px] border-[2px] border-[#ededed] pl-5 pr-10 outline-none "
                placeholder="Search"
                onChange={(e) => setText(e.target.value)}
              />
              <button onClick={() => handleOnSearch()} className="absolute top-1/2 right-0 -translate-y-1/2 text-[#111111] -translate-x-5">
                <i className="fas fa-search"></i>
              </button>
            </div>
            <div className="mr-[10px] ml-[30px] relative group">
              <HeaderCart />
            </div>
          </div>

          <div
            className={`xl:hidden ${isOpen ? "nav-toggle" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="h-[3px] w-[30px] bg-main-color block mt-[5px] rounded-[3px] cursor-pointer transition duration-300 relative"></span>
            <span className="h-[3px] w-[30px] bg-main-color block mt-[5px] rounded-[3px] cursor-pointer transition duration-300 "></span>
            <span className="h-[3px] w-[30px] bg-main-color block mt-[5px] rounded-[3px] cursor-pointer transition duration-300 relative"></span>
          </div>
        </div>
        <ResHeaderNav
          onSetOpen={() => setIsOpen(!isOpen)}
          isOpen={isOpen}
          data={headerData}
        />
      </Container>
    </div>
  );
};

function ResHeaderNav({ onSetOpen, data, isOpen }) {
  const [selectedPage, setSelectedPage] = useState([]);

  const handleOnSelect = (e, id) => {
    e.preventDefault();

    if (selectedPage.includes(id)) {
      setSelectedPage(selectedPage.filter((item) => item !== id));
      return;
    }
    setSelectedPage([...selectedPage, id]);
  };

  return (
    <div
      className={`xl:hidden fixed w-[300px] z-[9999999] bg-white duration-500 shadow-[0_5px_20px_rgb(0_0_0_/_10%)]  top-0 bottom-0 pt-[70px] left-0 transition ${isOpen ? "" : "-translate-x-full"
        }`}
    >
      <button
        className="absolute right-0 top-0 bg-main-color  p-[5px]"
        onClick={() => onSetOpen()}
      >
        <div className="w-[26px] h-[26px]  relative">
          <span className="w-full rotate-45 h-[2px] rounded-[6px] top-3 bg-white block absolute left-0"></span>
          <span className="w-full -rotate-45 h-[2px] rounded-[6px] bg-white block absolute bottom-3 left-0"></span>
        </div>
      </button>

      <div className="">
        <div className="">
          {data.map((nav) => {
            const slug = nav?.label?.replace(" ", "-")?.toLowerCase();
            const children = nav?.childItems?.edges;
            const isHasChildren = children?.length > 0;
            return (
              <div key={nav?.databaseId} className="border-b last:border-none ">
                <Link
                  className="text-[16px] block  relative justify-between font-poppins py-[13px] px-[26px]  font-semibold text-dark-color uppercase leading-[27px]"
                  // onClick={() => setSelectedPage(nav?.databaseId)}
                  to={`/${slug}`}
                >
                  {nav?.label}
                  {isHasChildren && (
                    <button
                      onClick={(e) => handleOnSelect(e, nav?.databaseId)}
                      className="fa-solid fa-chevron-down  text-xs  font-bold absolute top-1/2 right-4 -translate-y-1/2  "
                    ></button>
                  )}
                </Link>

                {isHasChildren && (
                  <div
                    className={`${selectedPage.includes(nav?.databaseId)
                      ? "block"
                      : "hidden"
                      }`}
                  >
                    {children?.map((child) => {
                      const slug = child?.node?.label
                        ?.replace(" ", "-")
                        ?.toLowerCase();

                      return (
                        <div
                          key={child?.node?.id}
                          className="border-b first:border-t  "
                        >
                          <Link
                            className="text-[16px] block  relative justify-between font-poppins py-[13px] pl-[48px] pr-[26px]  font-semibold text-dark-color uppercase leading-[27px]"
                            to={`/${slug}`}
                          >
                            {child?.node?.label}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HeaderNav;
