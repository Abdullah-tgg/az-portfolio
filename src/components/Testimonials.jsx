// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';

import Testimonails from "../assets/Testimonials.json";

const Testimonials = () => {
    const country = 'BE';
    return (
        <>
            <section className='testimonials py-5'>
                <div className="container py-md-5">
                    <p className="h1 text-center text-white mb-5 text-uppercase">What Our Clients Say?</p>
                    <Swiper spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Autoplay]}>
                        {Testimonails.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="card testimonial-card" style={{
                                    height: '220px'
                                }}>
                                    <div className="card-body">
                                        <p className="text-end mb-0">
                                            <i className="fa-solid fa-quote-right text-secondary fa-3x"></i>
                                        </p>
                                        <p className='card-text text-truncate'>
                                            {testimonial.review}
                                        </p>
                                        <div className="user-info">
                                            <h5 className="card-title mb-0">{testimonial.name}</h5>
                                            <p>
                                                {testimonial.country ? (
                                                    <img
                                                        src={`https://flagsapi.com/${testimonial.country}/flat/64.png`}
                                                        style={{
                                                            width: '35px',
                                                            height: '35px'
                                                        }}
                                                        alt={testimonial.country}
                                                    />
                                                ) : (
                                                    testimonial.country ? null : testimonial.location || 'Unknown Location'
                                                )}
                                            </p>



                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section >
        </>
    );
};

export default Testimonials;
