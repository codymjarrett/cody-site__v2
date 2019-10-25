import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const Header = () => {
  const [mobileNavOpened, setMobileNav] = useState(false)

  return (
   <header className="header">
     <div className="header__logo">
       <h2 className="header__title">Cody Jarrett</h2>
       <div className="header__subtitles">
         <span className="job-title">Front End Engineer</span>
         <span className="job-title">UI/UX</span>
       </div>
     </div>
     <button
        aria-label="open/close navigation"
        className={`mobile-nav-btn ${
          mobileNavOpened ? "nav-mobile--is-open" : ""
        }`}
        onClick={() => setMobileNav(!mobileNavOpened)}
      >
        <span class="burger"></span>
        <span class="burger-text">Menu</span>
      </button>
     <nav className="nav nav--main-nav">
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
     <nav className={`nav nav--mobile-nav ${mobileNavOpened ? "nav-is-open" : ""}`}>
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
