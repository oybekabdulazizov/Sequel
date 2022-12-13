const layout = require('../auth/layout');

module.exports = ({ movies }) => {
    let counter = 0;
    const renderedMovies = movies.map((movie) => {
        counter++;
        return `
            <div>${counter}. ${movie.Title}</div>
        `;
    }).join('');
    return layout({
        content: `
            <h1 class="title">Movies</h1>
            ${renderedMovies}
        `        
    });
}