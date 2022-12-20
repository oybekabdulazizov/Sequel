const layout = require('./layout');

module.exports = ({ req, searchResult }) => {
    const renderedSearchResult = searchResult.map((searchResult) => {
        return `
            <div>
                ${searchResult.Title}            
            </div>
        `
    }).join('');
    return layout({ 
        req, 
        content: `
            <h3>Found<h3>
            ${renderedSearchResult}
        ` 
    })
};