import { Button } from "react-bootstrap";
import PropTypes from "prop-types";


export default function ButtonComponent({ title, secondTitle }) {
    return (
        <div className="buttons-banner">
            <style type="text/css">
                {`
    .btn-list-banner-first {
        background-color: transparent !important;
        border-color: #e0e0e0;
        color: #2cb376;
        font-size: 12px;
        border-radius: 8%;
    }

    .btn-list-banner-second {
        background-color: #2cb376 !important;
        color: #ffffff;
        font-size: 12px;
        border-radius: 6%;
    }
    `}
            </style>

            <Button id="dropdown-basic-button" variant="list-banner-first">{title}</Button>

            <Button id="dropdown-basic-button" variant="list-banner-second">{secondTitle}</Button>
        </div>
    )
}

ButtonComponent.propTypes = {
    title: PropTypes.string.isRequired,
    secondTitle: PropTypes.string.isRequired,
};