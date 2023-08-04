import { accessToken } from "./accessToken.js";

export async function buscaFilmesPopulares() {
    const consultaFilmesPopulares = await fetch('https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1', {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'accept': 'application/json'
        },
    });
    const consultaFilmesPopularesConvertido = await consultaFilmesPopulares.json();
    return consultaFilmesPopularesConvertido;
}

export async function buscaPesquisaNaApi(tituloDoFilme) {

    const consultaPesquisa = await fetch(`https://api.themoviedb.org/3/search/movie?query=${tituloDoFilme}&include_adult=false&language=en-US&page=1`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'accept': 'application/json'
        },
    })
    const consultaPesquisaConvertida = await consultaPesquisa.json();
    return consultaPesquisaConvertida;
}