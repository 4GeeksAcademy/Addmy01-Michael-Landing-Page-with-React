import React from "react";

function SimpleJumbotron() {
    return (
    <div className="container-display m-3"> 
        <div className="card bg-light  border-0 rounded-0 p-3">
            <h1 className="card-title">A Warm Welcome!</h1>
            <p className="card-body p-0">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti inventore alias provident quas? Esse amet, provident perspiciatis nesciunt, doloremque minima voluptates error dignissimos tempora temporibus fuga excepturi nulla nostrum quibusdam.
            </p>
            <div className="button">
                <a href="#" className="btn btn-primary">Call to action!</a>
            </div>
        </div>
    </div>
    );
};

export default SimpleJumbotron