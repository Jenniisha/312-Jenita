import { fetchArticles } from '../../services/articles.js';

const getArticlesPage = ( req, res, next ) => {
    fetchArticles()
        .then(articles => {
            res.render( 'articles', {
                articles: articles
            });
        });
};

export {
    getArticlesPage
};