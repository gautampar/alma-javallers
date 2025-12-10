"use client";
import Image from 'next/image';
import React, { useState } from 'react'

function ColorDropdown() {
    const [open, setOpen] = useState(false);
    const colors = [
        { name: "Gold", code: "#D4AF37" },
        { name: "Silver", code: "#C0C0C0" },
        { name: "Rose Gold", code: "#B76E79" },
        { name: "Black", code: "#000000" },
    ];

    return (
        <div className="border-b border-[#DDDBDC] mt-[10px]">
            <div
                className="flex justify-between items-center cursor-pointer py-[16px]"
                onClick={() => setOpen(!open)}
            >
                <p className="font-[500] text-[14px]">Color</p>

                <img
                    src="/assets/shop/down-arrow.svg"
                    className={`transition-transform duration-300 ${open ? "rotate-180" : ""
                        }`}
                    alt="arrow"
                />
            </div>

            {open && (
                <div className="mt-3 grid grid-cols-2 gap-[20px] space-y-2 pb-[27px]">
                    {colors.map((clr, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center gap-[8px] cursor-pointer"
                        >
                            <div
                                className="h-[26px] w-[26px] rounded-full"
                                style={{ backgroundColor: clr.code }}
                            ></div>

                            <h6 className="font-[400] font-pan text-[12px] leading-[16px] tracking-[0.2px] text-[#2B3136]">
                                {clr.name}
                            </h6>
                        </div>
                    ))}

                </div>
            )}
        </div>
    )
}

export default ColorDropdown
