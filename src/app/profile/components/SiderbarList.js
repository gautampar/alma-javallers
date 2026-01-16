"use client"
import Image from 'next/image';
import React, { useState } from 'react'


function SiderbarList({ activeTab, setActiveTab, menuItems }) {
    const [log, setLog] = useState(false)

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
                        <button
                            onClick={() => setLog(true)}
                            className={`w-full text-left border-l-[2px] font-pan-b text-[18px] leading-[100%] px-4 py-3 transition text-[#3B3A38] hover:bg-[#DAD2BE99] border-transparent`}
                        >
                            Sign out
                        </button>

                    </nav>
                </div>
            </div>
            {log && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4">
                    <div className="bg-white rounded-[10px] relative w-full max-w-[480px] sm:max-w-[420px] md:max-w-[480px] 
                  px-[20px] sm:px-[32px] md:px-[40px] lg:px-[50px]
                  pt-[40px] sm:pt-[45px] md:pt-[50px]
                  pb-[60px] sm:pb-[70px] md:pb-[80px]
                ">

                        <button
                            className="absolute right-[15px] sm:right-[18px] md:right-[20px] top-[15px] sm:top-[18px] md:top-[20px] cursor-pointer"
                            onClick={() => setLog(false)}
                        >
                            <Image src="/assets/cart/modal-close.svg" height={28} width={28} alt="close" />
                        </button>
                        <h4 className="font-nunito font-[700] text-[22px] sm:text-[26px] md:text-[30px] leading-[120%] text-[#222222] text-center pb-[10px] sm:pb-[12px]">
                            Logout
                        </h4>

                        {/* Subtext */}
                        <p className="text-[#22222280] mx-auto text-center font-nunito font-[500]
                    text-[15px] sm:text-[16px] md:text-[18px]
                    leading-[140%] sm:leading-[130%]
                    max-w-[260px] sm:max-w-[280px] pb-[20px] sm:pb-[28px] md:pb-[34px] pt-[8px] sm:pt-[10px]
                  ">
                            Are you sure you want to logout your account?
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-[10px] sm:gap-[12px] justify-center">
                            <button
                                onClick={() => setLog(false)}
                                className="bg-[#A2411233] cursor-pointer py-[10px] sm:py-[12px]
                        text-[#A24112] font-[500] font-nunito 
                        text-[16px] sm:text-[18px] md:text-[20px] leading-[100%]
                        rounded-[5px] w-full text-center"
                            >
                                Check Available Offers!
                            </button>

                            <button
                                onClick={() => setLog(false)}
                                className="py-[10px]  cursor-pointer sm:py-[12px] bg-[#A24112] text-white font-[500] font-nunito
                        text-[16px] sm:text-[18px] md:text-[20px] leading-[100%]
                        rounded-[5px] w-full text-center"
                            >
                                Yes
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}

export default SiderbarList
