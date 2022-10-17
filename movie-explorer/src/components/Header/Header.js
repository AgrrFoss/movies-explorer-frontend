import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import Menu from './Menu/Menu'

function Header () {
    return (
        <header className='header'>
            <Link to='/' className='header__logo'/>
            <Menu/>
        </header>
    );
};

export default Header;