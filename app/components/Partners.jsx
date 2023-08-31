import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Partners() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
        <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 py-6">
            <h2 className="text-center py-4 my-6 font-semibold dark:text-white lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800">
                Our Partners
            </h2>
            <Slider {...settings}>
                <div className="px-2">
                    <img src="/images/pay-1.webp" alt="" className="w-auto h-24 md:h-32" />
                </div>
                <div className="px-2">
                    <img src="/images/pay-2.webp" alt="" className="w-auto h-24 md:h-32" />
                </div>
                <div className="px-2">
                    <img src="/images/pay-3.webp" alt="" className="w-auto h-24 md:h-32" />
                </div>
                <div className="px-2">
                    <img src="/images/pay-4.webp" alt="" className="w-auto h-24 md:h-32" />
                </div>
                <div className="px-2">
                    <img src="/images/pay-5.webp" alt="" className="w-auto h-24 md:h-32" />
                </div>
            </Slider>
        </div>
    );
}

export default Partners;
