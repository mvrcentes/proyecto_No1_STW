import React from "react"
import "./Navbar.css"

import logo from "../../assets/logo.svg"

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <img src={logo} alt="logo" />
            <div className="discord">Discord</div>
        </div>

        <div className="menu">
            <ul className="menu-link">
                <li>Download</li>
                <li>Nitro</li>
                <li>Discover</li>
                <li>Safety</li>
                <li>Support</li>
                <li>Blog</li>
                <li>Careers</li>
            </ul>
        </div>

        <div className="openDiscord">
            <button className="openDiscorButton">Open Discord</button>
        </div>
    </div>
  )
}
