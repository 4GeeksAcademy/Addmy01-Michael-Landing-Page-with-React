import React from "react";
// import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const SimpleCard = (props) => {
    
    return (
        <>
            <div className="card m-2" style={{ width: "18rem" }}>
                <img src={props.image} className="card-img-top" style={{ width: "100%", height: "100%" }} alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title ">{props.title}</h5>
                    <p className="card-text ">{props.description}</p>
                    <a href={props.buttonURL} className="btn btn-primary">{props.buttonLabel}</a>
                </div>
            </div>
        </>
    );
};

SimpleCard.propTypes = {
	// PropTypes here
	image: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string,
};



export default SimpleCard

// ReactDOM.render(
// 	<SimpleCard
// 		image="https://picsum.photos/500/325"
// 		title="Coolest Card ever"
// 		description="React is the most popular rendering library in the world"
// 		buttonLabel="Go to the official website"
// 		buttonURL="https://reactjs.org/"
// 	/>,
//     document.getElementById("root")
// );

