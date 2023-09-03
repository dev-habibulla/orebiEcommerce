import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Flex from './Flex';
import Product from './Product';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import SampleNextArrow from './SampleNextArrow';
import SamplePrevArrow from './SamplePrevArrow';

const Newarrival = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };


    return (
        <div className="mt-5 md:mt-32">
            <Container>
                <Heading title="New Arrivals" />
                {/* <Flex className="sm:flex sm:max-lg:flex-wrap sm:max-md:justify-between md:gap-x-10"> */}
                <Slider {...settings}>

                    <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]">
                        <Product src="/src/assets/product_one.png" badge={false} />
                    </div>
                    <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]">
                        <Product src="/src/assets/product_two.png" badge={true} />
                    </div>
                    <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]">
                        <Product src="/src/assets/product_three.png" badge={false} />
                    </div>
                    <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]">
                        <Product src="/src/assets/product_four.png" badge={true} />
                    </div>
                    <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]">
                        <Product src="/src/assets/product_two.png" badge={true} />
                    </div>

                </Slider>

                {/* </Flex> */}
            </Container>
        </div>
    )
}

export default Newarrival
