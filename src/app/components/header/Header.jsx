"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const menu = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Solutions", link: "/solutions" },
  { name: "Clients", link: "/clients" },
  { name: "Blog", link: "/blog" },
  { name: "Career", link: "/career" },
  { name: "Contact Us", link: "/contact-us" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#FFFFFF] border-b border-[#0000001C] z-[100]">
      <div className="max-w-[1440px] mx-auto lg:px-[60px] px-[20px] lg:py-[11px] py-[14px] flex items-center justify-between">
        <div className="flex items-center gap-[20px]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden focus:outline-none"
          >
            <Image
              height={28}
              width={28}
              src="/assets/nav/hamburger.svg"
              alt="menu"
              className="w-[28px]"
            />
          </button>

          <Link href="/">
            <Image
            height={53} width={268}
              className="rounded-[10px] w-auto h-[53px] object-cover"
              src="/assets/nav/logo.png"
              alt="Logo"
            />
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-[40px]">
          {menu?.map((item, i) => (
            <Link
              href={item.link}
              key={i}
              className={`font-satoshi font-[700] text-[22px] leading-[2px] text-[#181618] hover:text-[#990097] transition-colors duration-300 ${pathname === item.link ? "text-[#990097]" : ""
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed top-0 left-0 h-screen w-full bg-black/50 z-[99] transition-opacity duration-300 ease-in-out"
        />
      )}

      <div
        className={`fixed top-0 left-0 h-screen w-[75%] max-w-[300px] bg-[#FFFFFF] z-[100] shadow-2xl transition-transform duration-500 ease-in-out transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } flex flex-col items-start pl-[30px] pt-[30px] pb-[50px] gap-[25px]`}
      >
        <div className="flex flex-col gap-[20px] w-full">
          {menu.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className={`font-corben text-[16px] leading-[26px] text-[#181618] hover:text-[#990097]  transition-colors duration-300 ${pathname === item.link ? "text-[#990097]" : ""
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Header;
