import "./../assets/css/navbar.css";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Theme } from "../components/Theme";

export const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const location = useLocation();

  const showMenu = () => {
    setIsMenuVisible(true);
  };

  const hideMenu = () => {
    setIsMenuVisible(false);
  };

  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="" className="nav__logo">
            <span className="nav__logo-circle">O</span>
            <span className="nav__logo-name">OctaLectzz</span>
          </a>

          <div
            className={`nav__menu ${isMenuVisible ? "show-menu" : ""}`}
            id="nav-menu"
          >
            <span className="nav__title">Menu</span>

            <h3 className="nav__name">OctaLectzz</h3>

            <ul className="nav__list">
              <li className="nav__item" onClick={hideMenu}>
                <Link
                  to="/"
                  className={
                    location.pathname === "/"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  Home
                </Link>
              </li>

              <li className="nav__item" onClick={hideMenu}>
                <Link
                  href="#about"
                  className={
                    location.pathname === "/about"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  Experience
                </Link>
              </li>

              <li className="nav__item" onClick={hideMenu}>
                <Link
                  href="#services"
                  className={
                    location.pathname === "/services"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  Skills
                </Link>
              </li>

              <li className="nav__item" onClick={hideMenu}>
                <Link
                  to="/projects"
                  className={
                    location.pathname === "/projects"
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  Projects
                </Link>
              </li>

              <li className="nav__item" onClick={hideMenu}>
                <Link to="/contact" className="nav__link nav__link-button">
                  Contact Me
                </Link>
              </li>
            </ul>

            {/* <!-- Close button --> */}
            <div className="nav__close" id="nav-close" onClick={hideMenu}>
              <i className="ri-close-line"></i>
            </div>
          </div>

          <div className="nav__buttons">
            {/* Theme button */}
            <Theme />

            {/* Toggle button */}
            <div className="nav__toggle" id="nav-toggle" onClick={showMenu}>
              <i className="ri-menu-4-line"></i>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
