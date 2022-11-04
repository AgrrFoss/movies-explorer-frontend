import React from 'react';
import {useForm} from 'react-hook-form';
import './Login.css';
import { Link } from 'react-router-dom';
import {emailRegExp, nameRegExp} from '../../utils/constants';

function Login ({handleLogin, authError}) {
    const {
        register,
        formState: {
            errors,
            isValid,
            dirtyFields
        },
        getFieldState,
        handleSubmit,
        reset
        } = useForm({
            mode: 'onChange'
        });

    const onSubmit = (data) => {
            handleLogin(data)
    }


    const { invalid: isEmailValid, isDirty: isEmailDirty } = getFieldState('email');
    const { invalid: isPasswordValid, isDirty: isPasswordDirty } = getFieldState('password');

    function setInputClassname ( dirty, valid) {
        if (!dirty) {
            return 'login__input'
        } else {
            return !valid ? 'login__input login__input_valid' : 'login__input login__input_invalid'
        }
    }

    return (
        <div className='login'>
        <Link to='/' className='login__logo'/>
            <form className='login__form' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='login__title'>Рады видеть!</h2>
                {/** .....................Импут Email....................................... */}
                <label className='login__label' htmlFor='email'>Email</label>
                <input
                    {...register('email', {
                        required: 'Обязательное поле',
                        pattern: {
                            value: emailRegExp,
                            message: 'Введите в поле email'
                        }
                    })}
                    className={setInputClassname(isEmailDirty, isEmailValid)}
                    id='email'
                />
                <span className='login__input-error'>{errors?.email && errors?.email?.message}</span>
                {/** ................................Импут Password................................. */}
                <label className='login__label' htmlFor='password'>Пароль</label>
                <input
                    {...register('password', {
                        required: 'Обязательное поле',
                        minLength: {
                            value: 6,
                            message: 'Введите пароль длинной от 6 символов'
                        }
                    })}
                    className={setInputClassname(isPasswordDirty, isPasswordValid)}
                    id='password'
                />
                <span className='login__input-error'>{errors?.password && errors?.password?.message}</span>
                {authError.status && <span className='login__error'>{`Ошибка ${authError.status}: Неправильный логин или пароль`}</span>}
                <button type='submit'
                    className={isValid? 'login__submit' : 'login__submit login__submit_unactive'}
                    disabled={!isValid}
                >Войти</button>
                <p className='login__text'>Ещё не зарегистрированы?
                <Link to='/signup' className='login__link'>Регистрация</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;