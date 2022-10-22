module.exports = ({ content }) => {
    return `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Sequel</title>
            </head>

            <body >
                <div class="">${content}</div>
            </body>
        </html>
    `;
}