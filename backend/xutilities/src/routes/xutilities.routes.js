const {Router} = require('express');
const router = Router(); 
const authMiddleware = require('../middlewares/validateToken')

// Articles
const articleController = require('../controllers/article.controller');
router.get('/articles', articleController.getArticles);
router.get('/articles/:id', articleController.getArticleById);

// Brand
const brandController = require('../controllers/brand.controller');
router.get('/brands', brandController.getBrands);

// Communities and Cities
const communityController = require('../controllers/community.controller');
router.get('/communities', communityController.getCommunities);

// Reviews
const reviewController = require('../controllers/review.controller');
router.get('/reviews/product/:id', reviewController.getReviewByProduct);
router.post('/reviews/product/:id',reviewController.createReview)
// Añadir reviews por usuario

router.post('/reviews', reviewController.createReview);
// router.post('/reviews', authMiddleware.authRequired, reviewController.createReview);







// Utilities

// const userController = require('../controllers/user.controller')
// const authMiddleware = require('../middlewares/validateToken')

// // Authentication
// router.post('/login', userController.loginUser);
// router.post('/logout', authMiddleware.authRequired, userController.logoutUser);
// router.get('/profile', authMiddleware.authRequired, userController.profile);
// // Users
// router.get('/', authMiddleware.authRequired, userController.getUsers);
// router.post('/', userController.createUser);
// // router.post('/', authMiddleware.authRequired, userController.createUser);
// // router.get('/profile', authMiddleware.authRequired, userController.getProfile);
// router.get('/:id', authMiddleware.authRequired, userController.getUserById);
// router.put('/:id', authMiddleware.authRequired, userController.updateUser);
// router.delete('/:id', authMiddleware.authRequired, userController.deleteUser);

// router.post('/', productController.createProduct);
// router.get('/', productController.getProducts);
// router.get('/:productId', productController.getProductsById);
// router.put('/:productId', productController.updateProduct);
// router.delete('/:productId', productController.deleteProduct);

module.exports = router;