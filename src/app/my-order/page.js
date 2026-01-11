"use client"
import Image from 'next/image'
import React from 'react'

function Page() {
    const status = 'processing'
    const estimatedDate = 'March 24, 2025'
    const statuses = [
        { id: 'order-placed', label: 'Order placed' },
        { id: 'processing', label: 'Processing' },
        { id: 'shipped', label: 'Shipped' },
        { id: 'delivered', label: 'Delivered' }
    ];
    const getStatusIndex = () => {
        const index = statuses.findIndex(s => s.id === status);
        return index === -1 ? 0 : index;
    };

    const currentStatusIndex = getStatusIndex();
    return (
        <div className='bg-[#FFF9F2]'>
            <section className='bg-[#FFF9F2] pt-[156px] lg:pb-[100px] pb-[60px]'>
                <div className="max-w-[1440px] w-full mx-auto lg:px-[80px] px-[20px]">
                    <h6 className="py-[80px] font-pan-b text-[54px] leading-[58px] text-[#000000]">My Order</h6>
                    <div className="grid lg:gap-[60px] gap-[30px]">
                        <div className='border border-[#DDDCDC] rounded-2xl'>
                            <div className='py-[32px] px-[24px] border-b border-[#DDDCDC]'>
                                <div className='flex justify-between items-start'>
                                    <div className='flex gap-[24px]'>
                                        <div>
                                            <Image height={164} width={149} src="/assets/profile/img1.png" alt='item1' className='object-cover h-full w-full' />
                                        </div>
                                        <div>
                                            <h6 className="font-pan-b text-[16px] leading-[24px] text-[#111827] pb-[8px]">Oxidized Earrings </h6>
                                            <p className="font-pan-b text-[14px] leading-[100%] tracking-[0.6%] text-[#2B3136] pb-[16px]">₹145</p>
                                            <div className="flex">
                                                <Image alt='star' height={14} width={14} src="/assets/profile/Star 1.svg" />
                                                <Image alt='star' height={14} width={14} src="/assets/profile/Star 1.svg" />
                                                <Image alt='star' height={14} width={14} src="/assets/profile/Star 1.svg" />
                                                <Image alt='star' height={14} width={14} src="/assets/profile/Star 6.svg" />
                                                <Image alt='star' height={14} width={14} src="/assets/profile/Star 6.svg" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid gap-[24px] lg:grid-cols-2 grid-cols-1 max-w-[460.5px] w-full'>
                                        <div>
                                            <h6 className="font-pan-b text-[14px] leading-[20px] text-[#111827] pb-[12px]">Delivery address</h6>
                                            <p className="font-pan-r text-[12px] uppercase text-[#6B7280] leading-[20px] pb-[12px]">4 Raja Park, Govind Marg, Jaipur – 302004</p>
                                            <p className="font-pan-r text-[12px] uppercase text-[#6B7280] leading-[20px]">+91 7489555674</p>
                                        </div>
                                        <div>
                                            <h6 className="font-pan-b text-[14px] leading-[20px] text-[#111827] pb-[12px]">Shipping updates</h6>
                                            <p className="font-pan-r text-[12px] uppercase text-[#6B7280] leading-[20px] pb-[12px]">4 Raja Park, Govind Marg, Jaipur – 302004</p>
                                            <p className="font-pan-r text-[12px] uppercase text-[#6B7280] leading-[20px] pb-[12px]">+91 7489555674</p>
                                            <button className='font-pan-b text-[14px] leading-[20px] text-[#A24112]'>Edit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:p-[32px] p-[20px]'>
                                <p className="font-pan-b text-[14px] leading-[20px] text-[#111827] pb-[24px]">Preparing to ship on {estimatedDate}</p>
                                <div className="relative">
                                    <div
                                        className="absolute top-0 left-0 h-1 bg-[#A24112] rounded-full transition-all duration-500"
                                        style={{ width: `${(currentStatusIndex / (statuses.length - 1)) * 100}%` }}
                                    />

                                    <div className="relative flex justify-between pt-[20px]">
                                        {statuses.map((statusItem, index) => (
                                            <div
                                                key={statusItem.id}
                                                className="flex flex-col items-start"
                                                style={{ width: '25%' }}
                                            >
                                                <span
                                                    className={`text-sm font-medium ${index <= currentStatusIndex
                                                        ? 'text-[#A24112]'
                                                        : 'text-[#4B5563]'
                                                        }`}
                                                >
                                                    {statusItem.label}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-[62px] border-t border-[#D9D9D9]">
                <div className="max-w-[1440px] w-full mx-auto lg:px-[60px] px-[30px]">
                    <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-0 gap-[30px]">
                        <div className="max-w-[216px] w-full">
                            <Image src="/assets/shop/icon1.png" height={28} width={28} alt="gold" className="h-[28px] w-[28px] object-cover" />
                            <h6 className="font-pan font-[700] text-[15px] leading-[125%] tracking-[1%] text-[#2B3136] uppercase py-[12px]">DELIVERY </h6>
                            <p className="font-[400] font-goudy text-[16px] leading-[24px] text-[#2B3136]">Free delivery for orders over ₹150 Worldwide delivery.</p>
                        </div>
                        <div className="max-w-[216px] w-full">
                            <Image src="/assets/shop/icon2.png" height={28} width={28} alt="gold" className="h-[28px] w-[28px] object-cover" />
                            <h6 className="font-pan font-[700] text-[15px] leading-[125%] tracking-[1%] text-[#2B3136] uppercase py-[12px]">CUSTOMER CARE </h6>
                            <p className="font-[400] font-goudy text-[16px] leading-[24px] text-[#2B3136]">Contact us by email or by phone hello@almajewellery.com +91 7489555674</p>
                        </div>
                        <div className="max-w-[216px] w-full">
                            <Image src="/assets/shop/icon3.png" height={28} width={28} alt="gold" className="h-[28px] w-[28px] object-cover" />
                            <h6 className="font-pan font-[700] text-[15px] leading-[125%] tracking-[1%] text-[#2B3136] uppercase py-[12px]">Payment methods </h6>
                            <p className="font-[400] font-goudy text-[16px] leading-[24px] text-[#2B3136]">Debit card, credit card & UPI</p>
                        </div>
                        <div className="max-w-[216px] w-full">
                            <Image src="/assets/shop/icon4.png" height={28} width={28} alt="gold" className="h-[28px] w-[28px] object-cover" />
                            <h6 className="font-pan font-[700] text-[15px] leading-[125%] tracking-[1%] text-[#2B3136] uppercase py-[12px]">GUARANTEE </h6>
                            <p className="font-[400] font-goudy text-[16px] leading-[24px] text-[#2B3136]">Give a second life to your Alma jewellery. For more information , click here.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#966846] pt-[40px] lg:pt-[80px] px-[16px] sm:px-[24px] lg:px-[60px] pb-[60px] lg:pb-[80px]">

                <div className="pb-[40px] lg:pb-[60px] text-center lg:text-left">

                    <p className="font-[700] font-goudy text-[12px] sm:text-[13px] lg:text-[14px] leading-[1] text-white pb-[16px] lg:pb-[24px]">
                        FOLLOW US ON
                    </p>

                    <h6
                        className="
                    font-[700] font-pan text-white
                    text-[36px] md:text-[50px] lg:text-[62px] xl:text-[84px]
                    leading-[1.1] tracking-[0.02em]
                    pb-[16px] lg:pb-[27px]
                  "
                    >
                        INSTAGRAM
                    </h6>

                    <h6 className="font-[700] font-pan text-[11px] sm:text-[12px] leading-[1] text-white">
                        Go follow @almajewellery
                    </h6>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    <Image
                        src="/assets/shop/item1.png"
                        height={462}
                        width={420}
                        alt="gold"
                        className="h-auto sm:h-[320px] lg:h-[420px] w-full object-cover"
                    />
                    <Image
                        src="/assets/shop/item2.png"
                        height={462}
                        width={420}
                        alt="gold"
                        className="h-auto sm:h-[320px] lg:h-[420px] w-full object-cover"
                    />
                    <Image
                        src="/assets/shop/item3.png"
                        height={462}
                        width={420}
                        alt="gold"
                        className="h-auto sm:h-[320px] lg:h-[420px] w-full object-cover"
                    />
                    <Image
                        src="/assets/shop/item4.png"
                        height={462}
                        width={420}
                        alt="gold"
                        className="h-auto sm:h-[320px] lg:h-[420px] w-full object-cover"
                    />
                </div>

            </section>

        </div>
    )
}

export default Page


