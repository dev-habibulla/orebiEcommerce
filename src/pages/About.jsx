import React from 'react'
import BreadCrumb from '../components/layout/BreadCrumb'
import Container from '../components/layout/Container'
import Flex from './../components/layout/Flex';
import Image from '../components/layout/Image';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <Container>
            <BreadCrumb />
            <Flex className="flex gap-x-10">
                <div className="w-2/4">

                    <Link to="/">
                        <Image imgsrc="/src/assets/aboutimgleft.png" className="w-full" />
                    </Link>

                </div>
                <div className="w-2/4">
                    <Link to="/products">
                        <Image imgsrc="/src/assets/aboutimage.png" className="w-full" />
                    </Link>
                </div>
            </Flex>
            <div className="mt-12 mb-6 lg:mb-28 lg:mt-32">
                <h4 className="font-dm font-normal sm:text-[26px] lg:text-[39px] text-primary">Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h4>
            </div>

            <Flex className="flex gap-x-10 flex-wrap sm:flex-nowrap sm:justify-between">
                <div className="sm:w-[32%]">
                    <h4 className="mb-3 text-2xl font-dm font-bold">Our Vision</h4>
                    <p className="mb-3 text-base font-dm font-normal text-[#767676]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="sm:w-[32%]">
                    <h4 className="mb-3 text-2xl font-dm font-bold">Our Story</h4>
                    <p className="mb-3 text-base font-dm font-normal text-[#767676]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                </div>
                <div className="sm:w-[32%]">
                    <h4 className="mb-3 text-2xl font-dm font-bold">Our Brands</h4>
                    <p className="mb-3 text-base font-dm font-normal text-[#767676]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                </div>
            </Flex>
        </Container>
    )
}

export default About
