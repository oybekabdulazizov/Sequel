const layout = require('./layout'); 
const { getError } = require('./helpers');

module.exports = ({ req, errors }) => {
    return layout({
        req, 
        content: `
            <div class="main container w-50" id="content">
                <div class="container mb-3">
                    <h1 class="ps-0">Search</h1>
                </div>
                <form method="POST">
                    <div class="mb-3 text-secondary">
                        <input name="searchterm" type="text" class="form-control h-50 py-3" placeholder="Movie Title">
                        <p class="text-danger">${getError(errors, 'searchterm')}</p>
                    </div>
                    <div class="my-3">
                        <button class="btn btn-primary form-control form-btn">Search</button>
                    </div>
                </form>
            </div>
        `
    });
};