import { Carousel } from 'react-bootstrap';
import carouselTestimonialsData from './carouselTestimonialsData';
import { useState, useEffect } from 'react';

const CarouselTestimonials = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const renderTextWithBold = (text) => {
        const parts = text.split('*');
        return parts.map((part, index) => {
            return index % 2 === 0 ? part : <strong key={index} className="bold-green">{part}</strong>;
        });
    };

    const renderTestimonial = (startIdx, numToShow) => {
        return (
            <div className="carousel-testimonials-container">
                {carouselTestimonialsData.slice(startIdx, startIdx + numToShow).map((testimonial, index) => (
                    <div key={index} className="carousel-testimonial">
                        <h3 className="title-carousel">{renderTextWithBold(testimonial.title)}</h3>
                        <img src={testimonial.image} alt="Avatar" className="testimonial-image" width={70} height={20} />
                        <div className="testimonial-content">
                            <p className="subtitle-carousel">{testimonial.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const numToShow = isMobile ? 1 : 2;
    const totalSlides = Math.ceil(carouselTestimonialsData.length / numToShow);

    return (
        <Carousel className="testimonials-div" indicators={false}>
            {[...Array(totalSlides)].map((_, index) => (
                <Carousel.Item key={index}>
                    {renderTestimonial(index * numToShow, numToShow)}
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default CarouselTestimonials;