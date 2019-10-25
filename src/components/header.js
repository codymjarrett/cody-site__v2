import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const Header = () => {
  const [mobileNavOpened, setMobileNav] = useState(false)

  return (
    <header className="header header__container">
      
      <button
        aria-label="open/close navigation"
        className={`open-main-nav ${
          mobileNavOpened ? "nav-mobile--is-open" : ""
        }`}
        onClick={() => setMobileNav(!mobileNavOpened)}
      >
        <span class="burger"></span>
        <span class="burger-text">Menu</span>
      </button>
      <nav className={`header__nav ${mobileNavOpened ? "nav-mobile--is-open" : ""}`}>
      <div className="header__title">
        <h1 className="title">Cody Jarrett</h1>
        <div className="header__subTitles">
          <span className="subTitles-jobTitle">Front End Engineer</span>
          <span className="subTitles-jobTitle">UI/UX</span>
        </div>
      </div>
        <ul className="nav__group">
          <li className="nav__item">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/blog" className="link">
              Blog
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/work" className="link">
              Work
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
