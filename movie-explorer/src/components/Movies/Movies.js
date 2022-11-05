import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import moviesApi from '../../utils/moviesApi';
import mainApi from '../../utils/mainApi';

function Movies (props) {
    const [movies, setMovies] = React.useState([]);
    const [request, setRequest] = React.useState('');
    const [shorty, setShorty] = React.useState(false);
    const [preloaderVisible, setPreloaderVisible] = React.useState(false)
    const [searchError, setSearchError] = React.useState(false);
    const [quantityMovies, setQuantityMovies] = React.useState(12);
    const [quantityAddMovies, setQuantityAddMovies] = React.useState(3);
    const [pageWidth, setPagewidth] = React.useState(document.documentElement.scrollWidth); 
    window.onresize = resetPageSize;

    React.useEffect(() => {
        if (request) {
            setPreloaderVisible(true)
        moviesApi.getMovies()
        .then ((res) => {
            setPreloaderVisible(false);
            setMovies(res);
            resetQuantityMovies()
            setSearchError('');
            setPagewidth(document.documentElement.scrollWidth);
        }
        )
        .catch(err => {
            console.log(err);
            setSearchError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен.Подождите немного и попробуйте ещё раз')
            setPreloaderVisible(false);
        })
        .finally(() => {
            setPreloaderVisible(false)
        })
    }
    }, [request, pageWidth]);

    /*
    React.useEffect(() => {
        if (request) {
        moviesApi.getMovies()
        .then ((res) => {
            setPreloaderVisible(false);
            setMovies(res);
            resetQuantityMovies()
            setSearchError('');
            setPagewidth(document.documentElement.scrollWidth);
        }
        )
        .catch(err => {
            console.log(err);
            setSearchError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен.Подождите немного и попробуйте ещё раз')
            setPreloaderVisible(false);
        })
        .finally(() => {
            setPreloaderVisible(true)
        })
    }
    }, [request, pageWidth]);
*/

    function resetQuantityMovies() {
        if (pageWidth > 768) {
            setQuantityMovies(12);
            setQuantityAddMovies(3);
            return
        } if (pageWidth >= 400 && pageWidth <= 768) {
            setQuantityMovies(8);
            setQuantityAddMovies(2);
            return
        } if (pageWidth < 400) {
            setQuantityMovies(5);
            setQuantityAddMovies(2);
            return
        }
    }


    /**Функция изменения размеров окна с задержкой 2 секунды
     */
     function resetPageSize () {
        setTimeout(() => {
            setPagewidth(document.documentElement.scrollWidth)
        }, 2000)
    }
    /** Массив фильмов, который найден согласно запросу request
     */
    const filteredMovies = movies.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(request.toLowerCase())
    })
    /** Выбирает короткометражки, если это необходимо
     */
    const resultFilter = shorty ? filteredMovies.filter((i) =>i.duration <= 40 ) : filteredMovies;

    const isMoreShow = resultFilter.length > quantityMovies;//проверяет нужна-ли кнопка "Ещё"

    /**Функция срабатывает при сабмите searchForm и задает значение
     * в стейт запроса
     * @param {*} value значение полученное из поисковой строки.
     */
    function handleSearchForm(value) {
        setRequest(value);
        localStorage.setItem('searchVale', value)
    }
    
    localStorage.setItem('findResult', resultFilter)
    /**функция меняет максимально возможное колличества карточек.
     */
    function addMovies() {
        const newQuantity = quantityMovies+quantityAddMovies
        setQuantityMovies(newQuantity)
        console.log(newQuantity)
    }
    /** функция переключает стейт отвечающий за короткометражки.
     */
    function handleCheckBox() {
        setShorty(!shorty)
        localStorage.setItem('checkBox', shorty)
    }
    return (
        <div className='page'>
            <div>
                <Header loggedIn={props.loggedIn}/>
                <main className='movies'>
                    <SearchForm
                    handleSearchForm={handleSearchForm}
                    handleCheckBox={handleCheckBox}/>
                    {preloaderVisible && <Preloader/>}
                    <span>{searchError}</span>
                    {request && 
                    <MoviesCardList
                        movies={resultFilter.slice(0, quantityMovies)}
                        arrSavedMovies={props.arrSavedMovies}//Массив сохраненных карточек
                        handleLikeMovie={props.handleLikeMovie}// Функция обработки лайка
                        />}
                    {isMoreShow && <button className='movies__still' type='button' onClick={addMovies}>Ещё</button>}
                </main>
            </div>
            <Footer/>
        </div>
    );
};


export default Movies;
