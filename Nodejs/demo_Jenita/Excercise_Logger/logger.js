import chalk from 'chalk';

const success = ( message ) => console.log( chalk.green( message ) );
const warning = ( message ) => console.log( chalk.yellow( message ) );
const error = ( message ) => console.log( chalk.red( message ) );

// module.exports = {
//     success
// }
export {
    success,
    warning,
    error
};