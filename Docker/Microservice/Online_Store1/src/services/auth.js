import mongoose from 'mongoose';

const User = mongoose.model( 'User' );

const getUserByCredentials = ( credentials ) => {
    return User.findOne( credentials );
};

export {
    getUserByCredentials
};