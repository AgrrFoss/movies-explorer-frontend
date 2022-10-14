import React from 'react';
import './Header.css'
import { Switch, Route, Link, useHistory } from 'react-router-dom';

function Header () {
    return (
        <Switch>
            <Route exact path='/'>
                <header className='header'>
                    <Link to='/' className='header__logo'/>
                    <div>
                        <Link to='signup' className='header__reg'>Регистрация</Link>
                        <Link to='signin' className='header__login'>Войти</Link>
                    </div>
                </header>
            </Route>
            <Route path='/'>
                <header className='header'>
                    <div className='header__nav'>
                        <Link to='/' className='header__logo'/>
                        <Link to='/movies' className='header__films'>Фильмы</Link>
                        <Link to='/saved-movies' className='header__saved'>Сохранённые фильмы</Link>
                    </div>
                    <Link to='/profile' className='header__profile'>Аккаунт</Link>
                </header>
            </Route>
        </Switch>
    );
};

export default Header;