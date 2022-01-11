/**
 * Service talks to the database (data layer)
 */
 const users = require( '../data/users' );

 const fetchUsers= () => users;
 
 module.exports = {
    fetchUsers
 };
 