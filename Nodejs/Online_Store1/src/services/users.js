/**
 * Service talks to the database (data layer)
 */
 import mongoose from  'mongoose' ;
 const User = mongoose.model( 'User' );
 
 const fetchUsers= () => {
     //this queries the Online_Store1 DB
    // (Collection will be users)
     return User.find();
 };
 
 export {
     fetchUsers
 };