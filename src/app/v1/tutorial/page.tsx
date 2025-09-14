"use client"

import { useRef } from 'react'
import Cakkara from "@/drnr-assets/cakkara.png"
import BlueMoji from "@/drnr-assets/bluemoji.png"
import NuggetRoblok from "@/drnr-assets/nuggetroblok.png"
import Flower from "@/drnr-assets/flower.png"
import Nerdie from "@/drnr-assets/nerdie.png"
import Presen from "@/drnr-assets/presen.png" 

import Image from "next/image"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Tutorial() {
    const swiperRef = useRef<SwiperType | null>(null)

    const handleSlideClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext()
        }
    }

    return (
        <>
            <main className="w-full h-dvh bg-[#fbbf17] flex items-center">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper
                        console.log(swiper)
                    }}
                    onClick={handleSlideClick}
                    className="cursor-pointer w-full h-3/4 flex justify-center items-center"
                    pagination={true}
                    modules={[Pagination]}
                >
                    <SwiperSlide className="w-full h-3/4 relative">
                        <div className="flex justify-center ">
                            <Image src={Cakkara} className="w-5/6 md:w-28" alt="drnr-logo" />
                        </div>

                        <div className='flex justify-center mt-[20%]'>
                            <p className='text-4xl text-center font-semibold w-1/2'>ini tutorialnys</p>
                        </div>

                        <div className='flex justify-end me-6 mt-[20%]'>
                        <Image src={Nerdie} className="w-[47%] md:w-28" alt="drnr-logo" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-full h-3/4">
                        <div className="flex flex-col items-center justify-center">
                            <p className='text-4xl font-bold'>#1</p>
                            <Image src={BlueMoji} className="w-3/5 mt-32 mb-6 md:w-28" alt="drnr-logo" />
                            <p className='text-xl w-[70%] font-semibold text-center tracking-widest'>pilih frame yang mantep (semua mantep)</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-full h-3/4">
                        <div className="flex flex-col items-center justify-center">
                            <p className='text-4xl font-bold'>#2</p>
                            <Image src={NuggetRoblok} className="w-2/5 mt-24 mb-6 md:w-28" alt="drnr-logo" />
                            <p className='text-xl w-[70%] font-semibold text-center tracking-widest'>foto dgn baik, selesai tidak selesai dikumpulkan</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-full h-3/4">
                        <div className="flex flex-col items-center justify-center">
                            <p className='text-4xl font-bold'>#3</p>
                            <Image src={Flower} className="w-2/5 mt-24 mb-6 md:w-28" alt="drnr-logo" />
                            <p className='text-xl w-[70%] font-semibold text-center tracking-widest'>save n share ke grup wasaf keluarga</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </main>
        </>
    )
}