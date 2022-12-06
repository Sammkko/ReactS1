import React from 'react';
import {Link} from "react-router-dom";

function Menu(props) {
    return (
        <div className="container">
            <div>
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link"
                    to="/"
                >Home</Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link"
                    to="/info"
                >User page</Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link"
                    to="/about"
                >About</Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link"
                    to="/navigation"
                >Navigation</Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link"
                    to="/contact"
                >Contact</Link>
            </li>
        </ul>
            </div>
        </div>
    );
}

export default Menu;