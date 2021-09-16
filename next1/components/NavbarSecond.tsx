import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../styles/Navbar.module.scss";
import Image from "next/image";
import logo2 from "../public/open-book.png";

export default function NavbarSecond() {
  const router = useRouter();

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light my-2  ${styles.Navbar2__1}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand d-flex  align-items-center" href="#">
            <Image src={logo2} alt="logo2" width="60" height="60" />{" "}
            <span className={`ms-2 fw-bold ${styles.word2__1}`}>T.B.L</span>
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
            <ul className="navbar-nav ms-auto mb mb-lg-0 ">
              <li className="nav-item me-4">
                <Link href="/">
                  <a className="nav-link " aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link href="/About">
                  <a className="nav-link">About</a>
                </Link>
              </li>

              <li className="nav-item me-4">
                <Link href="#">
                  <a className="nav-link">Subscribe</a>
                </Link>
              </li>
              <li className="nav-item">
                <div className={`input-group ${styles.navsearch__2}`}>
                  <span
                    className={`input-group-text bg-white ${styles.navsearch__1}`}
                    id="basic-addon1"
                  >
                    <i className="fas fa-search"></i>
                  </span>
                  <input
                    type="text"
                    className={`form-control ${styles.navsearch__1}`}
                    placeholder="Search..."
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </li>
              <li className="nav-item d-none d-xl-block d-md-block">
                <a className="nav-link" href="#">
                  <i className="fab fa-facebook-f text-dark fs-5"></i>
                </a>
              </li>
              <li className="nav-item d-none d-xl-block d-md-block">
                <a className="nav-link" href="#">
                  <i className="fab fa-twitter text-dark fs-5"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
