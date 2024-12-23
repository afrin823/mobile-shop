import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
const Slider = () => {
    const sliders = [
        "/images/carosel/1.jpg",
        "/images/carosel/2.jpg",
        "/images/carosel/3.jpg",
        "/images/carosel/4.jpg",
        "/images/carosel/5.jpg",
    ]
    // Slider Carosel
    return (
        <div className='max-w-[400px] max-h-[400px] lg:min-w-[550px] mt-10 lg:mt-0 h-full w-full rounded-lg '>
            <Swiper
                loop={true}
                autoplay={{
                    delay: 2500,
                }}
                modules={[Autoplay]}
                className="h-full w-full rounded overflow-hidden">
                {
                    sliders.map((slider, index) => {
                        return <SwiperSlide key={index}>
                            {/* <div className='lg:min-w-[550px] w-fu min-h-[450px] bg-cover bg-center bg-no-repeat rounded'
                                style={{
                                    backgroundImage: `url(${slider})`,
                                }}
                            >
                            </div> */}
                            <img src={slider} alt="" className='w-full'/>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    );
};

export default Slider;