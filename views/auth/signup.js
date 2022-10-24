const layout = require('./layout');
const { getError } = require('../helpers');

module.exports = ({ req, errors }) => {
    return layout({
        content: `
            <form method="POST">
                <h2>Currently signed-in user id: ${req.session.userId}</h2>
                <input name="email" placeholder="Email address" />
                <p>${getError(errors, 'email')}</p>
                <input name="password" placeholder="password" />
                <p>${getError(errors, 'password')}</p>
                <input name="passwordConfirmation" placeholder="password confirmation" />
                <p>${getError(errors, 'passwordConfirmation')}</p>
                <button>Sign Up!</button>
            </form>
        `
    });
};