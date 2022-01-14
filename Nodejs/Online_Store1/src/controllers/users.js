/**
 * Controller extracts information (query string parameters, path parameters etc., makes a call a call to the service to get data, and sends the response)
 */
import {
    fetchUsers,
    fetchUserById,
    addUser,
  updateUser,
  removeUser

} from "../services/users.js";
import HttpError from '../utils/HttpError.js';

// /users?sort=name&order=asc&filterRole=customer&page=2
const getUsers = (req, res, next) => {
    
    let { sort, order,filterRole, page } = req.query;

    // convert page to integer, and set a default of 1 if it is not passed / incorrect
    let pageInt = parseInt(page); // parseInt( 'hello' ) -> NaN, parseInt( undefined ) -> NaN

    if (isNaN(pageInt)) {
        pageInt = 1;
    }

    // if sort field is not passed, we assume it is sorted by name
    if (!sort) {
        sort = 'name';
    }

    // if sorting order is not passed, we assume it is sorted in ascending order
    if (!order) {
        order = 'asc';
    }

    
    


fetchUsers(sort, order,filterRole, pageInt)
    .then(users => {
        res.json(users);
    })
    .catch((err) => {
        // eg. DB connection error
        // 500 -> Internal Server Error
        const httpError = new HttpError( err.message, 500 );
        next( httpError );
    });
};
// GET /users/:_id
// Example: /users/61dd7711cbf3176114766adb
const getUserById = (req, res, next) => {
    const { _id } = req.params;

    fetchUserById(_id)
        .then(user => {
            if(!user){
                       // 404 -> Not Found
          const httpError = new HttpError( 'User with given id does not exist', 404 );
          next( httpError );
          return;
      }   
    
            res.json(user);
        })
        .catch((err)=>{
        if( err.kind === 'ObjectId' ) {
            // 400 -> BAD REQUEST
            const httpError = new HttpError( 'Invalid user id', 400 );
            next( httpError );
        } else {
            // eg. DB connection error
            // 500 -> Internal Server Error
            const httpError = new HttpError( err.message, 500 );
            next( httpError );
        }
      });
  };
// POST /user
const postUser = (req, res, next) => {
    const { body } = req;
    console.log( Object.keys( body ) );
  
    // check if the body is an empty object
    if( Object.keys( body ).length === 0 ) {
      const httpError = new HttpError( 'Request body is empty. User details are missing.', 400 );
      next( httpError );
      return;
    }
  
    addUser( body )
      .then(user => {
        res.status( 201 ).json( user );
      })
      .catch(err => {
        const httpError = new HttpError( err.message, 400 );
        next( httpError );
      });
  };
  
  // PUT /users/:_id
  const putUser = ( req, res, next ) => {
    const { body } = req;
    const { _id } = req.params;
  
    // check if the body is an empty object
    if( Object.keys( body ).length === 0 ) {
      const httpError = new HttpError( 'Request body is empty. User details are missing.', 400 );
      next( httpError );
      return;
    }
  
    updateUser( _id, body )
      .then(user => {
        res.json( user );
      })
      .catch(err => {
        if( err.kind === 'ObjectId' ) {
          // 400 -> BAD REQUEST
          const httpError = new HttpError( 'Invalid user id', 400 );
          next( httpError );
        } else {
            // eg. DB connection error
            // 500 -> Internal Server Error
            const httpError = new HttpError( err.message, 500 );
            next( httpError );
        }
      });
  };
  
  const deleteUser = ( req, res, next ) => {
    const { _id } = req.params;
  
    removeUser( _id )
      .then(() => {
        res.status(204).json();
      })
      .catch(err => {
        if( err.kind === 'ObjectId' ) {
          // 400 -> BAD REQUEST
          const httpError = new HttpError( 'Invalid user id', 400 );
          next( httpError );
        } else {
            // eg. DB connection error
            // 500 -> Internal Server Error
            const httpError = new HttpError( err.message, 500 );
            next( httpError );
        }
      });
  };
export {getUsers,getUserById,postUser, putUser, deleteUser };
    