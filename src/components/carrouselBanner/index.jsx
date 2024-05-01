import Carousel from 'react-bootstrap/Carousel';
import BannerTextComponent from "../banner-texts";
import ButtonComponent from "../button";
import Header from '../header';
import { NotePencil, Recycle } from '@phosphor-icons/react';
import carouselBannerData from './carouselBannerData';

export default function CarrouselBannerComponent() {
    const renderTextWithBold = (text) => {
        const parts = text.split('*');
        return parts.map((part, index) => {
            return index % 2 === 0 ? part : <strong key={index} className="bold-black">{part}</strong>;
        });
    };

    return (
        <div className="carousel-container">
            <Header />

            <Carousel className="carousel" controls={false} indicators={false}>
                {carouselBannerData.map((item, index) => (
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
                                <ButtonComponent title={item.buttonTitle} secondTitle="Agende sua coleta" />
                            </div>

                            <div>
                                <BannerTextComponent altProp={item.title} infoBanner1={renderTextWithBold(item.infoBanner1)} infoBanner2={renderTextWithBold(item.infoBanner2)} />
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>

            <div className='list-paragraphs'>
                <p>Descarte com quem é referência, descarte com a <span>ECOBRAZ EMIGRE</span></p>
                <span><Recycle size={22} color="#2cb476" className='list-paragraphs-icon' />Gestão eficiente de seus resíduos</span>
                <span><NotePencil size={22} color="#2cb476" className='list-paragraphs-icon' />Regulamentos e normas ambientais</span>
            </div>
        </div>
    );
}