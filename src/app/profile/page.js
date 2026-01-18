"use client"
import React, { useState } from 'react'
import SiderbarList from './components/SiderbarList'
import MyInfo from './components/MyInfo';
import Wishlist from './components/Wishlist';
import OrderHistory from './components/OrderHistory';

function Page() {
    const [activeTab, setActiveTab] = useState('My Info');

    const menuItems = [
        'My Info',
        'Wishlist',
        'Order History',
        'Saved Payment Method',
        'Account Settings',
    ];
    return (
        <div className='bg-[#FFF9F2] min-h-screen'>
            <section>
                <div className="max-w-[1440px] w-full mx-auto lg:px-[120px] px-[20px]">
                    <div className='flex gap-[30px] lg:flex-row flex-col items-start'>
                        <div className="max-w-[300px] w-full pt-[54px] sticky top-[120px] z-50 pb-[80px]">
                            <SiderbarList activeTab={activeTab} setActiveTab={setActiveTab} menuItems={menuItems} />
                        </div>
                        <div className="max-w-full w-full pt-[54px]">
                            {activeTab === "My Info" &&
                                <MyInfo />
                            }
                            {activeTab === "Wishlist" &&
                                <Wishlist />
                            }
                            {activeTab === "Order History" &&
                                <OrderHistory />
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Page
