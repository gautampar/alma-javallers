"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const list = [
    { id: 1, imgs: "/assets/home/item1.png", name: "Royal Kada", price: "₹145.00", off: "20% Off" },
    { id: 2, imgs: "/assets/home/item2.png", name: "Royal Ring", price: "₹145.00", off: "20% Off" },
    { id: 3, imgs: "/assets/home/item3.png", name: "Oxidized Earrings", price: "₹145.00", off: "20% Off" },
    { id: 4, imgs: "/assets/home/item4.png", name: "Crafted Bangles", price: "₹145.00", off: "20% Off" },
    { id: 5, imgs: "/assets/home/item5.png", name: "Nose Pin/Ring", price: "₹145.00", off: "20% Off" },
    { id: 6, imgs: "/assets/home/item1.png", name: "Royal Kada", price: "₹145.00", off: "20% Off" },
    { id: 7, imgs: "/assets/home/item2.png", name: "Royal Ring", price: "₹145.00", off: "20% Off" },
    { id: 8, imgs: "/assets/home/item3.png", name: "Oxidized Earrings", price: "₹145.00", off: "20% Off" },
    { id: 9, imgs: "/assets/home/item4.png", name: "Crafted Bangles", price: "₹145.00", off: "20% Off" },
    { id: 10, imgs: "/assets/home/item5.png", name: "Nose Pin/Ring", price: "₹145.00", off: "20% Off" },
];

const Autoplay = (slider) => {
    let timeout;
    let mouseOver = false;

    function clearNextTimeout() {
        clearTimeout(timeout);
    }

    function nextTimeout() {
        clearTimeout(timeout);
        if (mouseOver) return;
        timeout = setTimeout(() => slider.next(), 2000); // autoplay speed
    }

    slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
        });
        slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
        });
        nextTimeout();
    });

    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", nextTimeout);
    slider.on("updated", nextTimeout);
};



export default function RingSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderRef, slider] = useKeenSlider(
        {
            loop: true,
            slides: {
                perView: 4.5,
                spacing: 20,
            },

            breakpoints: {
                "(max-width: 1440px)": {
                    slides: { perView: 3.5, spacing: 15 },
                },
                "(max-width: 1024px)": {
                    slides: { perView: 2.5, spacing: 15 },
                },
                "(max-width: 640px)": {
                    slides: { perView: 1, spacing: 10 },
                },
            },

            slideChanged(slide) {
                setCurrentSlide(slide.track.details.rel);
            },
        },

        // --- ADD AUTOPLAY HERE ---
        [Autoplay]
    );


    const goNext = () => slider?.current?.next?.();
    const goPrev = () => slider?.current?.prev?.();

    const goToSlide = (val) => {
        instanceRef.current?.moveToIdx(val);
        setCurrentSlide(val);
    };

    return (
        <div className="relative lg:px-[60px] px-[20px]">
            <div ref={sliderRef} className="keen-slider">
                {list.map((e) => (
                    <div key={e.id} className="keen-slider__slide">
                        <div className="border border-[#DDDCDC] lg:px-[16px] pt-[11px] pb-[33px]">
                            <div className="flex items-center justify-between pb-[28px]">
                                <button className="bg-[#A24112] rounded-[5px] py-[9px] px-[13px] text-white text-[10px] font-bold">
                                    {e.off}
                                </button>
                                <div className="like-btn" />
                            </div>
                            <div className="h-[225px] w-full flex justify-center">
                                <Image
                                    height={225}
                                    width={204}
                                    alt="ring"
                                    className="h-[204px] w-full object-cover"
                                    src={e.imgs}
                                />
                            </div>

                            <h6 className="font-[700] font-goudy text-[18px] pb-[4px] mt-[10px]">{e.name}</h6>
                            <p className="font-[500] font-goudy text-[14px] italic pb-[16px]">{e.price}</p>

                            <div className="flex items-center gap-[28px]">
                                <Image height={32} width={41} src="/assets/home/cart.svg" className="cursor-pointer" alt="Cart" />
                                <button className="btn-buy cursor-pointer">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={goPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer z-20"
                aria-label="Previous"
            >
                <Image src="/assets/home/prev-arrow.svg" height={39} width={39} alt="Prev" />
            </button>
            <button
                onClick={goNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer z-20"
                aria-label="Next"
            >
                <Image src="/assets/home/next-arrow.svg" height={39} width={39} alt="Next" />
            </button>
            <div className="mt-6 w-full select-none">
                <div className="w-full h-[6px] bg-[#FFFFFF] rounded-full relative">
                    <div
                        className="h-[6px] bg-[#2B3136] rounded-full absolute top-0 left-0 transition-all duration-300"
                        style={{
                            width: `${(currentSlide / (list.length - 1)) * 100}%`
                        }}
                    ></div>
                    <div
                        className="absolute -top-[7px]  cursor-pointer transition-all duration-200"
                        style={{
                            left: `calc(${(currentSlide / (list.length - 1)) * 100}% - 10px)`
                        }}
                        onMouseDown={(e) => {
                            const bar = e.target.parentElement;

                            const move = (ev) => {
                                const rect = bar.getBoundingClientRect();
                                const x = ev.clientX - rect.left;

                                let percent = x / rect.width;
                                percent = Math.max(0, Math.min(1, percent));

                                const index = percent * (list.length - 1);
                                goToSlide(Math.round(index));
                            };

                            const stop = () => {
                                window.removeEventListener("mousemove", move);
                                window.removeEventListener("mouseup", stop);
                            };

                            window.addEventListener("mousemove", move);
                            window.addEventListener("mouseup", stop);
                        }}
                    ></div>
                </div>
            </div>

        </div>
    );
}
