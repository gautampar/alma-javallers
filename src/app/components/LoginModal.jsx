"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const countries = [
    { code: "IN", dial: "+91", flag: "🇮🇳", name: "India" },
    { code: "US", dial: "+1", flag: "🇺🇸", name: "United States" },
    { code: "UK", dial: "+44", flag: "🇬🇧", name: "United Kingdom" },
    { code: "AE", dial: "+971", flag: "🇦🇪", name: "UAE" },
];

function LoginModal({ open, onClose }) {
    const [openCountry, setOpenCountry] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    return (
        <>
            <div
                className={`fixed inset-0 bg-black/40 z-[999]
        transition-opacity duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={onClose}
            />
            <div
                className={`fixed top-1/2 left-1/2 z-[1000]
        w-[420px] max-w-[90vw]
        bg-white rounded-[12px]
        p-[24px]
        transition-all duration-300
        ${open ? "-translate-x-1/2 -translate-y-1/2 scale-100 opacity-100"
                        : "-translate-x-1/2 -translate-y-1/2 scale-95 opacity-0"
                    }`}
            >
                <button onClick={onClose} className='absolute cursor-pointer top-[20px] right-[20px]'>
                    <Image src="/assets/cart/modal-close.svg" height={30} width={30} alt='close' />
                </button>
                <h3 className="font-pan-r pb-[10px] text-center text-[24px] leading-[36px] text-[#3B3A38]">
                    Login
                </h3>
                <p className="font-nunito font-[500] text-[16px] text-center text-[#3C3C3C] pb-[22px]">Sign-Up For Our Exclusive Launch Now and Get a 0% Discount on Products</p>
                {/* Form */}
                <form className="grid gap-[9px]">
                    <div>
                        <label className="text-[16px] font-nunito leading-[20px] text-[#3C3C3C]">Name</label>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-[25px] mt-[6px] py-[12px]
              border border-[#D9D9D9] text-[#3C3C3C] bg-[#D9D9D933] rounded-[2px]
              focus:outline-none focus:border-[#A24112]"
                        />
                    </div>
                    <div>
                        <label className="text-[16px] font-nunito leading-[20px] text-[#3C3C3C]">Email</label>
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-[25px] mt-[6px] py-[12px]
              border border-[#D9D9D9] text-[#3C3C3C] bg-[#D9D9D933] rounded-[2px]
              focus:outline-none focus:border-[#A24112]"
                        />
                    </div>
                    <div>
                        <label className="text-[16px] font-nunito leading-[20px] text-[#3C3C3C]">Phone</label>
                        <div className="flex items-center mt-[6px] border border-[#D9D9D9] bg-[#D9D9D933]">
                            <div className="relative">
                                {/* Selected */}
                                <div
                                    onClick={() => setOpenCountry(!openCountry)}
                                    className="flex items-center gap-[6px] px-[12px] h-[48px]
    border-r border-[#D9D9D9] bg-white cursor-pointer"
                                >
                                    <span>{selectedCountry.flag}</span>
                                    <span className="text-[14px]">{selectedCountry.dial}</span>
                                    <span className="text-[12px] ml-[4px]">▼</span>
                                </div>

                                {/* Dropdown */}
                                {openCountry && (
                                    <div className="absolute top-[52px] left-0 w-[180px]
    bg-white border border-[#D9D9D9] shadow-lg z-[50] rounded-[4px]">
                                        {countries.map((c, i) => (
                                            <div
                                                key={i}
                                                onClick={() => {
                                                    setSelectedCountry(c);
                                                    setOpenCountry(false);
                                                }}
                                                className="flex items-center gap-[10px]
          px-[12px] py-[8px] cursor-pointer
          hover:bg-[#F2F4F5]"
                                            >
                                                <span>{c.flag}</span>
                                                <span className="text-[14px]">{c.name}</span>
                                                <span className="ml-auto text-[13px]">{c.dial}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <input
                                type="tel"
                                placeholder="Enter your number"
                                className="flex-1 px-[12px] py-[12px] bg-transparent
    focus:outline-none text-[#3C3C3C]"
                            />
                        </div>
                    </div>




                    <button
                        type="submit"
                        className="bg-[#A24112] font-pan-r max-w-[196px] w-full mx-auto mt-[16px] text-white py-[17px]
            rounded-[8px] text-[18px] leading-[100%]
            hover:bg-[#8A3610] transition-all"
                    >
                        Login
                    </button>
                </form>
            </div>
        </>
    )
}

export default LoginModal
