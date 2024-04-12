import BannerTextComponent from "../banner-texts";
import ButtonComponent from "../button";
import Header from "../header";

export default function Banner() {
    return (
        <div className="banner">
            <Header />

            <div className="banner-text">
                <h1 className="title-banner">Descarte seu <span>resíduo eletrônico</span></h1>

                <p className="subtitle-banner">A Ecobraz realiza coleta, manufatura reversa e destinação de equipamentos eletrônicos conhecidos como <span>E-Lixo </span> ou <span>Lixo Digital</span></p>
                
                <div>
                    <ButtonComponent title="Saiba mais" />
                </div>

                <div>
                    <BannerTextComponent />
                </div>
            </div>
        </div>
    )
}