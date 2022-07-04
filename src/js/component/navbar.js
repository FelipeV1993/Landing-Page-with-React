import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Navbar = (props) => {
  return (
    // Home About Services Contact
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-light">{props.tittle}</span>
        

        <button
          className="navbar-toggler text-light  d-flex"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-light"></span>
        </button>
        <div className="collapse navbar-collapse float-end" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <a
                className="nav-link active text-light "
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-white-50 disabled"
                aria-current="page"
                href="#"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-white-50 disabled"
                aria-current="page"
                href="#"
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-white-50 disabled "
                aria-current="page"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
