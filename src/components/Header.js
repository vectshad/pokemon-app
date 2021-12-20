import React from "react";
import '../styles/Header.css';
import logo from '../assets/pokemon.png';
function Header () {
    return (
        <div className="navbar">
            <a href="/">
                <img src={ logo } className="Logo" alt="Pokemon"/>
            </a>
        </div>
    )
}

export default Header;