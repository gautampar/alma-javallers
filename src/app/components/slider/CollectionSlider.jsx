"use client";
import React from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const list = [
    { imgs: "/assets/home/img5.png", name: "Crafted Bangles" },
    { imgs: "/assets/home/img6.png", name: "Rajputana Broch" },
    { imgs: "/assets/home/img7.png", name: "Cham Cham Payal" },
    { imgs: "/assets/home/img8.png", name: "Stone Bracelet" },
    { imgs: "/assets/home/img5.png", name: "Crafted Bangles" },
    { imgs: "/assets/home/img6.png", name: "Rajputana Broch" },
    { imgs: "/assets/home/img7.png", name: "Cham Cham Payal" },
    { imgs: "/assets/home/img8.png", name: "Stone Bracelet" },
];

function AutoplayPlugin(delay = 2500) {
    return (slider) => {
        let timeout;
        let mouseOver = false;

        function clearNextTimeout() {
            clearTimeout(timeout);
        }

        function nextTimeout() {
            clearTimeout(timeout);
            if (!mouseOver) {
                timeout = setTimeout(() => {
                    slider.next();
                }, delay);
            }
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
}

function CollectionSlider() {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            slides: {
                perView: 6,
                spacing: 20,
            },

            // ⭐ Responsive breakpoints
            breakpoints: {
                "(min-width: 350px)": {
                    slides: { perView: 1, spacing: 15 },
                },
                "(min-width: 425px)": {
                    slides: { perView: 1.1, spacing: 15 },
                },
                "(min-width: 480px)": {
                    slides: { perView: 1.4, spacing: 15 },
                },
                "(min-width: 768px)": {
                    slides: { perView: 3, spacing: 20 },
                },
                "(min-width: 1024px)": {
                    slides: { perView: 4, spacing: 20 },
                },
                "(min-width: 1280px)": {
                    slides: { perView: 5, spacing: 20 },
                },
                "(min-width: 1500px)": {
                    slides: { perView: 6.5, spacing: 20 },
                },
            },
        },
        [AutoplayPlugin(2500)]
    );


    return (
        <div className="overflow-hidden">
            <div ref={sliderRef} className="keen-slider">
                {list?.map((e, i) => (
                    <div key={i} className="keen-slider__slide">
                        <div className="w-full">
                            <Image
                                width={312}
                                height={302}
                                src={e?.imgs}
                                className="rounded-[16px] h-[302px] w-full object-cover"
                                alt=""
                            />
                            <p className="font-[700] text-[32px] leading-[100%] text-[#2B3136] font-goudy pt-[56px]">
                                {e?.name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CollectionSlider;
