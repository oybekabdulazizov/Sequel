const { userSignedIn } = require('./helpers');

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
                <header class="layout-navbar">
                    <nav id="navbar" class="navbar navbar-expand-lg">
                        <div class="container fluid w-75">
                            <div class="navbar-brand">
                                <h3 class="title"><a class="nav-link" href="/">Sequel</a></h3>
                            </div>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" styles="color: white !important;">
                                <span class="navbar-toggler-icon" styles="color: white !important;"></span>
                            </button>
                            <div class="collapse navbar-collapse fs-5" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-6 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link" href="/movies">Movies</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/search">Search</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/about">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/cart">Cart</a>
                                    </li>
                                </ul>
                                ${signinSignup}
                            </div>
                        </div>
                    </nav>
                </header>

                <div id="content-container" class="container w-75 px-5 py-5">
                ${content}
                </div>

                <footer>
                    <section class="footer-section">
                        <div>
                            <ul class="navbar-nav">
                                <li><h4>Sequel</h4></li>
                                <li>Movies</li>
                                <li>About</li>
                                <li>Support Us!</li>
                            </ul>
                        </div>
                        <div>
                            <ul class="navbar-nav">
                                <li><h4>Contact</h4></li>
                                <li>(+48) 794 311 026</li>
                                <li>oybek.tulqinovich@gmail.com</li>
                                <li><a href="https://github.com/oybekabdulazizov" style="color: white;">github/oybekabdulazizov</li>
                            </ul>
                        </div>
                        <div>
                            <iframe width="400" height="180" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d312779.9431310756!2d20.781016711291045!3d52.232606289062204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarsaw!5e0!3m2!1sen!2spl!4v1671188783879!5m2!1sen!2spl"></iframe>
                        </div>
                    </section>
                </footer>
            </body>
        </html>
    `;
}