const {Router} = require('express');
const router = Router(); 

const orderController = require('../controllers/order.controller')
const itemController = require('../controllers/item.controller')
// Orders & carts
router.get('/cart', orderController.getCart);
router.post('/cart', orderController.createCart);

// Items
router.post('/addItem', itemController.addItemToCart);
// router.get('/', userController.getUsers);
// router.post('/', userController.createUser);
// router.get('/:id',userController.getUserById);
// router.put('/:id',userController.updateUser);
// router.delete('/:id',userController.deleteUser);


module.exports = router;