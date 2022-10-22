const layout = require('./layout');

module.exports = ({ req }) => {
    return layout({
        content: `
            <form method="POST">
                <h2>Currently signed-in user id: ${req.session.userId}</h2>
                <input name="email" placeholder="Email address" />
                <input name="password" placeholder="password" />
                <input name="passwordConfirmation" placeholder="password confirmation" />
                <button>Sign Up!</button>
            </form>
        `
    });
};