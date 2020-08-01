import React from "react";

const Navbar = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <h5>
                Navbar
                <span className="badge badge-pill m-2 badge-secondary">
                    {totalCounters}
                </span>
            </h5>
        </nav>
    );
};

export default Navbar;
