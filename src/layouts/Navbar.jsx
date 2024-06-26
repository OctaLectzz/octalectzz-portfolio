import '/src/assets/css/navbar.css'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Theme } from '/src/components/Theme'

export const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const location = useLocation()

  const showMenu = () => {
    setIsMenuVisible(true)
  }

  const hideMenu = () => {
    setIsMenuVisible(false)
  }

  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          {/* Logo */}
          <a href="" className="nav__logo">
            <span className="nav__logo-circle">O</span>
            <span className="nav__logo-name">OctaLectzz</span>
          </a>

          {/* Menu */}
          <div className={`nav__menu ${isMenuVisible ? 'show-menu' : ''}`} id="nav-menu">
            <span className="nav__title">Menu</span>
            <h3 className="nav__name">OctaLectzz</h3>

            <ul className="nav__list">
              {/* Home */}
              <li className="nav__item" onClick={hideMenu}>
                <Link to="/" className={location.pathname === '/' ? 'nav__link active-link' : 'nav__link'}>
                  Home
                </Link>
              </li>

              {/* Experiences */}
              <li className="nav__item" onClick={hideMenu}>
                <Link to="/experiences" className={location.pathname === '/experiences' ? 'nav__link active-link' : 'nav__link'}>
                  Experiences
                </Link>
              </li>

              {/* Skills */}
              <li className="nav__item" onClick={hideMenu}>
                <Link to="/skills" className={location.pathname === '/skills' ? 'nav__link active-link' : 'nav__link'}>
                  Skills
                </Link>
              </li>

              {/* Projects */}
              <li className="nav__item" onClick={hideMenu}>
                <Link to="/projects" className={location.pathname === '/projects' ? 'nav__link active-link' : 'nav__link'}>
                  Projects
                </Link>
              </li>

              {/* Contact */}
              <li className="nav__item" onClick={hideMenu}>
                <Link to="/contact" className="nav__link nav__link-button">
                  Contact Me
                </Link>
              </li>
            </ul>

            {/* Close button */}
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
  )
}
