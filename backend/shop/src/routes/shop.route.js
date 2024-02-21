const {Router} = require('express');
const router = Router(); 

const orderController = require('../controllers/order.controller')
const itemController = require('../controllers/item.controller')
const paymentController = require('../controllers/payment.controller')
// Orders & carts
router.get('/cart', orderController.getCart);
router.get('/orders-status', orderController.getOrderByStatus);
router.post('/cart', orderController.createCart);
router.put('/changeOrderStatus', orderController.changeOrderStatus);

// Items
router.post('/addItem', itemController.addItemToCart);
router.post('/cleanItemsToCart', itemController.cleanItemsToCart)
router.get('/getItem/:id', itemController.getItem);
router.get('/listItems', itemController.listItems);

// Payments
router.get('/getPaymentByUser', paymentController.getPaymentsByUser);
router.get('/getPaymentByOrder', paymentController.getPaymentsByOrder);
router.get('/getPaymentById/:id', paymentController.getPaymentsById);
router.post('/createPayment', paymentController.createPayment);
router.put('/updatePayment/:id', paymentController.updatePayment);



router.delete('/deleteItem/:id', itemController.deleteItem)


// router.get('/', userController.getUsers);
// router.post('/', userController.createUser);
// router.get('/:id',userController.getUserById);
// router.put('/:id',userController.updateUser);
// router.delete('/:id',userController.deleteUser);


module.exports = router;