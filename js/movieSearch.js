import { movieSearchApi } from "./apiConnect.js";
import { movieList } from "./renderMovies.js";
import { renderMovie } from "./renderMovies.js";

const buttonSearch = document.querySelector('[data-button-search]');

async function movieSearch(event) {
    event.preventDefault();

    let movieTitle = document.querySelector('[data-input-search]');

    const search = await movieSearchApi(movieTitle.value);

    while (movieList.firstChild) {
        movieList.removeChild(movieList.firstChild);
    }

    search.results.forEach(movie => (renderMovie(movie)));

    movieTitle.value = '';   
}

export function getMoviesByName() {
    buttonSearch.addEventListener('click', event => movieSearch(event));
}





