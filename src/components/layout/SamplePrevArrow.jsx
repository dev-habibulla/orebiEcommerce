import React from 'react'
import { IoIosArrowRoundForward,IoIosArrowRoundBack } from "react-icons/io"

const SamplePrevArrow = (props) => {

    const { className, style, onClick } = props;
    return (
        <span
            className=" absolute top-[35%] left-0 !flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(0,0,0,.20)] z-50"
            style={{ ...style, }}
            onClick={onClick}
        >
            <IoIosArrowRoundBack className=" text-2xl text-white" />
        </span>
    );

  return (
    <div>
      
    </div>
  )
}

export default SamplePrevArrow
