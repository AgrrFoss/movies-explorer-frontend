import React from 'react';
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies () {
    return (
        <div>
            <Header/>
            <main className='main'>
                <SearchForm/>
                <MoviesCardList/>
            </main>
            <Footer/>
        </div>
    );
};

export default SavedMovies;