export function getMoviesLocalStorage() {
    return JSON.parse(localStorage.getItem('movies')) || [];
}

export function favoriteMovies(event, movie, id) {
    const isFavorite = "/img/Heart-fill.svg";
    const isNotFavorite = "/img/Heart.svg";

    if (event.target.src.includes(isNotFavorite)) {
        event.target.src = isFavorite;
        saveToLocalStorage(movie);
    } else {
        event.target.src = isNotFavorite;
        deleteLocalStorage(id);
    }
}

function saveToLocalStorage(movie) {
    const movies = getMoviesLocalStorage() || []; 
    movies.push(movie);
    localStorage.setItem('movies', JSON.stringify(movies));
}

function deleteLocalStorage(id) {
    const movies = getMoviesLocalStorage() || []; 
    const deletedMovie = (movies.find(element => element.id === id));
    const newFavoriteMovies = (movies.filter(element => element.id != deletedMovie.id));
    localStorage.setItem('movies', JSON.stringify(newFavoriteMovies));
}

export function checkIsFavorite(id) {
    const movies = getMoviesLocalStorage() || []; 
    return (movies.find(element => element.id === id));
}

