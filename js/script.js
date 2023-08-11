import { searchPopularMovies } from "./apiConnect.js";
import { renderMovie } from "./renderMovies.js";
import { getMoviesByName } from "./movieSearch.js";
import { getOnlyFavorites } from "./favoritesFilter.js";

export async function getPopularMovies() {
    const popularMoviesApi = await searchPopularMovies();
    popularMoviesApi.results.forEach(movie => renderMovie(movie));
}

window.onload = async function () {
    await getPopularMovies();
    getMoviesByName();
    getOnlyFavorites();
}



