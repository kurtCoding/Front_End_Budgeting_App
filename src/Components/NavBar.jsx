import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Link to="/transactions">Index</Link>
            <Link to="/transactions/new">New Transaction</Link>
        </div>
    )
}

export default NavBar;