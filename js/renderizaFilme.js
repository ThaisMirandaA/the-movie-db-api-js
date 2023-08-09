import { favoritarFilmes } from "./favoritaFilmes.js";
import { verificaSeOFilmeEFavorito } from "./favoritaFilmes.js";

export const listaDeFilmes = document.querySelector('[data-filmes]');

export function renderizaFilme(filme) {
    const { id, title, poster_path, vote_average, release_date, overview } = filme;

    const year = new Date(release_date).getFullYear();

    const image = `https://image.tmdb.org/t/p/w500${poster_path}`;

    const filmeEFavorito = verificaSeOFilmeEFavorito(id); 

    // cria a caixa que vai englobar todos os filmes:
    const novoFilme = document.createElement('div');
    novoFilme.classList.add('container-filmes');

    // cria a div que vai englobar as imagens dos filmes: 
    const imagem = document.createElement('div');
    imagem.classList.add('container-imagem-filme');
    const arquivodaImagem = document.createElement('img');
    arquivodaImagem.classList.add('imagem-filme');
    arquivodaImagem.src = image;
    imagem.appendChild(arquivodaImagem);

    // cria a div que vai englobar o título, a nota e se o filme é ou não favorito:
    const informacoesFilme = document.createElement('div');
    const titulo = document.createElement('span');
    titulo.classList.add('titulo-filme');
    titulo.textContent = `${title} (${year})`;

    // cria a div que apresenta a nota e se o filme é favorito:
    const notaEFavoritos = document.createElement('div');
    notaEFavoritos.classList.add('nota-favorito');

    // cria a div somente da nota:
    const nota = document.createElement('div');
    const imagemEstrela = document.createElement('img');
    imagemEstrela.src = "./img/Star.svg";
    imagemEstrela.alt = "Star Icon";
    const textoNota = document.createElement('span');
    textoNota.classList.add('titulos');
    textoNota.textContent = vote_average;
    nota.appendChild(imagemEstrela);
    nota.appendChild(textoNota);

    // cria a div somente de favoritos:
    const favoritar = document.createElement('div');
    const imagemCoracao = document.createElement('img');
    imagemCoracao.src = filmeEFavorito ? "./img/Heart-fill.svg" : "./img/Heart.svg";
    imagemCoracao.alt = "Heart Icon";
    imagemCoracao.addEventListener('click', (evento) => favoritarFilmes(evento, filme, id));
    const textoFavoritar = document.createElement('span');
    textoFavoritar.classList.add('titulos');
    textoFavoritar.textContent = "Favoritar";
    favoritar.appendChild(imagemCoracao);
    favoritar.appendChild(textoFavoritar);

    // cria a div que apresenta a descrição do filme:
    const descriçãoFilme = document.createElement('div');
    descriçãoFilme.classList.add('descricao');
    const textoDescricao = document.createElement('p');
    textoDescricao.textContent = overview;
    descriçãoFilme.appendChild(textoDescricao);

    notaEFavoritos.appendChild(nota);
    notaEFavoritos.appendChild(favoritar)
    informacoesFilme.appendChild(titulo);
    informacoesFilme.appendChild(notaEFavoritos);

    novoFilme.appendChild(imagem);
    novoFilme.appendChild(informacoesFilme);
    novoFilme.appendChild(descriçãoFilme);
    listaDeFilmes.appendChild(novoFilme);

}

