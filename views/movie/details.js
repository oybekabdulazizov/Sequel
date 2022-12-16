const layout = require('../layout');

module.exports = ({ req, movie }) => {
    
    return layout({
        req, 
        content: `
            <div class="container main">
                <img src="${movie.Poster}" />
                <h3>${movie.Title}</h3>
            </div>
        `
    })
}