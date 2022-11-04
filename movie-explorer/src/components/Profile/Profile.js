import React from 'react';
import {useForm} from 'react-hook-form';
import './Profile.css';
import Header from '../Header/Header';
import {emailRegExp, nameRegExp} from '../../utils/constants';
import { CurrentUserContext }  from '../../contexts/currentUserContext'

function Profile ({loggedIn, handleLogOut, handleEditProfile, authError}) {
    const userInfo = React.useContext(CurrentUserContext);
    const {name, email} = userInfo;
    console.log(userInfo)

    const [newEmail, setNewEmail] = React.useState(email);
    const [newName, setNewName] = React.useState(name);

    React.useEffect(() => {
        setNewEmail(userInfo.email);
        setNewName(userInfo.name);
    }, [userInfo]);

    const onSubmit = (data) => {
        handleEditProfile(data);
       // setNewEmail(data.email);
       // setNewName(data.name);
    }

    const {
        register,
        formState: {
            errors,
            isValid,
            dirtyFields
        },
        handleSubmit,
        getFieldState,
        reset,
        watch
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            name: newName,
            email: newEmail
        }
    });

    
    const { invalid: isEmailValid, isDirty: isEmailDirty } = getFieldState('email');
    const { invalid: isNameValid, isDirty: isNameDirty } = getFieldState('name');

    function setInputClassname ( dirty, valid) {
        if (!dirty) {
            return 'profile__input'
        } else {
            return !valid ? 'profile__input profile__input_valid' : 'profile__input profile__input_invalid'
        }
    }
    
    const submitIsValid = () => {
        if(isValid && (watch('name') !== name || watch('email') !== email)) {
               return true;
        } else {
            return false;
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
        <div>
            <Header loggedIn={loggedIn}/>
            <main className='profile'>
                <form className='profile__form' onSubmit={handleSubmit(onSubmit)}>
                    <h2 className='profile__name'>{`Привет, ${name}`}</h2>
                    <fieldset className='profile__inputs'>
                        <div className='profile__input-box'>
                            <label
                            htmlFor='name'
                            className={errors?.name ? 'profile__input-label profile__input-label_error' : 'profile__input-label'}
                            >{errors?.name ? errors?.name?.message : 'Имя'}</label>
                            <input
                            {...register('name', {
                                pattern: {
                                    value: nameRegExp,
                                    message: 'Введите имя без спец знаков'
                                },
                                minLength: {
                                    value: 2,
                                    message: 'Имя должно быть больше 2 символов'
                                },
                                required: 'Поле не может быть пустым'
                            })}
                            className={setInputClassname(isNameDirty, isNameValid)}
                            id='name'
                            placeholder="Имя"/>
                        </div>
                        <div className='profile__input-box'>
                            <label
                            htmlFor='email'
                            className={errors?.email ? 'profile__input-label profile__input-label_error' : 'profile__input-label'}
                            >{errors?.email ? errors?.email?.message : 'E-mail'}</label>
                            <input
                            {...register('email', {
                                pattern: {
                                    value: emailRegExp,
                                    message: 'Тут должен быть email'
                                },
                                required: 'Поле не может быть пустым'
                            })}
                            className={setInputClassname(isEmailDirty, isEmailValid)}
                            id='email'
                            placeholder='e-mail'/>
                        </div>
                    </fieldset>
                    {authError.status && <span className='profile__error'>{setTypeError(authError)}</span>}
                    <button type='submit'
                            className={submitIsValid() ? 'profile__submit' : 'profile__submit profile__submit_unactive'}
                            disabled={!submitIsValid()}>Редактировать</button>
                    <button type='button' className='profile__exit' onClick={handleLogOut}>Выйти из аккаунта</button>
                </form>
            </main>
        </div>
    );
};

export default Profile;