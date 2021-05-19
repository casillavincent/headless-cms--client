import React from "react"
import { Link } from "gatsby"
import { GiHamburgerMenu } from "react-icons/gi"

const Header = () => {
  return (
    <header className="site-header">
      {/* Site Logo */}
      <div className="site-logo">
        <h1>
          <a href="#0">Jynx Kitchen.</a>
        </h1>
      </div>

      {/* hamburger */}
      <button className="hamburger">
        <GiHamburgerMenu size="1.5em" />
      </button>

      {/* Site Navigation */}
      <nav className="site-navigation">
        {/* navigation */}
        <ul className="nav-ul">
          <li className="nav-li">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-li">
            <Link to="/">Recipes</Link>
          </li>
          <li className="nav-li">
            <Link to="/">Blog</Link>
          </li>
          <li className="nav-li">
            <Link to="/">Travels</Link>
          </li>
          <li className="nav-li">
            <Link to="/">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
