import { Carousel } from 'react-bootstrap';
import carouselNewsData from './carouselNewsData';
import { Clock } from '@phosphor-icons/react';
import { useState, useEffect } from 'react';

export const CarrouselNewsComponent = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalSlides = Math.ceil(carouselNewsData.length / (isMobile ? 1 : 4));

    return (
        <Carousel className="news-div" indicators={false}>
            {[...Array(totalSlides)].map((_, index) => (
                <Carousel.Item key={index}>
                    <div className="carousel-news-container">
                        {carouselNewsData.slice(index * (isMobile ? 1 : 4), index * (isMobile ? 1 : 4) + (isMobile ? 1 : 4)).map((news, idx) => (
                            <div key={idx} className="carousel-news">
                                <img src={news.image} alt="Avatar" className="news-image" width={70} height={20} />
                                <div className="news-content">
                                    <span className='news-category' style={{ backgroundColor: news.backgroundColor, color: news.color }}>
                                        {news.category}
                                    </span>
                                    <p className='news-date'>
                                        <Clock size={16} color="#edc10e" weight="bold" />
                                        {news.date}
                                    </p>
                                    <strong className="subtitle-carousel">{news.text}</strong>
                                </div>
                            </div>
                        ))}
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};