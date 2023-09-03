import React from 'react'
import { TfiAngleRight } from "react-icons/tfi"
import { Link } from 'react-router-dom';

const BreadCrumb = () => {

    let title = window.location.pathname
        .split('/')[1]
        .charAt(0)
        .toUpperCase() + window.location.pathname.split('/')[1].slice(1);

    return (
        <div className=" my-12">
            <h1 className="mb-3 font-dm text-5xl font-bold">{title}</h1>
            <p className="font-dm text-xs font-normal flex items-center gap-x-1 text-[#767676]">

                <Link to="/">Home</Link>
                <TfiAngleRight />
                {title}
                {/* {window.location.pathname
                    .split('/')[1]
                    .charAt(0)
                    .toUpperCase() + window.location.pathname.split('/')[1].slice(1)} */}


            </p>

        </div>
    )
}

export default BreadCrumb
