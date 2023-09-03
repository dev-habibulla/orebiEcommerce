import React, { useState } from 'react'
import { GoTriangleDown } from "react-icons/go"
import Flex from './Flex'
import LeftSlideBarItem from './LeftSlideBarItem'
import { category } from '../../data/Data'




const SideBarContent = ({ dropDown, dropTitle, data }) => {

    let [drop, setDrop] = useState(dropDown)
    let [show, setShow] = useState(dropDown)
    console.log(data);
    return (
        <div className="mb-14">
            {drop
                ?
                <div onClick={() => setShow(!show)} className="mb-9 flex cursor-pointer items-center justify-between">
                    <h3 className="cursor-pointer font-dm font-bold text-xl">
                        {dropTitle}
                    </h3>
                    <GoTriangleDown />
                </div>
                :

                <h3 className="mb-9 cursor-pointer font-dm font-bold text-xl">
                    {dropTitle}
                </h3>
            }

            {show && (
                <>
                    {data.map((iteam, index) =>
                        iteam.subcategory ? (
                            <>
                                <LeftSlideBarItem
                                    subDropDown={iteam.subcategory ? true : false}
                                    title={iteam.name}
                                >
                                    {iteam.subcategory &&
                                        iteam.subcategory.map(siteam => (
                                            <h1 className="py-5 cursor-pointer font-dm font-normal text-base text-[#767676] border-b border-solid border-[#767676">
                                                {siteam.name}
                                            </h1>
                                        ))}
                                </LeftSlideBarItem>
                            </>

                        ) : (

                            <LeftSlideBarItem
                                subDropDown={iteam.subcategory ? true : false}
                                title={iteam.name}
                                color={iteam.code}
                            >
                                {iteam.subcategory &&
                                    iteam.subcategory.map(siteam => (
                                        <h1 className="py-5 cursor-pointer font-dm font-normal text-base text-[#767676] border-b border-solid border-[#767676">
                                            {siteam.name}

                                        </h1>
                                    ))}

                            </LeftSlideBarItem>
                        ))

                    }

                </>
            )}

            {!drop && (
                <>
                    {data.map((iteam, index) =>
                        iteam.subcategory ? (
                            <>
                                <LeftSlideBarItem
                                    subDropDown={iteam.subcategory ? true : false}
                                    title={iteam.name}
                                    color={iteam.code}
                                >
                                    {iteam.subcategory &&
                                        iteam.subcategory.map(siteam => (
                                            <h1 className="py-5 cursor-pointer font-dm font-normal text-base text-[#767676] border-b border-solid border-[#767676">
                                                {siteam.name}45454
                                            </h1>
                                        ))}
                                </LeftSlideBarItem>
                            </>

                        ) : (

                            <LeftSlideBarItem
                                subDropDown={iteam.subcategory ? true : false}
                                title={iteam.name}
                                color={iteam.code}
                            >
                                {iteam.subcategory &&
                                    iteam.subcategory.map(siteam => (
                                        <h1 className="py-5 cursor-pointer font-dm font-normal text-base text-[#767676] border-b border-solid border-[#767676">
                                            {siteam.name}

                                        </h1>
                                    ))}

                            </LeftSlideBarItem>
                        ))

                    }

                </>
            )}

        </div>
    )
}

export default SideBarContent
