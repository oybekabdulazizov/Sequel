const layout = require('../utilities/layout');

module.exports = ({ req }) => {
    return layout({
        req, 
        content: `
            <div class="main" style="display: flex; justify-content: center; align-items: center;">
                <div>
                    <h2 class="text-center">The order has been placed successfully!</h2>
                </div>
            </div>
        `
    })
};