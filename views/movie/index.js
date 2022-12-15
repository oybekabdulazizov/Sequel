const layout = require('../layout');

module.exports = ({ req, movies }) => {
    let counter = 0;
    const renderedMovies = movies.map((movie) => {
        counter++;
        return `
            <div>${counter}. ${movie.Title}</div>
        `;
    }).join('');

    return layout({
        req, 
        content: `
            <h1 class="title">Movies</h1>
            ${renderedMovies}
        `        
    });
}