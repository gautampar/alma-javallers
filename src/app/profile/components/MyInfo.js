import Image from 'next/image'
import React from 'react'

function MyInfo() {
    return (
        <>
            <div className='pb-[80px]'>
                <div className="flex items-center gap-[20px]">
                    <Image height={9} width={6} alt='right-arrow' src="/assets/profile/right-arrow.svg" />
                    <h6 className="font-pan-b text-[28px] leading-[33.5px] text-[#3B3A38]">My Info</h6>
                </div>
                <h6 className="font-pan-b text-[22px] leading-[33px] text-[#3B3A38] tracking-[2%] pt-[24px] lg:pb-[57px] pb-[20px]">Contact Details</h6>
                <div className='border border-[#DDDCDC]'>
                    <div className='px-[10px] py-[20px] border-b border-[#DDDCDC]'>
                        <h6 className="font-pan-b text-[18px] leading-[100%] text-[#3B3A38] pb-[20px]">Your Name</h6>
                        <div className="flex justify-between items-center">
                            <h6 className="font-pan-b text-[18px] leading-[100%] text-[#3B3A38]">Rohan</h6>
                            <button className='font-pan-b text-[18px] leading-[100%] text-[#3B3A38]'>Change</button>
                        </div>
                    </div>
                    <div className='px-[10px] py-[20px] border-b border-[#DDDCDC]'>
                        <h6 className="font-pan-b text-[18px] leading-[100%] text-[#3B3A38] pb-[20px]">Email Address</h6>
                        <div className="flex justify-between items-center">
                            <h6 className="font-pan-b text-[18px] leading-[100%] text-[#3B3A38]">Rohan@gmail.com</h6>
                        </div>
                    </div>
                    <div className='px-[10px] py-[20px]'>
                        <h6 className="font-pan-b text-[18px] leading-[100%] text-[#3B3A38] pb-[20px]">Phone Number</h6>
                        <div className="flex justify-between items-center">
                            <h6 className="font-pan-b text-[18px] leading-[100%] text-[#3B3A38]">8980252445</h6>
                        </div>
                    </div>
                </div>
                <div className='mt-[50px]'>
                    <div className="p-[10px] flex justify-between items-center mb-[40px]">
                        <h6 className="font-pan-b text-[22px] leading-[33px] text-[#3B3A38]">Address</h6>
                        <button className='font-pan-b text-[18px] leading-[100%] text-[#3B3A38]'>Add New</button>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-[30px] grid-cols-1">
                        <div className='border border-[#807D7E] rounded-[12px] p-[24px]'>
                            <h6 className="font-pan-b text-[20px] leading-[100%] text-[#3B3A38] pb-[24px]">Rohan</h6>
                            <p className="font-pan-b text-[16px] leading-[100%] text-[#3B3A38] pb-[24px]">8980252445</p>
                            <p className="font-pan-r text-[12px] leading-[100%] uppercase text-[#3B3A38] pb-[40px]">4 Raja Park, Govind Marg, Jaipur – 302004</p>
                            <div className="flex flex-wrap gap-[12px]">
                                <button className='font-pan-b text-[16px] leading-[100%] text-[#2B3136] px-[20px] py-[7px] border border-[#807D7E] rounded-[8px]'>Home</button>
                                <button className='font-pan-b text-[16px] leading-[100%] text-[#2B3136] px-[20px] py-[7px] border border-[#807D7E] rounded-[8px]'>Default billing address</button>
                            </div>
                            <div className='pt-[23px] flex gap-[10px]'>
                                <button className='font-pan-b text-[16px] leading-[100%] text-[#3B3A38]'>Remove</button>
                                <div className='bg-[#D9D9D9] w-[1px] h-[20px]'></div>
                                <button className='font-pan-b text-[16px] leading-[100%] text-[#3B3A38]'>Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyInfo
