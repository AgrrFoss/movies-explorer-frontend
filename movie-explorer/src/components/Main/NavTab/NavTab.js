import React from 'react';
import './NavTab.css';
import { Link } from 'react-scroll'



function NavTab () {
    return (
        <ul className='nav'>
            <li className='nav__button'>
                <Link to='about-project'  className='nav__link' spy={true} smooth={true} duration={500}>О проекте</Link>
            </li>
            <li className='nav__button'>
                <Link to='techs' className='nav__link' spy={true} smooth={true} duration={500}>Технологии</Link>
            </li>
            <li className='nav__button'>
                <Link to='about-me' className='nav__link' spy={true} smooth={true} duration={500}>Студент</Link>
            </li>
        </ul>
    );
};

export default NavTab;