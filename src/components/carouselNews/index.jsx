import { Carousel } from 'react-bootstrap';
import carouselNewsData from './carouselNewsData';
import { Clock } from '@phosphor-icons/react';

export const CarrouselNewsComponent = () => {
    const totalSlides = Math.ceil(carouselNewsData.length / 4);

    return (
        <Carousel className="news-div" indicators={false}>
            {[...Array(totalSlides)].map((_, index, startIdx) => (
                <Carousel.Item key={index}>
                    <div className="carousel-news-container">
                        {carouselNewsData.slice(startIdx, startIdx + 4).map((news, index) => (
                            <div key={index} className="carousel-news">
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