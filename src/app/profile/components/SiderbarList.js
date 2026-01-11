"use client"
import Image from 'next/image';
import React, { useState } from 'react'


function SiderbarList({ activeTab, setActiveTab, menuItems }) {

    return (
        <div>
            <div className="flex-shrink-0">
                <div className="">
                    {/* User Info */}
                    <div className="text-center">
                        <div className="relative inline-block">
                            <Image src="/assets/profile/profile1.jpg" height={140} width={140} alt="profile" className='rounded-full' />
                        </div>
                        <div className='py-[30px]'>
                            <h2 className="text-[28px] font-pan-b leading-[33.5px] text-[#3B3A38] pb-[6px]">Hello Rohan</h2>
                            <p className="text-[14px] font-pan-r leading-[22px] text-[#3B3A38]">Welcome to your Account</p>
                        </div>
                    </div>

                    <nav className="space-y-1 border border-[#807D7E] py-[16px] rounded-[12px]">
                        {menuItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => setActiveTab(item)}
                                className={`w-full text-left border-l-[2px] font-pan-b text-[18px] leading-[100%] px-4 py-3 transition ${activeTab === item
                                    ? 'bg-[#DAD2BE99] text-[#3B3A38] border-[#A24112] rounded-0'
                                    : 'text-[#3B3A38] hover:bg-[#DAD2BE99] border-transparent'
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default SiderbarList
