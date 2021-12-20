import React from "react";
import '../styles/Header.css';
import logo from '../assets/pokemon.png';
import { Link } from 'react-router-dom';

function Header () {
    return (
        <div className="navbar">
            <Link to="/">
                <img src={ logo } className="Logo" alt="Pokemon"/>
            </Link>
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/list">
                <button>My Pokemon</button>
            </Link>
        </div>
    )
}

export default Header;