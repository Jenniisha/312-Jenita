/**
 * Service talks to the database (data layer)
 */
 const orders = require( '../data/orders' );

 const fetchOrders = () => orders;
 
 module.exports = {
     fetchOrders
 };