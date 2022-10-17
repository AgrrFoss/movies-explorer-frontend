import React from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList (props) {
    const itIsSaved=props.itIsSaved;
    return (
        <main className='moviesCardList'>
                <MoviesCard moviesLiked={true} itIsSaved={itIsSaved}/>
                <MoviesCard itIsSaved={itIsSaved}/>
                <MoviesCard itIsSaved={itIsSaved}/>
                <MoviesCard itIsSaved={itIsSaved}/>
                <MoviesCard itIsSaved={itIsSaved}/>
                <MoviesCard itIsSaved={itIsSaved}/>
        </main>
    );
};

export default MoviesCardList;