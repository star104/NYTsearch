import React from "react";
import './Navbar.css';
import {Link} from "react-router-dom";
function Navbar() {
    return (
        <div className="navBar">
            <div>
                googleBooks
            </div>
            <div>
                <Link to="/">Search</Link>
            </div>
            <div>
                <Link to="/books">Saved</Link>
            </div>
        </div>
    )
}

export default Navbar;