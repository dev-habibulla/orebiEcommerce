import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import Dropdown from "./Dropdown";
import { FaBars, FaUserAlt, FaCartPlus } from "react-icons/fa";
import { RxTriangleDown } from "react-icons/rx";
import { ImSearch, ImCross } from "react-icons/im";
import List from "./List";
import ListIteam from "./ListIteam";
import Search from "./Search";
import Image from './Image';
import { Link } from 'react-router-dom';

const Header = () => {
  let [categoryDropDownShow, setCategoryDropDownShow] = useState(false);
  let [userDropDownShow, setUserDropDownShow] = useState(false);
  let [cartDropDownShow, setCartDropDownShow] = useState(false);
  let categoryRef = useRef();
  let userRef = useRef();
  let cartRef = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (categoryRef.current.contains(e.target)) {
        setCategoryDropDownShow(true);
      } else {
        setCategoryDropDownShow(false);
      }


      if (userRef.current.contains(e.target)) {
        setUserDropDownShow(true);
      } else {
        setUserDropDownShow(false);
      }


      if (cartRef.current.contains(e.target)) {
        setCartDropDownShow(true);
      } else {
        setCartDropDownShow(false);
      }




    });
  });

  return (
    <div className="bg-[#979797] py-6">
      <Container>
        <Flex className="flex justify-between">
          <div className="flex items-center">
            <Dropdown className="relative z-50" dropref={categoryRef}>
              <p className="flex items-center gap-x-2.5 font-dm font-normal text-sm">
                <FaBars /> <span className=" hidden lg:inline-block"> Shop by Category </span> 
              </p>
              {categoryDropDownShow && (
                <List className="absolute w-[263px] top-8 bg-primary font-dm font-normal text-sm text-[#818181]">
                  <ListIteam
                    className="py-4 px-5 hover:px-7 ease-in duration-100 border-b border-solid border-[#2D2D2D] hover:text-white hover:font-bold"
                    iteamname="Accesories"
                  />
                  <ListIteam
                    className="py-4 px-5 hover:px-7 ease-in duration-100 border-b border-solid border-[#2D2D2D] hover:text-white  hover:font-bold"
                    iteamname="Furniture"
                  />
                  <ListIteam
                    className="py-4 px-5 hover:px-7 ease-in duration-100 border-b border-solid border-[#2D2D2D] hover:text-white  hover:font-bold"
                    iteamname="Electronics"
                  />
                  <ListIteam
                    className="py-4 px-5 hover:px-7 ease-in duration-100 border-b border-solid border-[#2D2D2D] hover:text-white  hover:font-bold"
                    iteamname="Clothes"
                  />
                  <ListIteam
                    className="py-4 px-5 hover:px-7 ease-in duration-100 border-b border-solid border-[#2D2D2D] hover:text-white  hover:font-bold"
                    iteamname="Bags"
                  />
                  <ListIteam
                    className="py-4 px-5 hover:px-7 ease-in duration-100 border-b border-solid border-[#2D2D2D] hover:text-white  hover:font-bold"
                    iteamname="Home appliances"
                  />
                </List>
              )}
            </Dropdown >
          </div>
          <div className="relative w-auto lg:w-[600px]" >
            <Search className="w-full py-4 px-5 placeholder:text-[#c4c4c4] font-dm font-normal text-sm" placeholder="Search Products" />
            <ImSearch className="absolute top-4 right-4 " />
          </div>
          <div className="flex items-center">
            <Flex className="flex gap-x-10">
              <Dropdown className="relative z-50" dropref={userRef}>
                <div className="flex justify-center ">
                  <FaUserAlt />
                  <RxTriangleDown />
                </div>

                {userDropDownShow && (
                  <List className=" font-normal absolute w-[200px] right-0 top-8 border border-solid border-[#f0f0f0] bg-white text-center font-dm  text-sm text-primary">
                    <ListIteam
                      className="py-4 px-5 ease-in duration-100 border-b border-solid border-[#f0f0f0] hover:text-white hover:font-bold hover:bg-primary"
                      iteamname="My Account"
                    />
                    <ListIteam
                      className="py-4 px-5 ease-in duration-100 border-b border-solid border-[#f0f0f0] hover:text-white  hover:font-bold  hover:bg-primary"
                      iteamname="Log Out"
                    />

                  </List>
                )}

              </Dropdown>

              <div>

                <Dropdown className="relative z-50" dropref={cartRef}>
                  <FaCartPlus className="text-xl" />

                  {cartDropDownShow && (

                    <div className="absolute right-0 top-8 w-[360px]  border border-solid border-[#f0f0f0]">
                      <div className=" bg-[#f5f5f3]  p-5">
                        <Flex className="flex justify-between">
                          <div>
                            <Image imgsrc="/src/assets/cartimage.png" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h3 className="font-dm font-bold text-sm text-primary">Black Smart Watch</h3>
                            <p className=" mt-3 font-dm font-bold text-sm text-primary">$44.00</p>
                          </div>
                          <div className="flex  items-center justify-center">   <ImCross /></div>
                        </Flex>

                      </div>
                      <div className="bg-white p-5 ">
                        <h4 className=" font-dm font-normal text-base text-[#767676]">
                          Subtotal: <span className="font-bold text-primary">$44.00</span> </h4>
                          <Link to="#" className=" mt-3 inline-block border border-solid border-primary py-4 px-10 font-dm font-bold text-sm">View Cart</Link>
                          <Link to="#" className=" mt-3 ml-5 bg-primary inline-block border border-solid border-primary py-4 px-10 font-dm font-bold text-white text-sm">Checkout</Link>
                      </div>
                    </div>

                  )}

                </Dropdown>
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
