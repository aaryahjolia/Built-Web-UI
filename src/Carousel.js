import React, { useRef, useState } from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Carousel_1 from './Assets/Carousel_Images/Carousel_1.jpeg'
import Carousel_2 from './Assets/Carousel_Images/Carousel_2.jpeg'
import Carousel_3 from './Assets/Carousel_Images/Carousel_3.jpeg'

function Carousel_Main() {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };

    const carouselRef = useRef();
    let totalSlides = 3;
    const [centerSlide, setCenterSlide] = useState(0);
    let hoverTimeout;
    const handleMouseEnter = (index) => {
        // alert(centerSlide + " " + index);
        clearTimeout(hoverTimeout);
        hoverTimeout = setTimeout(() => {
            if ((centerSlide + 1) % totalSlides === index) {
                const nextSlide = carouselRef.current.state.currentSlide + 1;
                carouselRef.current.goToSlide(nextSlide);
                setCenterSlide(index);
            } else if ((centerSlide - 1 + totalSlides) % totalSlides === index) {
                const prevSlide = carouselRef.current.state.currentSlide - 1;
                carouselRef.current.goToSlide(prevSlide);
                setCenterSlide(index);
            }
        }, 200); // Adjust the delay as needed
    };

    const handleMouseLeave = () => {
        // Clear the timeout when mouse leaves
        clearTimeout(hoverTimeout);
    };

    return (
        <div className='w-full mt-40'>
            <Carousel
                ref={carouselRef}
                infinite={true}
                responsive={responsive}
                centerMode={true}
                removeArrowOnDeviceType={["desktop", "tablet"]}
                draggable={false}
            >
                <div className='custom_carousel md:p-10 w-full' onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}>
                    <div className='w-full h-96 mt-10'>
                        <img src={Carousel_1} alt='Carousel 1' className='w-full h-full object-cover rounded-2xl' />
                    </div>
                    <h1 className='text-center uppercase text-3xl mt-16'>Doritos after dark (NYC)</h1>
                </div>

                <div className='custom_carousel p-10' onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
                    <div className='w-full h-96 mt-10'>
                        <img src={Carousel_2} alt='Carousel 2' className='w-full h-full object-cover rounded-2xl' />
                    </div>
                    <h1 className='text-center uppercase text-3xl mt-16'>Hot Topic Room (YVR)</h1>
                </div>

                <div className='custom_carousel p-10' onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
                    <div className='w-full h-96 mt-10'>
                        <img src={Carousel_3} alt='Carousel 3' className='w-full h-full object-cover rounded-2xl' />
                    </div>
                    <h1 className='text-center uppercase text-3xl mt-16'>Party Stage (GUJ)</h1>
                </div>
            </Carousel>
        </div>
    )
}

export default Carousel_Main