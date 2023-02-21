import React from "react";
import Slider from "react-slick";
import { ButtonArrow, Col, Container, Row } from "../../../Components";

const Hero = () => {
  return (
    <div>
      <div
        className="py-[100px] bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${"https://klbtheme.com/chakta/wp-content/uploads/2021/01/hero-bg-1.jpg"})`,
        }}
      >
        <div className="">
          <Container>
            <Row>
              <Col className={"w-8/12"}>
                <div className="px-[70px] pt-[70px] pb-[70px] bg-white font-semibold">
                  <div className="">
                    <Slider fade={true}>
                      <div>
                        <h3 className="mb-6 uppercase text-[#4bc871] underline ">
                          great offer for every auto & cars
                        </h3>
                        <h1 className="text-[70px] leading-[70px] text-black mb-5 font-poppins">
                          25% Off For Auto Car Services
                        </h1>
                        <p className="text-black font-normal pb-5">
                          Sed ut perspiciatis unde omnis iste natus error
                          voluptatem accusantium remque laudantium totam aperiam
                          eaque ipsa quae abillo inventore veritatis
                        </p>
                        <div>
                          <ButtonArrow
                            Tag="Link"
                            to="/shop"
                            className="py-[14px] mr-2 text-[14px] px-[45px]  leading-[27px] rounded-[28px]"
                          >
                            Shop Now
                          </ButtonArrow>
                          <ButtonArrow
                            Tag="Link"
                            to="/shop"
                            className="py-[14px] text-[14px] px-[45px]  leading-[27px] rounded-[28px] bg-white border-2 border-[#eaeaea] border-solid text-[#777777]"
                          >
                            Read more
                          </ButtonArrow>
                        </div>
                      </div>
                      <div>
                        <h3 className="mb-6 uppercase text-[#4bc871] underline">
                          great offer for every auto & cars
                        </h3>
                        <h1 className="text-[70px] leading-[70px] text-black mb-5 font-poppins">
                          35% Off For Auto Parts Services
                        </h1>
                        <p className="text-black font-normal pb-5">
                          Sed ut perspiciatis unde omnis iste natus error
                          voluptatem accusantium remque laudantium totam aperiam
                          eaque ipsa quae abillo inventore veritatis
                        </p>
                        <div>
                          <ButtonArrow
                            Tag="Link"
                            to="/shop"
                            className="py-[14px] mr-2 text-[14px] px-[45px]  leading-[27px] rounded-[28px]"
                          >
                            Shop Now
                            <i className="fa-solid fa-circle-arrow-right ml-[10px]"></i>
                          </ButtonArrow>
                          <ButtonArrow
                            Tag="Link"
                            to="/shop"
                            className="py-[14px] text-[14px] px-[45px]  leading-[27px] rounded-[28px] bg-white border-2 border-[#eaeaea] border-solid text-[#777777]"
                          >
                            Read more
                            <i className="fa-solid fa-circle-arrow-right ml-[10px]"></i>
                          </ButtonArrow>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div
          className="mt-[100px] mb-[-215px] bg-main-color max-w-[1400px] mx-auto py-[60px] px-[115px] rounded-[20px]  "
          style={{
            backgroundImage: `url(${"https://klbtheme.com/chakta/wp-content/uploads/2021/01/filter-bg.png"})`,
          }}
        >
          <h1 className="text-white text-2xl text-center font-semibold font-poppins mb-[30px]">
            Over 2500 Cars. Find Your Auto Parts
          </h1>
          <Row>
            <Col className="w-3/12">
              <div className="">
                <button className="relative w-full text-start px-[30px] left-0 leading-[55px] h-[55px] bg-white  rounded-[28px]">
                  <span className="text-[#444] font-medium">Select Make</span>
                  <i className="fa-solid fa-angle-down absolute top-1/2 -translate-y-1/2 right-5 text-main-color  text-xs"></i>
                </button>
              </div>
            </Col>

            <Col className="w-3/12">
              <div className="">
                <button className="relative w-full text-start px-[30px] left-0 leading-[55px] h-[55px] bg-white  rounded-[28px]">
                  <span className="text-[#444] font-medium">Select Mode</span>
                  <i className="fa-solid fa-angle-down absolute top-1/2 -translate-y-1/2 right-5 text-main-color  text-xs"></i>
                </button>
              </div>
            </Col>

            <Col className="w-3/12">
              <div className="">
                <button className="relative w-full text-start px-[30px] left-0 leading-[55px] h-[55px] bg-white  rounded-[28px]">
                  <span className="text-[#444] font-medium">Select Year</span>
                  <i className="fa-solid fa-angle-down absolute top-1/2 -translate-y-1/2 right-5 text-main-color  text-xs"></i>
                </button>
              </div>
            </Col>

            <Col className="w-3/12">
              <div className="">
                <button className="relative w-full text-center transition-all duration-[400] font-medium  font-poppins py-[11px] px-[35px] bg-main-color border-2 border-white border-solid hover:bg-white hover:text-main-color text-white   rounded-[28px]">
                  <span className="  font-medium uppercase">
                    find auto parts
                  </span>
                  <i className="fa-solid fa-circle-arrow-right  ml-3"></i>
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Hero;