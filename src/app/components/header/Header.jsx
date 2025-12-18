"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const menu = [
  {
    name: "All Jewellery", path: "/",
    dropdown: [
      { name: "Rings", path: "/necklaces" },
      { name: "Necklaces", path: "/bracelets" },
      {
        name: "Earrings", path: "/bangles", dropdown: [
          { name: "Radiance Collection", path: "/bangles" },
          { name: "Silver Jewellery’s", path: "/bangles" },
          { name: "Boho-inspired ", path: "/bangles" },
          { name: "Sleek earrings", path: "/bangles" },
          { name: "Statement earrings", path: "/bangles" },
        ]
      },
      { name: "Bracelets & Bangles", path: "/bangles" },
      { name: "Pendants", path: "/bangles" },
      { name: "Anklets", path: "/bangles" },
      { name: "Nose Pins", path: "/bangles" },
      { name: "Men’s Jewellery", path: "/bangles" },
      { name: "Unisex Collections", path: "/bangles" },
      { name: "Gift Sets", path: "/bangles" },
    ],
  },
  {
    name: "New Arrivals", path: "/about",
    dropdown: [
      { name: "Necklaces", path: "/necklaces" },
      { name: "Bracelets", path: "/bracelets" },
      { name: "Bangles", path: "/bangles" },
    ],
  },
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
                <li key={index} className="relative group">
                  <Link
                    href={item.path}
                    className={`text-[16px] font-pan leading-[40px] transition-all
            ${isActive ? "font-semibold" : ""}`}
                  >
                    {item.name}
                  </Link>
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] bg-[#2B3136] transition-all
            ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  />

                  {item.dropdown && (
                    <div
                      className="
      fixed top-[160px] left-1/2 -translate-x-1/2
      w-[1360px] max-w-[95vw]
      opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      transition-all duration-300
      z-[999]
    "
                    >
                      <div className="flex">
                        <div className="w-[240px] bg-white shadow-xl rounded-[4px] py-[12px]">
                          <ul className="flex flex-col">
                            {item.dropdown.map((sub, i) => (
                              <li key={i} className="w-full">
                                <Link
                                  href={sub.path}
                                  className="
    block w-full
    text-[15px]
    px-[16px] py-[8px]
    bg-transparent hover:bg-[#F2F4F5]
    font-pan text-[#5F6C72] hover:text-[#191C1F]
  "
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="w-[10px]" />
                        <div className="flex-1 p-[20px] bg-white shadow-xl rounded-[8px]">
                          <div className="grid grid-cols-3 gap-[24px]">
                            {item.dropdown
                              .filter(sub => sub.dropdown)
                              .map((sub, i) => (
                                <div key={i}>
                                  <h4 className="text-[16px] font-semibold text-[#2B3136] mb-[10px]">
                                    {sub.name}
                                  </h4>

                                  <ul className="flex flex-col gap-[8px]">
                                    {sub.dropdown.map((child, j) => (
                                      <li key={j}>
                                        <Link
                                          href={child.path}
                                          className="text-[14px] text-gray-600 hover:underline"
                                        >
                                          {child.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                          </div>
                        </div>

                      </div>
                    </div>
                  )}


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
