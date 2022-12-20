const layout = require('../utilities/layout');

module.exports = ({ req, items }) => {
    let totalPrice = items.reduce((prev, item) => {
        return prev + item.quantity * item.movie.Price;
    }, 0);
     
    const renderedItems = items.map((item) => {
        return `
            <div class="cart-item" style="background: #C2B6B6">
                <h5 class="margin-0">${item.movie.Title}</h5>
                <div style="display: flex; flex-direction: row; align-items: center;">
                    <h6 class="margin-0">$${item.movie.Price} x ${item.quantity} = </h6>
                    <h5 class="margin-0">&nbsp$${item.movie.Price * item.quantity}</h5>
                    <div style="margin: 0 0 0 .5em;">
                        <form method="POST" action="/cart/movies/delete">
                            <input hidden value="${item.imdbID}" name="imdbID">
                            <button class="btn btn-danger">
                                <span>
                                    <i class="fas fa-times"></i>
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    return layout({
        req, 
        content: `
            <div class="main">
                <h1 class="mb-3">Cart</h1>
                ${renderedItems}
                <div class="bg-primary cart-item text-white">
                    <h4 class="margin-0">Total</h4>
                    <div>
                        <h4 class="margin-0">$${totalPrice}<h4>
                    </div>
                </div>
                <div style="display: flex; justify-content: end;">
                    <div>
                        <form method="POST" action="/cart/buy">
                            <button class="btn btn-primary px-4 py-2"><h4 class="margin-0">Buy</h4></button>
                        </form>
                    </div>
                </div>
            </div>
        `
    })
}