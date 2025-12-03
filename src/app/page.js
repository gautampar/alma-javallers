"use client"; // agar aap app router (app dir) use kar rahe ho to ye add karna hoga
import Image from "next/image";

const product = [
  { img: "/assets/home/img2.png", title: "For Him" },
  { img: "/assets/home/img3.png", title: "For Her" },
  { img: "/assets/home/img4.png", title: "For unisex" },
]

export default function Home() {

  return (
    <div>
      <section className="overflow-hidden mt-[186px]">
        <Image
          src="/assets/home/hero-bg.png"
          alt="hero-bg"
          width={1920}
          height={873}
          className="h-[873px] w-full object-cover"
        />
        <h1 className="font-[400] italic text-[122px] max-w-[566px] w-full text-[#FFFFFF] absolute left-[61px] top-[290px] font-goudy leading-[100%]">
          CC EARRINGS ARE
          BACK
        </h1>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[130px] flex items-center gap-[6px]">
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
      <section className="overflow-hidden sec-section lg:px-[54px] px-[20px] lg:py-[138px] py-[60px]">
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
                  <button className="
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
    </div>
  );
}