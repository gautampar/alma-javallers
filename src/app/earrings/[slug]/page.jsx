"use client"
import Accordion from '@/app/components/Accordion';
import ProductImageGallery from '@/app/components/slider/ProductImageSlider'
import RingSlider from '@/app/components/slider/RingSlider';
import Image from 'next/image'
import React, { useState } from 'react'

function Page() {

    return (
        <div className='bg-[#FFF9F2]'>
            <section className="mt-[156px]">
                <div className='lg:px-[64px] pt-[74px] px-[20px]'>
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[106px] gap-[30px]">
                        <div>
                            <ProductImageGallery />
                            <div className='pt-[118px]'>
                                <h6 className="font-pan-b font-[500] text-[38px] leading-[40px] tracking-[-0.4px] text-[#2B3136] text-center pb-[40px]">Product Details</h6>
                                <div className='border border-[#DDDCDC] rounded-[12px] p-[30px] grid gap-[35px] mb-[19px]'>
                                    <div>
                                        <h6 className="font-pan-b font-[500] text-[28px] leading-[33px] pb-[25px]">Highlights</h6>
                                        <ul className='list-disc pl-[26px]'>
                                            {["Handcrafted oxidized silver jhumkas", "Lightweight & comfortable", "Complements ethnic & modern outfits", "Suitable for daily, office, and festive wear"].map((e, i) => {
                                                return (
                                                    <li key={i} className='font-pan-r font-[400] text-[26px] leading-[35px] text-justify text-[#2B3136]'>
                                                        {e}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                    <div>
                                        <h6 className="font-pan-b text-[28px] leading-[33px] pb-[25px]">Specifications</h6>
                                        <ul>
                                            {[
                                                { label: "Material", value: "Oxidized Silver", },
                                                { label: "Purity", value: "92.5% (925 Sterling Silver)", },
                                                { label: "BIS HUID", value: "457896", },
                                                { label: "Dimensions", value: "11 mm (Width), 16 inches (Length)", },
                                                { label: "Gross Weight", value: "~17 g", },
                                            ].map((e, i) => {
                                                return (
                                                    <li key={i} className='flex w-full gap-[40px]'>
                                                        <h6 className="max-w-[200px] text-[#2B3136] w-full font-[500] font-pan-b text-[24px] leading-[35px]">{e?.label}</h6>
                                                        <p className="font-[400] text-[#2B3136] font-pan-r text-[24px] leading-[35px]">{e?.value}</p>
                                                    </li>
                                                )
                                            })
                                            }
                                        </ul>

                                    </div>
                                    <div>
                                        <h6 className='font-pan-b text-[28px] leading-[33px] pb-[25px]'>Styling & Usage</h6>
                                        <div className="flex gap-[12px]">
                                            <Image src="/assets/item/main1.svg" width={48} height={48} alt="search" />
                                            <Image src="/assets/item/main2.svg" width={48} height={48} alt="search" />
                                            <Image src="/assets/item/main3.svg" width={48} height={48} alt="search" />
                                        </div>
                                    </div>
                                </div>
                                <Accordion title="Care Instructions">
                                    <div className="flex flex-col gap-[14px] text-[18px] text-[#2A2A2A]">
                                        <p className="font-pan-r text-[24px] leading-[35px] text-[#2B3136]">
                                            Keep away from water, perfumes, and direct sunlight
                                        </p>
                                        <p className="font-pan-r text-[24px] leading-[35px] text-[#2B3136]">
                                            Store in a dry place
                                        </p>
                                        <p>
                                            <span className="font-semibold">Note:</span> This Earring is not eligible for
                                            Return or Exchange.
                                        </p>
                                    </div>
                                </Accordion>

                                <Accordion title="Certificate of Authenticity">
                                    <div className="flex flex-col gap-[14px] text-[18px] text-[#2A2A2A]">
                                        <p className="font-pan-r text-[24px] leading-[35px] text-[#2B3136]">
                                            Verified by Alma Jewellery
                                        </p>
                                        <p className="font-pan-r text-[24px] leading-[35px] text-[#2B3136]">
                                            Contact: hello@almajewellery.com
                                        </p>
                                    </div>
                                </Accordion>
                            </div>
                        </div>
                        <div>
                            <div className="bg-[#FFF9F2] border border-[#EEE] rounded-[16px] p-[21px] pb-[2px]">
                                <h2 className="font-bold text-[34px] leading-[140%] tracking-[0.02em]">
                                    Silver Oxidized Jhumka Earrings
                                </h2>
                                <div className="flex items-center gap-2 mt-2 text-[13px]">
                                    <span className="text-yellow-500">★</span>
                                    <span className="text-[#2B3136] font-medium text-[16px] leading-[24px] ">4.9 / 5</span>
                                    <span className="text-[#2B3136] font-medium text-[16px] leading-[24px]">· 142 reviews</span>
                                </div>
                                <div className="mt-4 text-[14px] text-[#444] space-y-1 mb-[23px]">
                                    <p className='text-[#2B3136] font-normal text-[19px] leading-[35px] tracking-[0.02em]'>Handcrafted oxidized silver jhumkas</p>
                                    <p className='text-[#2B3136] font-normal text-[19px] leading-[35px] tracking-[0.02em]'>Handcrafted oxidized silver jhumkas</p>
                                    <p className='text-[#2B3136] font-normal text-[19px] leading-[35px] tracking-[0.02em]'>Handcrafted oxidized silver jhumkas</p>
                                </div>
                                <div className="py-[20px] border-y border-[#D8D8D8]">
                                    <p className="font-[400] text-[20px] leading-[100%]  pb-[20px]">
                                        Select Size <span className="text-[#A24112] font-semibold text-[20px] leading-[100%]">(cm)</span>
                                    </p>
                                    <div className="flex gap-[10px]">
                                        <div className='flex h-[50px] w-[50px] rounded-full justify-center items-center border-[0.5px] border-[#A24112]'>
                                            <h6 className="font-[600] text-[20px] leading-[100%] text-[#000000]">3</h6>
                                        </div>
                                        <div className='flex h-[50px] w-[50px] rounded-full justify-center items-center border-[0.5px] border-[#A24112]'>
                                            <h6 className="font-[600] text-[20px] leading-[100%] text-[#000000]">4</h6>
                                        </div>
                                        <div className='flex h-[50px] w-[50px] rounded-full justify-center items-center border-[0.5px] border-[#A24112]'>
                                            <h6 className="font-[600] text-[20px] leading-[100%] text-[#000000]">5</h6>
                                        </div>
                                        <div className='flex h-[50px] w-[50px] rounded-full justify-center items-center border-[0.5px] border-[#A24112]'>
                                            <h6 className="font-[600] text-[20px] leading-[100%] text-[#000000]">6</h6>
                                        </div>
                                        <div className='flex h-[50px] w-[50px] rounded-full justify-center items-center border-[0.5px] border-[#A24112]'>
                                            <h6 className="font-[600] text-[20px] leading-[100%] text-[#000000]">7</h6>
                                        </div>
                                        <div className='flex h-[50px] w-[50px] rounded-full justify-center items-center border-[0.5px] border-[#A24112]'>
                                            <h6 className="font-[600] text-[20px] leading-[100%] text-[#000000]">8</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-[20px] flex items-center justify-between">
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[45px] font-[700] text-[#000000]">₹9599</span>
                                            <span className="line-through text-gray-400 text-[14px]">
                                                ₹9699
                                            </span>
                                            <span className="text-[#A24112] text-[14px]">
                                                ₹100 Off
                                            </span>
                                        </div>
                                        <p className="font-[400] text-[#222222] font-pan-r text-[10px] leading-[100%]">
                                            (Incl. taxes and charges)
                                        </p>
                                    </div>

                                    <div className="flex gap-[20px]">
                                        <button className="border border-[#A24112] text-[#121212] px-[32px] py-[14px] rounded-md text-[14px] flex items-center gap-[8px] ">
                                            <Image src="/assets/item/cart.svg" height={21} width={21} alt='cart' /> Add to Cart
                                        </button>
                                        <button className="bg-[#888888] text-white px-[32px] py-[10px] rounded-[5px] text-[16px] leading-[24px]">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                                <div className='justify-end flex items-center gap-[10px] pt-[10px] pb-[44px]'>
                                    <Image height={25} width={25} src="/assets/item/close.svg" alt='close' />
                                    <p className="font-[400] text-[20px] leading-[100%] text-[#222222]">Out of stock</p>
                                </div>

                                <div className="border border-[#D9D9D9] rounded-[12px] py-[14px] px-[30px] mb-[17px]">
                                    <div className="flex items-center gap-[22px] pb-[15px]">
                                        <Image height={25} width={25} src="/assets/item/coupen.svg" alt='coupen' />
                                        <p className="font-[400] text-[#2B3136] font-pan-b text-[24px] leading-[34px]">Available offers</p>
                                    </div>
                                    <ul className='list-disc pl-[24px] pb-[15px]'>
                                        <li className="font-pan-r text-[22px] leading-[40px] tracking-[0%] text-justify text-[#2B3136]">
                                            10% Instant Discount on HSBC Credit Card & Debit Card on a min spend
                                            of ₹3,500. TCA
                                        </li>
                                    </ul>
                                    <button className="text-[#A24112] text-[18px] leading-[21px] font-pan-b">
                                        Show more
                                    </button>
                                </div>
                                <Accordion title="Loyalty Program">
                                    <div>
                                        <div className='flex items-center gap-[16px]'>
                                            <Image src="/assets/item/hand.svg" height={34} width={34} alt="hand" />
                                            <p className='font-pan-r text-[22px] leading-[40px] text-[#2B3136]'>Earn Rewards Every Time You Shop</p>
                                        </div>
                                        <ul className="list-disc pl-[70px] space-y-1 font-pan-r text-[22px] leading-[40px] text-[#2B3136]">
                                            <li>₹1 spent = 1 point</li>
                                            <li>Free shipping with tiers</li>
                                            <li>Track points & redemptions in your dashboard</li>
                                        </ul>
                                    </div>
                                </Accordion>
                            </div>
                            <h6 className="py-[50px] font-pan-b text-[38px] leading-[32px] tracking-[-0.4px] text-[#2B3136] text-center">Customer Review</h6>
                            <div className="grid gap-[18px]">
                                <div className='border border-[#DDDCDC] py-[20px] px-[30px] rounded-[12px]'>
                                    <div className="flex gap-[8px]">
                                        <Image alt='profile' height={38} width={38} src="/assets/item/profile.png" className='rounded-full' />
                                        <div>
                                            <h6 className="font-pan-b text-[16px] leading-[100%] text-[#333333] tracking-[-1%]">Aarav Mehta</h6>
                                            <div className="flex gap-[10px] pt-[6px]">
                                                <div className="flex gap-[4px]">
                                                    <Image alt='star' height={16} width={16} src="/assets/item/star.svg" />
                                                    <Image alt='star' height={16} width={16} src="/assets/item/star.svg" />
                                                    <Image alt='star' height={16} width={16} src="/assets/item/star.svg" />
                                                    <Image alt='star' height={16} width={16} src="/assets/item/star.svg" />
                                                    <Image alt='star' height={16} width={16} src="/assets/item/star.svg" />
                                                </div>
                                                <p className="font-pan-b text-[14px] leading-[1] text-[#333333]">25/09/2025</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="pt-[12px] max-w-[309px] w-full font-pan-r text-[13px] leading-[150%] text-[#333333]">This exquisite necklace blends classic elegance with contemporary design, making it perfect for an evening out or a memorable event.</p>
                                </div>
                                <div className='border border-[#DDDCDC] py-[20px] px-[30px] rounded-[12px]'>
                                    <div className="flex gap-[8px]">
                                        <Image alt='profile' height={38} width={38} src="/assets/item/profile.png" className='rounded-full' />
                                        <div>
                                            <h6 className="font-pan-b text-[16px] leading-[100%] text-[#333333] tracking-[-1%]">Aarav Mehta</h6>
                                            <div className="flex gap-[10px] pt-[6px]">
                                                <div className="flex gap-[4px]">
                                                    <Image alt='star' height={16} width={16} src="/assets/item/star.svg" />
                                                    <Image alt='star' height={16} width={16} src="/assets/item/star.svg" />
                                                    <Image alt='star' height={16} width={16} src="/assets/item/star.svg" />
                                                    <Image alt='star' height={16} width={16} src="/assets/item/star.svg" />
                                                    <Image alt='star' height={16} width={16} src="/assets/item/star.svg" />
                                                </div>
                                                <p className="font-pan-b text-[14px] leading-[1] text-[#333333]">25/09/2025</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="pt-[12px] max-w-[309px] w-full font-pan-r text-[13px] leading-[150%] text-[#333333]">This exquisite necklace blends classic elegance with contemporary design, making it perfect for an evening out or a memorable event.</p>
                                </div>
                                <div className='border border-[#DDDCDC] py-[20px] px-[30px] rounded-[12px]'>
                                    <div className="flex gap-[8px]">
                                        <Image alt='profile' height={38} width={38} src="/assets/item/profile.png" className='rounded-full' />
                                        <div>
                                            <h6 className="font-pan-b text-[16px] leading-[100%] text-[#333333] tracking-[-1%]">Aarav Mehta</h6>
                                            <div className="flex gap-[10px] pt-[6px]">
                                                <div className="flex gap-[4px]">
                                                    <Image alt='star' height={16} width={16} src="/assets/item/star.svg" />
                                                    <Image alt='star' height={16} width={16} src="/assets/item/star.svg" />
                                                    <Image alt='star' height={16} width={16} src="/assets/item/star.svg" />
                                                    <Image alt='star' height={16} width={16} src="/assets/item/star.svg" />
                                                    <Image alt='star' height={16} width={16} src="/assets/item/star.svg" />
                                                </div>
                                                <p className="font-pan-b text-[14px] leading-[1] text-[#333333]">25/09/2025</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="pt-[12px] max-w-[309px] w-full font-pan-r text-[13px] leading-[150%] text-[#333333]">This exquisite necklace blends classic elegance with contemporary design, making it perfect for an evening out or a memorable event.</p>
                                </div>
                                <p className="font-pan-r text-[28px] leading-[140%] text-[#2B3136]">View More</p>
                            </div>
                        </div>
                    </div>
                    <div className='pt-[90px]'>
                        <div className='pb-[55px]'>
                            <h6 className="font-[500] font-pan text-[32px] leading-[140%] text-[#2B3136]">
                                Recommended For you
                            </h6>
                            <div className="h-[4px] max-w-[88px] bg-[#2B3136] rounded-full"></div>
                        </div>
                        <div className="overflow-hidden pb-[80px] ">
                            <RingSlider />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Page



