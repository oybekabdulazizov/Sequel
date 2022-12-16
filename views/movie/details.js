const layout = require('../layout');

module.exports = ({ req, movie }) => {
    console.log(movie);
    return layout({
        req, 
        content: `
            <div class="main details-card">
                <div class="details-poster">
                    <img src="${movie.Poster}" class="details-movie-poster"/>
                </div>
                <div class="details-body">
                    <ul class="navbar-nav">
                        <li>Title: ${movie.Title}</li>
                        <li>Released: ${movie.Released}</li>
                        <li>Duration: ${movie.Runtime}</li>
                        <li>Genre: ${movie.Genre}</li>
                        <li>Language: ${movie.Language}</li>
                        <li>IMDB Rating: ${movie.imdbRating}</li>
                        <li>Metascore: ${movie.Metascore}</li>
                        <li>Actors: ${movie.Actors}</li>
                        <li>Director: ${movie.Director}</li>
                        <li>Writer: ${movie.Writer}</li>
                        <li>Country: ${movie.Country}</li>
                        <li>Awards: ${movie.Awards}</li>
                        <li></li>
                        <br/>
                        <li>Plot: <i>${movie.Plot}</i></li>
                    </ul>
                </div>
            </div>
        `
    })
}