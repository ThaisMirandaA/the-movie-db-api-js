import { movieSearchApi } from "./apiConnect.js";
import { movieList } from "./renderMovies.js";
import { renderMovie } from "./renderMovies.js";

export async function movieSearch(event) {
    event.preventDefault();

    let movieTitle = document.querySelector('[data-input-search]').value;

    const search = await movieSearchApi(movieTitle);

    while (movieList.firstChild) {
        movieList.removeChild(movieList.firstChild);
    }

    search.results.forEach(movie => (renderMovie(movie)));
}






