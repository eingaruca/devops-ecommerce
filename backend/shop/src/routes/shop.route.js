const {Router} = require('express');
const router = Router(); 

const orderController = require('../controllers/order.controller')

router.get('/cart', orderController.getCart);
router.post('/cart', orderController.createCart);
// router.get('/', userController.getUsers);
// router.post('/', userController.createUser);
// router.get('/:id',userController.getUserById);
// router.put('/:id',userController.updateUser);
// router.delete('/:id',userController.deleteUser);


module.exports = router;