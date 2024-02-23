const firebase = require('../database/db.firebase');
const Order = require('../models/Order');
const Item = require('../models/Item');
const firestore = firebase.firestore();
const { format } = require('date-fns')

// try{
//     const data = req.body;
//     // console.log('body', data)
    
//     const prod = await firestore.collection('Products').doc(data.id)
//     delete data.id
//     const productSaved = prod.set(data);
//     // const productSave = await firestore.collection('Products').doc().set(data);

//     return res.json({'message': 'ok'}); 
//     } catch (error) {
//         console.log('ERROR CREATEPRODUCT')
//     return res.status(400).send(error.message);
// }


// id,
// userId,
// createdAt,
// updatedAt,
// orderedAt,
// sendedAt,
// paidAt,
// total,
// // statusCart,
// statusOrder,
// paymentId,
// paymentStatus,
// carrier,
// address,
// { 
//     updatedAt,
//     orderedAt,
//     sendedAt,
//     paidAt,
//     total,
//     statusCart,
//     statusOrder,
//     paymentId
// }

const getCart = async (req, res, next) => {
    try {
        // HAY QUE obtener el ID del usuario. Con el token y decodificarlo aquí o que venga decodificado
        const userId = req.user.id;
        const statusOrder = "Cart"
        console.log(userId);
        
        // Deberíamos validar que sólo haya un cart.

        const carts = await firestore.collection('Orders')
                                .where('statusOrder', '==', statusOrder)
                                .where('userId', '==', userId);;
        // const data = await products.get();
        let cartsArray = [];
        let cart;
        await carts.get().then(snapshot => {
            snapshot.forEach(doc => {
                cart = new Order(
                    doc.id,
                    doc.data().userId,
                    doc.data().createdAt,
                    doc.data().updatedAt,
                    doc.data().orderedAt,
                    doc.data().sendedAt,
                    doc.data().paidAt,
                    doc.data().total,
                    doc.data().statusOrder,
                    doc.data().paymentId,
                    doc.data().paymentStatus,
                    doc.data().carrier,
                    doc.data().address,
                    doc.data().postalCode,
                    doc.data().community,
                    doc.data().phoneContact
                );
            });
        });

        return res.json(cart);

    } catch (error) {
        return res.status(400).send(error.message);
    }
}

const createCart = async (req, res, next) => {
    try{

        const actual = new Date();
        // const formatedDateTime = 
        let data = req.body;
        data.createdAt = format(actual, 'dd/MM/yyyy HH:mm:ss');
        data.updatedAt = format(actual, 'dd/MM/yyyy HH:mm:ss');
        data.statusOrder = 'Cart';

        const cartSaved = await firestore.collection('Orders').doc().set(data);
    
        return res.json({'message': 'Cart Saved'}); 
        } catch (error) {
            console.log('Error Creating Cart')
        return res.status(400).send(error.message);
    }
        
}

const getOrderByStatus = async (req, res, next) => {

    try {
        // HAY QUE obtener el ID del usuario. Con el token y decodificarlo aquí o que venga decodificado
        const userId = req.body.userId;
        const statusOrder = req.body.statusOrder;
        // const orderId = req.body.orderId
        
        // Deberíamos validar que sólo haya un cart.

        const orders = await firestore.collection('Orders')
                                    .where('userId', '==', userId)
                                    .where('statusOrder', '==', statusOrder);

        // const data = await products.get();
        let ordersArray = [];
        await orders.get().then(snapshot => {
            snapshot.forEach(doc => {
                let order = new Order(
                    doc.id,
                    doc.data().userId,
                    doc.data().createdAt,
                    doc.data().updatedAt,
                    doc.data().orderedAt,
                    doc.data().sendedAt,
                    doc.data().paidAt,
                    doc.data().total,
                    doc.data().statusOrder,
                    doc.data().paymentId,
                    doc.data().paymentStatus,
                    doc.data().carrier,
                    doc.data().address,
                    doc.data().postalCode,
                    doc.data().community,
                    doc.data().phoneContact
                );
                ordersArray.push(order);
            });
        });

        return res.json(ordersArray);
    } catch (error) {
        return res.status(400).send(error.message);
    }

}


const changeOrderStatus = async (req, res, next) => {
    /**
     * Cuando se paga:
     * - Añade registro documento a la colección payments con orderId
     * - Cambia de estatus de Cart
     * - Se incluye los campos de payment en Order
     * - Actualizar las fechas
     */

    const orderId = req.body.orderId;
    const statusOrder = req.body.statusOrder;

    
    try {
        // Update Order
        const orderUpdated = await firestore.collection('Orders').doc(orderId).update( {statusOrder: statusOrder} );

        // Update Items

        const items = await firestore.collection('Items')
                                .where('orderId', '==', orderId)
                                .get();
        for (const doc of items.docs) {
            await doc.ref.update({ 'statusOrder': statusOrder });
        }
    
        return res.json({'message': 'OK'})

    } catch (error) {
        return res.status(400).send(error.message);
    }

    
}

const updateOrder = async (req, res, next) => {
    try {
        
        let data = req.body;
        console.log("data", data);
        let id = data.orderId
        let order = await firestore.collection('Orders').doc(id);

        let updatedOrder = await order.update(data);

        return res.json({'Actualiza Order': updatedOrder})
    } catch (error) {
        return res.status(400).send(error.message);
    }
    
}


const addFavoriteProduct = async (req, res, next) => {
    
}

module.exports = {
    getCart,
    createCart,
    getOrderByStatus,
    changeOrderStatus,
    updateOrder,

}
