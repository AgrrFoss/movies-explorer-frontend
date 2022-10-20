import React from 'react';
import './Menu.css'
import { Switch, Route, Link, NavLink } from 'react-router-dom';

function Menu () {
    return (
        <Switch>
            <Route exact path='/'>
                <div>
                    <Link to='signup' className='menu__reg'>Регистрация</Link>
                    <Link to='signin' className='menu__login'>Войти</Link>
                </div>
            </Route>
            <Route path='/'>
                <div className='menu'>
                    <div className='menu-desc'>
                        <div className='menu-desc__nav'>
                            <NavLink to='/movies' className='menu-desc__link' activeClassName='menu-desc__link_active'>Фильмы</NavLink>
                            <NavLink to='/saved-movies' className='menu-desc__link' activeClassName='menu-desc__link_active'>Сохранённые фильмы</NavLink>
                        </div>
                        <Link to='/profile' className='menu-desc__profile'>Аккаунт</Link>
                    </div>
                    <button className='menu-mobile__button'/>
                    <div className='menu-mobile'>
                        <div className='menu-mobile__container'>
                            <button className='menu-mobile__close'/>
                            <div className='menu-mobile__nav'>
                                <NavLink exact to='/' className='menu-mobile__link' activeClassName='menu-mobile__link_active'>Главная</NavLink>
                                <NavLink to='/movies' className='menu-mobile__link' activeClassName='menu-mobile__link_active'>Фильмы</NavLink>
                                <NavLink to='/saved-movies' className='menu-mobile__link' activeClassName='menu-mobile__link_active'>Сохранённые фильмы</NavLink>
                            </div>
                            <Link to='/profile' className='menu-mobile__profile'>Аккаунт</Link>
                        </div>
                    </div>
                </div>
            </Route>
        </Switch>
    );
};

export default Menu;