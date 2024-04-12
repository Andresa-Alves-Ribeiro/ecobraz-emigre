import Carousel from 'react-bootstrap/Carousel';
import BannerTextComponent from "../banner-texts";
import ButtonComponent from "../button";
import Header from '../header';
import carouselItems from './carouselData';

function CarrouselComponent() {
    const renderTextWithBold = (text) => {
        const parts = text.split('*');
        return parts.map((part, index) => {
            return index % 2 === 0 ? part : <strong key={index} className="bold-black">{part}</strong>;
        });
    };

    return (
        <div className="carousel-container">
            <Header />

            <Carousel className="carousel">
                {carouselItems.map((item, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={item.image}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <div className='banner-texts'>
                                <h1 className="title-banner">
                                    {renderTextWithBold(item.title)}
                                </h1>
                                <p className="subtitle-banner">
                                    {renderTextWithBold(item.subtitle)}
                                </p>
                            </div>

                            <div>
                                <ButtonComponent title={item.buttonTitle} />
                            </div>

                            <div>
                                <BannerTextComponent altProp={item.title} infoBanner1={renderTextWithBold(item.infoBanner1)} infoBanner2={renderTextWithBold(item.infoBanner2)} />
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default CarrouselComponent;