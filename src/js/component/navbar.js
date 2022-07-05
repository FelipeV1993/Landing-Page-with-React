import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Navbar = (props) => {
  return (
    // Home About Services Contact ≡
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand " >{props.tittle}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <a className="navbar-toggler-icon  "  ></a>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link active " aria-current="page">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" >About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" aria-current="page">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary">Contact</a>
        </li>
      </ul>

    </div>
  </div>
</nav>
  );
};

export default Navbar;
