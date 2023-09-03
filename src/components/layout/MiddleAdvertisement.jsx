import React from 'react'
import Image from './Image'
import Container from './Container';
import { Link } from 'react-router-dom';

const MiddleAdvertisement = () => {
    return (
        <div className="mt-0 md:mt-32">
            <Container>
                <Link to="#">
                    <Image imgsrc="/src/assets/middlead.png" />
                </Link>
            </Container>
        </div>

    )
}

export default MiddleAdvertisement
