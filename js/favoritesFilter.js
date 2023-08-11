import { movieList } from "./renderMovies.js";
import { getMoviesLocalStorage } from "./favoriteMovies.js";
import { renderMovie } from "./renderMovies.js";
import { getPopularMovies } from "./script.js";

const favoritesCheckbox = document.querySelector('[data-favorites-filter]');

function checkCheckboxState(event) {
    event.preventDefault();

    const checkboxChecked = favoritesCheckbox.checked;

    while (movieList.firstChild) {
        movieList.removeChild(movieList.firstChild);
    }

    if (checkboxChecked) {
        const movies = getMoviesLocalStorage() || []; 
        movies.forEach(movie => renderMovie(movie));
    } else {
        getPopularMovies();
    }
}

export function getOnlyFavorites() {
    favoritesCheckbox.addEventListener('change', event => checkCheckboxState(event));
}