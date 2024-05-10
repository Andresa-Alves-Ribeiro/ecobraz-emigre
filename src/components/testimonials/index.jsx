import GoogleLogo from "../../assets/google-logo.webp"
import CarrouselTestimonialsComponent from "../carrouselTestimonials"

export default function Testimonials() {
    return (
        <div className="testimonials">
            <div className="centered-testimonials">
                <div className="header-testimonials">
                    <div className="title-testimonials">
                        <h2>Depoimentos dos <strong>nossos </strong><span>clientes</span></h2>
                        <p>Veja abaixo a credibilidade que a <strong>Ecobraz Emigre</strong> traz sobre seus clientes.</p>
                    </div>

                    <div className="google-div-image">
                        <p>Avaliações do</p>
                        <img src={GoogleLogo} alt="Logo da Google" width={150} height={50} className="image-google" />
                    </div>
                </div>

                <CarrouselTestimonialsComponent />
            </div>
        </div>
    )
}