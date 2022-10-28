class MainApi {
    constructor (url) {
        this._url = url;
        this._headers = {
            'Content-Type': 'application/json'
        }
    }

    _checkResponse (res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка ${res.status}, ${res}`);
    }

// Получение и обновление инфрмации о пользователе
    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers,
            credentials: 'include',
        })
        .then(this._checkResponse)
    }
    updateUserInfo(userObj) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify(userObj)
        })
        .then(this._checkResponse)
    }

// Передача и получение информации о фильмах.
    getSavedMovies() {
        return fetch(`${this._url}/movies`, {
            method: 'GET',
            headers: this._headers,
            credentials: 'include'
        })
        .then(this._checkResponse)
    }
    
    postSavedMovie(movieObj) {
        return fetch(`${this._url}/movies`, {
            method: 'POST',
            headers: this._headers,
            credentials: 'include',
            body: JSON.stringify(movieObj)
        })
        .then(this._checkResponse)
    }

    deleteSavedMovie(movieId) {
        return fetch(`${this._url}/movies/${movieId}`, {
            method: 'DELETE',
            headers: this._headers,
            credentials: 'include'
        })
        .then(this._checkResponse)
    }

}

const mainApi = new MainApi('');
export default mainApi;