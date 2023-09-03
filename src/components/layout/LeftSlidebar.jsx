import React from 'react'
import SideBarContent from './SideBarContent'
import { category, colors, brands, prices } from '../../data/Data'

const LeftSlidebar = () => {
  return (
    <>
    
    <SideBarContent dropDown={true} dropTitle="Shop by Category" data={category}/>
    <SideBarContent dropDown={false} dropTitle="Shop by Color" data={colors}/>
    <SideBarContent dropDown={true} dropTitle="Shop by Brand" data={brands}/>
    <SideBarContent dropDown={true} dropTitle="Shop by Price" data={prices}/>


   
    </>
  
  )
}

export default LeftSlidebar
