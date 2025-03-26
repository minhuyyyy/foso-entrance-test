import Image from 'next/image';
import BreadCrumb from './components/BreadCrumb';

export default function Home() {
    return (
        <div className='mt-16 grid grid-cols-6 gap-3'>
            {/* Breadcrumb Section */}
            <div className='col-span-6 flex justify-center pb-16'>
                <BreadCrumb
                    routes={[
                        { route: 'Trang chủ' },
                        { route: 'Tài nguyên' },
                        { route: 'Blog', current: true },
                    ]}
                />
            </div>

            {/* Image Section */}
            <div className='col-span-1 flex items-center justify-center'>
                <div className='w-[282px] h-[268px]'>
                    <Image
                        src='/assets/Saly-42.png'
                        alt='calendar'
                        width={195}
                        height={188}
                        className='object-contain'
                    />
                </div>
            </div>
            <div className='col-span-4 flex flex-row text-[64px] leading-[100px] text-center capitalize font-raleway justify-center'>
                <div className='text-center '>
                    <span className='text-black text-[64px] font-normal text-center'>
                        Blog{' '}
                        <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#53b086] to-[#53b086]/90'>
                            FOSO
                        </span>{' '}
                        –
                    </span>
                    <br />
                    <span className='text-black text-[64px] font-normal'>
                        Cập Nhật Tin Tức {''}
                        <span className='relative font-extrabold text-black'>
                            {''}Mới Nhất
                            <span className='absolute left-0 bottom-1 w-full h-[25px] bg-[#a0d6b4] rounded-lg -z-10'></span>
                        </span>
                    </span>
                </div>
            </div>
            <div className='col-span-1 flex flex-row items-center justify-center'>
                <div className='w-[320px] h-[251px]'>
                    <Image
                        src='/assets/Saly-25.png'
                        alt='calendar'
                        width={195}
                        height={159}
                        className='object-contain'
                    />
                </div>
            </div>
        </div>
    );
}
