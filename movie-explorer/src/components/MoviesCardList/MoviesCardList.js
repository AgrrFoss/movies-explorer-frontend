import React from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList (props) {

    const itIsSaved=props.itIsSaved;

    return (
        <main className='moviesCardList'>
            {props.movies.map((item) => {
                if (item.length !== 0) {
                return(
                    <MoviesCard
                    key={item.id || item.movieId}
                    movie={item}
                    arrSavedMovies={props.arrSavedMovies}//Массив сохраненных карточек
                    handleLikeMovie={props.handleLikeMovie}
                    deleteMovie={props.deleteMovie}// Функция обработки лайка
            //        setLike={props.setLike}
            //        deleteLike={props.deleteLike}
                    itIsSaved={itIsSaved}
                    />
                )} else {
                    return(
                    <p>Ни одного фильма не найдено.</p>
                )}
            }
            )}
        </main>
    );
};

export default MoviesCardList;