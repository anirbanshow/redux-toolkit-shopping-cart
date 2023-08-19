import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const items = useSelector((state) => {
        return state.cart;
    });

    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <a className="navbar-brand" href="#">Redux Store</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart">Cart</Link>
                    </li>

                    <li className="nav-item">
                        <span>Cart item: {items.length}</span>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;