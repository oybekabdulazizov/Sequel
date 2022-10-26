const layout = require('./layout');
const { getError } = require('../helpers');

module.exports = ({ req, errors }) => {
    return layout({
        content: `
            <div class="container mb-3 ps-0">
                <h3 class="ps-0">Sign in</h3>
            </div>
            <form method="POST">
                <div>
                    <div class="form-floating mb-3">
                        <input name="email" type="email" class="form-control" id="floatingInput" placeholder="Email">
                        <label for="floatingInput">Email</label>
                        <p class="text-danger">${getError(errors, 'email')}</p>
                    </div>
                    <div class="form-floating">
                        <input name="password" type="password" class="form-control" id="floatingPassword" placeholder="Password">
                        <label for="floatingPassword">Password</label>
                        <p class="text-danger">${getError(errors, 'password')}</p>
                    </div>
                    <div class="my-3">
                        <button class="btn btn-primary mb-3 px-5 py-3">Sign in</button>
                    </div>
                </div>
            </form>
        `
    });
}
