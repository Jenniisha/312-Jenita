/**
 * Controller extracts information (query string parameters, path parameters etc., makes a call a call to the service to get data, and sends the response)
 */
 import { fetchUsers } from '../services/users.cjs';

 const getUsers = ( req, res ) => {
     res.json( fetchUsers() );
 };
 
 export {
     getUsers
 };