import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function BlogCard({
    imgWidth,
    imgHeight,
}: {
    imgWidth: number;
    imgHeight: number;
}) {
    return (
        <div className='flex flex-col gap-4 items-start'>
            <Image
                src={'/assets/article-img.png'}
                width={imgWidth}
                height={imgHeight}
                alt='article'
            />
            <div className='mt-2'>
                <div className='rounded-[8px] bg-[#E2F0FE] text-[#0F4F9E] p-[4px_8px] w-fit'>
                    <p>Quản lý sản xuất</p>
                </div>
                <p className='font-raleway font-bold text-2xl leading-[150%] tracking-normal align-middle'>
                    Tại sao BOM quan trọng trong quản lý sản xuất?
                </p>
                <div className='flex flex-row items-center gap-3 mt-4'>
                    <div className='flex gap-2'>
                        <Image
                            src={'/assets/CalendarBlank.png'}
                            width={24}
                            height={24}
                            alt='calendar'
                        />
                        <p className='font-raleway font-medium text-base leading-[150%] tracking-normal align-middle text-[#667F93]'>
                            17/11/2022
                        </p>
                    </div>

                    {/* Vertical Line Fix */}
                    <div className='border-l-1 border-[#D9E1E7] h-6'></div>

                    <div className='flex gap-2'>
                        <Image
                            src={'/assets/Clock.png'}
                            width={24}
                            height={24}
                            alt='clock'
                        />
                        <p className='font-raleway font-medium text-base leading-[150%] tracking-normal align-middle text-[#667F93]'>
                            10 phút đọc
                        </p>
                    </div>
                </div>
                <div className='flex flex-row items-baseline gap-4 w-[200px] h-12 mt-4'>
                    <Link
                        href={'/blog/details/1'}
                        className='font-raleway font-semibold text-lg leading-[150%] tracking-normal align-middle text-[#667F93]'
                    >
                        Khám phá thêm
                    </Link>
                    <Image
                        src={'/assets/Article-vector.png'}
                        width={12}
                        height={12}
                        alt='arrow'
                    />
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
