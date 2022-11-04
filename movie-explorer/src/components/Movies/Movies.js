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
    const [request, setRequest] = React.useState('');
    const [shorty, setShorty] = React.useState(false);
    const [searchError, setSearchError] = React.useState(false);
    
    React.useEffect(() => {
        if (request) {
        moviesApi.getMovies()
        .then ((res) => {
            setMovies(res);
        }
        )
        .catch(err => {
            console.log(err);
        });
    }
    }, [request]);

    function filterMovies() {
        const   resultArrMovies = movies.filter((i) => i.nameRU=== request)
        return resultArrMovies
    }
    const filteredMovies = movies.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(request.toLowerCase())
    })

    console.log(filterMovies())
    function handleSearchForm(value) {
        setRequest(value);
    }

    return (
        <div>
            <Header loggedIn={props.loggedIn}/>
            <main className='movies'>
                <SearchForm
                handleSearchForm={handleSearchForm}/>
                <MoviesCardList
                    movies={filteredMovies}
                    arrSavedMovies={props.arrSavedMovies}//Массив сохраненных карточек
                    handleLikeMovie={props.handleLikeMovie}// Функция обработки лайка
                    />
                <button className='movies__still' type='button'>Ещё</button>
            </main>
            <Footer/>
        </div>
    );
};


export default Movies;
