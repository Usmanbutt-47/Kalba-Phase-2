"use client"
import SwiperCore from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { FC } from 'react';
import Image from 'next/image';
import user from '../../../public/assets/images/user.png'


// Ensure Swiper modules are used
SwiperCore.use([Autoplay, Navigation]);

const OurSeekerSays: FC = () => {
    const data = [
        {
            name: 'John Smith',
            src: user,
            designation: 'Skiller Fluid Dynamic',
            desc: 'I absolutely loved working with Skiller John. His class on fluid dynamics made it easy for me to succeed in...'
        },
        {
            name: 'Anne',
            src: user,
            designation: 'Poetry',
            desc: 'Anne is so friendly and takes the time to make sure I understand the terminology before continuing with the...'
        },
        {
            name: 'Anne',
            src: user,
            designation: 'Poetry',
            desc: 'Anne is so friendly and takes the time to make sure I understand the terminology before continuing with the...'
        }
    ];

    return (
        <section className='seekers-section section-margin'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 text-center mb-5'>
                        <h4 className='section-heading'>What Our <span className='text-primary'>Seekers</span> Say!</h4>
                    </div>
                    <div className='col-12 text-center'>
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
                                    slidesPerView: 1,
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
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {data.map((item, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className='seeker-grid-item'>
                                        <Image
                                            src={item?.src}
                                            alt="hero img"
                                            className="img-fluid mb-3"
                                            width={300}
                                            height={120}
                                            priority
                                        />
                                        <p className='fs-18'>{item?.desc}</p>
                                        <p className='fw-700 mb-1 fs-18'>{item?.name}</p>
                                        <p className='fs-18'>{item?.designation}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurSeekerSays