import React from 'react';
import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { SHORTTIME } from '../../utils/constants';

function SavedMovies ({loggedIn, deleteMovie, arrSavedMovies}) {
    const [shorty, setShorty] = React.useState(false);
    const [request, setRequest] = React.useState('');

    function filtersavedMovies () {
        if(request) {
        const result = arrSavedMovies.filter((i) => {
                return i.nameRU.toLowerCase().includes(request.toLowerCase())
            })
        const resultShorty = shorty ? result.filter((i) =>i.duration <= SHORTTIME ) : result;
        return resultShorty
        }
        const filterResult = shorty ? arrSavedMovies.filter((i) =>i.duration <= SHORTTIME ) : arrSavedMovies;
        return filterResult;
    };

     /**Функция срабатывает при сабмите searchForm и задает значение
     * в стейт запроса
     * @param {*} value значение полученное из поисковой строки.
     */
      function handleSearchForm(value) {
        setRequest(value);
        localStorage.setItem('searchVale', value)
    }
    /** функция переключает стейт отвечающий за короткометражки.
     */
    function handleCheckBox() {
        setShorty(!shorty)
    }

    return (
        <div className='page'>
            <div>
                <Header loggedIn={loggedIn}/>
                <main className='saved-movies'>
                    <SearchForm
                    handleCheckBox={handleCheckBox}
                    handleSearchForm={handleSearchForm}
                    />
                    <MoviesCardList
                    movies={filtersavedMovies()}
                    arrSavedMovies={arrSavedMovies}
                    deleteMovie={deleteMovie}/>
                </main>
            </div>
            <Footer/>
        </div>
    );
};

export default SavedMovies;