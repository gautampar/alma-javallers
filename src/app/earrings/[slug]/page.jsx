import ProductImageGallery from '@/app/components/slider/ProductImageSlider'
import Image from 'next/image'
import React from 'react'

function Page() {
    return (
        <div className='bg-[#FFF9F2]'>
            <section className="mt-[156px]">
                <div className='lg:px-[64px] pt-[74px] px-[20px]'>
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[106px] gap-[30px]">
                        <div>
                            <ProductImageGallery />
                            <div className='pt-[118px]'>
                                <h6 className="font-pan-b font-[500] text-[38px] leading-[40px] tracking-[-0.4px] text-[#2B3136] text-center pb-[40px]">Product Details</h6>
                                <div className='border border-[#DDDCDC] rounded-[12px] p-[30px] grid gap-[35px]'>
                                    <div>
                                        <h6 className="font-pan-b font-[500] text-[28px] leading-[33px] pb-[25px]">Highlights</h6>
                                        <ul className='list-disc pl-[26px]'>
                                            {["Handcrafted oxidized silver jhumkas", "Lightweight & comfortable", "Complements ethnic & modern outfits", "Suitable for daily, office, and festive wear"].map((e, i) => {
                                                return (
                                                    <li key={i} className='font-pan-r font-[400] text-[26px] leading-[35px] text-justify text-[#2B3136]'>
                                                        {e}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                    <div>
                                        <h6 className="font-pan-b text-[28px] leading-[33px] pb-[25px]">Specifications</h6>
                                        <ul>
                                            {[
                                                { label: "Material", value: "Oxidized Silver", },
                                                { label: "Purity", value: "92.5% (925 Sterling Silver)", },
                                                { label: "BIS HUID", value: "457896", },
                                                { label: "Dimensions", value: "11 mm (Width), 16 inches (Length)", },
                                                { label: "Gross Weight", value: "~17 g", },
                                            ].map((e, i) => {
                                                return (
                                                    <li key={i} className='flex w-full gap-[40px]'>
                                                        <h6 className="max-w-[200px] text-[#2B3136] w-full font-[500] font-pan-b text-[24px] leading-[35px]">{e?.label}</h6>
                                                        <p className="font-[400] text-[#2B3136] font-pan-r text-[24px] leading-[35px]">{e?.value}</p>
                                                    </li>
                                                )
                                            })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Page
