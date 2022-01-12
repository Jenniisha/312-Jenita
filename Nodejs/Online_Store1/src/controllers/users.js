/**
 * Controller extracts information (query string parameters, path parameters etc., makes a call a call to the service to get data, and sends the response)
 */
 import { fetchUsers } from '../services/users.js';

 const getUsers= ( req, res ) => {
      fetchUsers() 
      .then( users => {
        res.json(users);
      })
      .catch(err => {
        res.json(err.message);
      });
 };
 
 export {
     getUsers
 };