const layout = require('../layout');

module.exports = ({ req, searchResult }) => {
    const renderedSearchResult = searchResult.map((searchResult) => {
        return `
            <div class="card">
                <a href="/movies/${searchResult.imdbID}/details">
                <div class="position-relative">
                    <img src="${searchResult.Poster}" class="card-img-top" alt="movie-poster">
                    <span class="badge text-bg-success position-absolute top-0 start-0">${searchResult.Year}</span>
                </div>
                </a>
                <div class="card-body">
                    <p class="card-title d-inline-block text-truncate" database-bs-toggle="tooltip" databse-bs-placement="bottom" title="${searchResult.Title}">${searchResult.Title}</p>
                    <div style="display: flex; justify-content: space-between;">
                        <p class="card-title d-inline-block">$${searchResult.Price}</p>
                        <div style="width: 44.2%;">
                            <form action="/cart/movies" method="POST"">
                                <button class="btn btn-primary add-to-cart">Add to cart</button>
                                <input hidden value="${searchResult.imdbID}" name="imdbID" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `
    }).join('');
    return layout({ 
        req, 
        content: `
            <div class="main">
                <h1 class="movie-title">Search Result:</h1>
                <div class="movie-container">
                    ${renderedSearchResult}
                </div>
            </div>
        ` 
    })
};