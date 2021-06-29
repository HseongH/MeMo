// LIBRARY
import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <header className="section">
            <div className="container">
                <Link to="/">
                    <h1 className="logo">MY DICTIONARY</h1>
                </Link>
            </div>
        </header>
    );
};

export default Header;
