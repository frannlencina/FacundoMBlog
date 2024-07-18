'use client'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

export default function Slider() {
    return (
        <Swiper
            style={{'--swiper-navigation-size': '0.7rem'}}
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
            <SwiperSlide>
                <div><img className='mx-auto' src="https://res.cloudinary.com/dctldwa03/image/upload/v1721187840/gallery-card-img-1_oroudu.png" alt="" /></div>
            </SwiperSlide>
            <SwiperSlide>
                <div><img className='mx-auto' src="https://res.cloudinary.com/dctldwa03/image/upload/v1721187840/gallery-card-img-1_oroudu.png" alt="" /></div>
            </SwiperSlide>
            <SwiperSlide>
                <div><img className='mx-auto' src="https://res.cloudinary.com/dctldwa03/image/upload/v1721187840/gallery-card-img-1_oroudu.png" alt="" /></div>
            </SwiperSlide>
            <SwiperSlide>
                <div><img className='mx-auto' src="https://res.cloudinary.com/dctldwa03/image/upload/v1721187840/gallery-card-img-1_oroudu.png" alt="" /></div>
            </SwiperSlide>
        </Swiper>
    )
}