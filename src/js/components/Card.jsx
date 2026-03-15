import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";


const Card = (props) => {
    return (
        <div className="col">
            <div className="card text-center border">
                <img src={props.cardImg} style={{ height: "250px", objectFit: "cover" }}
                    className="card-img-top rounded-0" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.cardTitle}</h5>
                    <p className="card-text">{props.cardDescription}</p>

                </div>
                <div className="bg-light p-3 border-top border-light">
                    <a href={props.cardButtonURL} className="btn btn-primary">{props.cardButtonLabel}</a>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    cardTitle: PropTypes.string,
    cardDescription: PropTypes.string,
    cardButtonLabel: PropTypes.string,
    cardButtonURL: PropTypes.string,
    cardImg: PropTypes.string
};


export default Card