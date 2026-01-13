"use client"
import Image from 'next/image'
import React from 'react'

function Page() {

    return (
        <div className='bg-[#FFF9F2]'>
            <section className='bg-[#FFF9F2] pt-[156px] lg:pb-[100px] pb-[60px]'>
                <div className="max-w-[1440px] pt-[100px] w-full mx-auto lg:px-[80px] px-[20px]">
                    <p className="font-pan-b text-[16px] leading-[24px] text-[#A24112] pb-[8px]">Thank you!</p>
                    <h6 className="font-pan-b text-[54px] leading-[58px] text-[#000000] pb-[8px]">It's on the way!</h6>
                    <p className="font-pan-r text-[16px] leading-[24px] text-[#6B7280] pb-[38px]">Your order #14034056 has shipped and will be with you soon.</p>
                    <p className="font-pan-b text-[14px] leading-[20px] text-[#111827] pb-[8px]">Tracking number</p>
                    <p className="font-pan-b text-[14px] leading-[20px] text-[#A24112] pb-[40px]">51547878755545848512</p>
                    <div className='border-y border-[#E5E7EB] py-[40px]'>
                        <div className="flex gap-[24px] items-center">
                            <div className='max-w-[149px] w-full'>
                                <Image height={164} width={149} src="/assets/profile/img1.png" alt='item1' className='object-cover h-full w-full' />
                            </div>
                            <div>
                                <h6 className="font-pan-b text-[16px] leading-[24px] text-[#111827] pb-[40px]">Cold Brew Bottle</h6>
                                <div className="flex gap-[24px]">
                                    <div className='flex gap-[8px] items-center'>
                                        <h6 className='font-pan-b text-[14px] leading-[20px] text-[#111827]'>Quantity</h6>
                                        <h6 className='font-pan-r text-[14px] leading-[20px] text-[#374151]'>1</h6>
                                    </div>
                                    <div className='bg-[#E5E7EB] w-[1px] h-[20px]'></div>
                                    <div className='flex gap-[8px] items-center'>
                                        <h6 className='font-pan-b text-[14px] leading-[20px] text-[#111827]'>Price</h6>
                                        <h6 className='font-pan-b text-[14px] leading-[20px] text-[#2B3136]'>₹145</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border-b border-[#E5E7EB] py-[40px] max-w-[543px] w-full'>
                        <div className='grid lg:grid-cols-2 grid-cols-1 gap-[24px]'>
                            <div>
                                <h6 className="font-inter font-[500] text-[14px] leading-[20px] text-[#111827] pb-[8px]">Shipping address</h6>
                                <p className="font-[400] font-inter text-[14px] leading-[20px] text-[#374151]">Kristin Watson</p>
                                <p className="font-[400] font-inter text-[14px] leading-[20px] text-[#374151]">7363 Cynthia Pass</p>
                                <p className="font-[400] font-inter text-[14px] leading-[20px] text-[#374151]">Toronto, ON N3Y 4H8</p>
                            </div>
                            <div>
                                <h6 className="font-inter font-[500] text-[14px] leading-[20px] text-[#111827] pb-[8px]">Billing address</h6>
                                <p className="font-[400] font-inter text-[14px] leading-[20px] text-[#374151]">Kristin Watson</p>
                                <p className="font-[400] font-inter text-[14px] leading-[20px] text-[#374151]">7363 Cynthia Pass</p>
                                <p className="font-[400] font-inter text-[14px] leading-[20px] text-[#374151]">Toronto, ON N3Y 4H8</p>
                            </div>
                        </div>
                    </div>
                    <div className='border-b border-[#E5E7EB] py-[40px]'>
                        <div className='grid lg:grid-cols-2 grid-cols-1 gap-[24px] max-w-[543px] w-full'>
                            <div>
                                <h6 className="font-inter font-[500] text-[14px] leading-[20px] text-[#111827] pb-[8px]">Payment method</h6>
                                <p className="font-[400] font-inter text-[14px] leading-[20px] text-[#374151]">Credit card</p>
                                <p className="font-[400] font-inter text-[14px] leading-[20px] text-[#374151]">Mastercard</p>
                                <p className="font-[400] font-inter text-[14px] leading-[20px] text-[#374151]">••••••••1545</p>
                            </div>
                            <div>
                                <h6 className="font-inter font-[500] text-[14px] leading-[20px] text-[#111827] pb-[8px]">Shipping method</h6>
                                <p className="font-[400] font-inter text-[14px] leading-[20px] text-[#374151]">Blue Dart</p>
                                <p className="font-[400] font-inter text-[14px] leading-[20px] text-[#374151]">Takes up to 3 working days</p>
                            </div>
                        </div>
                    </div>
                    <div className='py-[40px]'>
                        <div className="grid gap-[22px]">
                            <div className="flex justify-between items-center">
                                <h6 className="font-pan-b text-[14px] leading-[20px]">Subtotal</h6>
                                <h6 className="font-pan-b text-[14px] leading-[20px]">₹145</h6>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-[8px]">
                                    <h6 className="font-pan-b text-[14px] leading-[20px]">Discount</h6>
                                    <button className='bg-[#E5E7EB] font-pan-b text-[12px] leading-[16px] text-[#A24112] py-[2px] px-[8px] rounded-full'>STUDENT50</button>
                                </div>
                                <h6 className="font-pan-b text-[14px] leading-[20px]">₹145</h6>
                            </div>
                            <div className="flex justify-between items-center">
                                <h6 className="font-pan-b text-[14px] leading-[20px]">Shipping</h6>
                                <h6 className="font-pan-b text-[14px] leading-[20px]">₹10</h6>
                            </div>
                            <div className="flex justify-between items-center">
                                <h6 className="font-pan-b text-[14px] leading-[20px]">Total</h6>
                                <h6 className="font-pan-b text-[14px] leading-[20px]">₹145</h6>
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


