import { fetchUsers } from '../services/users.js'

const getUsers = ( req, res ) => {
    // Logged in user info
    console.log( res.locals.claims );

    fetchUsers()
        .then( users => {
            res.json( users );
        })
        .catch(err => {
            res.json( err.message );
        });
};

export {
    getUsers
};