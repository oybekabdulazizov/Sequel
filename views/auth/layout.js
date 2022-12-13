const { userSignedIn } = require('../helpers');

module.exports = ({ req, content }) => {
    let signinSignup = ``;

    if (userSignedIn(req)) {
        signinSignup = 
        `
        <ul class="navbar-nav">
            <li>
                <a class="nav-link" href="/signout"><u>Sign out</u></a>
            </li>
        </ul>
        `;
    } else {
        signinSignup =
        `
        <ul class="navbar-nav">
            <li>
                <a class="nav-link" href="/signin"><u>Sign in</u></a>
            </li>
            <li>
                <a id="signup" class="nav-link" href="/signup"><u>Sign up</u></a>
            </li>
        </ul>
        `;
    }

    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Sequel</title>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
                <link href="/css/main.css" rel="stylesheet">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"> 
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;600&display=swap" rel="stylesheet">
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>
            </head>

            <body class="admin">
                <header>
                    <nav id="navbar" class="navbar navbar-expand-lg bg-light">
                        <div class="container fluid w-75">
                            <div class="navbar-brand">
                                <h3 class="title">Sequel</h3>
                            </div>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse fs-5 text" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-6 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link" href="/">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/search">Search</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/about">About</a>
                                    </li>
                                </ul>
                                ${signinSignup}
                            </div>
                        </div>
                    </nav>
                </header>

                <div id="content-container"class="container w-75 px-5 py-5">
                ${content}
                </div>
            </body>
        </html>
    `;
}