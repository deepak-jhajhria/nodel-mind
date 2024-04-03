"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { StarLine } from "./Reuse"
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
const ChooseUs = () => {
    const Items = [
        { id: 1, title: 'Customer-Centric', para: 'Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.' },
        { id: 2, title: 'Customer-Centric', para: 'Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.' },
        { id: 3, title: 'Customer-Centric', para: 'Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.' },
        { id: 4, title: 'Customer-Centric', para: 'Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.' },
    ]
    return (
        <div className="mt-10 sm:mt-16 md:mt-[100px] lg:mt-[150px]">
            <div className="container flex flex-col items-center justify-center overflow-hidden">
                <StarLine para="Why Choose Us" />
                <h2 className="mt-1 h2 md:mt-2 max-w-[521px] text-center">Driving Innovation & <span>Transforming Industries</span></h2>
                <div className='flex flex-col w-full mt-[52px]'>
                    <Swiper spaceBetween={24}
                        slidesPerView={3}
                        centeredSlides={true}
                        loop={true}
                        pagination={{ el: ".swiper-pagination", type: "bullets", clickable: true, bulletActiveClass: "swiper-pagination-bullet-active", }}
                        modules={[Pagination]}
                        className='w-full'>
                        {
                            Items.map((items, index) => (
                                <SwiperSlide key={index}>
                                    <div className={`border border-[#EEDDFB] rounded-xl p-[18px] max-w-[364px] w-full min-h-[208px] overflow-auto`}>
                                        <span className='border-[7px] text-sm font-bold font-Outfit flex items-center justify-center rounded-full bg-gradient-to-tr from-[#A854E9] to-[#4F91FC] bg-clip-text text-transparent border-[#F4EAFC] h-9 w-9'>{items.id}</span>
                                        <p className='mt-3 text-xl font-normal font-Outfit text-[#131200]'>{items.title}</p>
                                        <p className='mt-1 pTag'>{items.para}</p>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <div className="swiper-pagination mt-[10px]"><span className='swiper-pagination-bullet'></span></div>
                </div>
                <Image className='w-full mt-6 rounded-3xl' src="/assets/images/png/chooseusimg.png" alt='image' width={1000} height={1000} priority />
            </div>
        </div>
    )
}

export default ChooseUs
