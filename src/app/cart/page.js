"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import RingSlider from '../components/slider/RingSlider';

const cartItems = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    title: "Silver Oxidized Earrings",
    image: "/assets/cart/img1.png",
    qty: 1,
    price: 199,
    originalPrice: 199,
    discount: "11% off",
    returnDays: "14 Days",
}));

function Page() {
    const [step, setStep] = useState(1);
    const [openModal, setOpenModal] = useState(false);
    const [openCheckoutModal, setOpenCheckoutModal] = useState(false);


    return (
        <div >
            <div className="bg-[#FFF9F2] pt-[264px]">
                <div className="lg:px-[164px] px-[20px]">
                    <div className="flex gap-[4px] items-center pb-[30px]">
                        <Image height={20} width={20} src="/assets/cart/arrow.svg" alt='arrow' />
                        <h6 className="font-pan-r text-[20px] leading-[100%] underline text-[#222222]">Continue Shopping</h6>
                    </div>
                    <h6 className="font-pan-b text-[45px] leading-[100%] text-[#A24112] pb-[26px]">Cart</h6>
                    <div className="grid lg:grid-cols-2 grid-cols-1">
                        <div className='lg:max-w-[658px] max-w-full w-full'>
                            <div className="p-[10px] flex justify-between items-center mb-[22px]">
                                <p className="font-pan-r text-[20px] leading-[34px] tracking-[0.3px] text-[#000000]">8 Items Total</p>
                                <p onClick={() => setOpenModal(true)}
                                    className="font-pan-r cursor-pointer text-[20px] leading-[34px] text-[#00000080] tracking-[0.3px]">Remove All</p>
                            </div>
                            <div className="flex flex-col gap-[24px]">
                                {cartItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="border border-[#DDDCDC] rounded-[12px] p-[10px] flex gap-[16px]"
                                    >
                                        <div>
                                            <Image
                                                src={item.image}
                                                className="object-cover h-[105px] w-full max-w-[83px]"
                                                width={83}
                                                height={105}
                                                alt="item"
                                            />
                                        </div>

                                        <div className="w-full grid gap-[10px]">
                                            <div className="flex items-center justify-between">
                                                <h6 className="font-pan-b text-[16px] leading-[18px] tracking-[1.4px] text-[#000000]">
                                                    {item.title}
                                                </h6>

                                                <div className="flex items-center gap-[4px] cursor-pointer">
                                                    <Image
                                                        height={15}
                                                        width={15}
                                                        alt="remove"
                                                        src="/assets/cart/cancle.svg"
                                                    />
                                                    <h6 className="font-pan-b text-[14px] leading-[21px] text-[#2B3136]">
                                                        Remove
                                                    </h6>
                                                </div>
                                            </div>

                                            <p className="font-pan-r text-[14px] leading-[21px] text-[#2B3136]">
                                                Qty: {item.qty}
                                            </p>

                                            <div className="flex items-center gap-[8px]">
                                                <p className="font-pan-r text-[14px] leading-[21px] text-[#2B3136]">
                                                    ₹{item.price}.00
                                                </p>
                                                <p className="font-pan-r text-[12px] leading-[21px] line-through text-[#807D7E]">
                                                    ₹{item.originalPrice}.00
                                                </p>
                                                <p className="font-pan-r text-[12px] leading-[21px] text-[#A24112]">
                                                    {item.discount}
                                                </p>
                                            </div>

                                            <p className="font-pan-r text-[12px] leading-[16px] tracking-[1.4px] text-[#000000]">
                                                <span className="font-pan-b">{item.returnDays} </span>
                                                return available
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='max-w-[496px] w-full mx-auto'>
                            <div className="flex justify-center items-center gap-[13px] pb-[16px]">
                                <Image height={31} width={31} alt='done' src="/assets/cart/done.svg" />
                                <p className="font-[400] text-[24px] leading-[180%] tracking-[1.5px] text-[#807D7E]">100% Secure</p>
                            </div>
                            <div className="bg-[#FFFFFF] rounded-[10px] pt-[55px] lg:px-[50px] px-[20px]">
                                <div className="flex items-center justify-between">
                                    <div
                                        className={`w-[16px] h-[16px] font-pan-r text-[9px] leading-[180%] tracking-[-0.3px] border rounded-full flex items-center justify-center
              ${step >= 1 ? "text-[#A24112] border-[#A24112] " : "text-[#807D7E] border-[#807D7E] "}`}
                                    >
                                        1
                                    </div>
                                    <div className={`flex-1 h-[0.5px] ${step === 2 ? "bg-[#A24112]" : "bg-[#807D7E]"}`} />
                                    <div
                                        className={`w-[16px] h-[16px] font-pan-r text-[9px] leading-[180%] tracking-[-0.3px] border rounded-full flex items-center justify-center
              ${step === 2 ? "text-[#A24112] border-[#A24112] " : "text-[#807D7E] border-[#807D7E]"}`}
                                    >
                                        2
                                    </div>
                                </div>
                                <div className="flex items-center justify-between pb-[25px]">
                                    <span className={`font-pan-r text-[18px] leading-[180%] tracking-[-0.3px] ${step >= 1 ? "text-[#A24112]" : "text-[#807D7E]"}`}>
                                        Cart
                                    </span>
                                    <span className={`font-medium ${step === 2 ? "text-[#A24112]" : "text-[#807D7E]"}`}>
                                        Payment
                                    </span>
                                </div>
                                {step === 1 && (
                                    <div>
                                        <h3 className="text-[30px] font-nunito font-[700] leading-[100%] text-center pb-[30px]">Order Summary</h3>
                                        <div className='grid gap-[15px] font-nunito'>
                                            <div className="flex justify-between items-center">
                                                <p className="text-[15px] font-[700] leading-[100%] text-[#222222]">Subtotal</p>
                                                <p className="text-[15px] font-[700] leading-[100%] text-[#222222]">₹4448</p>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <p className="text-[15px] font-[400] leading-[100%] text-[#222222]">Shipping</p>
                                                <p className="text-[15px] font-[700] leading-[100%] text-[#222222]"><span className='line-through font-[400]'>₹299</span>&nbsp;FREE!</p>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <p className="text-[15px] font-[400] leading-[100%] text-[#222222]">Sales Tax</p>
                                                <p className="text-[15px] font-[400] leading-[100%] text-[#222222]">Calculated at Checkout</p>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <p className="text-[15px] font-[400] leading-[100%] underline text-[#A24112]">Promo Code</p>
                                                <p className="text-[15px] font-[400] leading-[100%] text-[#A24112]">- ₹300</p>
                                            </div>
                                            <div className="flex justify-between items-center border-t border-[#A2411280] pt-[20px]">
                                                <p className="text-[15px] font-[700] leading-[100%] text-[#222222]">Total </p>
                                                <p className="text-[15px] font-[700] leading-[100%] text-[#222222]">₹4148</p>
                                            </div>
                                        </div>
                                        <div className='bg-[#AAFFC1] rounded-[12px] py-[11px] px-[12px] flex mt-[32px] gap-[8px] items-center'>
                                            <Image height={24} width={24} src="/assets/cart/discount.svg" alt='discount' />
                                            <p className="font-pan-r text-[16px] leading-[165%] text-[#2B3136] tracking-[0.5%]">Yay! Your total discount is ₹199</p>
                                        </div>
                                        <button onClick={() => setOpenCheckoutModal(true)}
                                            className='bg-[#A24112] cursor-pointer font-pan-r text-[20px] leading-[100%] text-[#FFFFFF] text-center w-full py-[12px] rounded-[5px] mt-[20px] mb-[32px]'>Proceed to Checkout</button>

                                    </div>
                                )}

                                {step === 2 && (
                                    <div>
                                        <h3 className="text-[22px] font-semibold mb-[20px]">Payment Details</h3>
                                        <p className="text-gray-600 mb-[30px]">
                                            Complete your payment securely.
                                        </p>

                                        <button
                                            onClick={() => setStep(1)}
                                            className="border border-black px-[30px] py-[12px] rounded-full"
                                        >
                                            Back to Cart
                                        </button>
                                    </div>
                                )}
                            </div>
                            <div className='pt-[20px]'>
                                <h6 className="font-nunito text-[20px] font-[600] leading-[100%] text-[#222222] pb-[20px]">Select Address</h6>
                                <div className="flex justify-between items-center pb-[16px]">
                                    <p className="font-[400] font-nunito text-[15px] text-[#222222]">ABC Washington DC, America 254796</p>
                                    <input type="checkbox" />
                                </div>
                                <h6 className="font-nunito font-[600] text-[16px] leading-[100%] text-[#222222] underline">Add New</h6>
                                <div className='border-t border-[#A2411280] mt-[20px] pt-[20px]'>
                                    <div className="flex gap-[15px] items-center pb-[17px]">
                                        <Image src="/assets/cart/Tag.svg" alt="Tag" height={23} width={23} />
                                        <p className="font-nunito font-[600] text-[16px] leading-[100%] text-[#222222] underline">Enter a Gift Card or Promo Code</p>
                                    </div>
                                    <div className="flex justify-between rounded-[10px] border-[0.2px] border-[#222222] bg-[#FFFFFF] pl-[28px]">
                                        <input type="text" className='font-nunito text-[20px] font-[400] leading-[20px] text-[#000000] outline-none border-0' />
                                        <button className='max-w-[100px] w-full bg-[#A24112] py-[12px] px-[22px] rounded-[10px] text-[#FFFFFF] font-nunito font-[600] text-[20px] text-center'>
                                            Apply
                                        </button>
                                    </div>
                                    <div className='mt-[40px] flex items-center gap-[15px] mb-[27px]'>
                                        <input type="checkbox" className='h-[20px] w-[20px]' />
                                        <p className="font-[400] font-nunito text-[15px] leading-[100%] text-[#222222]">Include Gift Wrapping for this order</p>
                                    </div>
                                    <div className="flex gap-[15px] items-center">
                                        <Image src="/assets/cart/gift.svg" alt="gift" height={15} width={15} />
                                        <p className="font-nunito font-[400] text-[15px] leading-[15px] text-[#222222]">Add Gift Note:</p>
                                    </div>
                                    <textarea name="" rows={4} id="" className='bg-[#FFFFFF] border-[0.5px] border-[#222222] rounded-[5px] p-[15px] font-[400] font-nunito text-[12px] text-[#838383] w-full mt-[10px]' placeholder='Customize your gift with a special note to convey your sentiments...'></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pt-[90px]'>
                        <div className='pb-[55px] flex justify-between items-center'>
                            <div>
                                <h6 className="font-[500] font-pan text-[32px] leading-[140%] text-[#2B3136]">
                                    Recommended For you
                                </h6>
                                <div className="h-[4px] max-w-[88px] bg-[#2B3136] rounded-full"></div>
                            </div>
                            <button className='font-pan-r text-[28px] leading-[140%] text-[#2B3136]'>View All</button>
                        </div>
                        <div className="overflow-hidden pb-[80px] ">
                            <RingSlider />
                        </div>
                    </div>
                </div>
            </div>
            {openModal && (
                <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50">
                    <div className="bg-white rounded-[10px] relative w-full max-w-[496px] px-[53px] pt-[54px] pb-[88px]">
                        <button className='absolute right-[20px] cursor-pointer top-[20px]' onClick={() => setOpenModal(false)}>
                            <Image src="/assets/cart/modal-close.svg" height={30} width={30} alt='close' />
                        </button>
                        <h4 className="font-nunito font-[700] text-[30px] leading-[100%] text-[#222222] text-center pb-[11px]">
                            Items
                        </h4>

                        <p className="text-[#22222280] max-w-[280px] w-full mx-auto pt-[12px] pb-[34px] font-[500] font-nunito text-[18px] leading-[100%] text-center">
                            Are you sure you want to remove all or move to wishlist?
                        </p>

                        <div className="flex gap-[14px] justify-center">
                            <button
                                onClick={() => setOpenModal(false)}
                                className="bg-[#A2411233] py-[12px] text-[#A24112] font-[500] font-nunito text-[20px] leading-[100%] rounded-[5px] w-full text-center"
                            >
                                Remove All
                            </button>

                            <button
                                onClick={() => {
                                    setOpenModal(false);
                                }}
                                className="py-[12px] bg-[#A24112] text-white  font-[500] font-nunito text-[20px] leading-[100%] rounded-[5px] w-full text-center"
                            >
                                Move to Wishlist
                            </button>
                        </div>

                    </div>
                </div>
            )}
            {openCheckoutModal && (
                <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50">
                    <div className="bg-white w-full max-w-[855px] rounded-[10px] p-[24px] relative">
                        <button
                            onClick={() => setOpenCheckoutModal(false)}
                            className="absolute top-[12px] right-[12px]"
                        >
                            <Image src="/assets/cart/modal-close.svg" height={30} width={30} alt='close' />
                        </button>

                        <h4 className="font-pan-b text-[22px] leading-[33.5px] text-[#3C4242] mb-[32px]">
                            Billing Details
                        </h4>

                        <form className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[20px]">

                            {/* First Name */}
                            <div className="grid gap-[13px]">
                                <p className="font-pan-b text-[16px] text-[#3C4242]">First Name*</p>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="border border-[#DDDCDC] rounded-[8px] px-[20px] py-[16px]
      font-pan-r text-[14px] placeholder:text-[#DDDCDC] text-[#3C4242] focus:outline-none"
                                />
                            </div>

                            {/* Last Name */}
                            <div className="grid gap-[13px]">
                                <p className="font-pan-b text-[16px] text-[#3C4242]">Last Name*</p>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="border border-[#DDDCDC] rounded-[8px] px-[20px] py-[16px]
      font-pan-r text-[14px] placeholder:text-[#DDDCDC] text-[#3C4242] focus:outline-none"
                                />
                            </div>

                            {/* Country / Region */}
                            <div className="grid gap-[13px]">
                                <p className="font-pan-b text-[16px] text-[#3C4242]">Country / Region*</p>
                                <input
                                    type="text"
                                    placeholder="Country"
                                    className="border border-[#DDDCDC] rounded-[8px] px-[20px] py-[16px]
      font-pan-r text-[14px] placeholder:text-[#DDDCDC] text-[#3C4242] focus:outline-none"
                                />
                            </div>

                            {/* Email */}
                            <div className="grid gap-[13px]">
                                <p className="font-pan-b text-[16px] text-[#3C4242]">Email</p>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="border border-[#DDDCDC] rounded-[8px] px-[20px] py-[16px]
      font-pan-r text-[14px] placeholder:text-[#DDDCDC] text-[#3C4242] focus:outline-none"
                                />
                            </div>

                            {/* Street Address (full width) */}
                            <div className="grid gap-[13px] lg:col-span-2">
                                <p className="font-pan-b text-[16px] text-[#3C4242]">Street Address*</p>
                                <input
                                    type="text"
                                    placeholder="House number and street name"
                                    className="border border-[#DDDCDC] rounded-[8px] px-[20px] py-[16px]
      font-pan-r text-[14px] placeholder:text-[#DDDCDC] text-[#3C4242] focus:outline-none"
                                />
                            </div>

                            {/* Apt / Suite */}
                            <div className="grid gap-[13px] lg:col-span-2">
                                <p className="font-pan-b text-[16px] text-[#3C4242]">Apt, suite, unit</p>
                                <input
                                    type="text"
                                    placeholder="Apartment, suite, unit, etc. (optional)"
                                    className="border border-[#DDDCDC] rounded-[8px] px-[20px] py-[16px]
      font-pan-r text-[14px] placeholder:text-[#DDDCDC] text-[#3C4242] focus:outline-none"
                                />
                            </div>

                            {/* City / State / Postal Code */}
                            <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-3 gap-[20px]">

                                <div className="grid gap-[13px]">
                                    <p className="font-pan-b text-[16px] text-[#3C4242]">City*</p>
                                    <input
                                        type="text"
                                        placeholder="City"
                                        className="border border-[#DDDCDC] rounded-[8px] px-[20px] py-[16px]
        font-pan-r text-[14px] placeholder:text-[#DDDCDC] text-[#3C4242] focus:outline-none"
                                    />
                                </div>

                                <div className="grid gap-[13px]">
                                    <p className="font-pan-b text-[16px] text-[#3C4242]">State*</p>
                                    <input
                                        type="text"
                                        placeholder="State"
                                        className="border border-[#DDDCDC] rounded-[8px] px-[20px] py-[16px]
        font-pan-r text-[14px] placeholder:text-[#DDDCDC] text-[#3C4242] focus:outline-none"
                                    />
                                </div>

                                <div className="grid gap-[13px]">
                                    <p className="font-pan-b text-[16px] text-[#3C4242]">Postal Code*</p>
                                    <input
                                        type="text"
                                        placeholder="Postal Code"
                                        className="border border-[#DDDCDC] rounded-[8px] px-[20px] py-[16px]
        font-pan-r text-[14px] placeholder:text-[#DDDCDC] text-[#3C4242] focus:outline-none"
                                    />
                                </div>

                            </div>

                            {/* Phone */}
                            <div className="grid gap-[13px]">
                                <p className="font-pan-b text-[16px] text-[#3C4242]">Phone*</p>
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="border border-[#DDDCDC] rounded-[8px] px-[20px] py-[16px]
      font-pan-r text-[14px] placeholder:text-[#DDDCDC] text-[#3C4242] focus:outline-none"
                                />
                            </div>

                            <div className="lg:col-span-2">
                                <div className='grid lg:grid-cols-2 grid-cols-1'>
                                    <div>
                                        <button
                                            type="submit"
                                            className="bg-[#A24112] text-white py-[14px] rounded-[8px] px-[20px]
      font-pan-r text-[18px] transition-all duration-300 hover:bg-[#8d3510]"
                                        >
                                            Add Address
                                        </button>
                                    </div>
                                    <div className='flex items-center gap-[10px]'>
                                        <input type="checkbox" name="" id="" />
                                        <p className="font-pan-r text-[18px] leading-[100%] text-[#3C4242]">Save my information for a faster checkout</p>
                                    </div>
                                </div>
                            </div>

                        </form>

                    </div>
                </div>
            )}

        </div>
    )
}

export default Page
