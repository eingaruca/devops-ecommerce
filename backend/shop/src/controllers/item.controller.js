const firebase = require('../database/db.firebase');
const Order = require('../models/Order');
const Item = require('../models/Item');
const firestore = firebase.firestore();
const { format } = require('date-fns')

const addItemToCart = async (req, res, next) => {
    console.log('addItemToCart')
    try{
        // Necesito
        const statusOrder = 'Cart';
        const userId = req.body.userId;
        const orderId = req.body.orderId;
        const productId = req.body.productId;
        const unitPrice = req.body.unitPrice;
        const quantity = req.body.quantity;
        const subtotal = req.body.subtotal;
        // orderId,
        // productId,
        // unitPrice,
        // quantity,
        // subtotal

        /**
         * Paso 1, poner id del cart en localstorage
         * Paso 2, buscar el producto en entre los items del cart
         * Paso 3, Si existe, añadir 1. 
         */
        let existingItem = await firestore.collection('Items')
                                    .where('productId', '==', productId)
                                    .where('userId', '==', userId)
                                    .where('statusOrder', '==', statusOrder)
                                    .get();

        console.log('existingItem', existingItem.data())
        if (!existingItem.empty) {
            // Si el item ya existe, actualizar la cantidad sumando la cantidad nueva
            existingItem.forEach(async doc => {
                const actualQuantity = doc.data().quantity || 0;
                const newQuantity = actualQuantity + quantity;
                await firestore.collection('Items').doc(doc.id).update({ quantity: newQuantity });
                console.log(`Se ha actualizado la cantidad del item ${productId} para el usuario ${userId}.`);
            });
            return res.json(existingItem);
        } else {
            // Si el item no existe, crear uno nuevo
            console.log('else')
            const newItem = new Item(null, orderId, productId, unitPrice, quantity, subtotal); // Ajusta según tu modelo de Item
            newItem.userId = userId; // Agrega el userId al nuevo item
            // const addedItem = await firestore.collection('Items').add(req.body);
            const addedItem = await firestore.collection('Items').doc().set(JSON.parse(newItem));
            console.log(`Se ha creado un nuevo item: ${productId} para el usuario ${userId}.`);
            return res.json(addedItem); 
        }
        // const itemAdded = await firestore.collection('Items').doc().set(req.body);
    
        
        } catch (error) {
            console.log('Error Creating item')
        return res.status(400).send(error.message);
    }
}

const changeCartToOrder = async (req, res, next) => {
    
}

const addAdressToOrder = async (req, res, next) => {
    
}


const addFavoriteProduct = async (req, res, next) => {
    
}

module.exports = {
    addItemToCart,

}
