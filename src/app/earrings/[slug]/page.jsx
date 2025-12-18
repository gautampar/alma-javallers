import Image from 'next/image'
import React from 'react'

function Page() {
    return (
        <div className='bg-[#FFF9F2]'>
            <section className="mt-[156px]">
                <div className='lg:px-[64px] pt-[74px] px-[20px]'>
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[60px] gap-[30px]">
                        <div>
                            <div className="flex gap-[24px]">
                                <div className="flex flex-col max-w-[140px] w-full gap-[16px]">
                                    <Image height={158} width={140} src="/assets/shop/detail.png" className='rounded-[20px] h-[158px] w-full object-cover' alt="" />
                                    <Image height={158} width={140} src="/assets/shop/detail.png" className='rounded-[20px] h-[158px] w-full object-cover' alt="" />
                                    <Image height={158} width={140} src="/assets/shop/detail.png" className='rounded-[20px] h-[158px] w-full object-cover' alt="" />
                                    <Image height={158} width={140} src="/assets/shop/detail.png" className='rounded-[20px] h-[158px] w-full object-cover' alt="" />
                                </div>
                                <div className='relative'>
                                    <div className='bg-[#FFFFFF] font-[400]'>
                                        Just Arrived!
                                    </div>
                                    <Image height={678} width={640} src="/assets/shop/detail.png" className='rounded-[20px] h-[640px] w-full object-cover' alt="" />
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
