"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function PriceDropdown() {
    const [open, setOpen] = useState(false);
    const [selectedValues, setSelectedValues] = useState([]);
    const options = [
        { label: "Under ₹99", value: "under_99" },
        { label: "Under ₹149", value: "under_149" },
        { label: "Under ₹199", value: "under_199" },
        { label: "Under ₹299", value: "under_299" },
    ];


    const handleCheckbox = (value) => {
        if (selectedValues.includes(value)) {
            setSelectedValues(selectedValues.filter((v) => v !== value));
        } else {
            setSelectedValues([...selectedValues, value]);
        }
    };

    return (
        <div className="border-b border-[#DDDBDC] mt-[10px]">
            <div
                className="flex justify-between items-center cursor-pointer py-[16px]"
                onClick={() => setOpen(!open)}
            >
                <p className="font-[500] text-[14px]">Price</p>

                <img
                    src="/assets/shop/down-arrow.svg"
                    className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                    alt=""
                />
            </div>

            {open && (
                <div className="mt-3 space-y-2 pb-[27px]">
                    {options.map((item, i) => (
                        <label key={i} className="flex items-center gap-3 cursor-pointer text-[14px] text-[#262626]">

                            <input
                                type="checkbox"
                                checked={selectedValues.includes(item.value)}
                                onChange={() => handleCheckbox(item.value)}
                                className="sr-only peer"
                            />

                            <span
                                className="
                 w-[24px] h-[24px] border-[0.5px] border-[#2B3136] relative rounded-[4px] 
                 flex items-center justify-center
                 peer-checked:bg-[#A24112] 
                 peer-checked:border-[#A24112]
                 transition-all duration-200
               "
                            >
                                <Image width={11.5} height={8.5} src="/assets/shop/done.svg" alt="done" className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2  transition-opacity duration-200" />
                            </span>

                            {item.label}
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
}
