import { buscaFilmesPopulares } from "./conectaApi.js";
import { renderizaFilme } from "./renderizaFilme.js";
import { buscaPesquisa } from "./buscaFilme.js";

const botaoPesquisar = document.querySelector('[data-botao-pesquisar]');

window.onload = async function () {
    const filmesPopularesApi = await buscaFilmesPopulares();
    filmesPopularesApi.results.forEach(filme => renderizaFilme(filme));
    botaoPesquisar.addEventListener('click', evento => buscaPesquisa(evento));
}











