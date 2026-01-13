"use client"
import Image from 'next/image'
import React, { useState } from 'react'

function OrderHistory() {

    // --- Dummy 14 Items Data ---
    const items = Array.from({ length: 14 }, (_, i) => ({
        id: i + 1,
        name: `Royal Kada (Qty: 1) #${i + 1}`,
        status: "Delivered Successfully",
        img: "/assets/profile/item1.png"
    }))

    // Pagination Logic
    const itemsPerPage = 7
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedItem, setSelectedItem] = useState(null)


    const totalPages = Math.ceil(items.length / itemsPerPage)
    const indexOfLast = currentPage * itemsPerPage
    const indexOfFirst = indexOfLast - itemsPerPage
    const currentItems = items.slice(indexOfFirst, indexOfLast)

    return (
        <div>
            <div className='pb-[80px]'>
                <div className="flex items-center gap-[20px] pb-[60px]">
                    <Image height={9} width={6} alt='right-arrow' src="/assets/profile/right-arrow.svg" />
                    <h6 className="font-pan-b text-[28px] leading-[33.5px] text-[#3B3A38]">Order History</h6>
                </div>

                {!selectedItem && (
                    <>
                        <div className="grid gap-[30px]">
                            {currentItems.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => setSelectedItem(item)}
                                    className="cursor-pointer flex items-center border border-[#807D7E] rounded-[12px] justify-between lg:py-[20px] py-[14px] lg:px-[50px] px-[20px]"
                                >
                                    <div className="flex items-center gap-[30px]">
                                        <Image height={63} width={91} alt='item' className='object-cover' src={item.img} />
                                        <div>
                                            <h6 className="font-inter font-[700] text-[18px] text-[#3B3A38]">
                                                {item.name}
                                            </h6>
                                            <p className="font-inter font-[300] text-[18px] text-[#3B3A38] pt-[10px]">
                                                {item.status}
                                            </p>
                                        </div>
                                    </div>
                                    <Image height={36} width={36} alt='right-arrow' src="/assets/profile/right.svg" />
                                </div>
                            ))}
                        </div>

                        {/* PAGINATION */}
                        <div className="flex items-center gap-[10px] justify-center mt-[40px]">
                            <button
                                className="px-3 py-1 cursor-pointer border rounded disabled:opacity-50"
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage(prev => prev - 1)}
                            >
                                Prev
                            </button>

                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`px-3 py-1 cursor-pointer border rounded ${currentPage === i + 1 ? "bg-[#3B3A38] text-white" : ""}`}
                                >
                                    {i + 1}
                                </button>
                            ))}

                            <button
                                className="px-3 py-1 cursor-pointer border rounded disabled:opacity-50"
                                disabled={currentPage === totalPages}
                                onClick={() => setCurrentPage(prev => prev + 1)}
                            >
                                Next
                            </button>
                        </div>
                    </>
                )}


                {selectedItem && (
                    <div>
                        <div className="grid gap-[30px]">
                            <div className="p-[30px] border border-[#807D7E] rounded-[12px]">
                                <div className="flex gap-[20px] justify-between">
                                    <div className="flex gap-[35px] items-center">
                                        <Image height={95} width={137} src={selectedItem.img} alt="selected" />
                                        <div>
                                            <h6 className="font-[700] font-inter text-[18px] leading-[100%] text-[#3B3A38] pb-[9px]">Royal Kada</h6>
                                            <p className="font-nunito font-[400] text-[15px] leading-[100%] text-[#222222]">₹299 | Qty: 1</p>
                                        </div>
                                    </div>
                                    <p className="pt-[22px] font-inter font-[700] text-[18px] leading-[100%] text-[#3B3A38]">Delivered: 14th Nov, 2025</p>

                                    {/* <div className="space-y-[10px]">
                                    <p><strong>Name:</strong> {selectedItem.name}</p>
                                    <p><strong>Status:</strong> {selectedItem.status}</p>
                                    <p><strong>Price:</strong> {selectedItem.price}</p>
                                    <p><strong>Order Date:</strong> {selectedItem.date}</p>
                                    <p><strong>Size:</strong> {selectedItem.size}</p>
                                </div> */}
                                </div>
                                <div className='flex gap-[34px] pt-[50px]'>
                                    <button
                                        className='
    bg-transparent cursor-pointer
    border border-[#A24112]
    py-[16px]
    text-center
    font-inter font-[500] text-[18px] leading-[100%]
    text-[#222222]
    w-full rounded-[8px]
    transition-all duration-300
    hover:bg-[#A24112] hover:text-white
  '
                                    >
                                        Reorder
                                    </button>
                                    <button
                                        className='
    bg-transparent cursor-pointer
    border border-[#A24112]
    py-[16px]
    text-center
    font-inter font-[500] text-[18px] leading-[100%]
    text-[#222222]
    w-full rounded-[8px]
    transition-all duration-300
    hover:bg-[#A24112] hover:text-white
  '
                                    >
                                        Order Details
                                    </button>

                                    <button
                                        onClick={() => setSelectedItem(null)}
                                        className='
    bg-transparent cursor-pointer
    border border-[#A24112]
    py-[16px]
    text-center
    font-inter font-[500] text-[18px] leading-[100%]
    text-[#222222]
    w-full rounded-[8px]
    transition-all duration-300
    hover:bg-[#A24112] hover:text-white
  '
                                    >
                                        View Invoice
                                    </button>

                                </div>
                            </div>
                            <div className="p-[30px] border border-[#807D7E] rounded-[12px]">
                                <h6 className="font-[700] font-inter text-[18px] leading-[100%] text-[#3B3A38] pb-[20px]">Rate Product Quality</h6>
                                <div className="flex gap-[12px] items-center">
                                    <Image src="/assets/profile/big-star-light.svg" alt="star" height={45} width={45} />
                                    <Image src="/assets/profile/big-star-light.svg" alt="star" height={45} width={45} />
                                    <Image src="/assets/profile/big-star-light.svg" alt="star" height={45} width={45} />
                                    <Image src="/assets/profile/big-stat.svg" alt="star" height={45} width={45} />
                                    <Image src="/assets/profile/big-stat.svg" alt="star" height={45} width={45} />
                                </div>
                            </div>
                            <div className="p-[30px] border border-[#807D7E] rounded-[12px]">
                                <h6 className="font-[700] font-inter text-[18px] leading-[100%] text-[#3B3A38] pb-[20px]">Delivery Address:</h6>
                                <p className="font-nunito max-w-[487px] w-full font-[400] text-[15px] leading-[150%] text-[#222222]">Ms. Priya Sharma Flat 502, Tower C, Emerald Heights Bannerghatta Road, Bilekahalli Opposite IIM Bangalore Main Gate Bengaluru, Karnataka - 560076 Phone: +91 98765 43210</p>
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default OrderHistory
