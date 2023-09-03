import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Flex from './Flex';
import Product from './Product';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";


const Newarrival = () => {


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <div className="mt-32">
            <Container>
<Heading title="New Arrivals" />
                
                <Slider {...settings}>
                <Flex className="flex gap-x-10">
                    <div className="max-w-[370px]">
                        <Product src="/src/assets/product_one.png" badge={false} />
                    </div>
                    <div className="max-w-[370px]"><Product src="/src/assets/product_two.png" badge={true} /></div>
                    <div className="max-w-[370px]"><Product src="/src/assets/product_three.png" badge={false} /></div>
                    <div className="max-w-[370px]"><Product src="/src/assets/product_four.png" badge={true} /></div>
                </Flex>

                <Flex className="flex gap-x-10">
                    <div className="max-w-[370px]">
                        <Product src="/src/assets/product_one.png" badge={false} />
                    </div>
                    <div className="max-w-[370px]"><Product src="/src/assets/product_two.png" badge={true} /></div>
                    <div className="max-w-[370px]"><Product src="/src/assets/product_three.png" badge={false} /></div>
                    <div className="max-w-[370px]"><Product src="/src/assets/product_four.png" badge={true} /></div>
                </Flex>


                <Flex className="flex gap-x-10">
                    <div className="max-w-[370px]">
                        <Product src="/src/assets/product_one.png" badge={false} />
                    </div>
                    <div className="max-w-[370px]"><Product src="/src/assets/product_two.png" badge={true} /></div>
                    <div className="max-w-[370px]"><Product src="/src/assets/product_three.png" badge={false} /></div>
                    <div className="max-w-[370px]"><Product src="/src/assets/product_four.png" badge={true} /></div>
                </Flex>

                </Slider>
            </Container>



<div className='responsive'>
<div className="mt-5 md:mt-32">
            <Container>
                <Heading title="New Arrivals" />
                <Flex className="sm:flex sm:max-lg:flex-wrap sm:max-md:justify-between md:gap-x-10">
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
                </Flex>
            </Container>
        </div>
</div>




        </div>

    )
}

export default Newarrival
