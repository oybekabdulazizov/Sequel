const e = require('express');
const layout = require('../layout');

module.exports = ({ req, movies }) => {
    const renderedMovies = movies.map((movie) => {
        let price;
        if (!movie.BoxOffice || movie.BoxOffice === 'N/A') {
            price = 20;
        } else {
            price = parseInt(movie.BoxOffice.slice(1).slice(0, 2));
        }

        return `
                <div class="card">
                    <a href="/movies/${movie.imdbID}/details">
                    <div class="position-relative">
                        <img src="${movie.Poster}" class="card-img-top" alt="movie-poster">
                        <span class="badge text-bg-success position-absolute top-0 start-0">${movie.Year}</span>
                    </div>
                    </a>
                    <div class="card-body">
                        <p class="card-title d-inline-block text-truncate" database-bs-toggle="tooltip" databse-bs-placement="bottom" title="${movie.Title}">${movie.Title}</p>
                        <div style="display: flex; justify-content: space-between;">
                            <p class="card-title d-inline-block">$${price}</p>
                            <div style="width: 44.2%;">
                                <form action="/cart/movies" method="POST"">
                                    <button class="btn btn-primary add-to-cart">Add to cart</button>
                                    <input hidden value="${movie.imdbID}" name="imdbID" />
                                    <input hidden value="${price}" name="price" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        `;
    }).join('');

    return layout({
        req,
        content: `
            <h1 class="movie-title">Movies</h1>
            <div class="movie-container">
                ${renderedMovies}
            </div>
        `
    });
}