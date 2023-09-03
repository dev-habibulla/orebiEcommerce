import Container from "./Container";
import React from "react";
import Flex from "./Flex";
import List from "./List";
import ListIteam from "./ListIteam";
import Image from "./Image";
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"

const Footer = () => {
    return (
        <div className="mt:3 lg:mt-36 bg-[#F5F5F3] py-14">
            <Container>
                <Flex className="flex flex-wrap xl:flex-nowrap">
                    <div className="">
                        <h4 className="mb-4 font-dm text-base font-bold">MENU</h4>
                        <List>

                            <ListIteam
                                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                                iteamname="Home"
                                href="#" />
                            <ListIteam
                                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                                iteamname="Shop"
                                href="#"
                            />
                            <ListIteam
                                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                                iteamname="About"
                                href="#"
                            />
                            <ListIteam
                                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                                iteamname="Contact"
                                href="#"
                            />
                            <ListIteam
                                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                                iteamname="Journal1"
                                href="#"
                            />
                        </List>
                    </div>
                    <div className="px-10 sm:pr-[141px]  sm:pl-[143px] 	">
                        <h4 className="mb-4 font-dm text-base font-bold">SHOP</h4>
                        <List>
                            <ListIteam
                                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                                iteamname="Category 1"
                                href="#"
                            />
                            <ListIteam
                                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                                iteamname="Category 2"
                                href="#"
                            />
                            <ListIteam
                                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                                iteamname="Category 3"
                                href="#"
                            />
                            <ListIteam
                                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                                iteamname="Category 4"
                                href="#"
                            />
                            <ListIteam
                                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                                iteamname="Category 5"
                                href="#"
                            />
                        </List>
                    </div>
                    <div className="">
                        <h4 className="mb-4 font-dm text-base font-bold">HELP</h4>
                        <List>
                            <ListIteam
                                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                                iteamname="Privacy Policy"
                                href="#"
                            />
                            <ListIteam
                                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                                iteamname="Terms & Conditions"
                                href="#"
                            />
                            <ListIteam
                                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                                iteamname="Special E-shop"
                                href="#"
                            />
                            <ListIteam
                                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                                iteamname="Shipping"
                                href="#"
                            />
                            <ListIteam
                                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                                iteamname="Secure Payments"
                                href="#"
                            />
                        </List>
                    </div>
                    <div className="flex justify-center mt-8 lg:mt-0 pl-0 lg:pl-[143px]">
                        <div>
                            <h4 className="mb-4 font-dm text-base font-bold">
                                (052) 611-5711 <br /> company@domain.com
                            </h4>
                            <p className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]">
                                575 Crescent Ave. Quakertown, PA 18951
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 xl:mt-0 pl-0 sm:pl-[256px] ">
                        <Image imgsrc="/src/assets/logo.png" />
                    </div>

                </Flex>
                <Flex className="mt-5 lg:mt-16	lg:mb-[59px] flex justify-between flex-wrap">
                    <div className=" items-center text-sm">

                        <Link className=" inline-block" to="#">
                            <FaFacebookF />
                        </Link>

                        <Link className=" px-6 inline-block" to="#">
                            <FaLinkedinIn />

                        </Link>
                        <Link className=" inline-block" to="#">
                            <FiInstagram />
                        </Link>

                    </div>
                    <div>
                        <p className="mt-5 sm:mt-0 inline-block tex-sm text-[#6d6d6d] ">2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                    </div>
                </Flex>
            </Container>
        </div>
    );
};

export default Footer;
