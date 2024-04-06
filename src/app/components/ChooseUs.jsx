"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { StarLine } from "./Reuse"
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { PositionSvg } from './Icons';
const ChooseUs = () => {
    const Items = [
        { id: 1, title: 'Customer-Centric', para: 'Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.' },
        { id: 2, title: 'Customer-Centric', para: 'Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.' },
        { id: 3, title: 'Customer-Centric', para: 'Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.' },
        { id: 4, title: 'Customer-Centric', para: 'Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.' },
    ]
    return (
        <div id='whyChooseUs' className="mt-10 sm:mt-16 md:mt-[100px] lg:mt-[150px] relative">
            <div className="container flex flex-col items-center justify-center overflow-hidden">
                <StarLine para="Why Choose Us" />
                <h2 className="mt-1 h2 md:mt-2 max-w-[521px] text-center">Driving Innovation & <span>Transforming Industries</span></h2>
                <div className='flex flex-col w-full mt-8 sm:mt-10 md:mt-[52px]'>
                    <Swiper spaceBetween={24}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true}
                        pagination={{ el: ".swiper-pagination", type: "bullets", clickable: true, bulletActiveClass: "swiper-pagination-bullet-active", }}
                        modules={[Pagination]}
                        breakpoints={{
                            576: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className='w-full'>
                        {
                            Items.map((items, index) => (
                                <SwiperSlide data-aos="zoom-in" data-aos-duration="1000" key={index}>
                                    <div data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease" className={`border border-[#EEDDFB] rounded-xl p-[18px] sm:max-w-[377px] 2xl:max-w-full w-full min-h-[180px] sm:min-h-[208px] overflow-auto`}>
                                        <span data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease" className='border-[7px] text-sm font-bold font-Outfit flex items-center justify-center rounded-full bg-gradient-to-tr from-[#A854E9] to-[#4F91FC] bg-clip-text text-transparent border-[#F4EAFC] h-9 w-9'>{items.id}</span>
                                        <p data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease" className='mt-3 text-xl font-normal font-Outfit text-[#131200]'>{items.title}</p>
                                        <p data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease" className='mt-1 pTag'>{items.para}</p>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <div className="swiper-pagination mt-[10px]"><span className='swiper-pagination-bullet'></span></div>
                </div>
                <Image data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease" className='w-full h-auto mt-6 rounded-2xl sm:rounded-3xl max-sm:aspect-[4/3]' src="/assets/images/webp/chooseusimg.webp" alt='image' width={1140} height={527} priority />
            </div>
            <span className='absolute left-5 sm:left-12 top-16 sm:top-10'><PositionSvg /></span>
            <span className='absolute right-5 sm:right-12 bottom-10'><PositionSvg /></span>
        </div>
    )
}

export default ChooseUs
