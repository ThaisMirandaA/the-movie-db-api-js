import { movieList } from "./renderMovies.js";
import { movies } from "./favoriteMovies.js";
import { renderMovie } from "./renderMovies.js";

const favoritesCheckbox = document.querySelector('[data-favorites-filter]');

export function getOnlyFavorites() {
    favoritesCheckbox.addEventListener('click', () => {

        while (movieList.firstChild) {
            movieList.removeChild(movieList.firstChild);
        }
        movies.forEach(movie => renderMovie(movie));
    })
}

