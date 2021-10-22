import React from "react";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <div
        className={`row mr-0 px-2 py-1 ${styles.kanban_navbar} align-items-center`}
      >
        <div className="col-md-4 col-12 d-flex justify-content-center justify-content-md-start">
          <a
            className={`btn mr-2 p-1 text-white font-weight-bold ${styles.kanban_navbarBtn}`}
          >
            Home
          </a>
          <a
            className={`btn mr-2 p-1 text-white font-weight-bold  ${styles.kanban_navbarBtn}`}
          >
            Tour
          </a>
          <a
            className={`btn mr-2 p-1 text-white font-weight-bold  ${styles.kanban_navbarBtn}`}
          >
            Blog
          </a>
        </div>
        <div className="col-md-4 col-6 d-flex justify-content-md-center justify-content-start p-md-1 pr-5 text-white font-weight-bold">
          <h5
            className={`text-white font-weight-bold mb-0 ${styles.main_heading}`}
          >
            Trello
          </h5>
        </div>
        <div className="col-md-4 col-6 p-1 d-flex justify-content-end">
          <button className="btn btn-success px-2 py-1 mr-2 btn-sm">
            <span className="text-white font-weight-bold">Sign up</span>
          </button>
          <button className="btn btn-primary px-2 py-1">
            <span className="text-white font-weight-bold btn-sm">Log in</span>
          </button>
        </div>
      </div>
      <div className="row m-0">
        <div
          className={`col-md-12 py-2 d-flex flex-wrap justify-content-center align-items-center ${styles.collaborateHeading}`}
        >
          <p className="font-weight-bold mb-0 mr-3 text-center">
            Visually collaborate with anyone, anhywhere.
          </p>
          <button className="btn btn-primary btn-sm mt-2 mt-md-0">
            Sign up for free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
