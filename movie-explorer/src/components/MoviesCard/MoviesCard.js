import React from 'react';
import {  Route, Switch, useHistory } from 'react-router-dom';
import './MoviesCard.css';
import {moviesUrl} from '../../utils/constants' 


function MoviesCard (props) {
    const [isLiked, setIsLiked] = React.useState(false);
    //const isLiked = props.isLiked
    const itIsSaved = props.itIsSaved;

    function handleLike () {
        if (isLiked === false) {
            props.doLiked(props.movie);
            setIsLiked(!isLiked);
        } else {
            props.doUnLiked(props.movie);
            setIsLiked(!isLiked);
        }
    }

    function cardLikeButtonClassName () {
        if (itIsSaved) {
            return 'card__delete';
        } else {
            if (isLiked) {
                return 'card__favorite card__favorite_active';
            } else {
                return 'card__favorite'
            }
        }
    }
    function formatTime (number) {
      let time;
      if (number <= 60) {
        time = `${number} минут`;
      } else {
        let hour = Math.floor(number/60);
        let minuts = number - hour * 60;
        time = `${hour}ч ${minuts}м`
      }
      return time;
    }
   // const cardLikeButtonClassName = (`${cardIsFavorite ? 'card__favorite card__favorite_active' : 'card__favorite'}`);

    return (
        <div className='card'>
            <div className='card__info-block'>
                <div className='card__info'>
                    <h3 className='card__name'>{props.movie.nameRU}</h3>
                    <p className='card__duration'>{formatTime(props.movie.duration)}</p>
                </div>
                <button type='button' className={cardLikeButtonClassName()} onClick={handleLike}/>
            </div>
            <a className='card__link'
                href={props.movie.trailerLink}
                target='_blank'
                rel='noopener noreferrer'>
                    <img className='card__image'
                    src={`${moviesUrl}${props.movie.image.url}`}
                    alt='Заставка фильма'/>
            </a>
        </div>
    );
};

export default MoviesCard;