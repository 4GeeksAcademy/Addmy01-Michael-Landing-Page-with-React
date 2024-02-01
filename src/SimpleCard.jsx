import React from "react";

function SimpleCard() {
    
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src="..." className="card-img-top" style={{width: "500px", height:"325px"}} alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title ">Card title</h5>
                <p className="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
      </div>
    );
};

export default SimpleCard