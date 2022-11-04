import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import Menu from './Menu/Menu'

function Header ({loggedIn}) {
    return (
        <header className='header'>
            <Link to='/' className='header__logo'/>
            <Menu
            loggedIn={loggedIn}/>
        </header>
    );
};

export default Header;