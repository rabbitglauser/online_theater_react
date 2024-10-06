import React from 'react';
import './styles/App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
    return (
        <div className="App">
            <nav className="navbar">
                <div className="navbar-left">
                    <a href="/" className="logo">Kino Zug</a>
                </div>
                <div className="navbar-center">
                    <ul className="nav-links">
                        <li>
                            <a href="/Program">Products</a>
                        </li>
                        <li>
                            <a href="/uber-uns">Über uns</a>
                        </li>
                        <li>
                            <a href="/Preise">Preise</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <a href="/cart" className="cart-icon">
                        <i className="fas fa-shopping-cart"></i>
                        <span className="cart-count">0</span>
                    </a>
                    <a href="/account" className="user-icon">
                        <i className="fas fa-user"></i>
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default App;

