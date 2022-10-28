class MoviesApi {
    constructor (url) {
        this._url = url;
        this._headers = {
            'Content-Type': 'application/json'
        }
    }

    getMovies() {
        return fetch(`${this._url}`, {
            method: 'GET',
            headers: this._headers
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка ${res.status}, ${res}`);
        });
    }

}

const moviesApi = new MoviesApi('https://api.nomoreparties.co/beatfilm-movies');
export default moviesApi;