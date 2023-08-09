const filmes = JSON.parse(localStorage.getItem('filmes')) || [];

export function favoritarFilmes(evento, filme, id) {
    const isFavorite = "/img/Heart-fill.svg";
    const isNotFavorite = "/img/Heart.svg";

    if (evento.target.src.includes(isNotFavorite)) {
        evento.target.src = isFavorite;
        salvaNoLocalStorage(filme);
    } else {
        evento.target.src = isNotFavorite;
        deletaDoLocalStorage(id);
    }
}

function salvaNoLocalStorage(filme) {
    filmes.push(filme);
    localStorage.setItem('filmes', JSON.stringify(filmes));
}

function deletaDoLocalStorage(id) {
    const filmeRemovido = (filmes.find(elemento => elemento.id === id));
    const novosFilmesFavoritos = (filmes.filter(elemento => elemento.id != filmeRemovido.id));
    localStorage.setItem("filmes", JSON.stringify(novosFilmesFavoritos));
}

export function verificaSeOFilmeEFavorito(id) {
    return (filmes.find(elemento => elemento.id === id));
}

