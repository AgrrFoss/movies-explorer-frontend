import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Page404 from '../Page404/Page404';
import ProtectedRoute from '../ProtectedRoute';
//import moviesApi from '../../utils/moviesApi';

function App() {
    const [loggedIn, setLoggedIn] = React.useState(true);

/*

    const [movies, setMovies] = React.useState([]);

    React.useEffect(()=> {
        Promise.all ([moviesApi.getMovies()])
        .then ((res) => {
            setMovies(res);
        }
        )
        .catch(err => {
            console.log(err);
        });
    }, []);

    React.useEffect(()=> {
        moviesApi.getMovies()
        .then ((res) => {
            setMovies(res);
        }
        )
        .catch(err => {
            console.log(err);
        });
    }, []);
*/
return (
    <div className='App'>
        <div className='page'>
            <Switch>
                <Route exact path='/'>
                    <Main/>
                </Route>
                <ProtectedRoute
                    path='/movies'
                    loggedIn={loggedIn}
                    component={Movies}
                />
                <ProtectedRoute
                    path='/saved-movies'
                    loggedIn={loggedIn}
                    component={SavedMovies}
                />
                <ProtectedRoute
                    path='/profile'
                    loggedIn={loggedIn}
                    component={Profile}
                />
                <Route path='/signup'>
                    <Register/>
                </Route>
                <Route path='/signin'>
                    <Login/>
                </Route>
                <Route path='*'>
                    <Page404/>
                </Route>
            </Switch>
        </div>
    </div>
)
}

export default App;