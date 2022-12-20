module.exports = () => {
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

            <body id="home">
                <div class="home-container">
                    <div class="box">
                        <div class="box">
                            <h1 class='fw-bold home-title'>SEQUEL</h1>
                        </div>
                        <div class="box">
                            <a class="movie-link" href="/movies">TAKE ME TO THE MOVIES!</a>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    `;
};