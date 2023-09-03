import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io"


const SampleNextArrow = (props) => {

    const { className, style, onClick } = props;
    return (
        <span
            className=" absolute top-[35%] right-6 !flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(0,0,0,.20)] "
            style={{ ...style, }}
            onClick={onClick}
        >
            <IoIosArrowRoundForward className=" text-2xl text-white" />
        </span>
    );

  return (
    <div>
      
    </div>
  )
}

export default SampleNextArrow
