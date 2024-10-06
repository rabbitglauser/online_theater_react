// install this for it to work npm install @fortawesome/fontawesome-free
import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5,
            border: 'none', // Remove the default border
        }}
    />
);

function App() {
    return (
        <div className="App">
            <div className="background-image"></div>
            <nav className="navbar">
                <div className="navbar-left">
                    <a href="/" className="logo">Kino Zug</a>
                </div>
                <div className="navbar-center">
                    <ul className="nav-links">
                        <li>
                            <a href="/Program/Program.js">Program</a>
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
            <div className="content">
                <h1>Welcome to Kino Zug!</h1>
                <ColoredLine color="white"/>
                <h2>Zug most iconic venue for films </h2>
                <h3>theater music and more</h3>
        </div>
</div>
)
    ;
}

export default App;
