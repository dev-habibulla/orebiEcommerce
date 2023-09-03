import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Flex from './Flex';
import Product from './Product';



const BestSeller = () => {
    return (
        <div className="mt-5 md:mt-32">
            <Container>
                <Heading title="Our Bestsellers" />
                <Flex className="sm:flex sm:max-lg:flex-wrap sm:max-md:justify-between md:gap-x-10">
                    <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]">
                        <Product src="/src/assets/best_seller_p_one.png" badge={true} />
                    </div>
                    <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]">
                        <Product src="/src/assets/best_seller_p_two.png" badge={false} />
                    </div>
                    <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]">
                        <Product src="/src/assets/best_seller_p_three.png" badge={true} />
                    </div>
                    <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px]">
                        <Product src="/src/assets/best_seller_p_four.png" badge={false} />
                    </div>
                </Flex>
            </Container>
        </div>
    )
}


export default BestSeller
