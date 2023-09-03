import React, { useState, useEffect } from 'react'
import Container from '../components/layout/Container'
import BreadCrumb from './../components/layout/BreadCrumb';
import Flex from '../components/layout/Flex';
import Pagination from '../components/layout/Pagination';
import LeftSlidebar from './../components/layout/LeftSlidebar';
import { BsFillFilterCircleFill } from "react-icons/bs"
import { AiFillCloseCircle } from "react-icons/ai"



const Shope = () => {

  let [showNumber, setShowNumber] = useState(12)
  let [show, setShow] = useState(true);

  let handlePagenationChange = (e) => {
    setShowNumber(+e.target.value);
  }

  useEffect(() => {
    function scrollWidth() {
      if (window.innerWidth < 575) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    scrollWidth();
    window.addEventListener("resize", scrollWidth);
  }, []);


  return (
    <Container>
      <BreadCrumb title="Products" />

      <Flex className="flex gap-x-10 relative">
        {show && (
          <div className="w-full sm:w-1/4 z-50 absolute top-0 left-0 bg-white p-5 sm:p-0 sm:static sm:bg-transparent">
            <AiFillCloseCircle onClick={() => setShow(!show)}className="block sm:hidden text-xl text-[#767676]" />
            <LeftSlidebar />
          </div>
        )}

        <div className=" w-full sm:w-3/4 relative">

          <div className="flex gap-x-7 md:gap-x-10 mb-3.5 lg:justify-end">
            <div className="mb-4 flex items-end">
              <BsFillFilterCircleFill onClick={() => setShow(!show)} className="block sm:hidden text-xl text-[#767676]" />
            </div>
            <div className="md:flex items-center gap-x-3.5 text-[#767676]">

              <span className="inline-block font-dm font-normal text-base text-[#767676]">Sort by:</span>

              <select id="countries" class=" md:w-[239px] border border-[#f0f0f0] text-gray-900 rounded-lg focus:ring-blue-500 focus:border-black block p-2.5 font-dm font-normal text-base">
                <option selected className="font-dm font-normal text-base text-[#767676]">Featured</option>
                <option className="font-dm font-normal text-base text-[#767676]" value="US">United States</option>
                <option className="font-dm font-normal text-base text-[#767676]" value="CA">Canada</option>
                <option className="font-dm font-normal text-base text-[#767676]" value="FR">France</option>
                <option className="font-dm font-normal text-base text-[#767676]" value="DE">Germany</option>
              </select>
            </div>


            <div className="md:flex items-center gap-x-3.5 text-[#767676]">

              <span className="inline-block font-dm font-normal text-base text-[#767676]">Show:</span>

              <select onChange={handlePagenationChange} id="countries" class=" md:w-[139px] border border-[#f0f0f0] text-gray-900 rounded-lg focus:ring-blue-500 focus:border-black block p-2.5 font-dm font-normal text-base">
                <option selected className="font-dm font-normal text-base text-[#767676]" value="12">12</option>
                <option className="font-dm font-normal text-base text-[#767676]" value="24">24</option>
                <option className="font-dm font-normal text-base text-[#767676]" value="48">48</option>

              </select>
            </div>

          </div>



          <Pagination itemsPerPage={showNumber} />

        </div>
      </Flex>

    </Container>
  )
}

export default Shope
