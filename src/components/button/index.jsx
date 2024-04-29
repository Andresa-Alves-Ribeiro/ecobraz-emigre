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

                .btn-list-banner-first:hover {
                    background-color: #2cb376 !important;
                    color: #ffffff;
                    font-size: 12px;
                    border-radius: 6%;
                }

                .btn-list-banner-second {
                    background-color: #2cb376 !important;
                    color: #ffffff;
                    font-size: 12px;
                    border-radius: 6%;
                }

                .btn-list-banner-second:hover {
                    background-color: transparent !important;
                    border-color: #e0e0e0;
                    color: #2cb376;
                    font-size: 12px;
                    border-radius: 8%;
                }
                `}
            </style>

            <Button className="btn-list-banner-first" id="dropdown-basic-button" variant="outline-secondary">{title}</Button>

            <Button className="btn-list-banner-second" id="dropdown-basic-button" variant="success">{secondTitle}</Button>
        </div>
    )
}

ButtonComponent.propTypes = {
    title: PropTypes.string.isRequired,
    secondTitle: PropTypes.string.isRequired,
};
