import BlogCard from '@/components/BlogCard';
import BreadCrumb from '@/components/BreadCrumb';
import sections from '@/data/blogHeadings';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function BlogDetailPage() {
    const reactions = [
        {
            src: '/assets/thumbs up.png',
            alt: 'thumb up',
            count: 1,
            label: 'Hữu ích',
        },
        {
            src: '/assets/green heart.png',
            alt: 'heart',
            count: 2,
            label: 'Yêu thích',
        },
        {
            src: '/assets/star-struck.png',
            alt: 'start',
            count: 0,
            label: 'Thú vị',
        },
        {
            src: '/assets/hushed face.png',
            alt: 'wow',
            count: 1,
            label: 'Bất ngờ',
        },
        {
            src: '/assets/yawning face.png',
            alt: 'boring',
            count: 0,
            label: 'Nhàm chán',
        },
        {
            src: '/assets/pouting face.png',
            alt: 'angry',
            count: 0,
            label: 'Tức giận',
        },
    ];
    return (
        <div className='container mx-auto px-4 mt-6 lg:px-20'>
            <div className='grid grid-cols-12 gap-8'>
                {/* Left Social Share Buttons */}
                <aside className='hidden lg:flex flex-col col-span-1 items-baseline space-y-4 sticky mt-[250px] gap-2'>
                    <p className='font-raleway font-extrabold text-base leading-[150%] tracking-normal align-middle'>
                        Chia sẻ
                    </p>
                    <button className='p-3 border border-[#15AA7A] rounded-[16px] h-16 w-16 flex items-center justify-center'>
                        <Image
                            src={'/assets/Icon_of_Zalo.png'}
                            width={24}
                            height={24}
                            alt='zalo'
                        />
                    </button>
                    <button className='p-3 border border-[#15AA7A] rounded-[16px] h-16 w-16 flex items-center justify-center'>
                        <Image
                            src={'/assets/fb icon.png'}
                            width={24}
                            height={24}
                            alt='fb'
                        />
                    </button>{' '}
                    <button className='p-3 border border-[#15AA7A] rounded-[16px] h-16 w-16 flex items-center justify-center'>
                        <Image
                            src={'/assets/x icon.png'}
                            width={24}
                            height={24}
                            alt='x'
                        />
                    </button>{' '}
                    <button className='p-3 border border-[#15AA7A] rounded-[16px] h-16 w-16 flex items-center justify-center'>
                        <Image
                            src={'/assets/linkedin icon.png'}
                            width={24}
                            height={24}
                            alt='linkedin'
                        />
                    </button>{' '}
                    <button className='p-3 border border-[#15AA7A] rounded-[16px] h-16 w-16 flex items-center justify-center'>
                        <Image
                            src={'/assets/z icon.png'}
                            width={24}
                            height={24}
                            alt='z'
                        />
                    </button>{' '}
                </aside>

                {/* Main Content */}
                <main className='col-span-12 lg:col-span-7'>
                    {/* Breadcrumb */}
                    <nav className='text-gray-500 text-sm mb-4'>
                        <BreadCrumb
                            routes={[
                                { route: 'Trang chủ' },
                                { route: 'Tài nguyên' },
                                { route: 'Blog' },
                                { route: 'Quản lý sản xuất', current: true },
                            ]}
                        />
                    </nav>
                    <div className='flex flex-col gap-4'>
                        <div className='rounded-[8px] bg-[#E2F0FE] text-[#0F4F9E] p-[4px_8px] w-fit'>
                            <p>Quản lý sản xuất</p>
                        </div>
                        {/* Article Title */}
                        <h1 className='font-raleway font-extrabold text-[36px] leading-[100%] tracking-normal align-middle capitalize '>
                            Quy Trình 5S Là Gì? Cách Ứng Dụng Hiệu Quả Nên Biết
                        </h1>
                        {/* Author Info */}
                        <div className='flex flex-row justify-between items-start space-x-2 text-gray-500 text-sm mt-2'>
                            <div className='flex flex-row gap-2.5 w-fit'>
                                <div className='h-16 w-16 items-baseline'>
                                    <Image
                                        src={'/assets/Logo pattern.png'}
                                        width={33}
                                        height={33}
                                        alt='logo'
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <p className='font-raleway font-medium text-[14px] leading-[150%] tracking-normal align-middle text-[#667F93]'>
                                        Tác giả
                                    </p>
                                    <p className='font-raleway font-bold text-base leading-[150%] tracking-normal align-middle text-[#33404A]'>
                                        FOSO Creator
                                    </p>
                                </div>
                            </div>

                            <div className='flex flex-row gap-3'>
                                <div className='flex items-start gap-2'>
                                    <Image
                                        src={'/assets/CalendarBlank.png'}
                                        width={24}
                                        height={24}
                                        alt='calendar'
                                    />
                                    <p className='font-raleway font-medium text-base leading-[150%] tracking-normal align-middle text-[#667F93]'>
                                        Cập nhật vào: 17/11/2022
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
                        </div>
                    </div>{' '}
                    {/* Featured Image */}
                    <div className='mt-6 flex flex-col gap-2'>
                        <Image
                            src='/assets/image.png'
                            width={800}
                            height={450}
                            alt='Quy trình 5S'
                            className='rounded-lg w-full'
                        />
                        <p className='text-center font-raleway font-normal text-base leading-[150%] tracking-normal text-[#667F93]'>
                            Quy trình 5s là gì?
                        </p>
                    </div>
                    {/* Article Content (Placeholder) */}
                    <blockquote className='text-xl font-semibold text-gray-900 '>
                        <svg
                            className='w-8 h-8 mb-4'
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='#15AA7A'
                            viewBox='0 0 18 14'
                        >
                            <path d='M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z' />
                        </svg>
                        <p className='text-center font-raleway font-medium italic text-[20px] leading-[24px] tracking-[0%] text-[#33404A]'>
                            Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình
                            5S là gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới
                            đây của FOSO sẽ trả lời cho bạn thông tin chi tiết
                            về mô hình này cũng như yếu tố tạo nên thành công
                            của quy trình bạn nhé.
                        </p>
                    </blockquote>
                    <div className='space-y-8 p-4'>
                        {sections.map((section, index) => (
                            <div key={index}>
                                <h2 className='font-raleway font-extrabold text-xl leading-[150%] tracking-normal text-[#15AA7A]'>
                                    {section.title}
                                </h2>
                                {section.content && (
                                    <>
                                        {/* First item as normal text */}
                                        <p className='mb-2'>
                                            {section.content.split(';')[0]}
                                        </p>

                                        {/* Remaining items as a bulleted list */}
                                        <ul className='list-disc ml-6'>
                                            {section.content
                                                .split(';')
                                                .slice(1) // Skip the first item
                                                .map((text, idx) => (
                                                    <li
                                                        key={idx}
                                                        className='mb-2'
                                                    >
                                                        {text}
                                                    </li>
                                                ))}
                                        </ul>
                                    </>
                                )}

                                {section.list && (
                                    <ul className='list-disc ml-6 marker:text[#15AA7A]'>
                                        {section.list.map((item, idx) => {
                                            const [highlighted, rest] =
                                                item.subTitle.split(/\s*\(/); // Split at "("
                                            return (
                                                <li
                                                    key={idx}
                                                    className='text-lg'
                                                >
                                                    <span className='text-[#15AA7A] font-raleway font-bold text-[16px] leading-[150%] tracking-[0%]'>
                                                        {highlighted}
                                                    </span>
                                                    {rest && ` (${rest}`}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )}
                                {!section.title.startsWith('6.')
                                    ? section.subSections &&
                                      section.subSections.map((sub, idx) => (
                                          <div
                                              key={idx}
                                              className='mt-4'
                                          >
                                              <h3 className='font-raleway font-bold text-[16px] leading-[150%] tracking-[0%] text-[#15AA7A]'>
                                                  {sub.subTitle}
                                              </h3>
                                              <p>
                                                  {sub.subContent
                                                      .split(';')
                                                      .map((text, i) => (
                                                          <span
                                                              key={i}
                                                              className='block mb-2'
                                                          >
                                                              {text}
                                                          </span>
                                                      ))}
                                              </p>
                                          </div>
                                      ))
                                    : section.subSections &&
                                      section.subSections.map((sub, idx) => (
                                          <div
                                              key={idx}
                                              className='flex flex-col mt-4 border-l-4 border-[#15AA7A] pl-4 gap-2.5'
                                          >
                                              <p>
                                                  {sub.subContent
                                                      .split(';')
                                                      .map((text, i) => (
                                                          <span
                                                              key={i}
                                                              className='block'
                                                          >
                                                              {text}
                                                          </span>
                                                      ))}
                                              </p>
                                          </div>
                                      ))}
                                {section.images &&
                                    section.images.map((img, idx) => (
                                        <div
                                            key={idx}
                                            className='mb-6'
                                        >
                                            <Image
                                                src={img.src}
                                                alt={img.alt}
                                                width={900}
                                                height={600}
                                            />
                                            <p className='text-center font-raleway font-normal text-base leading-[150%] tracking-normal text-[#667F93]'>
                                                {img.alt}
                                            </p>
                                        </div>
                                    ))}
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4 p-6'>
                        <div className='flex flex-col gap-1'>
                            <p className='font-raleway font-extrabold text-[20px] leading-[150%] tracking-normal text-center text-[#33404A]'>
                                Bạn thấy bài viết như thế nào?
                            </p>
                            <p className='font-raleway font-medium text-[16px] leading-[150%] tracking-normal text-center text-[#33404A]'>
                                4 phản hồi
                            </p>
                        </div>
                        <div className='flex flex-row gap-8'>
                            {reactions.map((reaction, index) => (
                                <div
                                    key={index}
                                    className='flex flex-col gap-1 justify-center items-center text-center'
                                >
                                    <Image
                                        src={reaction.src}
                                        width={48}
                                        height={48}
                                        alt={reaction.alt}
                                    />
                                    <p>{reaction.count}</p>
                                    <p>{reaction.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>

                {/* Right Sidebar - Table of Contents */}
                <aside className='col-span-3 sticky top-20 flex flex-col gap-6'>
                    <div className='mb-6'>
                        <details>
                            <summary className='flex items-center justify-between cursor-pointer blog-content'>
                                <h2 className='text-xl font-bold'>
                                    Nội Dung Bài Viết
                                </h2>
                            </summary>
                            {sections.map((section) => (
                                <p key={section.title}>
                                    <Link href=''>{section.title}</Link>
                                </p>
                            ))}
                        </details>
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
                                        src={'/assets/Mask-group.png'}
                                        width={136}
                                        height={136}
                                        alt='mask'
                                        className='object-contain'
                                    />
                                    <p className='text-white text-xl font-bold'>
                                        Miễn phí dùng thử
                                        <Image
                                            src={'/assets/mrp-logo.png'}
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
                                        src={'/assets/Vector-white.png'}
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
                                    Gia nhập cộng đồng FMRP Việt – Kết nối, chia
                                    sẻ, cùng phát triển!
                                </p>

                                {/* Push button to the bottom */}
                                <button className='w-full rounded-[40px] border border-white text-white flex flex-row justify-between items-center h-10 p-[8px_24px]    '>
                                    Tham Gia Ngay
                                    <Image
                                        src={'/assets/Vector-white.png'}
                                        width={16}
                                        height={16}
                                        alt='arrow'
                                    />
                                </button>
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
                                            src={'/assets/Mask-group.png'}
                                            width={136}
                                            height={136}
                                            alt='mask'
                                            className='object-contain'
                                        />
                                        <p className='text-white text-xl font-bold'>
                                            Miễn phí dùng thử
                                            <Image
                                                src={'/assets/mrp-logo.png'}
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
                                            src={'/assets/Vector-white.png'}
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
                                        Gia nhập cộng đồng FMRP Việt – Kết nối,
                                        chia sẻ, cùng phát triển!
                                    </p>

                                    {/* Push button to the bottom */}
                                    <button className='w-full rounded-[40px] border border-white text-white flex flex-row justify-between items-center h-10 p-[8px_24px]    '>
                                        Tham Gia Ngay
                                        <Image
                                            src={'/assets/Vector-white.png'}
                                            width={16}
                                            height={16}
                                            alt='arrow'
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
                <div className='col-span-12'>
                    <div className='w-full h-fit p-12'>
                        <div className='flex flex-col gap-6 w-full'>
                            <div>
                                <h2 className='font-raleway font-extrabold text-[36px] leading-[200%] align-middle capitalize'>
                                    Bài viết liên quan
                                </h2>
                            </div>
                            <div className='flex flex-row gap-8'>
                                <BlogCard
                                    imgWidth={458}
                                    imgHeight={429}
                                />
                                <BlogCard
                                    imgWidth={458}
                                    imgHeight={429}
                                />
                                <BlogCard
                                    imgWidth={458}
                                    imgHeight={429}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetailPage;
