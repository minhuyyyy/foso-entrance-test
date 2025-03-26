import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Details from './Details';

function NavBar() {
    return (
        <div className='sticky top-0 z-50 mx-auto mt-6 w-full max-w-[1280px] rounded-[40px] px-9 py-3 flex items-center justify-between bg-white shadow-md'>
            {/* Logo */}
            <div className='flex items-center gap-4'>
                <Image
                    src={'/assets/FOSO_Logo_Final_1-1400x579.png'}
                    width={134}
                    height={55}
                    alt='logo'
                />
            </div>

            {/* Navigation Links */}
            <div className='hidden md:flex flex-row items-center gap-6 md:gap-8'>
                <Link href='/'>Về Chúng tôi</Link>
                <Details summary='Giải pháp' />
                <Details
                    summary='Tài nguyên'
                    current
                />
                <Link href='/'>Liên hệ</Link>
            </div>

            {/* Country Selector */}
            <div className='flex flex-row items-center gap-2'>
                <div className='country-select flex flex-row items-center gap-3 w-[94px] p-[8px_12px] justify-center'>
                    <Image
                        src={'/assets/icon_country.png'}
                        width={30}
                        height={30}
                        alt='flag'
                    />
                    <div className='relative inline-flex items-center gap-2'>
                        <span className='text'>VI</span>
                        <span className='arrow -translate-y-[1px]'></span>
                    </div>
                </div>
                <div className=' h-[40px] rounded-[40px] flex flex-row justify-center items-center cta gap-3 p-[8px_12px]'>
                    <p className='font-bold'>Trở thành khách hàng</p>
                    <div className='flex items-center justify-center w-[22px] h-[22px] bg-black rounded-full p-1 relative'>
                        <div className='w-[10px] h-[10px] border-white border-2 border-l-0 border-b-0 rotate-45'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
