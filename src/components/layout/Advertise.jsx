import React from 'react'
import Container from './Container'
import Flex from './Flex';
import { Link } from 'react-router-dom';
import Image from './Image';

const Advertise = () => {
    return (

      <div className="mt-5 md:mt-36">
          <Container>
            <Flex className="flex gap-x-5 md:gap-x-10">
                <div className="max-w-2/4">
                    <Link to="#">
                        <Image imgsrc="/src/assets/adone.png" />
                    </Link>
                </div>
                <div className="max-w-2/4">
                    <Link to="#">
                        <Image imgsrc="/src/assets/adtwo.png" />
                    </Link>
                    <Link to="#"  className="inline-block mt-2 md:mt-10">
                        <Image imgsrc="/src/assets/adthree.png" />
                    </Link>
                </div>
            </Flex>
        </Container>
      </div>

    )
}

export default Advertise
