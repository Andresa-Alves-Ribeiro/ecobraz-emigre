import Sustentabilidade from "../../assets/sustentabilidade.png"
import Check from "../../assets/check.png"
import PropTypes from "prop-types";


export default function BannerTextComponent({ infoBanner1, infoBanner2, altProp }) {
    return (
        <div className="list-text-banner">
            <div>
                <img src={Sustentabilidade} alt={altProp} width={55} height={55} />
                <p>{infoBanner1}</p>
            </div>

            <div>
                <img src={Check} alt={altProp} width={55} height={55} />
                <p>{infoBanner2}</p>
            </div>
        </div>
    )
}

BannerTextComponent.propTypes = {
    infoBanner1: PropTypes.string.isRequired,
    infoBanner2: PropTypes.string.isRequired,
    altProp: PropTypes.string.isRequired,
};