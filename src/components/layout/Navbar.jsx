// import React from 'react'

import Image from "./Image";
import Flex from "./Flex";
import List from "./List";
import ListIteam from "./ListIteam";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import Container from "./Container";

const Navbar = () => {
  let [show, setShow] = useState(true);

  useEffect(() => {
    function scrollWidth() {
      if (window.innerWidth < 1024) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    scrollWidth();
    window.addEventListener("resize", scrollWidth);
  }, []);

  return (
    
    <nav className="py-8">
      <Container>
        <Flex className="lg:flex">
          <div className="lg:w-3/12">
            <Image imgsrc="/src/assets/logo.png" alt="Logo" />
          </div>

          <div className="lg:w-9/12 w-full">
            <FaBars
              onClick={() => setShow(!show)}
              className="block lg:hidden ml-auto absolute top-2.5 right-2.5"
            />
            {show && (
              <List className=" lg:flex lg:justify-center lg:gap-x-10 mt-5 lg:mt-0">
                <ListIteam
                  className="font-dm text-sm font-bold hover:font-bold my-2.5 lg:my-0 "
                  iteamname="Home"
                />
                <ListIteam
                  className="font-dm text-sm font-normal hover:font-bold my-2.5 lg:my-0"
                  iteamname="Shop"
                />
                <ListIteam
                  className="font-dm text-sm font-normal hover:font-bold my-2.5 lg:my-0"
                  iteamname="About"
                />
                <ListIteam
                  className="font-dm text-sm font-normal hover:font-bold my-2.5 lg:my-0"
                  iteamname="Contacts"
                />
                <ListIteam
                  className="font-dm text-sm font-normal hover:font-bold my-2.5 lg:my-0"
                  iteamname="Journal"
                />
              </List>
            )}
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
