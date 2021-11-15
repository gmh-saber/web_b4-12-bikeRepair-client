import React from 'react';
import Banner from '../Banner/Banner';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const Header = () => {
    return (
        <header className="header-container h">
            <NavBar />
            <Banner />
        </header>
    );
};

export default Header;