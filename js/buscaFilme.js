import { buscaPesquisaNaApi } from "./conectaApi.js";
import { listaDeFilmes } from "./renderizaFilme.js";
import { renderizaFilme } from "./renderizaFilme.js";

export async function buscaPesquisa(evento) {
    evento.preventDefault();

    let tituloDoFilme = document.querySelector('[data-input-pesquisa]').value;

    const busca = await buscaPesquisaNaApi(tituloDoFilme);

    while (listaDeFilmes.firstChild) {
        listaDeFilmes.removeChild(listaDeFilmes.firstChild);
    }

    busca.results.forEach(filme => (renderizaFilme(filme)));
}






