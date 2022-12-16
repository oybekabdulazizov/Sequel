const layout = require('../layout');
const { getError } = require('../helpers');

module.exports = ({ req, errors }) => {
    return layout({
        req, 
        content: `
            <div id="content" class="container main w-50">
                <div class="container mb-3 ps-0">
                    <h3 class="ps-0">Sign up</h3>
                </div>
                <form method="POST">
                    <div class="text-secondary">
                        <div class="form-floating mb-3">
                            <input name="email" type="email" class="form-control h-25" id="floatingInput" placeholder="Email">
                            <label for="floatingInput">Email</label>
                            <p class="text-danger">${getError(errors, 'email')}</p>
                        </div>
                        <div class="form-floating">
                            <input name="password" type="password" class="form-control h-25" id="floatingInput" placeholder="Password">
                            <label for="floatingPassword">Password</label>
                            <p class="text-danger">${getError(errors, 'password')}</p>
                        </div>
                        <div class="form-floating">
                            <input name="passwordConfirmation" type="password" class="form-control h-25" id="floatingInput" placeholder="Password confirmation">
                            <label for="floatingPassword">Password confirmation</label>
                            <p class="text-danger">${getError(errors, 'passwordConfirmation')}</p>
                        </div>
                        <div class="my-3">
                            <button class="btn btn-primary form-control">Sign up</button>
                        </div>
                    </div>
                </form>
            </div>
            
        `
    });
};