
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Product from './Product';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];

function Items({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems.map((item) => (
                    <div className="md:w-[49%] lg:w-[32%]">
                        
                        <Product src="/src/assets/product_one.png" badge={false} />
                    </div>
                ))}
        </>
    );
}

const Pagination = ({ itemsPerPage }) => {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className="md:flex md:flex-wrap md:justify-between">
                <Items currentItems={currentItems} />
            </div>
            <ReactPaginate
                breakLabel="..."
                breakClassName="pt-3"
                onPageChange={handlePageClick}
                pageRangeDisplayed={4}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
                previousClassName="hidden"
                nextClassName="hidden"
                pageClassName="inline-block border border-solid border-[#f0f0f0] py-2 px-3.5 font-dm font-normal text-sm"
                containerClassName="flex flex-wrap  gap-x-3.5 gap-y-3.5 md:gap-y-0 mt-12"
                activeClassName=" inline-block border border-solid border-[#f0f0f0] py-2 px-3.5 font-dm font-normal text-sm bg-black text-white"
            />
            <p className="font-dm font-normal font-sm md:absolute md:bottom-0 md:right-0 mt-2.5 md:mt-0 text-[#767676]">Products from {itemOffset} to {itemOffset + itemsPerPage} of {items.length}</p>
        </>
    );
}

export default Pagination


