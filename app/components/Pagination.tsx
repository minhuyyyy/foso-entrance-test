'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

function Pagination({ dataLength }: { dataLength: number }) {
    const pages = Math.ceil(dataLength / 6);
    const currentPage = Number(useParams().page?.toString());
    const firstPage = currentPage === 1;
    const lastPage = currentPage === pages;

    return (
        <div className='flex flex-row justify-evenly items-center'>
            <div className='flex flex-row gap-2 w-fit h-6 items-center'>
                <Link
                    href={firstPage ? '#' : `/blog/${currentPage - 1}`}
                    className={clsx(
                        'order-2 font-raleway font-semibold text-[16px] leading-[150%] tracking-normal align-middle',
                        firstPage
                            ? 'text-[#B3C5D4] pointer-events-none opacity-50'
                            : 'text-[#4D5F6E]',
                    )}
                >
                    Trang trước
                </Link>

                <Image
                    src={
                        firstPage
                            ? '/assets/Pagination-Vector.png'
                            : '/assets/Pagination-Vector-black.png'
                    }
                    width={18}
                    height={18}
                    alt='arrow'
                    className={clsx(`order-1 ${!firstPage && 'rotate-180'}`)}
                />
            </div>
            <div className='flex flex-row items-center gap-0.5 w-fit h-10'>
                {pages > 1 && (
                    <Link
                        href='/blog/1'
                        className={clsx(
                            `w-6 h-6 rounded-[8px] ${
                                Number(currentPage?.toString()) === 1
                                    ? 'bg-[#D1F7EA]'
                                    : 'bg-transparent'
                            } flex items-center justify-center font-raleway font-semibold text-base leading-[150%] tracking-normal align-middle text-[#809FB8]`,
                        )}
                    >
                        1
                    </Link>
                )}
                {pages > 2 && (
                    <Link
                        href={'/blog/2'}
                        className={clsx(
                            `w-6 h-6 rounded-[8px] ${
                                Number(currentPage?.toString()) === 2
                                    ? 'bg-[#D1F7EA]'
                                    : 'bg-transparent'
                            } flex items-center justify-center font-raleway font-semibold text-base leading-[150%] tracking-normal align-middle text-[#809FB8]`,
                        )}
                    >
                        2
                    </Link>
                )}
                {pages > 3 && (
                    <Link
                        href={'/blog/3'}
                        className={clsx(
                            `w-6 h-6 rounded-[8px] ${
                                Number(currentPage?.toString()) === 3
                                    ? 'bg-[#D1F7EA]'
                                    : 'bg-transparent'
                            } flex items-center justify-center font-raleway font-semibold text-base leading-[150%] tracking-normal align-middle text-[#809FB8]`,
                        )}
                    >
                        3
                    </Link>
                )}
                {currentPage > 4 && (
                    <span className='px-2 text-[#809FB8]'>...</span>
                )}
                {currentPage > 3 && currentPage < pages - 2 && (
                    <Link
                        href={`/blog/${currentPage}`}
                        className='w-6 h-6 rounded-[8px] bg-[#D1F7EA] flex items-center justify-center font-raleway font-semibold text-base leading-[150%] tracking-normal align-middle text-[#809FB8]'
                    >
                        {currentPage}
                    </Link>
                )}
                {currentPage < pages - 3 && (
                    <span className='px-2 text-[#809FB8]'>...</span>
                )}
                {pages > 3 && (
                    <Link
                        href={`/blog/${pages - 2}`}
                        className={clsx(
                            `w-6 h-6 rounded-[8px] ${
                                Number(currentPage?.toString()) === pages - 2
                                    ? 'bg-[#D1F7EA]'
                                    : 'bg-transparent'
                            } flex items-center justify-center font-raleway font-semibold text-base leading-[150%] tracking-normal align-middle text-[#809FB8]`,
                        )}
                    >
                        {pages - 2}
                    </Link>
                )}
                {pages > 2 && (
                    <Link
                        href={`/blog/${pages - 1}`}
                        className={clsx(
                            `w-6 h-6 rounded-[8px] ${
                                Number(currentPage?.toString()) === pages - 1
                                    ? 'bg-[#D1F7EA]'
                                    : 'bg-transparent'
                            } flex items-center justify-center font-raleway font-semibold text-base leading-[150%] tracking-normal align-middle text-[#809FB8]`,
                        )}
                    >
                        {pages - 1}
                    </Link>
                )}
                {pages > 1 && (
                    <Link
                        href={`/blog/${pages}`}
                        className={clsx(
                            `w-6 h-6 rounded-[8px] ${
                                Number(currentPage?.toString()) === pages
                                    ? 'bg-[#D1F7EA]'
                                    : 'bg-transparent'
                            } flex items-center justify-center font-raleway font-semibold text-base leading-[150%] tracking-normal align-middle text-[#809FB8]`,
                        )}
                    >
                        {pages}
                    </Link>
                )}
            </div>

            <div className='flex flex-row gap-2 w-fit h-6 items-center'>
                <Link
                    href={lastPage ? '#' : `/blog/${currentPage + 1}`}
                    className={clsx(
                        'order-1 font-raleway font-semibold text-[16px] leading-[150%] tracking-normal align-middle',
                        lastPage
                            ? 'text-[#B3C5D4] pointer-events-none opacity-50'
                            : 'text-[#4D5F6E]',
                    )}
                >
                    Trang kế tiếp
                </Link>

                <Image
                    src={
                        lastPage
                            ? '/assets/Pagination-Vector.png'
                            : '/assets/Pagination-Vector-black.png'
                    }
                    width={18}
                    height={18}
                    alt='arrow'
                    className={clsx(`order-2 ${lastPage && 'rotate-180'}`)}
                />
            </div>
        </div>
    );
}

export default Pagination;
