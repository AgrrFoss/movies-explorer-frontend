import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies () {
    return (
        <div>
            <Header/>
            <main className='movies'>
                <SearchForm/>
                <MoviesCardList/>
                <button className='movies__still' type='button'>Ещё</button>
            </main>
            <Footer/>
        </div>
    );
};


export default Movies;
