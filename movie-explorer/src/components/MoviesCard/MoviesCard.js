import React from 'react';
import imagePath from '../../images/film_image.png'
import './MoviesCard.css';

function MoviesCard () {
    return (
        <div className='card'>
            <div className='card__info-block'>
                <div className='card__info'>
                    <h3 className='card__name'>Название ленты</h3>
                    <p className='card__duration'> 1 час 22 минуты</p>
                </div>
                <button className='card__favorite'/>
            </div>
            <img className='card__image'
            src={imagePath}
            alt='Заставка фильма'/> 
        </div>
    );
};

export default MoviesCard;