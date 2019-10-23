import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const Header = () => {
  const [mobileNavOpened, setMobileNav] = useState(false)
  // <nav className="header">
  //   <ul className="header__group">
  //     <li className="header__item">
  //       <h1 className="header__title">Cody Jarrett</h1>
  //       <div className="header__subTitles">
  //         <span className="header__subTitles-jobTitle">Front End Engineer</span>
  //         <span className="header__subTitles-jobTitle">UI/UX</span>
  //       </div>
  //     </li>
  //     <li className="header__item">Home</li>
  //     <li className="header__item">Blog</li>
  //     <li className="header__item">Work</li>
  //     <li className="header__item">Contact</li>
  //   </ul>
  // </nav>

  return (
    <div className="container">
      <button
        className={`open-main-nav ${mobileNavOpened ? "nav-mobile--is-open" : ""}`}
        onClick={() => setMobileNav(!mobileNavOpened)}
      >
        <span
          class="burger"
        ></span>
        <span class="burger-text">Menu</span>
      </button>
      <nav
        className={`nav-mobile ${mobileNavOpened ? "nav-mobile--is-open" : ""}`}
      >
        <ul className="nav-mobile__group">
          <li className="nav-mobile__item">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="nav-mobile__item">
            <Link to="/blog" className="link">
              Blog
            </Link>
          </li>
          <li className="nav-mobile__item">
            <Link to="/work" className="link">
              Work
            </Link>
          </li>
          <li className="nav-mobile__item">
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
