import React from 'react';
import {  Route, Switch, useHistory } from 'react-router-dom';
import './MoviesCard.css';
import {moviesImageUrl} from '../../utils/constants'


function MoviesCard (props) {
    const [isLiked, setIsLiked] = React.useState(false);
    const newMovie = Object.assign({}, props.movie);
    newMovie.image = `${moviesImageUrl}${props.movie.image.url}`;
    newMovie.thumbnail = `${moviesImageUrl}${props.movie.image.url}`;
    newMovie.movieId = `${props.movie.id}`;
    delete newMovie.id;
    delete newMovie.created_at;
    delete newMovie.updated_at;

    function handleLike () {
        if (isLiked === false) {
            props.setLike(newMovie);
            setIsLiked(!isLiked);
        } else {
            props.deleteLike(newMovie);
            setIsLiked(!isLiked);
        }
    }
    function handleDeleteMovie () {
        props.deleteMovie(props.movie)
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
    const cardLikeButtonClassName = (`${isLiked ? 'card__favorite card__favorite_active' : 'card__favorite'}`);

    return (
            <Switch>
                <Route path='/movies'>
                    <div className='card'>
                        <div className='card__info-block'>
                            <div className='card__info'>
                                <h3 className='card__name'>{props.movie.nameRU}</h3>
                                <p className='card__duration'>{formatTime(props.movie.duration)}</p>
                            </div>
                            <button type='button' className={cardLikeButtonClassName} onClick={handleLike}/>
                        </div>
                        <a className='card__link'
                            href={props.movie.trailerLink}
                            target='_blank'
                            rel='noopener noreferrer'>
                                <img className='card__image'
                                src={`${moviesImageUrl}${props.movie.image.url}`}
                                alt='Заставка фильма'/>
                        </a>
                    </div>
                </Route>
                <Route path='/saved-movies'>
                    <div className='card'>
                        <div className='card__info-block'>
                            <div className='card__info'>
                                <h3 className='card__name'>{props.movie.nameRU}</h3>
                                <p className='card__duration'>{formatTime(props.movie.duration)}</p>
                            </div>
                            <button type='button' className='card__delete' onClick={handleDeleteMovie}/>
                        </div>
                        <a className='card__link'
                            href={props.movie.trailerLink}
                            target='_blank'
                            rel='noopener noreferrer'>
                                <img className='card__image'
                                src={props.movie.image}
                                alt='Заставка фильма'/>
                        </a>
                    </div>
                </Route>
            </Switch>
    );
};

export default MoviesCard;