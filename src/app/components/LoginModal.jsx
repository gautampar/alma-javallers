"use client"
import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'

const countries = [
    { code: "IN", dial: "+91", flag: "🇮🇳", name: "India" },
    { code: "US", dial: "+1", flag: "🇺🇸", name: "United States" },
    { code: "UK", dial: "+44", flag: "🇬🇧", name: "United Kingdom" },
    { code: "AE", dial: "+971", flag: "🇦🇪", name: "UAE" },
];

function LoginModal({ open, onClose }) {
    const [openCountry, setOpenCountry] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenCountry(false);
            }
        };

        if (openCountry) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openCountry]);

    // Close dropdown when modal closes
    useEffect(() => {
        if (!open) {
            setOpenCountry(false);
        }
    }, [open]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    if (!open) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/40 z-[999] transition-opacity duration-300"
                onClick={onClose}
            />
            
            {/* Modal */}
            <div
                className="fixed top-1/2 left-1/2 z-[1000] -translate-x-1/2 -translate-y-1/2
                    w-[420px] max-w-[90vw] bg-white rounded-[12px] p-[24px]
                    transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button 
                    onClick={onClose} 
                    type="button"
                    className='absolute cursor-pointer top-[20px] right-[20px] hover:opacity-70 transition-opacity'
                >
                    <Image src="/assets/cart/modal-close.svg" height={30} width={30} alt='close' />
                </button>

                {/* Title */}
                <h3 className="font-pan-r pb-[10px] text-center text-[24px] leading-[36px] text-[#3B3A38]">
                    Login
                </h3>
                <p className="font-nunito font-[500] text-[16px] text-center text-[#3C3C3C] pb-[22px]">
                    Sign-Up For Our Exclusive Launch Now and Get a 0% Discount on Products
                </p>

                {/* Form Fields */}
                <div className="grid gap-[9px]">
                    {/* Name Field */}
                    <div>
                        <label className="text-[16px] font-nunito leading-[20px] text-[#3C3C3C]">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-[25px] mt-[6px] py-[12px]
                                border border-[#D9D9D9] text-[#3C3C3C] bg-[#D9D9D933] rounded-[2px]
                                focus:outline-none focus:border-[#A24112]"
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="text-[16px] font-nunito leading-[20px] text-[#3C3C3C]">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-[25px] mt-[6px] py-[12px]
                                border border-[#D9D9D9] text-[#3C3C3C] bg-[#D9D9D933] rounded-[2px]
                                focus:outline-none focus:border-[#A24112]"
                        />
                    </div>

                    {/* Phone Field with Country Dropdown */}
                    <div>
                        <label className="text-[16px] font-nunito leading-[20px] text-[#3C3C3C]">
                            Phone
                        </label>
                        <div className="flex items-center mt-[6px] border border-[#D9D9D9] bg-[#D9D9D933] rounded-[2px]">
                            <div className="relative" ref={dropdownRef}>
                                {/* Selected Country */}
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        setOpenCountry(!openCountry);
                                    }}
                                    className="flex items-center gap-[6px] px-[12px] h-[48px]
                                        border-r border-[#D9D9D9] bg-white cursor-pointer
                                        hover:bg-gray-50 transition-colors"
                                >
                                    <span className="text-[18px]">{selectedCountry.flag}</span>
                                    <span className="text-[14px] font-medium">{selectedCountry.dial}</span>
                                    <span className={`text-[10px] ml-[4px] transition-transform ${openCountry ? 'rotate-180' : ''}`}>
                                        ▼
                                    </span>
                                </button>

                                {/* Dropdown List */}
                                {openCountry && (
                                    <div className="absolute top-[52px] left-0 w-[220px]
                                        bg-white border border-[#D9D9D9] shadow-lg z-[1001] rounded-[4px]
                                        max-h-[200px] overflow-y-auto">
                                        {countries.map((c, i) => (
                                            <button
                                                type="button"
                                                key={i}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    setSelectedCountry(c);
                                                    setOpenCountry(false);
                                                }}
                                                className="flex items-center gap-[10px] w-full
                                                    px-[12px] py-[10px] cursor-pointer text-left
                                                    hover:bg-[#F2F4F5] transition-colors"
                                            >
                                                <span className="text-[18px]">{c.flag}</span>
                                                <span className="text-[14px] flex-1">{c.name}</span>
                                                <span className="text-[13px] text-gray-500">{c.dial}</span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <input
                                type="tel"
                                placeholder="Enter your number"
                                maxLength={10}
                                className="flex-1 px-[12px] py-[12px] bg-transparent
                                    focus:outline-none text-[#3C3C3C]"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        onClick={handleSubmit}
                        type="button"
                        className="bg-[#A24112] font-pan-r max-w-[196px] w-full mx-auto mt-[16px] text-white py-[17px]
                            rounded-[8px] text-[18px] leading-[100%]
                            hover:bg-[#8A3610] transition-all cursor-pointer"
                    >
                        Login
                    </button>
                </div>
            </div>
        </>
    )
}

export default LoginModal