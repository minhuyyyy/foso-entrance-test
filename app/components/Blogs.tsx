'use client';

import Image from 'next/image';
import React from 'react';
import BlogCard from './BlogCard';
import Pagination from './Pagination';

function Blogs() {
    const categories = new Map<string, number>();
    categories.set('Thiết kế website', 36);
    categories.set('Thiết kế app mobile', 13);
    categories.set('Quản lý sản xuất', 25);
    categories.set('Quản lý bán hàng', 22);
    categories.set('Báo chí nói về foso', 7);
    categories.set('Tin tức foso', 5);
    const total = Array.from(categories.values()).reduce((a, b) => a + b, 0);
    return (
        <>
            <div className='flex justify-center items-center mt-12'>
                <div className='grid grid-cols-3 w-full max-w-[1200px] gap-8'>
                    <div className='col-span-2'>
                        <p className='bold'>Tất cả bài viết</p>
                        <div className='w-full h-[318px] join-community flex flex-col justify-center rounded-[40px] relative'>
                            <div className='w-1/2 ml-[59px]'>
                                <p className='bold-white mb-8'>
                                    Gia nhập cộng đồng FMRP – Kết nối, chia sẻ,
                                    cùng phát triển!
                                </p>
                                <div className='border-2 border-white rounded-[40px] w-1/2 p-[8px_24px] flex flex-row gap-8 items-center'>
                                    <p className='bold-white-14'>
                                        tham gia ngay
                                    </p>
                                    <Image
                                        src='/assets/Vector.png'
                                        width={12}
                                        height={12}
                                        alt='arrow'
                                    />
                                </div>
                            </div>
                            {/* Fixed positioning */}
                            <div className='absolute top-[25px] right-[20px]'>
                                <Image
                                    src={'/assets/Group.png'}
                                    width={472}
                                    height={399}
                                    alt='group'
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-8 mt-12'>
                            {[...Array(6)].map((_, i) => (
                                <div
                                    className='col-span-1'
                                    key={i}
                                >
                                    <BlogCard imgWidth={505} imgHeight={475}/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div className='flex flex-col gap-6'>
                            <p className='bold-24'>Tìm kiếm</p>
                            <div className='flex flex-row justify-between pr-2 pt-3 pb-3 pl-6 rounded-[12px] search-box'>
                                <input
                                    type='text'
                                    placeholder='Tìm kiếm bài viết'
                                    className='font-raleway font-medium text-base leading-[150%] tracking-normal align-middle text-[#ACB3C7]'
                                />
                                <button className='bg-[#15AA7A] w-12 h-12 rounded-[12px] flex items-center justify-center'>
                                    <Image
                                        src={'/assets/Magnifier.png'}
                                        width={24}
                                        height={24}
                                        alt='search'
                                        className='object-contain'
                                    />
                                </button>
                            </div>
                            <div className='flex flex-col justify-between gap-6'>
                                <div>
                                    <p className='bold-24'>Danh mục</p>
                                </div>
                                <div className='w-full h-fit'>
                                    <div className='flex justify-between border-b border-[#F1F5F7] p-2'>
                                        <p className='category'>Tất cả</p>
                                        <p className='category-quantity'>
                                            {total}
                                        </p>
                                    </div>
                                    {Array.from(categories.entries()).map(
                                        ([category, value]) => (
                                            <div
                                                key={category}
                                                className='flex justify-between border-b border-[#F1F5F7] p-2'
                                            >
                                                <p className='category'>
                                                    {category}
                                                </p>
                                                <p className='category-quantity'>
                                                    {value}
                                                </p>
                                            </div>
                                        ),
                                    )}
                                </div>
                                <div className='w-[366px] h-[650px] relative rounded-[24px] overflow-hidden'>
                                    {/* Background Image */}
                                    <Image
                                        src={'/assets/bg-vertical.png'}
                                        width={366}
                                        height={650}
                                        alt='bg'
                                        className='object-cover w-full h-full'
                                    />

                                    {/* Overlay Content */}
                                    <div className='absolute top-0 left-0 w-full h-[575px] flex flex-col items-center p-6'>
                                        {/* Devices Image */}
                                        <div className='relative w-[320px]'>
                                            <Image
                                                src={'/assets/devices.png'}
                                                width={425}
                                                height={262}
                                                alt='devices'
                                                className='object-contain'
                                            />
                                        </div>

                                        {/* Text and Mask */}
                                        <div className='flex flex-col items-center mt-4 w-full h-full justify-between'>
                                            <div className='flex items-center gap-4'>
                                                <Image
                                                    src={
                                                        '/assets/Mask-group.png'
                                                    }
                                                    width={136}
                                                    height={136}
                                                    alt='mask'
                                                    className='object-contain'
                                                />
                                                <p className='text-white text-xl font-bold'>
                                                    Miễn phí dùng thử
                                                    <Image
                                                        src={
                                                            '/assets/mrp-logo.png'
                                                        }
                                                        width={154}
                                                        height={45}
                                                        alt='MRP Beta'
                                                    />
                                                </p>
                                            </div>

                                            {/* Push button to the bottom */}
                                            <button className='p-[8px_24px] w-full rounded-[40px] border border-white text-white flex flex-row justify-between items-center h-10 mt-auto'>
                                                Trải Nghiệm Ngay
                                                <Image
                                                    src={
                                                        '/assets/Vector-white.png'
                                                    }
                                                    width={16}
                                                    height={16}
                                                    alt='arrow'
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className='w-[366px] h-[650px] relative rounded-[24px] overflow-hidden'>
                                    {/* Background Image */}
                                    <Image
                                        src={'/assets/bg-vertical.png'}
                                        width={366}
                                        height={650}
                                        alt='bg'
                                        className='object-cover w-full h-full'
                                    />

                                    {/* Overlay Content */}
                                    <div className='absolute top-0 left-0 w-full h-[575px] flex flex-col items-center justify-center p-6'>
                                        {/* Devices Image (Adjusted) */}
                                        <div className='relative w-[472] h-[399px] flex justify-center items-center'>
                                            <Image
                                                src={'/assets/Group.png'}
                                                width={472}
                                                height={399}
                                                alt='group'
                                                className='w-full h-full object-contain'
                                            />
                                        </div>

                                        <div className='flex flex-col items-center w-full h-full justify-end'>
                                            <p className='font-raleway font-bold text-xl tracking-normal leading-[150%] text-white'>
                                                Gia nhập cộng đồng FMRP Việt –
                                                Kết nối, chia sẻ, cùng phát
                                                triển!
                                            </p>

                                            {/* Push button to the bottom */}
                                            <button className='w-full rounded-[40px] border border-white text-white flex flex-row justify-between items-center h-10 p-[8px_24px]    '>
                                                Tham Gia Ngay
                                                <Image
                                                    src={
                                                        '/assets/Vector-white.png'
                                                    }
                                                    width={16}
                                                    height={16}
                                                    alt='arrow'
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Pagination dataLength={60} />
        </>
    );
}

export default Blogs;
