import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login () {
    return (
        <div className='login'>
        <Link to='/' className='login__logo'/>
            <form className='login__form'>
                <h2 className='login__title'>Рады видеть!</h2>
                <label className='login__label' for='email'>E-mail</label>
                <input className='login__input' id='email'/>
                <label className='login__label' for='password'>Пароль</label>
                <input className='login__input' id='password'/>
                <button type='submit' className='login__submit'>Войти</button>
                <p className='login__text'>Ещё не зарегистрированы?
                <Link to='/signup' className='login__link'>Регистрация</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;