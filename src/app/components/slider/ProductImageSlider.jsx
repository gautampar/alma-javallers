"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const images = [
    "/assets/shop/detail.png",
    "/assets/shop/detail.png",
    "/assets/shop/detail.png",
    "/assets/shop/detail.png",
];

const ProductImageGallery = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const [sliderRef, slider] = useKeenSlider({
        initial: 0,
        created() {
            setLoaded(true);
        },
        slideChanged(s) {
            setCurrentSlide(s.track.details.rel);
        },
    });

    return (
        <div className="flex gap-[16px]">
            {/* LEFT THUMBNAILS */}
            <div className="flex flex-col gap-[12px]">
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => slider.current?.moveToIdx(index)}
                        className={`border cursor-pointer rounded-[10px] p-[4px] transition-all ${currentSlide === index
                            ? "border-[#A24112]"
                            : "border-[#DDD]"
                            }`}
                    >
                        <Image
                            src={img}
                            alt="thumb"
                            width={140}
                            height={158}
                            className="w-[140px] h-[158px] object-cover rounded-[8px]"
                        />
                    </button>
                ))}
            </div>

            <div className="relative w-full max-w-[640px]">
                <div
                    ref={sliderRef}
                    className="keen-slider rounded-[20px] overflow-hidden"
                >
                    {images.map((img, index) => (
                        <div className="keen-slider__slide" key={index}>
                            <div className="relative">
                                <div className="absolute top-[16px] px-[16px] flex justify-between items-center w-full z-10">
                                    <div className="px-[14px] py-[8px] bg-white rounded-full flex items-center gap-[4px] font-poppins text-[12px] text-[#4B5563] shadow">
                                        <Image
                                            height={11}
                                            width={11}
                                            src="/assets/item/icon1.svg"
                                            alt="icon"
                                        />
                                        Just Arrived!
                                    </div>
                                    <Image
                                        height={20}
                                        width={20}
                                        src="/assets/item/icon2.svg"
                                        alt="like"
                                        className="cursor-pointer"
                                    />
                                </div>

                                <Image
                                    height={678}
                                    width={640}
                                    src={img}
                                    alt=""
                                    className="rounded-[20px] h-[678px] w-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* LEFT ARROW */}
                {loaded && slider.current && (
                    <button
                        onClick={() => slider.current?.prev()}
                        disabled={currentSlide === 0}
                        className={`absolute left-[0px] top-1/2 -translate-y-1/2 z-20
                            shadow
                            transition-all hover:bg-white
                            ${currentSlide === 0 ? "opacity-60 cursor-not-allowed" : ""}
                        `}
                    >
                        <Image
                            src="/assets/item/prev.svg"
                            alt="thumb"
                            width={30}
                            height={65}
                            className="w-[30px] h-[65px] object-cover"
                        />
                    </button>
                )}

                {/* RIGHT ARROW */}
                {loaded && slider.current && (
                    <button
                        onClick={() => slider.current?.next()}
                        disabled={
                            currentSlide ===
                            slider.current.track.details.slides.length - 1
                        }
                        className={`absolute right-[0px] top-1/2 -translate-y-1/2 z-20
                            shadow
                            transition-all hover:bg-white
                            ${currentSlide ===
                                slider.current.track.details.slides.length - 1
                                ? "opacity-60 cursor-not-allowed"
                                : ""
                            }
                        `}
                    >
                        <Image
                            src="/assets/item/next.svg"
                            alt="thumb"
                            width={30}
                            height={65}
                            className="w-[30px] h-[65px] object-cover"
                        />
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProductImageGallery;
