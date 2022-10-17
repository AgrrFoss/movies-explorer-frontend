import React from 'react';
import './Menu.css'
import { Switch, Route, Link } from 'react-router-dom';

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
                    <div className='menu__nav'>
                        <Link to='/movies' className='menu__films'>Фильмы</Link>
                        <Link to='/saved-movies' className='menu__saved'>Сохранённые фильмы</Link>
                    </div>
                    <Link to='/profile' className='menu__profile'>Аккаунт</Link>
                </div>
            </Route>
        </Switch>
    );
};

export default Menu;