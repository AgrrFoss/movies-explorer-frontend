import React from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList (props) {

    const itIsSaved=props.itIsSaved;
    if (props.movies.length === 0) {
        return(
            <main className='moviesCardList'>
                <p>Ни одного фильма не найдено.</p>
            </main>
        )
    } else {
    return (
        <main className='moviesCardList'>
            {props.movies.map((item) => {
                return(
                    <MoviesCard
                    key={item.id || item.movieId}
                    movie={item}
                    arrSavedMovies={props.arrSavedMovies}//Массив сохраненных карточек
                    handleLikeMovie={props.handleLikeMovie}
                    deleteMovie={props.deleteMovie}// Функция обработки лайка
                    itIsSaved={itIsSaved}
                    />
                )
            }
            )}
        </main>
    );
    }
};

export default MoviesCardList;