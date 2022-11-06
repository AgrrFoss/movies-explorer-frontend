import React from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Main from '../Main/Main';
import './App.css'
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Page404 from '../Page404/Page404';
import ProtectedRoute from '../ProtectedRoute';
import {CurrentUserContext} from '../../contexts/currentUserContext'
import mainApi from '../../utils/mainApi';

function App() {
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState({});
    const [authError, setAuthError] = React.useState({});
    const [arrSavedMovies, setArrSavedMovies] = React.useState([])
    const history = useHistory();
    /** обновляет информацию о пользователе при cмене loggedIn */
    React.useEffect(() => {
        if (loggedIn) {
            Promise.all([mainApi.getUserInfo(), mainApi.getSavedMovies()])
            .then((res) => {
                const [userInfo, resSavedMovies] = res;
                setCurrentUser(userInfo);
                setArrSavedMovies(resSavedMovies);
            })
            .catch((res) => {
                console.log(res)
            });
        }
    }, [loggedIn]);
/** проверяет наличие токена в куки и ответ от сервера, при первой загрузке
 * позволяет не входить на страницу при каждой перезагрузке. */
    React.useEffect(() => {
        mainApi.getUserInfo()
        .then((res) => {
            if(!res.hasOwnProperty('message')) {
                setLoggedIn(true);
                history.push('/');
            } else {
                setLoggedIn(false);
                history.push('/signin');
            }
        })
    }, [])
    
// ...............Функции сохранения и удаления карточек.......
/** Постановка и удаление лайка.
 * @param {*} movie Принимает на вход карточку из массива,
 * в виде доступном для записи на сервер.
 * Проверяет наличие карточки с таким movieId в массиве arrSavedMovies
 * Добавляет новую карточку в стейт
 */
    function handleLikeMovie (movie) {
        const isLiked = arrSavedMovies.some((i) => 
           i.movieId === movie.movieId
           );
        if (!isLiked) {
            mainApi.postSavedMovie(movie)
            .then((res) => {
                const newArr = Object.assign([], arrSavedMovies);
                newArr.push(res);
                setArrSavedMovies(newArr);
                console.log(newArr)
            })
            .catch((res) => {
                console.log(res);
            })
        } else {
            handleDeleteMovie (movie)
        }
    }
    function handleDeleteMovie (movie) {
        mainApi.deleteSavedMovie(movie.movieId)
            .then((res) => {
                console.log(res);
                const newArr = arrSavedMovies.filter((i) => i.movieId !== movie.movieId);
                setArrSavedMovies(newArr);
                console.log(newArr)
            })
            .catch((res) => {
                console.log(res);
            })
    }

//................Функции авторизации.........................
    function handleRegister ({name, email, password}) {
        mainApi.register(name, email, password)
        .then((res) => {
            handleLogin({email: email, password: password});
        })
        .catch((res) => {
            console.log(res)
            showError(res);
    })
    }
    function handleLogin ({email, password}) {
        mainApi.login(email, password)
        .then((res) => {
            localStorage.setItem('token', res.token)
            setLoggedIn(true);
            history.push('/movies');
            setAuthError({});
        })
        .catch((res) => {
            console.log(res)
            showError(res);
    })
    }
    function handleEditProfile (userObj) {
        mainApi.updateUserInfo(userObj)
        .then((res) => {
            console.log(res)
            setCurrentUser(res)
            setAuthError({});
        })
        .catch((res) => {
            console.log(res)
            showError(res)
        });
    }
    function showError (res) {
        if (!res.ok) {
            console.log(res);
            setAuthError(res)
            return res;
        } else {
            return
        }
    }
    function handleLogOut () {
        mainApi.logOut()
        .then((res) => {
            console.log(res);
            setCurrentUser({});
            setLoggedIn(false);
            localStorage.removeItem('token');
            history.push('/');
            setAuthError({})
        })
    }
    ////////////////////////////////////////////////////////////////
    function clog(atr) {
        console.log(atr);
    }
  //  clog(currentUser)
    ////////////////////////////////////////////////////////////////


return (
    <CurrentUserContext.Provider value={currentUser}>
        <div className='App'>
                <Switch>
                    <Route exact path='/'>
                        <Main
                        loggedIn={loggedIn}/>
                    </Route>
                    <ProtectedRoute
                        path='/movies'
                        component={Movies}
                        loggedIn={loggedIn}
                        arrSavedMovies={arrSavedMovies}
                        handleLikeMovie={handleLikeMovie}
                    />
                    <ProtectedRoute
                        path='/saved-movies'
                        component={SavedMovies}
                        loggedIn={loggedIn}
                        arrSavedMovies={arrSavedMovies}
                        deleteMovie={handleDeleteMovie}
                    />
                    <ProtectedRoute
                        path='/profile'
                        loggedIn={loggedIn}
                        component={Profile}
                        handleEditProfile={handleEditProfile}
                        handleLogOut={handleLogOut}
                        authError={authError}
                    />
                    <Route path='/signup'>
                        {() => loggedIn ? <Redirect to='./'/> : <Register handleRegister={handleRegister} authError={authError}/>}
                    </Route>
                    <Route path='/signin'>
                        {() => loggedIn ? <Redirect to='./'/> : <Login handleLogin={handleLogin} authError={authError}/>}
                        
                    </Route>
                    <Route path='*'>
                        <Page404/>
                    </Route>
                </Switch>
        </div>
    </CurrentUserContext.Provider>
)
}

export default App;