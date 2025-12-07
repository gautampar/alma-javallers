"use client";
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';


const items = [
    {
        title: "social",
        content: "Yaha aapka social links ka content ayega...",
    },
    {
        title: "Help center",
        content: "Help center, FAQs, Contact support...",
        content: "Company details, Help center, Team, Careers...",
    },
    {
        title: "The SHop",
        content: "The SHop",
    },
];


function Footer() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <div>
            <footer className="bg-[#000000D6] pt-[60px] pb-[40px]">
                <div className="text-center px-5 lg:px-16 border-b border-white pb-10">
                    <h6 className="font-pan font-[700] text-[18px] md:text-[20px] text-white uppercase">
                        We are based in INDIA and deliver all over INDIA.
                    </h6>
                    <p className="font-pan font-[700] text-[12px] uppercase text-white mt-2">
                        4 Raja Park, Govind Marg, Jaipur – 302004
                    </p>
                    <div className="mt-10">
                        {items.map((item, index) => (
                            <div key={index} className="border-b border-white">
                                <div
                                    className="flex justify-between items-center py-4 cursor-pointer"
                                    onClick={() => toggleItem(index)}
                                >
                                    <h6 className="font-pan text-white text-[14px] uppercase font-[700]">
                                        {item.title}
                                    </h6>

                                    <Image
                                        src="/assets/footer/right-arrow.svg"
                                        height={24}
                                        width={24}
                                        alt="arrow"
                                        className={`transition-transform duration-300 ${openIndex === index ? "rotate-90" : "rotate-0"
                                            }`}
                                    />
                                </div>
                                <div
                                    className={`overflow-hidden text-white transition-all duration-300 ${openIndex === index ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="py-3 text-[14px] leading-[22px]">{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10 lg:mt-14 text-left">
                        <h6 className="font-pan font-[700] text-white text-[18px] uppercase leading-[1]">
                            Monday to Sunday <br /> from 11 am to 6 pm
                        </h6>
                        <p className="font-pan font-[700] text-[12px] uppercase text-white mt-4">
                            4 Raja Park, Govind Marg, Jaipur – 302004
                        </p>
                        <h6 className="font-pan font-[700] text-[15px] text-white uppercase mt-8 mb-6">
                            Popular Search
                        </h6>
                        <div className="grid gap-10">
                            {[
                                "Gifts For Women",
                                "Gifts For Men",
                                "Gifts For Loved Ones",
                                "Mangalsutra",
                                "Earrings",
                                "Bangles",
                                "Bracelets",
                                "Nose Pins",
                            ].map((title, i) => (
                                <div key={i}>
                                    <h6 className="font-pan font-[700] text-[15px] text-white mb-1">
                                        {title}
                                    </h6>
                                    <p className="font-pan text-white text-[14px] leading-[20px]">
                                        Silver Ring | Earrings | Oxidized Earrings | Nose Pin | Bracelet
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 items-center px-5 lg:px-16 pt-6">
                    <h6 className="font-pan font-[700] text-[12px] uppercase text-white mb-4 lg:mb-0">
                        Website by ALMA
                    </h6>

                    <p className="font-goudy text-[18px] md:text-[20px] text-white leading-none">
                        © Alma Jewellers Official. All Rights Reserved
                    </p>
                </div>
            </footer>

        </div>
    )
}

export default Footer
