import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <nav className="header">
    <ul className="header__group">
      <li className="header__item">
        <h1 className="header__title">Cody Jarrett</h1>
        <div className="header__subTitles">
          <span className="header__subTitles-jobTitle">Front End Engineer</span>
          <span className="header__subTitles-jobTitle">UI/UX</span>
        </div>
      </li>
      <li className="header__item"></li>
      <li className="header__item"></li>
      <li className="header__item"></li>
    </ul>
  </nav>
)

export default Header
