import React from 'react'
import card1 from "../images/applecard1.jpg"
import card2 from "../images/applecard2.jpg"
import card3 from "../images/applecard3.jpg"
import card4 from "../images/applecard4.jpg"
import card5 from "../images/applecard5.jpg"
import card6 from "../images/applecard6.jpg"
import card7 from "../images/applecard7.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
function Cards() {

    return (
        <>
            <section className="cards">
                <div>
                    <h1 className='get-to-know-ipad'>Get to Know iPad.</h1>
                </div>
                <div className="card-container">
                    <Swiper
                        slidesPerView={3.5}
                        spaceBetween={10}
                        breakpoints={{
                            320: {
                                slidesPerView:1,
                                spaceBetween: 10,

                            }, 480: {
                                slidesPerView:1,

                                spaceBetween: 10,

                            },
                            640: {
                                slidesPerView:2,

                                spaceBetween: 10,

                            },
                            768: {
                                slidesPerView:4,

                                spaceBetween: 10,

                            },
                            1024: {
                                slidesPerView:5,
                                
                                spaceBetween: 10,
                            },
                            1200: {
                                slidesPerView:4,

                                spaceBetween: 10,
                            }, 1440: {
                                slidesPerView:3.5,

                                spaceBetween: 10,
                            },
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="card-item">
                                <img src={card1} alt="Personal Intelligence" />
                                <p className="text">Personal intelligence,<br /> powerful.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-item">
                                <img src={card2} alt="Creativity" />
                                <p className="text">Your workstation can be any place.</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="card-item">
                                <img src={card3} alt="Creativity" />
                                <p className="text">Take your inner artist out and about.</p>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="card-item">
                                <img src={card4} alt="Learning" />
                                <p className="text">Your classNameroom can be anywhere.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-item">
                                <img src={card5} alt="Entertainment" />
                                <p className="text">Kick back. Time to game on.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-item">
                                <img src={card6} alt="Everyday Superpowers" />
                                <p className="text">Dream it up. Jot it down. Built right in.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card-item">
                                <img src={card7} alt="Everyday Superpowers" />
                                <p className="text">Dream it up. Jot it down. Built right in.</p>
                            </div>
                        </SwiperSlide>

                    </Swiper>









                </div>

            </section>

        </>
    )
}

export default Cards