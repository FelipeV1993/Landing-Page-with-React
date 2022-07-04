import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Jumbotron = (props) => {
  return (
    <div className="m-3">
      <div className="p-1 mb-4 rounded-3 bg-secondary bg-opacity-25">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">{props.title}</h1>
          <p className="col-md-12 fs-4">{props.descripcion}</p>
          <button className="btn btn-primary btn-lg" type="button">
            {props.button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
