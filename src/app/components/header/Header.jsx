"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu as MenuIcon, Search, Heart, ShoppingBag, X, ChevronDown, MapPin, Gift, HelpCircle, Star, ChevronRight } from 'lucide-react';
import LoginModal from "../LoginModal";

// 1. Import Public Sans Font
import { Public_Sans } from 'next/font/google';

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

// --- DUMMY DATA ---
const megaMenuData = {
  categories: [
    { name: "Rings", id: "rings" },
    { name: "Necklaces", id: "necklaces" },
    { name: "Earrings", id: "earrings", hasSub: true },
    { name: "Bracelets & Bangles", id: "bracelets" },
    { name: "Pendants", id: "pendants" },
    { name: "Anklets", id: "anklets" },
    { name: "Nose Pins", id: "nosepins" },
    { name: "Men’s Jewellery", id: "mens" },
    { name: "Unisex Collections", id: "unisex" },
    { name: "Gift Sets", id: "giftsets" },
  ],
  subCategories: {
    "rings": [
      { name: "Engagement Rings", id: "engagement_rings" },
      { name: "Daily Wear Rings", id: "daily_rings" },
      { name: "Solitaire Rings", id: "solitaire_rings" },
      { name: "Platinum Rings", id: "platinum_rings" },
    ],
    "necklaces": [
      { name: "Gold Chains", id: "gold_chains" },
      { name: "Diamond Necklaces", id: "diamond_necklaces" },
      { name: "Mangalsutras", id: "mangalsutras" },
    ],
    "earrings": [
      { name: "Radiance Collection", id: "radiance" },
      { name: "Silver Jewellery's", id: "silver", selected: true },
      { name: "Boho-inspired earrings", id: "boho" },
      { name: "Sleek earrings", id: "sleek" },
      { name: "Statement earrings", id: "statement" },
    ]
  },
  products: {
    "silver": [
      { id: 1, name: "Earrings Silver", price: "₹ 174.95", image: "/assets/item/img1.png", rating: 4 },
      { id: 2, name: "Chains", price: "₹ 174.95", image: "/assets/item/img2.png", rating: 5 },
      { id: 3, name: "Rings", price: "₹ 174.95", image: "/assets/item/img3.png", rating: 4 },
      { id: 4, name: "Silver Rings", price: "₹ 174.95", image: "/assets/item/img1.png", rating: 5 },
    ]
  }
};

const showcaseData = [
    { id: 1, category: "EARRINGS SILVER", name: "Earrings Silver", price: "₹ 174.95", image: "/assets/item/img1.png", rating: 4 },
    { id: 2, category: "CHAINS", name: "Silver Shine", price: "₹ 174.95", image: "/assets/item/img2.png", rating: 5 },
    { id: 3, category: "RINGS", name: "Silver Luxe", price: "₹ 174.95", image: "/assets/item/img3.png", rating: 4 },
    { id: 4, category: "SILVER RINGS", name: "Brand / Type", price: "₹ 174.95", image: "/assets/item/img1.png", rating: 5 },
];

