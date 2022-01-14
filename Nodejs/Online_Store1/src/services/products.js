/**
 * Service talks to the database (data layer)
 */
 import mongoose from "mongoose";
 import config from "../utils/config.js";
 
 const Product = mongoose.model("Product");
 
 const fetchProducts = (sort, order, page, q, minPrice, minRating) => {
   const skipClause = (page - 1) * config.PAGE_SIZE;
 
   const filterClause = {};
 
   // add price-based filtering is minPrice is passed
   if (minPrice) {
     filterClause.price = {
       $gte: minPrice,
     };
   }
 
   // add rating-based filtering is minPrice is passed
   if (minRating) {
     filterClause.rating = {
       $gte: minRating,
     };
   }
 
   if (q) {
     filterClause.description = {
       $regex: q,
       $options: "i", // ignore case
     };
   }
 
   console.log(filterClause);
 
   // If sort is 'name', then sortClause = { name: -1 }
   // If sort is 'rating', then sortClause = { rating: -1 }
   const sortClause = {
     [sort]: order === "desc" ? -1 : 1,
   };
 
   // we can pass exec() a function and that is called when the query completes
   // return Product.find( filterClause ).exec();
   return Product.find(filterClause)
     .sort(sortClause)
     .skip(skipClause)
     .limit(config.PAGE_SIZE);
 };
 
 const fetchProductById = (_id) => {
   return Product.findById(_id);
 };
 
 const addProduct = ( product ) => {
   return Product.create( product );
 };
 
 const updateProduct = ( _id, newProductDetails ) => {
   return Product.findByIdAndUpdate( _id, newProductDetails, { new: true } );
 };
 
 const removeProduct = ( _id ) => {
   return Product.findByIdAndRemove( _id );
 };
 
 export {
   fetchProducts,
   fetchProductById,
   addProduct,
   updateProduct,
   removeProduct
 };