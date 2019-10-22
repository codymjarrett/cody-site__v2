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
    <>
      <button
        className="open-main-nav"
        onClick={() => setMobileNav(!mobileNavOpened)}
      >
        <span class="burger"></span>
        <span class="burger-text">Menu</span>
      </button>
      <nav
        className={`nav-mobile ${mobileNavOpened ? "nav-mobile--is-open" : ""}`}
      >
        <ul className="nav-mobile__group">
          <li className="nav-mobile__item">Home</li>
          <li className="nav-mobile__item">Blog</li>
          <li className="nav-mobile__item">Work</li>
          <li className="nav-mobile__item">Contact</li>
        </ul>
      </nav>
    </>
  )
}

export default Header
