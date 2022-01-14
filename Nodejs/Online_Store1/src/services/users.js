/**
 * Service talks to the database (data layer)
 */
import mongoose from 'mongoose';
import config from '../utils/config.js';

const User = mongoose.model('User');

const fetchUsers = (sort, order, filterRole, page) => {
    const skipClause = (page - 1) * config.PAGE_SIZE;

    const filterClause = {};

    if (filterRole) {
        filterClause.role = filterRole


    }

    const sortClause = {
        [sort]: order === 'desc' ? -1 : 1
    };
    //this queries the Online_Store1 DB
    // (Collection will be users)
    return User.find(filterClause).sort(sortClause).skip(skipClause).limit(config.PAGE_SIZE);
};
const fetchUserById = (_id) => {
    return User.findById(_id)
};
const addUser = ( user ) => {
    return User.create( user );
  };
  
  const updateUser = ( _id, newUserDetails ) => {
    return User.findByIdAndUpdate( _id, newUserDetails, { new: true } );
  };
  
  const removeUser = ( _id ) => {
    return User.findByIdAndRemove( _id );
  };
  
export {
    fetchUsers,
    fetchUserById,
    addUser,
   updateUser,
   removeUser
};