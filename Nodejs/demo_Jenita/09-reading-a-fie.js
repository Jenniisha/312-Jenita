const fs = require( 'fs' );
const path = require( 'path' );

// the function will be "called back" once the file has been read
fs.readFile( '04-arithmetic-demo.js', ( err, contents ) => {
    if( err ) {
        console.log( err.message );
        return;
    } 
    
    // contents is a buffer - raw sequence of butes
    console.log( contents );
});

// pass the file encoding as the second argument
fs.readFile( path.join( __dirname, '..', 'references-nodejs-express.md' ), 'utf-8', ( err, contents ) => {
    if( err ) {
        console.log( err.message );
        return;
    } 
    
    console.log( contents );
});

// this line executes even before the file is read
console.log( 'last line of script' );