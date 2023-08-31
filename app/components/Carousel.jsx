import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable auto-play
        autoplaySpeed: 3000, // Set auto-play speed in milliseconds
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
            <Slider {...settings}>
                <div className="h-[48vh] place-items-center rounded-lg">
                    <img src="/images/service-1.png" alt="" className="w-full rounded-lg md:h-[48vh]" />
                </div>
                <div className="h-[48vh] place-items-center">
                    <img src="/images/animals.jpg" alt="" className="w-full rounded-lg md:h-[48vh]" />
                </div>
                <div className="h-[48vh] place-items-center">
                    <img src="/images/service-2.png" alt="" className="w-full rounded-lg md:h-[48vh]" />
                </div>
                <div className="h-[48vh] place-items-center">
                    <img src="/images/service-3.jpeg" alt="" className="w-full rounded-lg md:h-[48vh]" />
                </div>
                <div className="h-[48vh] place-items-center">
                    <img src="/images/hotel-1.jpeg" alt="" className="w-full rounded-lg md:h-[48vh]" />
                </div>
            </Slider>
    );
}

export default Carousel;
