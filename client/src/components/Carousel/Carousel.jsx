import { useState } from 'react';
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Carousel.scss';

const CombinedCarousel = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const [text, setText] = useState('EARTHWANDER');

    const handleAnimate = (event) => {
        let iteration = 0
        
        const interval = setInterval(() => {
            setText(text
                .split('')
                .map((letter, index) => {
                    if(index < iteration) {
                        return event.target.dataset.value[index]
                    }
                    return letters[Math.floor(Math.random() * 52)]
                })
                .join(''))

            if (iteration >= event.target.dataset.value.length) clearInterval(interval)
            iteration += 1 / 4
        }, 30)
    }


    const slider = [
        {
            title: 'Tokyo, Japan',
            desc: 'Explore the bustling city of Tokyo, known for its vibrant culture and rich history.',
            image: 'https://images.unsplash.com/photo-1675725447265-836632b16c64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=443&q=80'
        },
        {
            title: 'Moscow, Russia',
            desc: 'Experience the grandeur of Moscow, with its iconic landmarks and captivating architecture.',
            image: 'https://images.unsplash.com/photo-1512495039889-52a3b799c9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
        },
        {
            title: 'Barcelona, Spain',
            desc: 'Immerse yourself in the vibrant culture of Barcelona, known for its stunning architecture and lively atmosphere.',
            image: 'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80'
        },
        {
            title: 'San Francisco, USA',
            desc: 'Discover the beauty of San Francisco, with its iconic landmarks and stunning waterfront views.',
            image: 'https://images.unsplash.com/photo-1536553859107-fc180c4ad6ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
        },
        {
            title: 'Seoul, South Korea',
            desc: 'Experience the vibrant city of Seoul, known for its modern skyscrapers and traditional palaces.',
            image: 'https://images.unsplash.com/photo-1534054923604-d8c3f5949f62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
        },
    ]

    return (
        <div className="carousel">
            <div>
                <div className="carousel-content">
                    <span>Discover</span>
                    {/* <h1 onMouseOver={handleMouseOver}>{text}</h1> */}
                    <h1 onMouseOver={(event) => handleAnimate(event)} data-value='EarthWander'>{text}</h1>
                    <hr />
                    <p>Empowering responsible travelers to explore the world sustainably and ethically, one eco-friendly journey at a time.</p>
                    <a href="/about" className="slider-btn">
                        About Us
                    </a>
                </div>
            </div>
            <Swiper
                className="myswiper"
                modules={[Pagination, EffectCoverflow, Autoplay]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 3,
                    slideShadows: true,
                }}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                    1560: {
                        slidesPerView: 3,
                    },
                }}
            >
                {slider.map((data) => (
                    <div key={data.title}>
                        <SwiperSlide style={{ backgroundImage: `url(${data.image})` }} className="myswiper-slider">
                            <div>
                                <h2>{data.title}</h2>
                                <p>{data.desc}</p>
                            </div>
                        </SwiperSlide>
                    </div>
                ))}
            </Swiper>
        </div>
    );
};

export default CombinedCarousel;
