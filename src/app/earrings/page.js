"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import SortByDropdown from '../components/filter/SortByDropdown';
import PriceDropdown from '../components/filter/PriceDropdown';
import CategoryDropdown from '../components/filter/CategoryDropdown';
import GiftForLovedOnesDropdown from '../components/filter/GiftForLovedOnesDropdown';
import ColorDropdown from '../components/filter/ColorDropdown';
import GenderDropdown from '../components/filter/GenderDropdown';

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
        <div className='bg-[#FFF9F2] min-h-screen'>
            <section>
                <div className="w-full flex justify-center">
                    <div className="lg:max-w-[1440px] xl:max-w-full w-full flex gap-4 lg:gap-6 xl:gap-8 lg:flex-row flex-col mt-[100px] sm:mt-[120px] lg:mt-[156px] px-[16px] sm:px-[24px] md:px-[40px] lg:px-[48px] xl:px-[64px] pt-[30px] sm:pt-[42px]">
                        <div className="w-full lg:max-w-[240px] xl:max-w-[305px]">
                            <div className="lg:sticky lg:top-[140px] p-[10px]">
                                <SortByDropdown />
                                <PriceDropdown />
                                <CategoryDropdown />
                                <GiftForLovedOnesDropdown />
                                <ColorDropdown />
                                <GenderDropdown />
                            </div>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="flex-1 min-w-0">
                            <div className="py-[10px] px-[10px] sm:px-[16px] md:px-[20px]">

                                <h6 className="font-[500] font-pan text-[24px] sm:text-[28px] md:text-[32px] leading-[140%] text-[#2B3136]">
                                    Earrings
                                </h6>

                                <div className="h-[3px] sm:h-[4px] max-w-[70px] sm:max-w-[88px] bg-[#2B3136]"></div>

                                <div className="pt-[24px] sm:pt-[33px] w-full">
                                    <div className="flex flex-nowrap gap-[8px] sm:gap-[12px] overflow-x-auto scroll-smooth scrollbar-hide pb-2">
                                        {categories.map((cat, index) => (
                                            <button
                                                key={index}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setSelectedCategory(cat);
                                                }}
                                                className={`whitespace-nowrap cursor-pointer min-w-max px-3 sm:px-4 py-[6px] sm:py-2 font-goudy rounded-[6px] text-[11px] sm:text-[13px] md:text-sm font-semibold transition-all ${selectedCategory === cat
                                                    ? "bg-[#A24112] text-white"
                                                    : "bg-[#F3F3F3] text-[#2B3136] hover:bg-[#E6E6E6]"
                                                    }`}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Product Grid - Fully Responsive */}
                                <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-x-[12px] sm:gap-x-[16px] gap-y-[20px] sm:gap-y-[24px] lg:gap-y-[32px] xl:gap-y-[48px]">
                                    {productsToShow.map((e, i) => (
                                        <div key={i} className="border border-[#DDDCDC] px-[6px] sm:px-[8px] md:px-[12px] lg:px-[16px] pt-[8px] sm:pt-[11px] pb-[20px] sm:pb-[24px] lg:pb-[33px] min-h-[300px] sm:min-h-[340px] lg:min-h-[360px] flex flex-col bg-white hover:shadow-lg transition-shadow">

                                            <div className="flex items-center justify-between pb-[12px] sm:pb-[16px] lg:pb-[20px]">
                                                <button className="bg-[#A24112] rounded-[4px] sm:rounded-[5px] py-[4px] sm:py-[6px] px-[6px] sm:px-[8px] lg:px-[10px] text-white text-[8px] sm:text-[9px] lg:text-[10px] font-bold">
                                                    {e.off}
                                                </button>
                                                <div className="like-btn w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]" />
                                            </div>

                                            <div className="h-[240px] sm:h-[180px] md:h-[200px] lg:h-[225px] w-full flex justify-center items-center">
                                                <Image
                                                    height={225}
                                                    width={204}
                                                    alt="ring"
                                                    className="h-full w-auto object-contain"
                                                    src={e.imgs}
                                                />
                                            </div>

                                            <h6 className="font-[700] font-goudy text-[13px] sm:text-[15px] md:text-[16px] lg:text-[18px] pb-[2px] sm:pb-[4px] mt-[8px] sm:mt-[10px] line-clamp-1">
                                                {e.name}
                                            </h6>
                                            <p className="font-[500] font-goudy text-[12px] sm:text-[13px] md:text-[14px] italic pb-[8px] sm:pb-[12px]">
                                                {e.price}
                                            </p>

                                            <div className="flex items-center gap-[12px] sm:gap-[16px] lg:gap-[20px] mt-auto">
                                                <Image
                                                    height={28}
                                                    width={36}
                                                    src="/assets/home/cart.svg"
                                                    className="cursor-pointer w-[28px] sm:w-[32px] lg:w-[41px] h-auto"
                                                    alt="Cart"
                                                />
                                                <button className="btn-buy cursor-pointer text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] px-2 sm:px-3 py-1 sm:py-[6px] whitespace-nowrap">
                                                    Buy Now
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* View More Button */}
                                <div className="pt-[50px] lg:pt-[60px] pb-[30px] sm:pb-[40px] lg:pb-[50px] flex justify-center">
                                    <button className="font-pan text-[18px] lg:text-[22px] text-[#A24112] py-[8px] lg:py-[10px] px-[18px] lg:px-[24px] border-2 border-[#A24112] rounded-lg transition-all hover:bg-[#A24112] hover:text-white">
                                        View More
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Page