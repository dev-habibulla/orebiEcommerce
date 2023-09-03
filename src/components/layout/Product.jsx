import React from 'react'
import Image from './Image';
import Badge from './Badge';
import Flex from './Flex';
import { AiFillHeart } from "react-icons/ai";
import { FaRotate } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Product = ({ src, badge }) => {
    return (
        <div>
            <div className="relative overflow-y-hidden group">
                <Image className="w-full" imgsrc={src} />
                {badge && <Badge title="New" />}
                <div className=" absolute bottom-[-50%] lg:max-xl:h-[56%] ease-in duration-300 group-hover:bottom-0 left-0 h-40 w-full bg-white py-6 px-7">
                    <Flex className="flex justify-end items-center gap-1 sm:gap-x-4">
                        <p className="font-dm font-normal lg:max-xl:text-sm text-base text-[#6d6d6d]">Add to Wish List</p>
                        < AiFillHeart className="text-base" />
                    </Flex>
                    <Flex className="flex justify-end items-center my-5 gap-1 sm:gap-x-4">
                        <p className="font-dm font-normal lg:max-xl:text-sm text-base text-[#6d6d6d]">Compare</p>
                        < FaRotate className="text-base" />
                    </Flex>
                    <Flex className="flex justify-end items-center gap-1 sm:gap-x-4">
                        <p className="font-dm font-normal lg:max-xl:text-sm text-base text-[#6d6d6d]">Add to Cart</p>
                        < FaShoppingCart className="text-base" />
                    </Flex>
                </div>
            </div>
            <div className="mb-12 md:mb-0">
                <Flex className="mt-0 md:mt-6 flex justify-between items-center">

                    <h3 className="font-dm lg:max-xl:text-sm text-xl font-bold">Basic Crew Neck Tee</h3>
                    <p className=" font-dm lg:max-xl:text-sm text-base font-normal text-[#767676] ">$44.00</p>


                </Flex>
                <p className="mt-1 md:mt-4 font-dm lg:max-xl:text-sm text-base font-normal text-[#767676] ">Black</p>
            </div>
        </div>
    );
};

export default Product
