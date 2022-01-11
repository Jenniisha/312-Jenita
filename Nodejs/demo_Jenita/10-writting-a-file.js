const fs = require( 'fs' );
const path = require( 'path' );

const contents = `
    <!doctype html>
    <html>
        <head>
            <title>Hello fs module</title>
        </head>
        <body>
            <h1>Hello fs module</h1>
        </body>
    </html>
`;

fs.writeFile( path.join( __dirname, '..', 'hello.html' ), contents, { encoding: 'utf-8' }, ( err ) => {
    if( err ) {
        console.log( err.message );
        return;
    }

    console.log( 'file has been created' );
});

console.log( 'last line of script' );