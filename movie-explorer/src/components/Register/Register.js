import React from 'react';
import {useForm} from 'react-hook-form';
import './Register.css';
import { Link } from 'react-router-dom';
import {emailRegExp, nameRegExp} from '../../utils/constants';

function Register ({handleRegister, authError}) {

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
        handleRegister(data);
    }
    const { invalid: isNameValid, isDirty: isNameDirty } = getFieldState('name');
    const { invalid: isEmailValid, isDirty: isEmailDirty } = getFieldState('email');
    const { invalid: isPasswordValid, isDirty: isPasswordDirty } = getFieldState('password');

    function setInputClassname ( dirty, valid) {
        if (!dirty) {
            return 'register__input'
        } else {
            return !valid ? 'register__input register__input_valid' : 'register__input register__input_invalid'
        }
    }
    function setTypeError (res) {
        if (res.status === 400) {
            return `Ошибка ${res.status}. Введены некорректные данные `
        }
        if (res.status === 409) {
            return `Ошибка ${res.status}. Email занят`
        } else {
            return `Ошибка ${res.status}. Email ${res.statusText}`
        }
    }

    return (
        <div className='register'>
        <Link to='/' className='register__logo'/>
            <form className='register__form' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='register__title'>Добро пожаловать!</h2>
                {/** .........................Импут имени................................. */}
                <label className='register__label' htmlFor='name'>Имя</label>
                <input
                    {...register('name', {
                        required: 'Обязательное поле',
                        pattern: {
                            value: nameRegExp,
                            message: 'Введите имя без спец знаков'
                        },
                        minLength: {
                            value: 2,
                            message: 'Имя должно быть больше 2 символов'
                        }
                    })}
                    className={setInputClassname(isNameDirty, isNameValid)}
                    id='name'
                />
                <span className='register__input-error'>{errors?.name && errors?.name?.message}</span>
                {/** .....................Импут Email....................................... */}
                <label className='register__label' htmlFor='email'>Email</label>
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
                <span className='register__input-error'>{errors?.email && errors?.email?.message}</span>

                {/** ................................Импут Password................................. */}
                <label className='register__label' htmlFor='password'>Пароль</label>
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
                <span className='register__input-error'>{errors?.password && errors?.password?.message}</span>
                {authError.status && <span className='register__error'>{setTypeError(authError)}</span>}
                <button type='submit'
                    className={isValid? 'register__submit' : 'register__submit register__submit_unactive'}
                    disabled={!isValid}
                >Зарегистрироваться</button>
                <p className='register__text'>Уже зарегистрированы?
                <Link to='/signin' className='register__link'>Войти</Link>
                </p>
            </form>
        </div>
    );

  /*  
    const [email, setEmail] = React.useState('');
    const [emailIsValid, setEmailIsValid] = React.useState(false);
    const [emailError, setEmailError] = React.useState('');
    const [formValid, setFormvalid] = React.useState(false);

    React.useEffect(()=>{
        console.log(formValid, emailError)
        if (emailError === '') {
            setFormvalid(true);
        }
    }, [emailError, formValid])

    function handleEmailChange (e) {
        setEmail(e.target.value);
        checkInputValue(email, emailRegExp, setEmailIsValid, setEmailError, 'Это не email')
    }

    function checkInputValue(value, rule, setValid, setMessage, message) {
        
        console.log(rule.test(value))
        if (rule.test(value)) {
            setMessage('');
            setValid(false);
        } else {
            setMessage(message);
            setValid(true);
        }
    }

    function changeInputStyle (inputName) {
        if(inputName === '') {
            return 'register__input'
        } else {
            return emailIsValid ? 'register__input_invalid' : 'register__input_valid'
        }
    }
  
    return (
        <div className='register'>
        <Link to='/' className='register__logo'/>
            <form className='register__form'>
                <h2 className='register__title'>Добро пожаловать!</h2>
                <label className='register__label' htmlFor='name'>Имя</label>
                <input className='register__input' id='name' name='name' required/>
                <label className='register__label' htmlFor='email'>E-mail</label>
                <input className={changeInputStyle(email)}
                    value={email}
                    id='email'
                    name='email'
                    onChange={handleEmailChange}
                    required/>
                {emailError && <span className='register__input-error'>{emailError}</span>}
                <label className='register__label' htmlFor='password'>Пароль</label>
                <input className='register__input register__input_invalid' id='password' name='password' required/>
                <button type='submit' className={formValid ? 'register__submit' : 'register__submit register__submit_unactive'} disabled={!formValid}>Зарегистрироваться</button>
                <p className='register__text'>Уже зарегистрированы?
                <Link to='/signin' className='register__link'>Войти</Link>
                </p>
            </form>
        </div>
    );*/
};

export default Register;