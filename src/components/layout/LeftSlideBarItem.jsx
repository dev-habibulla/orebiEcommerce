import React, { useState } from 'react'
import { HiMiniPlusSmall } from "react-icons/hi2"



const LeftSlideBarItem = (props) => {

    let [drop, setDrop] = useState(props.subDropDown)
    let [show, setShow] = useState(false)

    return (
        <div>
            {drop
                ?
                <div onClick={() => setShow(!show)} className="py-5 flex cursor-pointer items-center justify-between border-b border-solid border-[#767676]">
                    <h3 
                    className="cursor-pointer font-dm font-normal text-base text-[#767676]"> 
                   {props.color && (
                    <span
                     className="mr-2 inline-block w-[11px] h-[11px] rounded-full" style={{background:props.color}}>
                        
                     </span>
                   )} {props.title}
                    </h3>
                    <HiMiniPlusSmall className="text-[#767676]"/>
                </div>
                :
                <div className="py-5 flex cursor-pointer items-center justify-between border-b border-solid border-[#767676]">
                <h3 
                className="cursor-pointer font-dm font-normal text-base text-[#767676]"> 
               {props.color && (
                <span
                 className="mr-2 inline-block w-[11px] h-[11px] rounded-full" style={{background:props.color}}>
                    
                 </span>
               )} {props.title}
                </h3>
               
            </div>
            }

{show && (
                <div>
                   {props.children}
                </div>
)}
        </div>
    )
}

export default LeftSlideBarItem
