import React from 'react';
import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import moviesApi from '../../utils/moviesApi';
import mainApi from '../../utils/mainApi';

function SavedMovies ({loggedIn, arrSavedMovies}) {
//Временная реализация отображения карточек в savedMovies
    
    function deleteMovie (movie) {
        mainApi.deleteSavedMovie(movie.movieId)
        .then((res) => {
            console.log(res);
        })
        .catch((res) => {
            console.log(res);
        })
    }
//......................................................


    return (
        <div>
            <Header loggedIn={loggedIn}/>
            <main className='saved-movies'>
                <SearchForm/>
                <MoviesCardList
                movies={arrSavedMovies}
                deleteMovie={deleteMovie}/>
            </main>
            <Footer/>
        </div>
    );
};

export default SavedMovies;