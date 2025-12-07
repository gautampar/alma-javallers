"use client"; // agar aap app router (app dir) use kar rahe ho to ye add karna hoga
import Image from "next/image";
import CollectionSlider from "./components/slider/CollectionSlider";
import { useState } from "react";
import RingSlider from "./components/slider/RingSlider";
import GiftSlider from "./components/slider/GiftSlider";
import CategorySlider from "./components/slider/CategorySlider";
import Alma1Slider from "./components/slider/Alma1Slider";
import Alma2Slider from "./components/slider/Alma2Slider";
import HeroSlider from "./components/slider/HeroSlider";


const shop = [
  { imgs: "/assets/shop/img5.jpg", name: " Oxidized ", colors: "/assets/shop/colors.svg" },
  { imgs: "/assets/shop/img4.jpg", name: " 925 Silver ", colors: "/assets/shop/colors.svg" },
  { imgs: "/assets/shop/img5.jpg", name: " Platinum Silver ", colors: "/assets/shop/colors.svg" },
  { imgs: "/assets/shop/img4.jpg", name: " Polished Gold ", colors: "/assets/shop/colors.svg" },
]
const loved = [
  { imgs: "/assets/shop/g1.png", name: " Mother " },
  { imgs: "/assets/shop/g2.png", name: " Sister" },
  { imgs: "/assets/shop/g3.png", name: " Father " },
  { imgs: "/assets/shop/g4.png", name: " Brother " },
  { imgs: "/assets/shop/g5.png", name: " Grandparents " },
  { imgs: "/assets/shop/g6.png", name: " Friends " },
]

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
      <div>
        <HeroSlider />
      </div>

      <section className="overflow-hidden sec-section lg:px-[60px] px-[20px] lg:py-[138px] py-[60px]">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[20px] lg:gap-[36px]">
          {product?.map((e, i) => (
            <div key={i} className="relative w-full">
              <Image
                src={e?.img}
                alt={e?.title}
                width={682}
                height={682}
                className="
            w-full 
            h-[420px] 
            sm:h-[500px] 
            md:h-[550px] 
            lg:h-[650px] 
            object-cover 
            rounded-[12px] sm:rounded-[14px] lg:rounded-[16px]
          "
              />
              <div
                className="
            absolute 
            left-[20px] bottom-[20px]
            sm:left-[30px] sm:bottom-[30px]
            lg:left-[45px] lg:bottom-[45px]
          "
              >
                <h6
                  className="
              font-goudy italic uppercase font-[700] text-white leading-[100%]
              text-[32px] 
              sm:text-[45px] 
              md:text-[55px] 
              lg:text-[80px]
              pb-[8px] sm:pb-[10px] lg:pb-[12px]
            "
                >
                  {e?.title}
                </h6>

                <button
                  className="
              cursor-pointer
              font-goudy font-[700] text-white
              text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px]
              py-[8px] px-[16px]
              sm:py-[10px] sm:px-[20px]
              md:py-[12px] md:px-[22px]
              lg:py-[13px] lg:px-[25px]
              border border-white
              transition-all duration-300 ease-out
              hover:bg-white hover:text-black hover:scale-105
            "
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-[60px] md:py-[80px] lg:py-[102px] overflow-hidden">
        <div
          className="
      flex flex-col md:flex-row justify-between items-start md:items-center
      lg:px-[60px] px-[20px] 
      pb-[30px] md:pb-[40px] lg:pb-[46px]
      gap-[20px] md:gap-0
    "
        >
          <div>
            <p
              className="
          font-goudy font-[700] text-[#2B3136]
          text-[14px] sm:text-[16px] md:text-[18px]
          leading-[100%] pb-[10px] md:pb-[12px]
        "
            >
              OUR TOP COLLECTION
            </p>
            <h6
              className="
          font-pan font-[500] uppercase text-[#2B3136] leading-[100%]
          text-[32px] sm:text-[48px] md:text-[60px] lg:text-[72px]
        "
            >
              Crafted with Culture
            </h6>
          </div>
          <button className="flex items-center cursor-pointer gap-[6px] group">
            <Image
              height={20}
              width={20}
              src="/assets/home/black-arrow.svg"
              alt="arrow"
              className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:w-[20px] md:h-[20px]"
            />
            <p
              className="
          font-pan font-[300] text-[#2B3136]
          underline-animate
          text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px]
          leading-[100%]
        "
            >
              View all
            </p>
          </button>
        </div>
        <div className="lg:pl-[60px] pl-[20px] lg:pr-0 pr-[20px]">
          <CollectionSlider />
        </div>
      </section>

      <section className="pb-[60px] md:py-[80px] lg:py-[102px] overflow-hidden">
        <div
          className="
      flex flex-col md:flex-row justify-between items-start md:items-center
      lg:px-[60px] px-[20px]
      pb-[20px] md:pb-[26px] lg:pb-[30px]
      gap-[20px] md:gap-0
    "
        >
          <div>
            <p
              className="
          font-goudy font-[700] text-[#2B3136]
          text-[14px] sm:text-[16px] md:text-[18px]
          leading-[100%] pb-[8px] md:pb-[12px]
        "
            >
              ALMA MOST LOVED PICKS
            </p>
            <h6
              className="
          font-pan font-[500] uppercase text-[#2B3136] leading-[100%]
          text-[28px] sm:text-[40px] md:text-[52px] lg:text-[72px]
        "
            >
              CURATED JUST FOR YOU
            </h6>
          </div>
          <button className="flex items-center cursor-pointer gap-[6px] group">
            <Image
              height={20}
              width={20}
              src="/assets/home/black-arrow.svg"
              alt="arrow"
              className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:w-[20px] md:h-[20px]"
            />

            <p
              className="
          font-pan font-[300] text-[#2B3136] underline-animate
          text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px]
        "
            >
              View all
            </p>
          </button>
        </div>
        <div
          className="
      flex items-center gap-[16px] sm:gap-[20px]
      lg:px-[60px] px-[20px] 
      pb-[20px] md:pb-[25px] lg:pb-[30px]
      overflow-x-auto scrollbar-hide
    "
        >
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(tab)}
              className={`
          whitespace-nowrap font-goudy cursor-pointer uppercase
          text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px]
          transition-all duration-300
          ${activeTab === tab
                  ? "text-[#2B3136] font-[700]"
                  : "text-[#4E4E4E] font-[400]"
                }
        `}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="lg:px-[60px] px-[20px] overflow-hidden">
          <RingSlider />
        </div>
      </section>

      <section className="hidden bg-[#DAD2BE26] py-[62px] relative bg-cover bg-center bg-no-repeat lg:px-[60px] px-[20px]"
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
      <section className="hidden py-[102px] overflow-hidden">
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
      <section className="hidden bg-[#966846] py-[80px] ">
        <div className="lg:px-[60px] px-[20px]">
          <p className="uppercase font-[700] font-goudy text-[45px] leading-[100%] text-[#FFFFFF] pb-[12px] ">Alma Essentials </p>
          <h6 className="font-[700] font-pan text-[45px] leading-[100%] text-[#FFFFFF] uppercase pb-[42px]">Chandbali Radiance</h6>
        </div>
        <div className="lg:pl-[60px] lg:pr-0 px-[20px] relative overflow-hidden">
          <Alma1Slider />
        </div>
      </section>
      <section className="hidden bg-[#966846] py-[80px] mt-[102px]">
        <div className="lg:px-[60px] px-[20px]">
          <p className="uppercase font-[700] font-goudy text-[45px] leading-[100%] text-[#FFFFFF] pb-[12px] ">Har Banna  ji Ka Style,  </p>
          <h6 className="font-[700] font-pan text-[45px] leading-[100%] text-[#FFFFFF] uppercase pb-[42px]">Ab Ek Click Door</h6>
        </div>
        <div className="lg:pl-[60px] lg:pr-0 px-[20px] relative overflow-hidden">
          <Alma2Slider />
        </div>
      </section>
      <section className="hidden lg:pt-[180px] pt-[100px]">
        <div className="max-w-[1540px] w-full mx-auto">
          <p className="font-[700] font-goudy text-[28px] leading-[1] text-[#2B3136] text-center pb-[12px]">SHOP BY COLOR</p>
          <h6 className="font-[500] font-pan text-[72px] w-full leading-[1] uppercase text-[#2B3136] text-center pb-[44px]">Because every detail says something</h6>
          <div className="max-w-[1215px] w-full mx-auto">
            <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-[25px] gap-[20px]">
              {shop?.map((e, i) => {
                return (
                  <div key={i}>
                    <div className="relative">
                      <div className="absolute bottom-[-22px] left-1/2 -translate-x-1/2">
                        <Image src={e?.colors} height={46} width={49} alt="colors" className="h-[46px] w-[49px] object-cover" />
                      </div>
                      <Image src={e?.imgs} height={339} width={285} alt="gold" className="h-[339px] w-full object-cover" />
                    </div>
                    <h6 className="font-[700] font-goudy text-[32px] leading-[1] text-[#2B3136] text-center pt-[30px] pb-[16px]">{e?.name}</h6>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="hidden lg:py-[101px] py-[80px] border-b border-[#D9D9D9]">
        <div className="max-w-[1540px] w-full mx-auto">
          <p className="font-[700] font-goudy text-[28px] leading-[1] text-[#2B3136] text-center pb-[12px]">GIFTS FOR YOUR LOVED ONES</p>
          <h6 className="font-[500] font-pan text-[42px] w-full leading-[1] uppercase text-[#2B3136] text-center pb-[44px]">SHOW LOVE THROUGH TIMELESS PIECES</h6>
          <div className="max-w-[1215px] w-full mx-auto">
            <div className="grid lg:grid-cols-6 grid-cols-1 lg:gap-[20px] gap-[16px]">
              {loved?.map((e, i) => {
                return (
                  <div key={i}>
                    <Image src={e?.imgs} height={248} width={214} alt="gold" className="h-[248px] w-full object-cover" />
                    <h6 className="font-[700] font-goudy text-[16px] leading-[1] text-[#2B3136] text-center pt-[16px]">{e?.name}</h6>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="hidden py-[62px]">
        <div className="max-w-[1671px] w-full mx-auto">
          <div className="grid lg:grid-cols-4 grid-cols-1">
            <div className="max-w-[216px] w-full">
              <Image src="/assets/shop/icon1.png" height={28} width={28} alt="gold" className="h-[28px] w-[28px] object-cover" />
              <h6 className="font-pan font-[700] text-[15px] leading-[125%] tracking-[1%] text-[#2B3136] uppercase py-[12px]">DELIVERY </h6>
              <p className="font-[400] font-goudy text-[16px] leading-[24px] text-[#2B3136]">Free delivery for orders over ₹150 Worldwide delivery.</p>
            </div>
            <div className="max-w-[216px] w-full">
              <Image src="/assets/shop/icon2.png" height={28} width={28} alt="gold" className="h-[28px] w-[28px] object-cover" />
              <h6 className="font-pan font-[700] text-[15px] leading-[125%] tracking-[1%] text-[#2B3136] uppercase py-[12px]">CUSTOMER CARE </h6>
              <p className="font-[400] font-goudy text-[16px] leading-[24px] text-[#2B3136]">Contact us by email or by phone hello@almajewellery.com +91 7489555674</p>
            </div>
            <div className="max-w-[216px] w-full">
              <Image src="/assets/shop/icon3.png" height={28} width={28} alt="gold" className="h-[28px] w-[28px] object-cover" />
              <h6 className="font-pan font-[700] text-[15px] leading-[125%] tracking-[1%] text-[#2B3136] uppercase py-[12px]">Payment methods </h6>
              <p className="font-[400] font-goudy text-[16px] leading-[24px] text-[#2B3136]">Debit card, credit card & UPI</p>
            </div>
            <div className="max-w-[216px] w-full">
              <Image src="/assets/shop/icon4.png" height={28} width={28} alt="gold" className="h-[28px] w-[28px] object-cover" />
              <h6 className="font-pan font-[700] text-[15px] leading-[125%] tracking-[1%] text-[#2B3136] uppercase py-[12px]">GUARANTEE </h6>
              <p className="font-[400] font-goudy text-[16px] leading-[24px] text-[#2B3136]">Give a second life to your Alma jewellery. For more information , click here.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="hidden bg-[#966846] lg:pt-[80px] pt-[50px] lg:px-[60px] px-[20px] lg:pb-[120px] pb-[80px]">
        <div className="lg:pb-[120px] pb-[60px]">
          <p className="font-[700] font-goudy text-[14px] leading-[1] text-white pb-[24px]">FOLLOW US ON</p>
          <h6 className="font-[700] font-pan text-[100px] leading-[120px] tracking-[2%] text-[#FFFFFF] pb-[27px]">INSTAGRAM</h6>
          <h6 className="font-[700] font-pan text-[12px] leading-[1] text-[#FFFFFF]">Go follow @almajewellery</h6>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1">
          <div>
            <Image src="/assets/shop/item1.png" height={462} width={420} alt="gold" className="h-[462px] w-full object-cover" />
          </div>
          <div>
            <Image src="/assets/shop/item2.png" height={462} width={420} alt="gold" className="h-[462px] w-full object-cover" />
          </div>
          <div>
            <Image src="/assets/shop/item3.png" height={462} width={420} alt="gold" className="h-[462px] w-full object-cover" />
          </div>
          <div>
            <Image src="/assets/shop/item4.png" height={462} width={420} alt="gold" className="h-[462px] w-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}