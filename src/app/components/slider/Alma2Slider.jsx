"use client";
import React from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";

export default function Alma2Slider() {
    const [sliderRef] = useKeenSlider({
        loop: true,
        slides: {
            perView: 4.3,
            origin: "auto",
            spacing: 20,
        },

        autoplay: true,

        breakpoints: {
            "(max-width: 1440px)": {
                slides: { perView: 3.3, spacing: 20 },
            },
            "(max-width: 1024px)": {
                slides: { perView: 2.8, spacing: 20 },
            },
            "(max-width: 768px)": {
                slides: { perView: 2, spacing: 20 },
            },
            "(max-width: 425px)": {
                slides: { perView: 1, spacing: 20 },
            },
        },

        created(slider) {
            let interval = setInterval(() => {
                slider.next();
            }, 2000);

            slider.on("destroyed", () => clearInterval(interval));
        },
    });

    const cards = [
        { id: 1, img: "/assets/shop/img2.png" },
        { id: 2, img: "/assets/shop/img3.png" },
        { id: 3, img: "/assets/shop/img2.png" },
        { id: 4, img: "/assets/shop/img3.png" },
        { id: 5, img: "/assets/shop/img2.png" },
        { id: 6, img: "/assets/shop/img3.png" },
        { id: 7, img: "/assets/shop/img2.png" },
        { id: 8, img: "/assets/shop/img3.png" },
    ];

    return (
        <div className="overflow-hidden">
            <div ref={sliderRef} className="keen-slider">
                {cards.map((e) => (
                    <div key={e.id} className="keen-slider__slide">

                        <div
                            className="rounded-[16px] relative overflow-hidden
              group hover:scale-[1] transition-all duration-500 ease-out
              cursor-pointer"
                        >
                            <Image
                                src={e.img}
                                height={402}
                                width={412}
                                className="rounded-[16px] w-full h-full object-cover
                transition-transform duration-700 ease-out
                group-hover:scale-110"
                                alt="img"
                            />

                            <div
                                className="rounded-b-[16px] absolute bottom-0 left-0 w-full
                py-[20px] px-[14px] transition-all duration-500 ease-out"
                                style={{
                                    background:
                                        "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.58) 100%)",
                                }}
                            >
                                <h6 className="font-[700] font-goudy text-[20px] leading-[1] tracking-[2px] text-[#FFFFFF] pb-[12px]">
                                    YOUR EVERYDAY JEWELLERY
                                </h6>

                                <p className="font-[400] font-goudy text-[12px] leading-[1] pb-[12px] text-[#FFFFFF] tracking-[1px]">
                                    Effortless, Elegant Essentials
                                </p>

                                <button
                                    className="font-goudy cursor-pointer font-[700] text-[14px] leading-[100%] text-[#FFFFFF]
                  py-[5px] px-[15px] border border-[#FFFFFF]
                  transition-all duration-300 ease-out
                  group-hover:bg-[#FFFFFF] group-hover:text-[#000000]
                  group-hover:shadow-[0_0_12px_rgba(255,255,255,0.7)]"
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
