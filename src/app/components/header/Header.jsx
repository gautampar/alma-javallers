"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const menu = [
  { name: "All Jewellery", path: "/" },
  { name: "New Arrivals", path: "/about" },
  { name: "Best-Sellers", path: "/solutions" },
  { name: "Silver", path: "/clients" },
  { name: "Earrings", path: "/blog" },
  { name: "Rings", path: "/career" },
  { name: "Women", path: "/contact-us" },
  { name: "Men", path: "/contact-us" },
  { name: "Gifting", path: "/contact-us" },
  { name: "Daily Wear", path: "/contact-us" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="py-[20px] bg-white lg:px-[64px] px-[20px] fixed top-0 left-0 w-full z-[100] shadow-sm">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/assets/nav/logo.svg"
              alt="logo"
              width={150}
              height={60}
              className="object-cover"
            />
          </Link>
          <div className="hidden lg:flex gap-[30px]">
            <Image src="/assets/nav/search.svg" width={22} height={24} alt="search" />
            <Image src="/assets/nav/heart.svg" width={26} height={22} alt="heart" />
            <Image src="/assets/nav/Group.svg" width={20} height={24} alt="cart" />
          </div>
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            <Image
              src="/assets/nav/hamburger.svg"
              width={30}
              height={30}
              alt="menu"
            />
          </button>
        </div>

        <div className="pt-[15px] hidden lg:block">
          <ul className="flex justify-center gap-[40px]">
            {menu.map((item, index) => {
              const isActive = pathname === item.path;

              return (
                <li key={index} className="group relative cursor-pointer">
                  <Link
                    href={item.path}
                    className={`text-[16px] font-pan leading-[40px] tracking-[0.2px] transition-all duration-300
                ${isActive ? "text-[#2B3136] font-semibold" : "text-[#2B3136]"}
              `}
                  >
                    {item.name}
                  </Link>
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] bg-[#2B3136] transition-all duration-300
                ${isActive ? "w-full" : "w-0 group-hover:w-full"}
              `}
                  />
                </li>
              );
            })}

          </ul>
        </div>
        {open && (
          <div className="lg:hidden mt-[15px] bg-white shadow-md rounded-[10px] p-[20px]">
            <ul className="flex flex-col gap-[20px]">
              {menu.map((item, index) => (
                <li
                  key={index}
                  className="text-[16px] font-pan text-[#2B3136] pb-[10px] border-b border-gray-200 cursor-pointer"
                >
                  {item.name}
                </li>
              ))}
            </ul>
            <div className="flex gap-[20px] mt-[20px]">
              <Image src="/assets/nav/search.svg" width={22} height={24} alt="search" />
              <Image src="/assets/nav/heart.svg" width={26} height={22} alt="heart" />
              <Image src="/assets/nav/Group.svg" width={20} height={24} alt="cart" />
            </div>
          </div>
        )}
      </nav>
      {/* <div className="relative bg-[#DAD2BE4D]">
        <Image src="/assets/nav/sub-bg.svg" alt="sub" height={110} width={1920} className="object-cover h-[110px] w-full" />
        <div className="absolute top-1/2 -translate-y-1/2 left-[78px] w-full">
          <h1 className="font-pan text-[#2B3136] text-[32px] leading-[100%]">Need precise delivery time? <span className="font-bold underline">Login Now</span></h1>
        </div>
      </div> */}
    </>
  );
}

export default Header;
