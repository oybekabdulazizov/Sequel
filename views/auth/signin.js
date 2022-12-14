const layout = require('../utilities/layout');
const { getError } = require('../utilities/helpers');

module.exports = ({ req, errors }) => {
    return layout({
        req, 
        content: `
            <div id="content" class="container main w-50">
                <div class="container mb-3 ps-0">
                    <h3 class="ps-0">Sign in</h3>
                </div>
                <form method="POST">
                    <div>
                        <div class="form-floating mb-3 text-secondary">
                            <input name="email" type="email" class="form-control h-25" id="floatingInput" placeholder="Email">
                            <label for="floatingInput">Email</label>
                            <p class="text-danger">${getError(errors, 'email')}</p>
                        </div>
                        <div class="form-floating text-secondary">
                            <input name="password" type="password" class="form-control h-25" id="floatingPassword" placeholder="Password">
                            <label for="floatingPassword">Password</label>
                            <p class="text-danger">${getError(errors, 'password')}</p>
                        </div>
                        <div class="my-3">
                            <button class="btn btn-primary form-control form-btn">Sign in</button>
                        </div>
                    </div>
                </form>
            </div>
        `
    });
}
