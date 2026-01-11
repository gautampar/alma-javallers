"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'


const items = [
    { id: 1, path: "/my-order", title: "Oxidized Earrings", price: "₹165.00", sale: "₹145.00", img: "/assets/profile/img1.png" },
    { id: 2, path: "/my-order", title: "Oxidized Earrings", price: "₹165.00", sale: "₹145.00", img: "/assets/profile/img1.png" },
    { id: 3, path: "/my-order", title: "Oxidized Earrings", price: "₹165.00", sale: "₹145.00", img: "/assets/profile/img1.png" },
    { id: 4, path: "/my-order", title: "Oxidized Earrings", price: "₹165.00", sale: "₹145.00", img: "/assets/profile/img1.png" },
    { id: 5, path: "/my-order", title: "Oxidized Earrings", price: "₹165.00", sale: "₹145.00", img: "/assets/profile/img1.png" },
    { id: 6, path: "/my-order", title: "Oxidized Earrings", price: "₹165.00", sale: "₹145.00", img: "/assets/profile/img1.png" },
];


function Wishlist() {
    const btns = [
        "ALL", "EARRINGS", "RINGS", "BANGLES", "CHAINS", "NOSEPINS"
    ]
    const [selectBtn, setSelectBtn] = useState('ALL');

    return (
        <>
            <div className='pb-[80px]'>
                <div className="flex gap-[20px] pb-[40px]">
                    {btns?.map((e, i) => {
                        return (
                            <button onClick={() => setSelectBtn(e)} key={i} className={`font-goudy text-[20px] leading-[30px] tracking-[6%] text-[#2B3136] ${selectBtn === e ? "font-[500] underline" : "font-[500]"}`}>{e}</button>
                        )
                    })}
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-[28px] gap-[20px]'>
                    {items.map((e) => (
                        <Link key={e.id} href={e?.path}>
                            <div className='border border-[#DDDCDC] lg:p-[28px] p-[20px]'>
                                <div className="flex items-center justify-center h-[227px]">
                                    <Image height={227} width={205} src={e.img} alt={e.title} className='object-cover w-full h-[227px]' />
                                </div>
                                <div className='pt-[30px]'>
                                    <div className="flex justify-between">
                                        <div>
                                            <h6 className="font-goudy font-[700] text-[18px] leading-[100%] tracking-[0.6%] text-[#2B3136] pb-[4px]">{e.title}</h6>
                                            <p className="font-[500] font-goudy italic text-[10px] leading-[100%] tracking-[0.6%]">
                                                {e.price} &nbsp; <span className='font-[500] font-goudy italic text-[14px] leading-[100%] tracking-[0.6%]'>{e.sale}</span>
                                            </p>
                                        </div>
                                        <div className="flex gap-[20px]">
                                            <button>
                                                <Image src="/assets/profile/button.svg" height={32} width={41} alt='cart' />
                                            </button>
                                            <button>
                                                <Image src="/assets/profile/deletecon.svg" height={18} width={15} alt='delete' />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className='flex justify-center items-center py-[40px]'>
                    <button className='font-pan-r text-[20px] leading-[100%] text-[#2B3136] border border-[#2B3136] rounded-[8px] py-[18px] px-[40px] transition-all duration-300 hover:bg-[#2B3136] hover:text-white'>
                        View More
                    </button>

                </div>
            </div>
        </>
    )
}

export default Wishlist
