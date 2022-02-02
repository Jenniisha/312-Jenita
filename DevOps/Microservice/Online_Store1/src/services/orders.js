/**
 * Service talks to the database (data layer)
 */
 import mongoose from "mongoose";
 import config from "../utils/config.js";
 
 const Order= mongoose.model("Order");
 
 const fetchOrders = (sort, order, page, q, minPrice, minRating) => {
   const skipClause = (page - 1) * config.PAGE_SIZE;
 
   const filterClause = {};
 
   
 
   console.log(filterClause);
 
   // If sort is 'name', then sortClause = { name: -1 }
   // If sort is 'rating', then sortClause = { rating: -1 }
   const sortClause = {
     [sort]: order === "desc" ? -1 : 1,
   };
 
   // we can pass exec() a function and that is called when the query completes
   // return Product.find( filterClause ).exec();
   return Order
           .find(filterClause)
           //.select( 'name code releaseDate description price rating imageUrl' )
           .sort(sortClause)
           .skip(skipClause)
           .limit(config.PAGE_SIZE);
 };
 
 const fetchOrderById = (_id) => {
   return Order.findById(_id);
 };
 
 const addOrder = ( order ) => {
   return Order.create( order );
 };
 
 const updateOrder = ( _id, newaOrderDetails ) => {
   
 
   return Order.findByIdAndUpdate( _id, newOrderDetails, { new: true, runValidators: true } );
 };
 
 const removeOrder= ( _id ) => {
   return Order.findByIdAndRemove( _id );
 };
 
 
 
 export {
   fetchOrders,
   fetchOrderById,
   addOrder,
   updateOrder,
   removeOrder,
 };