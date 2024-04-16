import CountUp from "react-countup";
import PropTypes from "prop-types";


export default function Counter({ number, title, quantity }) {
    return (
        <div className="number">
            <p className="counter">+ <CountUp duration={10} end={number} className="quantity-number" /> {quantity}</p>    
            <p className="counters-title">{title}</p>
        </div>
    );
}

Counter.propTypes = {
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired
};