const menu = [
  { name: "All Jewellery", path: "/all-jewellery", type: "mega-3-col" }, 
  { name: "New Arrivals", path: "/new-arrivals", type: "mega-showcase" }, 
  { name: "Best-Sellers", path: "/best-sellers", type: "mega-showcase" }, 
  { name: "Silver", path: "/silver", type: "mega-showcase" },             
  { name: "Earrings", path: "/earrings", type: "mega-showcase" },
  { name: "Rings", path: "/rings", type: "mega-showcase" },
  { name: "Women", path: "/women", type: "mega-showcase" },
  { name: "Men", path: "/men", type: "mega-showcase" },
  { name: "Gifting", path: "/gifting", type: "mega-showcase" },
  { name: "Daily Wear", path: "/daily-wear", type: "mega-showcase" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Mobile Menu States
  const [isShopOpen, setIsShopOpen] = useState(true);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  
  // Desktop Hover State
  const [activeTab, setActiveTab] = useState(null);

  const pathname = usePathname();
  const searchRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  // Click outside to close search
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);

  return (
    <>
      <nav ref={searchRef} className={`bg-white shadow-sm font-sans fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${searchOpen ? 'pb-0' : ''}`}>

        {/* MOBILE VIEW (UNCHANGED) */}
        <div className="flex lg:hidden justify-between items-center px-4 py-4">
          <div className="flex items-center gap-4">
            <button onClick={() => setOpen(true)} className="p-1 focus:outline-none">
              <MenuIcon className="w-7 h-7 text-[#191C1F]" strokeWidth={1.5} />
            </button>
            <Link href="/">
              <Image src="/assets/nav/logo.svg" alt="logo" width={120} height={40} className="object-contain" />
            </Link>
          </div>
          <div className="flex items-center gap-4 text-[#191C1F]">
            <button onClick={() => setSearchOpen(!searchOpen)}><Search className="w-6 h-6" strokeWidth={1.5} /></button>
            <Link href="/profile"><Heart className="w-6 h-6" strokeWidth={1.5} /></Link>
            <button onClick={() => setCartOpen(true)}><ShoppingBag className="w-6 h-6" strokeWidth={1.5} /></button>
          </div>
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden lg:flex flex-col px-[64px] pt-6 pb-2 relative">
          
          {/* TOP ROW: Logo - Search/Spacer - Icons */}
          <div className="flex justify-between items-center mb-4 h-[50px]">
            
            {/* 1. LOGO (Always Visible) */}
            <Link href="/" className="flex-shrink-0 z-20">
              <Image src="/assets/nav/logo.svg" alt="logo" width={160} height={50} className="object-contain" />
            </Link>

            {/* 2. SEARCH INPUT (Visible only when Search Open) */}
            {searchOpen && (
                <div className="flex-1 flex justify-center items-center px-8 animate-in fade-in zoom-in-95 duration-200">
                     <div className="relative w-full max-w-[80%]">
                        <input 
                            type="text" 
                            placeholder="Search for jewellery..." 
                            className="w-full h-[48px] pl-4 pr-[100px] border border-[#A24112] rounded-[4px] outline-none text-[#191C1F] font-pan placeholder:text-gray-400"
                            autoFocus
                        />
                        <button className="absolute right-0 top-0 h-full bg-[#A24112] text-white px-6 font-pan font-semibold rounded-r-[3px] hover:bg-[#8A3610] transition-colors">
                            Search
                        </button>
                     </div>
                </div>
            )}

            {/* 3. RIGHT ICONS (Always Visible) */}
            <div className="flex items-center gap-6 text-[#191C1F] flex-shrink-0 z-20 bg-white pl-4">
              <button onClick={() => setSearchOpen(!searchOpen)} className="hover:text-gray-600 transition-colors">
                {searchOpen ? <X className="w-6 h-6" strokeWidth={1.5} /> : <Search className="w-5 h-5" strokeWidth={1.5} />}
              </button>
              <Link href="/profile" className="hover:text-gray-600 transition-colors">
                <Heart className="w-5 h-5" strokeWidth={1.5} />
              </Link>
              <button onClick={() => setCartOpen(true)} className="hover:text-gray-600 transition-colors">
                <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* BOTTOM ROW: Navigation Menu (Hidden when Search is Open) */}
          <div className={`flex justify-center border-t border-transparent transition-all duration-300 ${searchOpen ? 'opacity-0 pointer-events-none h-0 overflow-hidden' : 'opacity-100 h-auto'}`}>
            <ul className="flex justify-center gap-[30px] xl:gap-[40px]">
              {menu.map((item, index) => {
                const isActive = pathname === item.path;
                return (
                  <li 
                    key={index} 
                    className="group py-2 cursor-pointer relative"
                    onMouseEnter={() => setActiveTab(item.name)}
                    onMouseLeave={() => setActiveTab(null)}
                  >
                    <Link
                      href={item.path}
                      className={`text-[15px] xl:text-[16px] font-pan leading-[40px] transition-all hover:text-black
                        ${isActive ? "font-semibold text-black" : "text-[#191C1F]"}`}
                    >
                      {item.name}
                    </Link>
                    
                    {/* --- UNDERLINE FIX: Added group-hover:w-full --- */}
                    <div className="relative w-full">
                        <span className={`absolute left-0 -bottom-1 h-[1.5px] bg-[#2B3136] transition-all duration-300
                            ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                        />
                    </div>

                    {/* Desktop Menus */}
                    {(item.type === 'mega-3-col' || item.type === 'mega-showcase' || item.dropdown) && activeTab === item.name && !searchOpen && (
                        <div className="absolute top-[100%] left-0 w-full z-[999] flex justify-center pt-2">
                            <div className="fixed left-1/2 -translate-x-1/2 top-[150px] w-full flex justify-center pointer-events-auto">
                                <div className="mt-1 animate-in fade-in slide-in-from-top-1 duration-200">
                                    {item.type === 'mega-3-col' && (
                                        <div className="w-[1100px] max-w-[95vw]" onMouseEnter={() => setActiveTab(item.name)}>
                                            <AllJewelleryDesktopMenu />
                                        </div>
                                    )}
                                    {item.type === 'mega-showcase' && (
                                        <div className="w-[1100px] max-w-[95vw]" onMouseEnter={() => setActiveTab(item.name)}>
                                            <ProductShowcaseDesktopMenu title={item.name} />
                                        </div>
                                    )}
                                    {item.dropdown && !item.type && (
                                        <div className="w-[240px] bg-white shadow-xl rounded-[4px] py-[12px] border border-gray-100 flex" onMouseEnter={() => setActiveTab(item.name)}>
                                            <div className="w-full">
                                                <ul className="flex flex-col">
                                                {item.dropdown.map((sub, i) => (
                                                    <li key={i} className="w-full">
                                                    <Link href={sub.path} className="block w-full text-[15px] px-[16px] py-[8px] bg-transparent hover:bg-[#F2F4F5] font-pan-r text-[#2B3136] hover:text-[#191C1F]">
                                                        {sub.name}
                                                    </Link>
                                                    </li>
                                                ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* SEARCH OVERLAY DROPDOWN */}
          {searchOpen && (
             <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-full max-w-[60%] z-[998] flex justify-center border-t border-gray-100">
                <div className="bg-white w-full flex justify-center pointer-events-auto animate-in fade-in slide-in-from-top-2 duration-300 shadow-xl">
                    <div className={`w-[1100px] max-w-[95vw] p-8 flex gap-8 h-[450px] ${publicSans.className}`}>
                        
                        {/* Left: Search History */}
                        <div className="w-[30%] border-r border-[#E4E7E9] pr-6">
                            <h4 className="text-[14px] font-bold text-[#191C1F] mb-4 font-pan">Your Search History</h4>
                            <div className="text-gray-400 text-sm italic mt-10 text-center">
                                No results found
                            </div>
                        </div>

                        {/* Right: Trending Searches */}
                        <div className="flex-1 pl-2">
                            <h4 className="text-[14px] font-bold text-[#191C1F] mb-6 font-pan">Trending Silver Searches</h4>
                            <div className="grid grid-cols-4 gap-4">
                                {showcaseData.map((product) => (
                                    <div key={product.id} className="group cursor-pointer">
                                        <div className="relative aspect-square bg-[#F5F5F5] rounded-[4px] mb-3 overflow-hidden">
                                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs">
                                                <Image src={product.image} alt={product.name} width={120} height={120} className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-[9px] text-[#77878F] uppercase font-bold tracking-wide">{product.category}</p>
                                            <h4 className="text-[13px] font-medium text-[#191C1F] leading-tight truncate">{product.name}</h4>
                                            <p className="text-[13px] font-bold text-[#191C1F]">{product.price}</p>
                                            <div className="flex gap-0.5">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className={`w-[10px] h-[10px] ${i < product.rating ? "fill-[#FA8232] text-[#FA8232]" : "text-[#E4E7E9]"}`} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6">
                                <button className="bg-[#191C1F] text-white px-6 py-2.5 text-xs font-bold tracking-wide rounded hover:bg-black transition-colors font-pan">
                                    See results in Silver Jewellery (98)
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
             </div>
          )}

        </div>
      </nav>

      <div className="h-[80px] lg:h-[135px]"></div>

      {/* MOBILE DRAWER (UNCHANGED) */}
      <div
        className={`fixed inset-0 bg-black/50 z-[150] transition-opacity duration-300 lg:hidden ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setOpen(false)}
      />
      <div
        className={`fixed top-0 left-0 h-full w-[85%] sm:w-[350px] bg-white z-[200] shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <Link href="/" onClick={() => setOpen(false)}>
              <Image src="/assets/nav/logo.svg" alt="logo" width={120} height={50} className="object-contain" />
            </Link>
            <button onClick={() => setOpen(false)}>
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>
          <div className="p-5 space-y-6">
            <div className="space-y-4">
              <div onClick={() => setIsShopOpen(!isShopOpen)} className="flex items-center justify-between bg-[#2422200A] py-[18px] px-[20px] rounded-[12px] cursor-pointer select-none">
                <span className="font-semibold text-[#242220] font-pan-b text-[14px] leading-[20px]">Shop & Discover</span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isShopOpen ? 'rotate-180' : ''}`} />
              </div>
              {isShopOpen && (
                <div className="pl-4 space-y-4 text-gray-600 text-sm animate-in slide-in-from-top-2 duration-200 font-pan">
                  <Link href="/new-arrivals" className="flex items-center gap-[10px]" onClick={() => setOpen(false)}><Image height={20} width={20} src="/assets/nav/icon5.svg" alt="new arrivals" /> New Arrivals</Link>
                  <Link href="/bestsellers" className="flex items-center gap-[10px]" onClick={() => setOpen(false)}><Image height={20} width={20} src="/assets/nav/icon1.svg" alt="Bestsellers" /> Bestsellers</Link>
                  <Link href="/festive" className="flex items-center gap-[10px]" onClick={() => setOpen(false)}><Image height={20} width={20} src="/assets/nav/icon4.svg" alt="Festive" /> Festive Collection</Link>
                </div>
              )}
            </div>
            <div className="space-y-4">
              <div onClick={() => setIsCategoryOpen(!isCategoryOpen)} className="flex items-center justify-between bg-[#2422200A] py-[18px] px-[20px] rounded-[12px] cursor-pointer select-none">
                <span className="font-semibold text-[#242220] font-pan-b text-[14px] leading-[20px]">Shop By Category</span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isCategoryOpen ? 'rotate-180' : ''}`} />
              </div>
              {isCategoryOpen && (
                <div className="pl-4 space-y-4 text-gray-600 text-sm animate-in slide-in-from-top-2 duration-200 font-pan">
                  <Link href="/women" className="flex items-center gap-[10px]" onClick={() => setOpen(false)}><Image height={20} width={20} src="/assets/nav/icon2.svg" alt="Women" /> Women Everyday Luxe</Link>
                  <Link href="/men" className="flex items-center gap-[10px]" onClick={() => setOpen(false)}><Image height={20} width={20} src="/assets/nav/icon3.svg" alt="Men" /> Men Everyday Luxe</Link>
                </div>
              )}
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold mb-4 font-pan">Quick Links</h3>
              <ul className="space-y-4 text-gray-600 text-sm font-pan">
                <li className="flex items-center gap-3"><MapPin className="w-5 h-5" /> Track Order</li>
                <li className="flex items-center gap-3"><Gift className="w-5 h-5" /> Refer & Earn</li>
                <li className="flex items-center gap-3"><HelpCircle className="w-5 h-5" /> Help Center</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}

export default Header;

// ... (Mega Menu components as before) ...
const AllJewelleryDesktopMenu = () => {
  const [activeCategory, setActiveCategory] = useState("rings");
  const [activeSub, setActiveSub] = useState(null);

  useEffect(() => {
    if (megaMenuData.subCategories[activeCategory]?.length > 0) {
        setActiveSub(megaMenuData.subCategories[activeCategory][0].id);
    } else {
        setActiveSub(null);
    }
  }, [activeCategory]);

  return (
    <div className={`gap-[5px] flex h-[450px] ${publicSans.className}`}>
      <div className="w-[240px] border border-[#E4E7E9] rounded-[3px] py-[12px] bg-white overflow-y-auto shadow-sm">
        {megaMenuData.categories.map((cat) => (
          <div
            key={cat.id}
            onMouseEnter={() => setActiveCategory(cat.id)}
            className={`px-[16px] py-[8px] cursor-pointer text-[14px] leading-[20px] flex justify-between items-center transition-colors 
                        ${activeCategory === cat.id ? "font-bold text-[#191C1F] bg-[#F2F4F5]" : "text-[#5F6C72] hover:text-[#191C1F]"}`}
          >
            {cat.name}
            {activeCategory === cat.id && <ChevronRight className="w-4 h-4 text-[#191C1F]" />}
          </div>
        ))}
      </div>
      <div className="bg-white flex-1 border border-[#E4E7E9] rounded-[3px] flex shadow-sm">
        <div className="w-[240px] py-4 border-r border-[#E4E7E9] bg-white overflow-y-auto">
          {megaMenuData.subCategories[activeCategory] ? (
            megaMenuData.subCategories[activeCategory].map((sub) => (
              <div
                key={sub.id}
                onMouseEnter={() => setActiveSub(sub.id)}
                className={`px-[16px] py-[8px] cursor-pointer text-[14px] leading-[20px] flex justify-between items-center transition-colors 
                            ${activeSub === sub.id ? "font-bold text-[#191C1F] bg-[#F2F4F5]" : "text-[#5F6C72] hover:text-[#191C1F]"}`}
              >
                {sub.name}
              </div>
            ))
          ) : (
            <div className="p-6 text-gray-400 text-sm">No categories found.</div>
          )}
        </div>
        <div className="flex-1 p-8 bg-white overflow-y-auto">
          <h3 className="text-[22px] font-[600] mb-6 text-[#4E4E4E] tracking-tight capitalize">
             {activeSub ? activeSub.replace(/_/g, ' ') : "COLLECTION"}
          </h3>
          <div className="grid grid-cols-4 gap-4">
             {megaMenuData.products.silver.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="relative aspect-square bg-[#F5F5F5] rounded-md mb-3 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs">
                       <Image src={product.image} alt={product.name} width={150} height={150} className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wide font-bold">ELEGANCE</p>
                    <h4 className="text-[14px] font-semibold text-gray-900 leading-tight">{product.name}</h4>
                    <p className="text-[14px] font-bold text-gray-900">{product.price}</p>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < product.rating ? "fill-black text-black" : "text-gray-300"}`} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="mt-8 flex justify-start">
            <button className="bg-[#191C1F] text-white px-8 py-3 text-sm font-bold tracking-wide rounded hover:bg-black transition-colors">
              View All {activeCategory}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductShowcaseDesktopMenu = ({ title }) => {
    return (
        <div className={`bg-white shadow-xl border border-[#E4E7E9] rounded-[4px] p-[32px] w-full ${publicSans.className}`}>
            <h3 className="text-[20px] font-bold text-[#191C1F] mb-[24px] font-pan">{title}</h3>
            <div className="grid grid-cols-4 gap-[24px]">
                {showcaseData.map((product) => (
                    <div key={product.id} className="group cursor-pointer">
                        <div className="relative aspect-square bg-[#F5F5F5] rounded-[4px] mb-[12px] overflow-hidden">
                             <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs">
                                <Image src={product.image} alt={product.name} width={180} height={180} className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
                             </div>
                        </div>
                        <div className="space-y-[4px]">
                            <p className="text-[10px] text-[#77878F] uppercase font-[600] tracking-wide font-pan">{product.category}</p>
                            <h4 className="text-[14px] text-[#191C1F] font-[500] leading-[20px] font-pan">{product.name}</h4>
                            <div className="flex items-center gap-2">
                                <span className="text-[14px] font-[600] text-[#191C1F] font-pan">{product.price}</span>
                                <span className="text-[14px] text-[#9098B1] line-through font-pan">₹174.95</span>
                            </div>
                            <div className="flex items-center gap-[4px]">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-[12px] h-[12px] ${i < product.rating ? "fill-[#FA8232] text-[#FA8232]" : "text-[#E4E7E9]"}`} />
                                    ))}
                                </div>
                                <span className="text-[12px] text-[#77878F] font-pan">(98)</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-[32px]">
                <button className="bg-[#191C1F] text-white px-[24px] py-[10px] rounded-[2px] text-[14px] font-[700] hover:bg-black transition-colors font-pan flex items-center gap-2">
                    See results in {title} <span className="font-normal">(98)</span>
                </button>
            </div>
        </div>
    )
}

const CartDrawer = ({ open, onClose }) => {
  return (
    <>
      <div className={`fixed inset-0 bg-black/40 z-[998] transition-opacity ${open ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={onClose} />
      <div className={`fixed top-0 right-0 h-full w-[400px] max-w-[90vw] bg-[#FFF9F2] z-[999] transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="bg-[#EEEEEE] py-[16px] px-[16px] flex items-center gap-[10px]">
          <Image height={18} width={18} src="/assets/item/arrow.svg" alt="arrow" />
          <h6 className="font-pan-b text-[14px] text-[#2B3136]">Continue shopping</h6>
        </div>
        <div className="px-[16px] py-[20px]">
          <div className="flex justify-between items-center pb-[16px]">
            <h6 className="font-pan-b text-[20px] leading-[26px] text-[#2B3136]">Shopping cart</h6>
            <p className="font-[500] font-pan-b text-[13px] leading-[21px] text-[#798490]">1 item</p>
          </div>
          <div className="flex bg-[#AAFFC1] gap-[16px] items-center mb-[20px]">
            <Image width={40} height={43} src="/assets/cart/alert.svg" alt="alert" />
            <p className="font-pan-r text-[14px] leading-[21px] text-[#2B3136]">1 product added to your shopping cart.</p>
          </div>
          <div className="flex items-start justify-between">
            <Image width={65} height={65} src="/assets/cart/dummy.png" alt="dummy" />
            <Image width={40} height={40} src="/assets/cart/close.svg" alt="close" />
          </div>
          <div className="pt-[8px] pb-[20px] border-b border-[#798490]">
            <h6 className="font-pan-b text-[14px] leading-[21px] text-[#2B3136] pb-[16px]">1x Product name</h6>
            <div className="flex items-start justify-between pb-[16px]">
              <h6 className="font-pan-b text-[14px] leading-[21px] text-[#2B3136]">Quantity</h6>
              <div className="flex bg-[#FFFFFF] items-center border border-[#798490]">
                <p className="h-[41px] w-[44px] flex justify-center items-center text-[#798490] font-pan-r text-[23px] leading-[21px] #798490">-</p>
                <p className="h-[41px] w-[44px] flex justify-center items-center text-[#798490] font-pan-r text-[23px] leading-[21px] #798490">1</p>
                <p className="h-[41px] w-[44px] flex justify-center items-center text-[#798490] font-pan-r text-[23px] leading-[21px] #798490">+</p>
              </div>
            </div>
            <p className="font-pan-b text-[14px] leading-[21px] text-[#2B3136] text-right">₹145.00</p>
          </div>
          <div className="pt-[17px] grid gap-[16px]">
            <div className="flex justify-between items-center">
              <h6 className="font-pan-b text-[14px] leading-[21px] text-[#2B3136]">Subtotal</h6>
              <h6 className="font-pan-b text-[14px] leading-[21px] text-[#2B3136]">88.00*</h6>
            </div>
            <div className="flex justify-between items-center">
              <h6 className="font-pan-b text-[14px] leading-[21px] text-[#2B3136]">Shipping Costs</h6>
              <h6 className="font-pan-b text-[14px] leading-[21px] text-[#2B3136]">+₹145.00</h6>
            </div>
            <p className="font-pan-r text-[11px] leading-[16px] text-[#2B3136]">* Prices incl. GST plus shipping costs</p>
            <Link href="/cart" >
              <button onClick={() => setCartOpen(false)}
                className=" cursor-pointer bg-[#A24112] w-full text-center py-[12px] rounded-[8px] font-pan-r text-[20px] leading-[20px] text-[#FFFFFF] transition-all duration-300 hover:bg-[#8A3610] hover:shadow-lg hover:-translate-y-[1px]"
              >
                Proceed to checkout
              </button>
            </Link>
            <p className="font-pan-r text-[12px] leading-[18px] text-[#2B3136] underline">View cart for more product details</p>
          </div>
        </div>
      </div>
    </>
  );
};