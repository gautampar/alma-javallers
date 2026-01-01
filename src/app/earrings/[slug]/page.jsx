import ProductImageGallery from '@/app/components/slider/ProductImageSlider'
import Image from 'next/image'
import React from 'react'

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
                                <div className="border border-[#DDDCDC] rounded-[12px] p-[30px] bg-[#FFF9F2] mb-[19px]">
                                    <div className="flex items-center justify-between pb-[20px]">
                                        <h6 className="font-pan-b text-[28px] leading-[33px] text-[#2A2A2A]">
                                            Care Instructions
                                        </h6>
                                        <svg
                                            className="w-5 h-5 text-[#2A2A2A]"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col gap-[14px] text-[18px] text-[#2A2A2A]">
                                        <p className='font-[400] text-[#2B3136] font-pan-r text-[24px] leading-[35px]'>Keep away from water, perfumes, and direct sunlight</p>
                                        <p className='font-[400] text-[#2B3136] font-pan-r text-[24px] leading-[35px]'>Store in a dry place</p>
                                        <p>
                                            <span className="font-semibold">Note:</span>{" "}
                                            This Earring is not eligible for Return or Exchange.
                                        </p>
                                    </div>

                                </div>
                                <div className="border border-[#DDDCDC] rounded-[12px] p-[30px] bg-[#FFF9F2] mb-[19px]">
                                    <div className="flex items-center justify-between pb-[20px]">
                                        <h6 className="font-pan-b text-[28px] leading-[33px] text-[#2A2A2A]">
                                            Certificate of Authenticity
                                        </h6>
                                        <svg
                                            className="w-5 h-5 text-[#2A2A2A]"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col gap-[14px] text-[18px] text-[#2A2A2A]">
                                        <p className='font-[400] text-[#2B3136] font-pan-r text-[24px] leading-[35px]'>Verified by Alma Jewellery</p>
                                        <p className='font-[400] text-[#2B3136] font-pan-r text-[24px] leading-[35px]'>Contact:hello@almajewellery.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bg-[#FFF9F2] border border-[#EEE] rounded-[16px] p-[24px]">
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
                                <hr className='text-[#D8D8D8]' />
                                <div className="mt-6">
                                    <p className="font-semibold text-[20px] leading-[100%]  mb-3">
                                        Select Size <span className="text-[#A24112] font-semibold text-[20px] leading-[100%]">(cm)</span>
                                    </p>

                                    <div className="flex gap-2 flex-wrap">


                                    </div>
                                    <hr className='text-[#D8D8D8]' />
                                </div>
                                <div className="mt-6 flex items-center justify-between">
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[22px] font-semibold">₹9599</span>
                                            <span className="line-through text-gray-400 text-[14px]">
                                                ₹9699
                                            </span>
                                            <span className="text-[#C75A1C] text-[14px]">
                                                ₹100 Off
                                            </span>
                                        </div>
                                        <p className="font-[400] text-[#2B3136] font-pan-r text-[19px] leading-[35px]">
                                            (Incl. taxes and charges)
                                        </p>
                                    </div>

                                    <div className="flex gap-3">
                                        <button className="border border-[#C75A1C] text-[#C75A1C] px-4 py-2 rounded-md text-[14px] flex items-center gap-2">
                                            🛒 Add to Cart
                                        </button>
                                        <button className="bg-[#C75A1C] text-white px-5 py-2 rounded-md text-[14px]">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>

                                {/* Offers */}
                                <div className="mt-6 border border-[#EEE] rounded-[12px] p-4">
                                    <p className="font-[400] text-[#2B3136] font-pan-r text-[19px] leading-[35px] mb-2">Available offers</p>
                                    <p className="font-semibold text-[20px] leading-[100%] tracking-[0%] text-justify align-middle text-[#444]">
                                        • 10% Instant Discount on HSBC Credit Card & Debit Card on a min spend
                                        of ₹3,500. TCA
                                    </p>
                                    <button className="text-[#C75A1C] text-[13px] mt-2">
                                        Show more
                                    </button>
                                </div>

                                {/* Loyalty Program Dropdown */}
                                <div className="mt-4 border border-[#EEE] rounded-[12px] overflow-hidden">
                                    <button

                                        className="w-full flex justify-between items-center p-4"
                                    >
                                        <p className="font-medium text-[14px]">Loyalty Program</p>
                                        <span

                                        >
                                            ⌄
                                        </span>
                                    </button>


                                    <div className="px-4 pb-4 text-[13px] text-[#444] space-y-2">
                                        <p>Earn Rewards Every Time You Shop</p>
                                        <ul className="list-disc pl-4 space-y-1">
                                            <li>₹1 spent = 1 point</li>
                                            <li>Free shipping with tiers</li>
                                            <li>Track points & redemptions in your dashboard</li>
                                        </ul>
                                    </div>

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
