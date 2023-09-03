import React from 'react'
import Banner from '../components/layout/Banner'
import AdditionalInfo from '../components/layout/AdditionalInfo'
import Advertise from './../components/layout/Advertise';
import Newarrival from '../components/layout/Newarrival';
import Slitry from '../components/layout/Slitry';
import BestSeller from '../components/layout/BestSeller';
import MiddleAdvertisement from '../components/layout/MiddleAdvertisement';
import Offers from '../components/layout/Offers';

const Home = () => {
  return(

    <>
        <Banner />
        <AdditionalInfo />
        <Advertise />
        <Newarrival />
        <BestSeller />
        <MiddleAdvertisement />
        <Offers />
       
        
    </>

    )
}

export default Home
