"use client";
import React from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function HeroSlider() {
    const [sliderInstanceRef, slider] = useKeenSlider({
        loop: true,
        slides: { perView: 1 },
        drag: true,
        autoplay: true,
    });

    const slides = [
        {
            bg: "/assets/home/hero-bg.png",
            img: "/assets/home/img1.png",
            title: "CC EARRINGS ARE BACK",
        },
        {
            bg: "/assets/home/hero-bg.png",
            img: "/assets/home/img1.png",
            title: "NEW DESIGNS AVAILABLE",
        },
    ];

    return (
        <section className="overflow-hidden relative mt-[0px] md:mt-[0px] lg:mt-[0px]">
            <div ref={sliderInstanceRef} className="keen-slider">

                {slides.map((item, index) => (
                    <div key={index} className="keen-slider__slide relative">
                        <Image
                            src={item.bg}
                            alt="hero-bg"
                            width={1920}
                            height={873}
                            className="w-full h-[60vh] md:h-[70vh] lg:h-[873px] object-cover"
                        />
                        <h1
                            className="
                font-goudy italic text-white font-[400]
                absolute left-[20px] md:left-[40px] lg:left-[60px]
                top-[40px] lg:top-[103px]
                leading-[95%]
                text-[42px] lg:text-[100px] 2xl:text-[122px]
                max-w-[300px] md:max-w-[450px] lg:max-w-[566px]
              "
                        >
                            {item.title.split(" ").slice(0, 2).join(" ")} <br />{" "}
                            {item.title.split(" ").slice(2).join(" ")}
                        </h1>
                        <div
                            className="
                absolute cursor-pointer 
                left-1/2 -translate-x-1/2 
                bottom-[40px] md:bottom-[80px] lg:bottom-[130px] 
                flex items-center gap-[6px]
              "
                        >
                            <Image
                                src="/assets/home/btn.svg"
                                alt="btn-arrow"
                                width={12}
                                height={16}
                                className="h-[14px] md:h-[16px] w-[10px] md:w-[12px] object-cover arrow-animation"
                            />

                            <p className="font-[600] font-cormorant text-[14px] md:text-[16px] text-white leading-[100%]">
                                Explore now
                            </p>
                        </div>

                        <div
                            className="
                absolute 
                bottom-[20px] md:bottom-[40px] lg:bottom-[64px] 
                right-[20px] md:right-[80px] lg:right-[215px]
              "
                        >
                            <Image
                                src={item.img}
                                alt="img1"
                                width={258}
                                height={406}
                                className="
                  object-cover rounded-[80px] md:rounded-[127.5px]
                  w-[130px] h-[190px]
                  md:w-[200px] md:h-[320px]
                  lg:w-[258px] lg:h-[406px]
                  smooth-bounce
                "
                            />
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={() => slider.current?.next()}
                className="absolute lg:right-[78px] right-[20px] lg:bottom-[78px] bottom-[20px] z-10 cursor-pointer"
            >
                <Image
                    src="/assets/home/right-arrow.svg"
                    alt="next"
                    width={50}
                    height={50}
                />
            </button>
        </section>
    );
}
