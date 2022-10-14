import React from 'react';
import './Profile.css';
import Header from '../Header/Header'

function Profile () {
    return (
        <div>
            <Header/>
            <main className='profile'>
                <form className='profile__form'>
                    <h2 className='profile__name'>Привет, Аванес</h2>
                    <fieldset className='profile__inputs'>
                        <div className='profile__input-box'>
                            <label
                            for='name'
                            className='profile__input-label'
                            >Имя</label>
                            <input
                            className='profile__input'
                            id='name'
                            placeholder="Имя"
                            value='Аванес'/>
                        </div>
                        <div className='profile__input-box'>
                            <label
                            for='email'
                            className='profile__input-label'
                            >E-mail</label>
                            <input
                            className='profile__input'
                            id='email'
                            placeholder='e-mail'
                            value='some@email.ru'/>
                        </div>
                    </fieldset>
                    <button type='submit' className='profile__submit'>Редактировать</button>
                    <button className='profile__exit'>Выйти из аккаунта</button>
                </form>
            </main>
        </div>
    );
};

export default Profile;