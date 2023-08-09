import { accessToken } from "./accessToken.js";

export async function searchPopularMovies() {
    const searchPopularMovies = await fetch('https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1', {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'accept': 'application/json'
        },
    });
    const searchPopularMoviesConverted = await searchPopularMovies.json();
    return searchPopularMoviesConverted;
}

export async function movieSearchApi(movieTitle) {

    const movieSearchApi = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieTitle}&include_adult=false&language=en-US&page=1`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'accept': 'application/json'
        },
    })
    const movieSearchApiConverted = await movieSearchApi.json();
    return movieSearchApiConverted;
}