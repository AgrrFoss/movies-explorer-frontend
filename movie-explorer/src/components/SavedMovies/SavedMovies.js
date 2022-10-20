import React from 'react';
import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies () {
    return (
        <div>
            <Header/>
            <main className='saved-movies'>
                <SearchForm/>
                <MoviesCardList itIsSaved={true}/>
            </main>
            <Footer/>
        </div>
    );
};

export default SavedMovies;