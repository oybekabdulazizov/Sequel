const layout = require('../layout');

module.exports = ({ req, items }) => {
    const renderedItems = items.map((item) => {
        return `
            <div>${item.movie.Title} - ${item.movie.BoxOffice}</div>
        `;
    }).join('');
    
    return layout({
        req, 
        content: `
            <h1>Cart</h1>
            ${renderedItems}
        `
    })
}