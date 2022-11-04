import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import moviesApi from '../../utils/moviesApi';
import mainApi from '../../utils/mainApi';

function Movies (props) {
    const [movies, setMovies] = React.useState([]);

    
    React.useEffect(() => {
        moviesApi.getMovies()
        .then ((res) => {
            setMovies(res);
        }
        )
        .catch(err => {
            console.log(err);
        });
    }, []);

    /** Функция отправляет на сервер POST запрос с данными карточки, в ответ
     * получает данные карточки сохраненные на сервере
     * @param {*} movie данные карточки.
     */
    function setLike (movie) {
        console.log(movie)
        mainApi.postSavedMovie(movie)
        .then((res) => {
            console.log(res);
        })
        .catch((res) => {
            console.log(res);
        })
    }

    /** Функция отправляет на сервер DELETE запрос с данными карточки, в ответ
     * получает сообщение что карточка удалена.
     * @param {*} movie данные карточки.
     */
     function deleteLike (movie) {
        console.log(movie)
        mainApi.deleteSavedMovie(movie.movieId)
        
            .then((res) => {
                console.log(res);
            })
            .catch((res) => {
                console.log(res);
            })
    }

    return (
        <div>
            <Header loggedIn={props.loggedIn}/>
            <main className='movies'>
                <SearchForm/>
                <MoviesCardList
                    movies={movies}
                    setLike={setLike}
                    deleteLike={deleteLike}
                    />
                <button className='movies__still' type='button'>Ещё</button>
            </main>
            <Footer/>
        </div>
    );
};


export default Movies;
