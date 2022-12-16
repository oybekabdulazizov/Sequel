const layout = require('../layout');

module.exports = ({ req, movies }) => {
    let counter = 0;
    const renderedMovies = movies.map((movie) => {
        return `
            <div class="card">
                <div class="position-relative">
                    <img src="${movie.Poster}" class="card-img-top" alt="movie-poster">
                    <span class="badge text-bg-success position-absolute top-0 start-0">${movie.Year}</span>
                    <a href="#" class="btn btn-primary add-to-cart position-absolute top-0 end-0">+Add to cart</a>
                </div>
                <div class="card-body">
                    <p class="card-title d-inline-block text-truncate">${movie.Title}</p>
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