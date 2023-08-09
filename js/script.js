import { searchPopularMovies } from "./apiConnect.js";
import { renderMovie } from "./renderMovies.js";
import { movieSearch } from "./movieSearch.js";
import { getOnlyFavorites } from "./favoritesFilter.js";


const buttonSearch = document.querySelector('[data-button-search]');

window.onload = async function () {
    const popularMoviesApi = await searchPopularMovies();
    popularMoviesApi.results.forEach(movie => renderMovie(movie));
    buttonSearch.addEventListener('click', event => movieSearch(event));
    getOnlyFavorites();
}










