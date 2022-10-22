import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

function Register () {
    return (
        <div className='register'>
        <Link to='/' className='register__logo'/>
            <form className='register__form'>
                <h2 className='register__title'>Добро пожаловать!</h2>
                <label className='register__label' for='name'>Имя</label>
                <input className='register__input' id='name' required/>
                <label className='register__label' for='email'>E-mail</label>
                <input className='register__input register__input_valid' id='email' required/>
                <label className='register__label' for='password'>Пароль</label>
                <input className='register__input register__input_invalid' id='password' required/>
                <span className='register__input-error'>Что-то пошло не так...</span>
                <button type='submit' className='register__submit'>Зарегистрироваться</button>
                <p className='register__text'>Уже зарегистрированы?
                <Link to='/signin' className='register__link'>Войти</Link>
                </p>
            </form>
        </div>
    );
};

export default Register;