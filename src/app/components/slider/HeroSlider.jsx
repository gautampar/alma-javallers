"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

function HeroSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <section className="mt-[50px] lg:mt-[76px]">
                        <div className="max-w-[1440px] w-full mx-auto px-[20px] lg:px-[60px] pt-[40px] pb-[40px] lg:pt-[60px] lg:pb-[60x]">
                            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[40px] lg:gap-[0px]">
                                <div className="text-center lg:text-left">
                                    <h1 className="font-[700] text-[32px] lg:text-[46px] text-justify leading-[130%] font-lexend text-[#000000BF] pb-[30px]">
                                        India’s Foremost Consumer Data Intelligence Company
                                    </h1>
                                    <p className="font-[600] text-[18px] lg:text-[20px] text-justify leading-[26px] lg:leading-[27px] font-satoshi text-[#575757]pb-[30px] lg:pb-[30px]">
                                        Join our mission to provide essential support and resources to underprivileged communities around the world.
                                    </p>
                                    <button className="py-[16px] lg:py-[20px] px-[28px] lg:px-[30px] font-[700] text-[16px] lg:text-[17px] leading-[24px] lg:leading-[27px] text-center border border-[#990097] rounded-[12px] text-[#990097]
          hover:bg-[#990097] hover:text-white transition-all duration-300 ease-in-out">
                                        Our Offerings
                                    </button>
                                </div>
                                <div className="flex justify-center lg:justify-end">
                                    <Image
                                        height={355}
                                        width={565}
                                        src="/assets/home/img2.png"
                                        alt="img1"
                                        className="rounded-[20px] object-cover w-full max-w-[500px] lg:max-w-[565px] h-auto"
                                    />
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
                <div>
                    <section className="mt-[50px] lg:mt-[76px]">
                      <div className="max-w-[1440px] w-full mx-auto px-[20px] lg:px-[60px] pt-[40px] pb-[40px] lg:pt-[60px] lg:pb-[60x]">
                            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[40px] lg:gap-[0px]">
                                <div className="text-center lg:text-left">
                                    <h1 className="font-[700] text-[32px] lg:text-[46px] text-justify leading-[130%] font-lexend text-[#000000BF] pb-[30px]">
                                        India’s Foremost Consumer Data Intelligence Company
                                    </h1>
                                    <p className="font-[600] text-[18px] lg:text-[20px] text-justify leading-[26px] lg:leading-[27px] font-satoshi text-[#575757]pb-[30px] lg:pb-[30px]">
                                        Join our mission to provide essential support and resources to underprivileged communities around the world.
                                    </p>
                                    <button className="py-[16px] lg:py-[20px] px-[28px] lg:px-[30px] font-[700] text-[16px] lg:text-[17px] leading-[24px] lg:leading-[27px] text-center border border-[#990097] rounded-[12px] text-[#990097]
          hover:bg-[#990097] hover:text-white transition-all duration-300 ease-in-out">
                                        Our Offerings
                                    </button>
                                </div>
                                <div className="flex justify-center lg:justify-end">
                                    <Image
                                        height={355}
                                        width={565}
                                        src="/assets/home/img2.png"
                                        alt="img1"
                                        className="rounded-[20px] object-cover w-full max-w-[500px] lg:max-w-[565px] h-auto"
                                    />
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
                <div>
                    <section className="mt-[50px] lg:mt-[76px]">
                      <div className="max-w-[1440px] w-full mx-auto px-[20px] lg:px-[60px] pt-[40px] pb-[40px] lg:pt-[60px] lg:pb-[60x]">
                            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[40px] lg:gap-[0px]">
                                <div className="text-center lg:text-left">
                                    <h1 className="font-[700] text-[32px] lg:text-[46px] text-justify leading-[130%] font-lexend text-[#000000BF] pb-[30px]">
                                        India’s Foremost Consumer Data Intelligence Company
                                    </h1>
                                    <p className="font-[600] text-[18px] lg:text-[20px] text-justify leading-[26px] lg:leading-[27px] font-satoshi text-[#575757]pb-[30px] lg:pb-[30px]">
                                        Join our mission to provide essential support and resources to underprivileged communities around the world.
                                    </p>
                                    <button className="py-[16px] lg:py-[20px] px-[28px] lg:px-[30px] font-[700] text-[16px] lg:text-[17px] leading-[24px] lg:leading-[27px] text-center border border-[#990097] rounded-[12px] text-[#990097]
          hover:bg-[#990097] hover:text-white transition-all duration-300 ease-in-out">
                                        Our Offerings
                                    </button>
                                </div>
                                <div className="flex justify-center lg:justify-end">
                                    <Image
                                        height={355}
                                        width={565}
                                        src="/assets/home/img2.png"
                                        alt="img1"
                                        className="rounded-[20px] object-cover w-full max-w-[500px] lg:max-w-[565px] h-auto"
                                    />
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
                <div>
                    <section className="mt-[50px] lg:mt-[76px]">
                      <div className="max-w-[1440px] w-full mx-auto px-[20px] lg:px-[60px] pt-[40px] pb-[40px] lg:pt-[60px] lg:pb-[60x]">
                            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[40px] lg:gap-[0px]">
                                <div className="text-center lg:text-left">
                                    <h1 className="font-[700] text-[32px] lg:text-[46px] text-justify leading-[130%] font-lexend text-[#000000BF] pb-[30px]">
                                        India’s Foremost Consumer Data Intelligence Company
                                    </h1>
                                    <p className="font-[600] text-[18px] lg:text-[20px] text-justify leading-[26px] lg:leading-[27px] font-satoshi text-[#575757]pb-[30px] lg:pb-[30px]">
                                        Join our mission to provide essential support and resources to underprivileged communities around the world.
                                    </p>
                                    <button className="py-[16px] lg:py-[20px] px-[28px] lg:px-[30px] font-[700] text-[16px] lg:text-[17px] leading-[24px] lg:leading-[27px] text-center border border-[#990097] rounded-[12px] text-[#990097]
          hover:bg-[#990097] hover:text-white transition-all duration-300 ease-in-out">
                                        Our Offerings
                                    </button>
                                </div>
                                <div className="flex justify-center lg:justify-end">
                                    <Image
                                        height={355}
                                        width={565}
                                        src="/assets/home/img2.png"
                                        alt="img1"
                                        className="rounded-[20px] object-cover w-full max-w-[500px] lg:max-w-[565px] h-auto"
                                    />
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </Slider>
        </div>
    );
}

export default HeroSlider;
