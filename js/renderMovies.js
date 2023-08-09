import { favoriteMovies } from "./favoriteMovies.js";
import { checkIsFavorite } from "./favoriteMovies.js";

export const movieList = document.querySelector('[data-movies]');

export function renderMovie(movie) {
    const { id, title, poster_path, vote_average, release_date, overview } = movie;

    const year = new Date(release_date).getFullYear();

    const image = `https://image.tmdb.org/t/p/w500${poster_path}`;

    const isFavoriteMovie = checkIsFavorite(id);

    // cria a caixa que vai englobar todos os filmes:
    const newMovie = document.createElement('div');
    newMovie.classList.add('container-movies');

    // cria a div que vai englobar as imagens dos filmes: 
    const bannerMovie = document.createElement('div');
    bannerMovie.classList.add('container-image-movie');
    const imageTag = document.createElement('img');
    imageTag.classList.add('imagem-movie');
    imageTag.src = image;
    bannerMovie.appendChild(imageTag);

    // cria a div que vai englobar o título, a nota e se o filme é ou não favorito:
    const movieInfos = document.createElement('div');
    const movieTitle = document.createElement('span');
    movieTitle.classList.add('movie-title');
    movieTitle.textContent = `${title} (${year})`;

    // cria a div que apresenta a nota e se o filme é favorito:
    const noteAndFavorite = document.createElement('div');
    noteAndFavorite.classList.add('note-favorite');

    // cria a div somente da nota:
    const note = document.createElement('div');
    const starImage = document.createElement('img');
    starImage.src = "./img/Star.svg";
    starImage.alt = "Star Icon";
    const noteText = document.createElement('span');
    noteText.classList.add('titles');
    noteText.textContent = vote_average;
    note.appendChild(starImage);
    note.appendChild(noteText);

    // cria a div somente de favoritos:
    const favorite = document.createElement('div');
    const heartImage = document.createElement('img');
    heartImage.src = isFavoriteMovie ? "./img/Heart-fill.svg" : "./img/Heart.svg";
    heartImage.alt = "Heart Icon";
    heartImage.addEventListener('click', (event) => favoriteMovies(event, movie, id));
    const favoriteText = document.createElement('span');
    favoriteText.classList.add('titles');
    favoriteText.textContent = "Favoritar";
    favorite.appendChild(heartImage);
    favorite.appendChild(favoriteText);

    // cria a div que apresenta a descrição do filme:
    const movieDescription = document.createElement('div');
    movieDescription.classList.add('description');
    const textDescription = document.createElement('p');
    textDescription.textContent = overview;
    movieDescription.appendChild(textDescription);

    noteAndFavorite.appendChild(note);
    noteAndFavorite.appendChild(favorite)
    movieInfos.appendChild(movieTitle);
    movieInfos.appendChild(noteAndFavorite);

    newMovie.appendChild(bannerMovie);
    newMovie.appendChild(movieInfos);
    newMovie.appendChild(movieDescription);
    movieList.appendChild(newMovie);
}

