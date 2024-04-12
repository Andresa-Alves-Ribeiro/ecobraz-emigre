import Sustentabilidade from "../../assets/sustentabilidade.png"
import Check from "../../assets/check.png"

export default function BannerTextComponent() {
    return (
        <div className="list-text-banner">
            <div>
                <img src={Sustentabilidade} alt="simbolo sustentabilidade" width={55} height={55} />
                <p>Promovemos o ciclo de destinação com responsabilidade ambiental.</p>
            </div>

            <div>
            <img src={Check} alt="simbolo sustentabilidade" width={55} height={55} />
                <p>Executamos o serviço de acordo com o Ibama e a Cetesb.</p>
            </div>
        </div>
    )
}