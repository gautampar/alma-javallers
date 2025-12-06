"use client";
import React from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const giftList = [
  { id: 1, img: "/assets/home/sky.svg", title: "Under ₹99" },
  { id: 2, img: "/assets/home/sky.svg", title: "Under ₹199" },
  { id: 3, img: "/assets/home/sky.svg", title: "Gifts for Her" },
  { id: 4, img: "/assets/home/sky.svg", title: "Gifts for Him" },
  { id: 5, img: "/assets/home/sky.svg", title: "Special Combos" },
];

export default function GiftSlider() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 4,
      spacing: 20,
    },
    breakpoints: {
      "(max-width:1024px)": { slides: { perView: 3, spacing: 15 } },
      "(max-width:768px)": { slides: { perView: 2.5, spacing: 10 } },
      "(max-width:640px)": { slides: { perView: 1, spacing: 10 } },
    },
    created(slider) {
      let interval = setInterval(() => {
        slider.next();
      }, 2000);

      slider.on("mouseover", () => clearInterval(interval));
      slider.on("mouseout", () => {
        interval = setInterval(() => slider.next(), 2000);
      });
    },
  });

  const goNext = () => slider.current?.next();
  const goPrev = () => slider.current?.prev();

  return (
    <div className="relative max-w-[1572px] w-full mx-auto">
      <div ref={sliderRef} className="keen-slider max-w-[1140px] mx-auto">
        {giftList.map((item) => (
          <div key={item.id} className="keen-slider__slide">
            <div className="relative w-full rounded-[20px] overflow-hidden">
              <Image
                height={200}
                width={270}
                src={item.img}
                alt="sky"
                className="w-full h-auto object-cover"
              />

              <h6 className="font-[700] font-goudy italic text-[31px] leading-[40px] text-white tracking-[10%] absolute top-[68px] left-[86px] max-w-[99px] w-full">
                {item.title}
              </h6>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={goPrev}
        className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 z-10"
      >
        <Image
          src="/assets/home/prev-arrow.svg"
          height={40}
          width={40}
          alt="prev"
        />
      </button>

      <button
        onClick={goNext}
        className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 z-10"
      >
        <Image
          src="/assets/home/next-arrow.svg"
          height={40}
          width={40}
          alt="next"
        />
      </button>
    </div>
  );
}
