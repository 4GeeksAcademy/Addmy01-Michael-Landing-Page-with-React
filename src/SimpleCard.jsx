import React from "react";
import PropTypes from "prop-types";

const SimpleCard = (props) => {
  return (
    <div className="text-center">
      <div className="card text-center m-2" style={{ width: "18rem" }}>
        <img src={props.image} className="card-img-top" style={{ width: "100%", height: "100%" }} alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href={props.buttonURL} className="btn btn-primary">{props.buttonLabel}</a>
        </div>
      </div>
    </div>
  );
};

SimpleCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonURL: PropTypes.string,
};

export default SimpleCard;