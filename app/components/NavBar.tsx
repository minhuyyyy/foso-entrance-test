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
                        <svg
                            width='9'
                            height='9'
                            viewBox='0 0 9 9'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M8.43774 1.205V6.8925C8.43774 7.00853 8.39165 7.11981 8.3096 7.20186C8.22756 7.28391 8.11628 7.33 8.00024 7.33C7.88421 7.33 7.77293 7.28391 7.69088 7.20186C7.60884 7.11981 7.56274 7.00853 7.56274 6.8925V2.26102L1.30977 8.51453C1.22768 8.59663 1.11634 8.64275 1.00024 8.64275C0.884146 8.64275 0.772805 8.59663 0.690712 8.51453C0.608619 8.43244 0.5625 8.3211 0.5625 8.205C0.5625 8.08891 0.608619 7.97756 0.690712 7.89547L6.94423 1.6425H2.31274C2.19671 1.6425 2.08543 1.59641 2.00338 1.51436C1.92134 1.43231 1.87524 1.32103 1.87524 1.205C1.87524 1.08897 1.92134 0.97769 2.00338 0.895643C2.08543 0.813596 2.19671 0.767502 2.31274 0.767502H8.00024C8.11628 0.767502 8.22756 0.813596 8.3096 0.895643C8.39165 0.97769 8.43774 1.08897 8.43774 1.205Z'
                                fill='white'
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
