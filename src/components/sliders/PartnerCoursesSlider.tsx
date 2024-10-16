"use client"
import SwiperCore from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { FC } from 'react';
import Image from "next/image";
import barkeley from '../../../public/assets/images/berkeley.svg'
import yale from '../../../public/assets/images/yale.svg'
import hardvard from '../../../public/assets/images/hardvard.svg'
import wharton from '../../../public/assets/images/wharton_uni.svg'
import michigan from '../../../public/assets/images/michigan.svg'


// Ensure Swiper modules are used
SwiperCore.use([Autoplay, Navigation]);

const PartnerCoursesSlider: FC = () => {
    const data = [
        {
            src: barkeley
        },
        {
            src: yale
        },
        {
            src: hardvard
        },
        {
            src: wharton
        },
        {
            src: michigan
        },
    ];

    return (
        <section className='partners-section mb-5 mb-md-0'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 text-center mb-5'>
                        <h4 className='section-heading'>Partnered Courses</h4>
                    </div>
                    <div className='col-12'>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            slidesPerGroup={1}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 30,
                                },
                                575: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                767: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                991: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                1199: {
                                    slidesPerView: 4.5,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {data.map((item, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className='partner-grid-item'>
                                        <Image
                                            // src="/assets/images/berkeley.svg"
                                            src={item?.src}
                                            alt="hero img"
                                            className="img-fluid"
                                            width={300}
                                            height={120}
                                            priority
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnerCoursesSlider;
