"use client";
import React, { useState } from 'react'
import SortByDropdown from '../components/filter/SortByDropdown';
import PriceDropdown from '../components/filter/PriceDropdown';
import CategoryDropdown from '../components/filter/CategoryDropdown';
import GiftForLovedOnesDropdown from '../components/filter/GiftForLovedOnesDropdown';
import ColorDropdown from '../components/filter/ColorDropdown';
import GenderDropdown from '../components/filter/GenderDropdown';
import Image from 'next/image';

const categories = [
    "NEW ARRIVALS",
    "BEST SELLERS",
    "GIFTING COLLECTIONS",
    "DAILY WEAR",
    "OFFICE WEAR",
    "OCCASSION WEAR",
    "SEASONAL WEAR",
    "FESTIVE WEAR",
];

const list = [
    { id: 1, imgs: "/assets/home/item1.png", name: "Royal Kada", price: "₹145.00", off: "20% Off" },
    { id: 2, imgs: "/assets/home/item2.png", name: "Royal Ring", price: "₹145.00", off: "20% Off" },
    { id: 3, imgs: "/assets/home/item3.png", name: "Oxidized Earrings", price: "₹145.00", off: "20% Off" },
    { id: 4, imgs: "/assets/home/item4.png", name: "Crafted Bangles", price: "₹145.00", off: "20% Off" },
    { id: 5, imgs: "/assets/home/item5.png", name: "Nose Pin/Ring", price: "₹145.00", off: "20% Off" },
    { id: 6, imgs: "/assets/home/item1.png", name: "Royal Kada", price: "₹145.00", off: "20% Off" },
    { id: 7, imgs: "/assets/home/item2.png", name: "Royal Ring", price: "₹145.00", off: "20% Off" },
    { id: 8, imgs: "/assets/home/item3.png", name: "Oxidized Earrings", price: "₹145.00", off: "20% Off" },
    { id: 9, imgs: "/assets/home/item4.png", name: "Crafted Bangles", price: "₹145.00", off: "20% Off" },
    { id: 10, imgs: "/assets/home/item5.png", name: "Nose Pin/Ring", price: "₹145.00", off: "20% Off" },
];

const categoryProducts = {
    "NEW ARRIVALS": [1, 2, 3],
    "BEST SELLERS": [4, 5, 6],
    "GIFTING COLLECTIONS": [7, 8],
    "DAILY WEAR": [1, 4, 7],
    "OFFICE WEAR": [2, 5, 8],
    "OCCASSION WEAR": [3, 6, 9],
    "SEASONAL WEAR": [1, 10],
    "FESTIVE WEAR": [2, 4, 6, 8],
};


function Page() {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    const productsToShow = categoryProducts[selectedCategory].map((id) =>
        list.find((item) => item.id === id)
    );


    return (
        <div className='bg-[#FFF9F2]'>
            <section className="">
                <div className='flex gap-[24px] lg:flex-row flex-col mt-[156px] lg:px-[64px]  pt-[43px] px-[20px]'>
                    <div className="max-w-[305px] p-[10px] w-full sticky top-[156px]">
                        <SortByDropdown />
                        <PriceDropdown />
                        <CategoryDropdown />
                        <GiftForLovedOnesDropdown />
                        <ColorDropdown />
                        <GenderDropdown />
                    </div>
                    <div className="max-w-[1433px] w-full">
                        <div className='py-[10px] px-[20px]'>
                            <h6 className="font-[500] font-pan text-[32px] leading-[140%] text-[#2B3136]">Earrings</h6>
                            <div className='h-[4px] max-w-[88px] bg-[#2B3136]'></div>
                            <div className="pt-[33px] flex gap-[19px] overflow-x-auto scrollbar-hide">
                                {categories.map((cat, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`whitespace-nowrap px-4 py-2 font-goudy rounded-[6px] text-sm font-semibold transition-all ${selectedCategory === cat
                                            ? "bg-[#A24112] text-white"
                                            : "bg-[#F3F3F3] text-[#2B3136] hover:bg-[#E6E6E6]"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-x-[16px] lg:gap-y-[52px] gap-y-[16px]">
                                {productsToShow.map((e, i) => (
                                    <div key={i} className="border border-[#DDDCDC] lg:px-[16px] pt-[11px] pb-[33px]">
                                        <div className="flex items-center justify-between pb-[28px]">
                                            <button className="bg-[#A24112] rounded-[5px] py-[9px] px-[13px] text-white text-[10px] font-bold">
                                                {e.off}
                                            </button>
                                            <div className="like-btn" />
                                        </div>
                                        <div className="h-[225px] w-full flex justify-center">
                                            <Image
                                                height={225}
                                                width={204}
                                                alt="ring"
                                                className="h-[204px] w-full object-cover"
                                                src={e.imgs}
                                            />
                                        </div>

                                        <h6 className="font-[700] font-goudy text-[18px] pb-[4px] mt-[10px]">{e.name}</h6>
                                        <p className="font-[500] font-goudy text-[14px] italic pb-[16px]">{e.price}</p>

                                        <div className="flex items-center gap-[28px]">
                                            <Image height={32} width={41} src="/assets/home/cart.svg" className="cursor-pointer" alt="Cart" />
                                            <button className="btn-buy cursor-pointer">Buy Now</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='pt-[140px] pb-[66px] flex justify-center'>
                                <button className="
  font-[400] font-pan text-[29px] leading-[100%] text-center text-[#A24112] 
  py-[19px] px-[40px] 
  border-2 border-[#A24112] rounded-lg 
  transition-all duration-300
  hover:bg-[#A24112] hover:text-white
">
                                    View More
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Page
