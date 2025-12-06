"use client"; // agar aap app router (app dir) use kar rahe ho to ye add karna hoga
import Image from "next/image";
import CollectionSlider from "./components/slider/CollectionSlider";
import { useState } from "react";
import RingSlider from "./components/slider/RingSlider";
import GiftSlider from "./components/slider/GiftSlider";
import CategorySlider from "./components/slider/CategorySlider";
import Alma1Slider from "./components/slider/Alma1Slider";
import Alma2Slider from "./components/slider/Alma2Slider";

const product = [
  { img: "/assets/home/img2.png", title: "For Him" },
  { img: "/assets/home/img3.png", title: "For Her" },
  { img: "/assets/home/img4.png", title: "For unisex" },
]

export default function Home() {
  const tabs = ["RINGS", "BRACELETS", "PENDENTS", "EARRINGS", "NECKLACES"];
  const categories = ["RINGS", "BRACELETS", "PENDENTS", "EARRINGS", "NECKLACES"];

  const [activeTab, setActiveTab] = useState("RINGS");
  const [activeCat, setActiveCat] = useState("RINGS");


  return (
    <div className="bg-[#FFF9F2]">
      <section className="overflow-hidden mt-[186px]">
        <Image
          src="/assets/home/hero-bg.png"
          alt="hero-bg"
          width={1920}
          height={873}
          className="h-[873px] w-full object-cover"
        />
        <h1 className="font-[400] italic text-[122px] max-w-[566px] w-full text-[#FFFFFF] absolute left-[60px] top-[290px] font-goudy leading-[100%]">
          CC EARRINGS ARE
          BACK
        </h1>
        <div className="absolute cursor-pointer left-1/2 -translate-x-1/2 bottom-[130px] flex items-center gap-[6px]">
          <Image
            src="/assets/home/btn.svg"
            alt="btn-arrow"
            width={12}
            height={16}
            className="h-[16px] w-[12px] object-cover arrow-animation"
          />

          <p className="font-[600] font-cormorant text-[16px] leading-[100%] text-[#FFFFFF]">Explore now</p>
        </div>
        <div className="absolute bottom-[64px] right-[215px]">
          <Image
            src="/assets/home/img1.png"
            alt="img1"
            width={258}
            height={406}
            className="h-[406px] w-[258px] rounded-[127.5px] object-cover"
          />
        </div>
        <div className="absolute bottom-[64px] right-[215px]">
          <Image
            src="/assets/home/img1.png"
            alt="img1"
            width={258}
            height={406}
            className="h-[406px] w-[258px] smooth-bounce rounded-[127.5px] object-cover"
          />
        </div>
      </section>
      <section className="overflow-hidden sec-section lg:px-[60px] px-[20px] lg:py-[138px] py-[60px]">
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-[36px] gap-[20px]">
          {product?.map((e, i) => {
            return (
              <div key={i} className="relative">
                <Image
                  src={e?.img}
                  alt={e?.img}
                  width={682}
                  height={682}
                  className="h-[682px] w-[580px] rounded-[16px] object-cover"
                />
                <div className="absolute left-[45px] bottom-[45px]">
                  <h6 className="font-[700] font-goudy italic uppercase pb-[12px] text-[80px] leading-[100%] text-[#FFFFFF]">{e?.title}</h6>
                  <button className="cursor-pointer
  font-goudy font-[700] text-[28px] leading-[100%] text-[#FFFFFF]
  py-[13px] px-[25px] border border-[#FFFFFF]
  transition-all duration-300 ease-out
  hover:bg-[#FFFFFF] hover:text-[#000000] hover:scale-105
">
                    Buy Now
                  </button>

                </div>
              </div>
            )
          })}
        </div>
      </section>
      <section className="py-[102px] overflow-hidden">
        <div className="flex justify-between items-center lg:px-[60px] px-[20px] pb-[46px]">
          <div>
            <p className="font-[700] font-goudy text-[18px] leading-[100%] text-[#2B3136] pb-[12px]">OUR TOP COLLECTION</p>
            <h6 className="font-pan font-[500] text-[72px] leading-[100%] uppercase text-[#2B3136]">Crafted with Culture</h6>
          </div>
          <button className="flex items-center cursor-pointer gap-[6px] group">
            <Image
              height={20}
              width={20}
              src="/assets/home/black-arrow.svg"
              alt="arrow"
            />
            <p className="font-pan font-[300] text-[28px] leading-[100%] text-[#2B3136] underline-animate">
              View all
            </p>
          </button>
        </div>
        <div className="lg:pl-[60px] pl-[20px]">
          <CollectionSlider />
        </div>
      </section>
      <section className="pb-[102px] overflow-hidden">
        <div className="flex justify-between items-center lg:px-[60px] px-[20px] pb-[30px]">
          <div>
            <p className="font-[700] font-goudy text-[18px] leading-[100%] text-[#2B3136] pb-[12px]"> ALMA MOST LOVED PICKS</p>
            <h6 className="font-pan font-[500] text-[72px] leading-[100%] uppercase text-[#2B3136]">CURATED JUST FOR YOU</h6>
          </div>
          <button className="flex items-center cursor-pointer gap-[6px] group">
            <Image
              height={20}
              width={20}
              src="/assets/home/black-arrow.svg"
              alt="arrow"
            />
            <p className="font-pan font-[300] text-[28px] leading-[100%] text-[#2B3136] underline-animate">
              View all
            </p>
          </button>
        </div>
        <div className="flex items-center gap-[20px] lg:px-[60px] px-[20px] pb-[30px]">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(tab)}
              className={`tab-btn font-goudy cursor-pointer text-[24px] uppercase ${activeTab === tab
                ? "active text-[#2B3136] font-[700]"
                : "text-[#4E4E4E] font-[400]"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="lg:px-[60px] px-[20px] overflow-hidden">
          <RingSlider />
        </div>
      </section>
      <section
        className="bg-[#DAD2BE26] py-[62px] relative bg-cover bg-center bg-no-repeat lg:px-[60px] px-[20px]"
        style={{
          backgroundImage: "url('/assets/home/bg2.svg')"
        }}
      >
        <div>
          <p className="font-[700] font-goudy text-[18px] leading-[100%] text-[#2B3136] pb-[12px]"> GIFTING ON A BUDGET</p>
          <h6 className="font-pan font-[500] text-[72px] leading-[100%] uppercase text-[#2B3136] pb-[76px]">Minimal yet Meaningful Picks for You</h6>
        </div>
        <div className="px-[20px] ">
          <GiftSlider />
        </div>
      </section>
      <section className="py-[102px] overflow-hidden">
        <div className="flex justify-between items-center lg:px-[60px] px-[20px] pb-[30px]">
          <div>
            <p className="font-[700] font-goudy text-[18px] leading-[100%] text-[#2B3136] pb-[12px]"> ALMA MOST LOVED PICKS</p>
            <h6 className="font-pan font-[500] text-[72px] leading-[100%] uppercase text-[#2B3136]">CURATED JUST FOR YOU</h6>
          </div>
          <button className="flex items-center cursor-pointer gap-[6px] group">
            <Image
              height={20}
              width={20}
              src="/assets/home/black-arrow.svg"
              alt="arrow"
            />
            <p className="font-pan font-[300] text-[28px] leading-[100%] text-[#2B3136] underline-animate">
              View all
            </p>
          </button>
        </div>
        <div className="flex items-center gap-[20px] lg:px-[60px] px-[20px] pb-[30px]">
          {categories.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveCat(tab)}
              className={`tab-btn cursor-pointer font-goudy text-[24px] uppercase ${activeCat === tab
                ? "active text-[#2B3136] font-[700]"
                : "text-[#4E4E4E] font-[400]"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="lg:px-[60px] px-[20px] overflow-hidden">
          <CategorySlider />
        </div>
      </section>
      <section className="bg-[#966846] py-[80px] ">
        <div className="lg:px-[60px] px-[20px]">
          <p className="uppercase font-[700] font-goudy text-[45px] leading-[100%] text-[#FFFFFF] pb-[12px] ">Alma Essentials </p>
          <h6 className="font-[700] font-pan text-[45px] leading-[100%] text-[#FFFFFF] uppercase pb-[42px]">Chandbali Radiance</h6>
        </div>
        <div className="lg:pl-[60px] lg:pr-0 px-[20px] relative overflow-hidden">
          <Alma1Slider />
        </div>
      </section>
      <section className="bg-[#966846] py-[80px] mt-[102px]">
        <div className="lg:px-[60px] px-[20px]">
          <p className="uppercase font-[700] font-goudy text-[45px] leading-[100%] text-[#FFFFFF] pb-[12px] ">Har Banna  ji Ka Style,  </p>
          <h6 className="font-[700] font-pan text-[45px] leading-[100%] text-[#FFFFFF] uppercase pb-[42px]">Ab Ek Click Door</h6>
        </div>
        <div className="lg:pl-[60px] lg:pr-0 px-[20px] relative overflow-hidden">
          <Alma2Slider />
        </div>
      </section>
    </div>
  );
}