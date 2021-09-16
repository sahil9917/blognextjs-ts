import React from "react";
import styles from "../styles/Navbar.module.scss";
import Image from "next/image";
import logo1 from "../public/download.png";

export default function Navbar() {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light d-none d-xl-block d-md-none sticky-top ${styles.Navbar__2}`}
      >
        <div className={`container-fluid pt-3 ${styles.Navbar__1} `}>
          <a className="navbar-brand pe-2" href="#">
            <Image src={logo1} alt="logo2" width="66px" height="24px" />{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex  align-items-center ">
              <li className="nav-item ">
                <span className={`fas fa-tv fs-4 ${styles.iconnav__1}`}></span>
              </li>
              <li
                className={`nav-item fs-4 mx-4 pb-2 fw-lighter ${styles.iconnav__1}`}
              >
                |
              </li>
              <li className="nav-item">
                <span
                  className={`fas fa-mobile-alt fs-4 ${styles.iconnav__1}`}
                ></span>
              </li>
            </ul>
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex  align-items-center">
                <li className="nav-item">
                  <a className={`me-3 ${styles.word__1}`}>
                    Click Edit and create your own amazing website
                  </a>
                </li>
                <li
                  className={`nav-item text-decoration-underline me-2 ${styles.word__2}`}
                >
                  <a href="#"> Read More</a>
                </li>
                <li className="nav-item">
                  <div
                    className={`btn btn-primary ms-4 fs-normal pt-2 pb-2 ${styles.btn__1}`}
                  >
                    Edit the site
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
