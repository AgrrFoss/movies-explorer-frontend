import React from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Main from '../Main/Main';
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
                console.log(resSavedMovies[2])
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
    function handleLikeMovies () {

    }
    function handleDeleteMovies () {
        
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
            <div className='page'>
                <Switch>
                    <Route exact path='/'>
                        <Main
                        loggedIn={loggedIn}/>
                    </Route>
                    <ProtectedRoute
                        path='/movies'
                        component={Movies}
                        loggedIn={loggedIn}
                        handleLike={handleLikeMovies}
                    />
                    <ProtectedRoute
                        path='/saved-movies'
                        component={SavedMovies}
                        loggedIn={loggedIn}
                        arrSavedMovies={arrSavedMovies}
                        handleDelete={handleDeleteMovies}
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
                        <Register handleRegister={handleRegister} authError={authError}/>
                    </Route>
                    <Route path='/signin'>
                        <Login handleLogin={handleLogin} authError={authError}/>
                    </Route>
                    <Route path='*'>
                        <Page404/>
                    </Route>
                </Switch>
            </div>
        </div>
    </CurrentUserContext.Provider>
)
}

export default App;