"use client"; // agar aap app router (app dir) use kar rahe ho to ye add karna hoga
import Image from "next/image";


export default function Home() {

  return (
    <div>
      <section className="hero ">
      <div className="login">
        <div className="bg-[url('/assets/home/login-bg.png')] bg-[#DAD2BE]/30% bg-cover bg-center py-[40px] pl-[78px]">
          <h1 className="font-normal font-[#2B3136] not-italic text-[32px] leading-[100%] tracking-normal">Need precise delivery time? <span className="font-[#2B3136] font-bold text-[32px] leading-[100%] tracking-normal underline">Login Now</span></h1>
        </div>
      </div>
        <div className="w-full bg-[url('/assets/home/hero-bg.png')] bg-no-repeat bg-cover ">
          <h1 className="font-normal text-[122px] text-white leading-[100%] tracking-normal pl-[60px]  pt-[100px]">
            CC<br />
            EARRINGS<br />
            ARE <br />
            BACK
          </h1>
        </div>
      </section>
    </div>
  );
}