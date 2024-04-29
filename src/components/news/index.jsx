import { CarrouselNewsComponent } from "../carouselNews";

export default function News() {
    return (
        <div className="news">
            <div className="header-news">
                <h1 className="title-news">Confira nossas notícias</h1>
                <p className="subtitle-news">Saiba um pouco mais sobre a Ecobraz e fique por dentro sobre as coletas de lixo eletrônico!</p>
            </div>

            <CarrouselNewsComponent />

            <hr />

            <div className="manifesto">
                <h1 className="title-news">Manifesto</h1>
                <p className="subtitle-manifesto">Ao escolher nossos serviços, você está contribuindo para um futuro mais verde e limpo. Além disso, você pode ter a certeza de que seus resíduos eletrônicos serão descartados de forma adequada, sem prejudicar o meio ambiente.</p>
            </div>
        </div>
    )
}