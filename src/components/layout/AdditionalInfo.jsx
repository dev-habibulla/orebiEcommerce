
import React from 'react'
import Container from "./Container"
import Flex from './Flex';
import { TbNumber2 } from "react-icons/tb"
import { FaCarSide } from "react-icons/fa"
import { FaArrowRotateLeft } from "react-icons/fa6"

const AdditionalInfo = ({ children, className }) => {
  return (

    <div className=" border border-solid border-[#f0f0f0] py-2 sm:py-7 mt-[-6px]">
      <Container>
        <Flex className="flex justify-between">
          <Flex className="flex items-center gap-1 sm:gap-x-4">
            < TbNumber2 className="text-[10px] sm:text-2xl" />
            <p className="font-dm font-normal text-[10px] sm:text-base text-[#6d6d6d]">Two years warranty</p>
          </Flex>

          <Flex className="flex items-center gap-1 sm:gap-x-4">
            < FaCarSide className="text-[10px] sm:text-2xl" />
            <p className="font-dm font-normal  text-[10px] sm:text-base text-[#6d6d6d]">Free shipping</p>
          </Flex>

          <Flex className="flex items-center gap-1 sm:gap-x-4">
            < FaArrowRotateLeft className="text-[10px] sm:text-2xl" />
            <p className="font-dm font-normal  text-[10px] sm:text-base text-[#6d6d6d]">Return policy in 30 days</p>
          </Flex>

        </Flex>
      </Container>
    </div>

  )
}

export default AdditionalInfo
