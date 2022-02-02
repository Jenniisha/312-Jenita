import { fetchProducts } from '../../services/products.js';

const getProductsPage = ( req, res, next ) => {
    fetchProducts()
        .then(products => {
            res.render( 'products', {
                products: products
            });
        });
};

export {
    getProductsPage
};