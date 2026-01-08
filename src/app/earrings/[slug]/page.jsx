"use client"
import Accordion from '@/app/components/Accordion';
import ProductImageGallery from '@/app/components/slider/ProductImageSlider'
import RingSlider from '@/app/components/slider/RingSlider';
import Image from 'next/image'
import React, { useState } from 'react'

function Page() {

    return (
        <div className='bg-[#FFF9F2]'>
            <section className="lg:mt-[156px] mt-[101px]">
                <div className='lg:px-[64px] pt-[74px] px-[20px]'>
                    <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-[106px] gap-[30px]">
                        <div>
                            <ProductImageGallery />
                            <div className="pt-[32px] md:pt-[64px] lg:pt-[96px]">
                                <h6 className="font-pan-b font-[500] text-[24px] md:text-[30px] lg:text-[34px] leading-[28px] md:leading-[36px] lg:leading-[40px] text-[#2B3136] text-center pb-[24px] md:pb-[32px] lg:pb-[40px]">
                                    Product Details
                                </h6>

                                <div className="border border-[#DDDCDC] rounded-[12px] p-[16px] md:p-[24px] lg:p-[30px] grid gap-[20px] md:gap-[28px] lg:gap-[35px] mb-[10px] md:mb-[14px] lg:mb-[19px]">

                                    {/* Highlights */}
                                    <div>
                                        <h6 className="font-pan-b font-[500] text-[18px] md:text-[24px] lg:text-[28px] leading-[24px] md:leading-[30px] lg:leading-[33px] pb-[12px] md:pb-[18px] lg:pb-[25px]">
                                            Highlights
                                        </h6>

                                        <ul className="list-disc pl-[18px] md:pl-[20px]">
                                            {[
                                                "Handcrafted oxidized silver jhumkas",
                                                "Lightweight & comfortable",
                                                "Complements ethnic & modern outfits",
                                                "Suitable for daily, office, and festive wear",
                                            ].map((e, i) => (
                                                <li
                                                    key={i}
                                                    className="font-pan-r text-[14px] md:text-[20px] lg:text-[20px] leading-[22px] md:leading-[30px] lg:leading-[30px] text-[#2B3136] text-justify"
                                                >
                                                    {e}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Specifications */}
                                    <div>
                                        <h6 className="font-pan-b text-[18px] md:text-[24px] lg:text-[28px] leading-[24px] md:leading-[30px] lg:leading-[33px] pb-[12px] md:pb-[18px] lg:pb-[25px]">
                                            Specifications
                                        </h6>

                                        <ul className="space-y-[10px] md:space-y-[12px]">
                                            {[
                                                { label: "Material", value: "Oxidized Silver" },
                                                { label: "Purity", value: "92.5% (925 Sterling Silver)" },
                                                { label: "BIS HUID", value: "457896" },
                                                { label: "Dimensions", value: "11 mm (Width), 16 inches (Length)" },
                                                { label: "Gross Weight", value: "~17 g" },
                                            ].map((e, i) => (
                                                <li
                                                    key={i}
                                                    className="flex flex-col sm:flex-row gap-[4px] sm:gap-[10px] md:gap-[20px] lg:gap-[40px]"
                                                >
                                                    <h6 className="sm:max-w-[120px] md:max-w-[160px] lg:max-w-[200px] font-[500] font-pan-b text-[14px] md:text-[20px] lg:text-[20px] leading-[22px] md:leading-[30px] lg:leading-[30px] text-[#2B3136]">
                                                        {e.label}
                                                    </h6>
                                                    <p className="font-pan-r text-[14px] md:text-[20px] lg:text-[20px] leading-[22px] md:leading-[30px] lg:leading-[30px] text-[#2B3136]">
                                                        {e.value}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Styling Icons */}
                                    <div>
                                        <h6 className="font-pan-b text-[18px] md:text-[24px] lg:text-[28px] leading-[24px] md:leading-[30px] lg:leading-[33px] pb-[12px] md:pb-[18px] lg:pb-[25px]">
                                            Styling & Usage
                                        </h6>
                                        <div className="flex flex-wrap gap-[8px] sm:gap-[10px] md:gap-[12px]">
                                            <Image src="/assets/item/main1.svg" width={48} height={48} alt="item" />
                                            <Image src="/assets/item/main2.svg" width={48} height={48} alt="item" />
                                            <Image src="/assets/item/main3.svg" width={48} height={48} alt="item" />
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div>
                            <div className="bg-[#FFF9F2] border border-[#EEE] rounded-[16px] p-[16px] md:p-[20px] lg:p-[24px] pb-[2px]">

                                {/* Title */}
                                <h2 className="font-bold text-[28px] md:text-[30px] lg:text-[32px] leading-[130%] tracking-[0.02em]">
                                    Silver Oxidized Jhumka Earrings
                                </h2>

                                {/* Rating */}
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-yellow-500 text-[13px] md:text-[14px]">★</span>
                                    <span className="text-[#2B3136] font-medium text-[12px] md:text-[14px] leading-[20px]">4.9 / 5</span>
                                    <span className="text-[#2B3136] font-medium text-[12px] md:text-[14px] leading-[20px]">· 142 reviews</span>
                                </div>

                                {/* Highlights */}
                                <div className="mt-4 space-y-1 mb-[18px]">
                                    {Array(3).fill('').map((_, i) => (
                                        <p key={i} className="text-[#2B3136] font-normal text-[15px] md:text-[16px] leading-[26px] tracking-[0.02em]">
                                            Handcrafted oxidized silver jhumkas
                                        </p>
                                    ))}
                                </div>

                                {/* Size */}
                                <div className="py-[16px] border-y border-[#D8D8D8]">
                                    <p className="font-[400] text-[16px] md:text-[18px] leading-[100%] pb-[16px]">
                                        Select Size <span className="text-[#A24112] font-semibold">(cm)</span>
                                    </p>

                                    <div className="flex gap-[8px] flex-wrap">
                                        {[3, 4, 5, 6, 7, 8].map((x, i) => (
                                            <div key={i} className="flex h-[44px] w-[44px] md:h-[48px] md:w-[48px] rounded-full justify-center items-center border-[1px] border-[#A24112]">
                                                <h6 className="font-[600] text-[16px] md:text-[18px] leading-[100%] text-[#000]">{x}</h6>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Price & Buttons */}
                                <div className="pt-[16px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-[12px]">

                                    {/* Price */}
                                    <div>
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <span className="text-[32px] md:text-[36px] font-[700] text-[#000]">₹9599</span>
                                            <span className="line-through text-gray-400 text-[12px] md:text-[14px]">₹9699</span>
                                            <span className="text-[#A24112] text-[12px] md:text-[14px]">₹100 Off</span>
                                        </div>
                                        <p className="font-[400] text-[#222] text-[10px] leading-[100%]">
                                            (Incl. taxes and charges)
                                        </p>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex gap-[10px] md:gap-[16px] flex-wrap justify-end">
                                        <button className="border border-[#A24112] text-[#121212] px-[20px] md:px-[28px] py-[10px] rounded-md text-[12px] md:text-[14px] flex items-center gap-[6px]">
                                            <Image src="/assets/item/cart.svg" height={18} width={18} alt='cart' /> Add to Cart
                                        </button>

                                        <button className="bg-[#888888] text-white px-[20px] md:px-[28px] py-[8px] rounded-[5px] text-[14px] md:text-[16px] leading-[24px]">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>

                                {/* Out of Stock */}
                                <div className='flex justify-end items-center gap-[8px] pt-[8px] pb-[32px]'>
                                    <Image height={22} width={22} src="/assets/item/close.svg" alt='close' />
                                    <p className="font-[400] text-[16px] md:text-[18px] leading-[100%] text-[#222]">Out of stock</p>
                                </div>

                                {/* Offers */}
                                <div className="border border-[#D9D9D9] rounded-[12px] py-[12px] px-[20px] md:px-[26px] mb-[14px]">
                                    <div className="flex items-center gap-[14px] pb-[10px]">
                                        <Image height={22} width={22} src="/assets/item/coupen.svg" alt='coupen' />
                                        <p className="font-pan-b text-[18px] md:text-[20px] leading-[28px] text-[#2B3136]">Available offers</p>
                                    </div>
                                    <ul className="list-disc pl-[20px] pb-[10px]">
                                        <li className="text-[16px] md:text-[18px] leading-[30px] text-[#2B3136]">
                                            10% Instant Discount on HSBC Credit Card & Debit Card on a min spend of ₹3,500. TCA
                                        </li>
                                    </ul>
                                    <button className="text-[#A24112] text-[14px] md:text-[16px] font-pan-b">
                                        Show more
                                    </button>
                                </div>

                                {/* Accordion */}
                                <Accordion title="Loyalty Program">
                                    <div>
                                        <div className='flex items-center gap-[12px]'>
                                            <Image src="/assets/item/hand.svg" height={28} width={28} alt="hand" />
                                            <p className='text-[18px] md:text-[20px] leading-[28px] text-[#2B3136]'>
                                                Earn Rewards Every Time You Shop
                                            </p>
                                        </div>
                                        <ul className="list-disc pl-[48px] space-y-[2px] text-[16px] md:text-[18px] leading-[30px] text-[#2B3136]">
                                            <li>₹1 spent = 1 point</li>
                                            <li>Free shipping with tiers</li>
                                            <li>Track points & redemptions in your dashboard</li>
                                        </ul>
                                    </div>
                                </Accordion>
                            </div>

                            {/* Reviews */}
                            <h6 className="py-[36px] font-pan-b text-[28px] md:text-[32px] leading-[32px] tracking-[-0.4px] text-[#2B3136] text-center">
                                Customer Review
                            </h6>

                            <div className="grid gap-[14px] max-w-[540px] w-full">
                                {[1, 2, 3].map((x, i) => (
                                    <div key={i} className='border border-[#DDDCDC] py-[16px] px-[20px] rounded-[12px]'>
                                        <div className="flex gap-[6px]">
                                            <Image alt='profile' height={32} width={32} src="/assets/item/profile.png" className='rounded-full h-[38px] w-[38px]' />
                                            <div>
                                                <h6 className="font-pan-b text-[14px] md:text-[16px] text-[#333]">Aarav Mehta</h6>
                                                <div className="flex gap-[6px] pt-[4px]">
                                                    <div className="flex gap-[2px]">
                                                        {[1, 2, 3, 4, 5].map((s, j) => <Image key={j} alt='star' height={14} width={14} src="/assets/item/star.svg" />)}
                                                    </div>
                                                    <p className="font-pan-b text-[10px] md:text-[12px] text-[#333]">25/09/2025</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="pt-[10px] text-[12px] md:text-[14px] leading-[150%] text-[#333]">
                                            This exquisite necklace blends classic elegance with contemporary design.
                                        </p>
                                    </div>
                                ))}

                                <p className="text-[20px] md:text-[24px] leading-[140%] text-[#2B3136] cursor-pointer text-center">
                                    View More
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="pt-[40px] sm:pt-[40px] lg:pt-[60px] 2xl:pt-[90px]">
                        <div className="pb-[30px] sm:pb-[40px] md:pb-[50px] lg:pb-[55px] text-center sm:text-left">
                            <h6 className="font-[500] font-pan text-[22px] sm:text-[26px] md:text-[30px] lg:text-[32px] leading-[130%] text-[#2B3136]">
                                Recommended For You
                            </h6>

                            {/* underline bar */}
                            <div className="h-[3px] sm:h-[4px] w-[60px] sm:w-[75px] md:w-[80px] lg:w-[88px] bg-[#2B3136] rounded-full mx-auto sm:mx-0 mt-[6px]"></div>
                        </div>

                        <div className="overflow-hidden pb-[40px] sm:pb-[50px] md:pb-[60px] lg:pb-[80px]">
                            <RingSlider />
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Page



