import React from 'react';
import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies ({loggedIn, deleteMovie, arrSavedMovies}) {


    return (
        <div>
            <Header loggedIn={loggedIn}/>
            <main className='saved-movies'>
                <SearchForm/>
                <MoviesCardList
                movies={arrSavedMovies}
                arrSavedMovies={arrSavedMovies}
                deleteMovie={deleteMovie}/>
            </main>
            <Footer/>
        </div>
    );
};

export default SavedMovies;