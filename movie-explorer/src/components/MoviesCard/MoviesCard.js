import React from 'react';
import imagePath from '../../images/film_image.png'
import './MoviesCard.css';

function MoviesCard (props) {
    const cardIsFavorite = props.moviesLiked;
    const itIsSaved = props.itIsSaved;
    function cardLikeButtonClassName () {
        if (itIsSaved) {
            return 'card__delete';
        } else {
            if (cardIsFavorite) {
                return 'card__favorite card__favorite_active';
            } else {
                return 'card__favorite'
            }
        }
    }
   // const cardLikeButtonClassName = (`${cardIsFavorite ? 'card__favorite card__favorite_active' : 'card__favorite'}`);

    return (
        <div className='card'>
            <div className='card__info-block'>
                <div className='card__info'>
                    <h3 className='card__name'>Название ленты</h3>
                    <p className='card__duration'> 1 час 22 минуты</p>
                </div>
                <button type='button' className={cardLikeButtonClassName()}/>
            </div>
            <img className='card__image'
            src={imagePath}
            alt='Заставка фильма'/> 
        </div>
    );
};

export default MoviesCard;