const firebase = require('../database/db.firebase');
const Product = require('../models/Product');
const Brand = require('../models/Brand');
const firestore = firebase.firestore();


const createProduct = async (req, res, next) => {
    console.log('Request=> ', req.body);
    try{
        const data = req.body;
        // console.log('body', data)
        
        const prod = await firestore.collection('Products').doc(data.id)
        delete data.id
        const productSaved = prod.set(data);
        // const productSave = await firestore.collection('Products').doc().set(data);

        return res.json({'message': 'ok'}); 
        } catch (error) {
            console.log('ERROR CREATEPRODUCT')
        return res.status(400).send(error.message);
    }
    // return res.json(`Create Product - Controller ${req.body.name}`);
};

const getProducts = async (req, res, next) => {
    console.log("backend getProducts")
    try{
        const products = await firestore.collection('Products');
        const data = await products.get();
        let productsArray = [];
        if(data.empty) {
            return res.status(404).send('getProducts() => No Products');
        } else {
            data.forEach( doc =>{
                let prod = new Product(
                    doc.id,
                    doc.data().name,
                    doc.data().description,
                    doc.data().category,
                    doc.data().brand,
                    doc.data().precio,
                    doc.data().tamano,
                    doc.data().stock,
                    doc.data().image
                );
                productsArray.push(prod);
            });
            return res.json(productsArray);
        }
    }catch (error) {
        return res.status(400).send(error.message);
    }
};


const getProductById = async (req, res, next) => {
    console.log("backend getProductById")
    try{
        let id = req.params.id;
        console.log("id!", id)
        let product =  await firestore.collection('Products').doc(id);
        let data = await product.get();

        if ( !data.exists ) {
            return res.status(400).send('No existe Producto con ese ID');    
        } else {
            console.log(data.data())
            return res.send(data.data());
        }

    } catch (error) {
        return res.status(400).send(error.message);
    }
};

const getProductsByCategory = async (req, res, next ) => {
    
    try {
        
        const category = req.params.category;
        console.log(category);
        
        const products = await firestore.collection('Products').where('category', '==', category);

        // const data = await products.get();
        let productsArray = [];

        await products.get().then(snapshot => {
            snapshot.forEach(doc => {
                console.log('---> ', doc.id, doc.data());
                const product = new Product(
                    doc.id,
                    doc.data().name,
                    doc.data().description,
                    doc.data().category,
                    doc.data().brand,
                    doc.data().precio,
                    doc.data().tamano,
                    doc.data().stock
                );
                productsArray.push(product);
            });
        });

        return res.json(productsArray);

    } catch (error) {
        return res.status(400).send(error.message);
    }
};

const updateProduct = async (req, res, next) => {
    try {
        let id = req.params.id;
        let data = req.body;
        let product = await firestore.collection('Products').doc(id);

        let updatedProduct = await product.update(data);

        return res.send(`Actualizado: ${updatedProduct}`)
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

const getBrands = async (req, res, next) => {
    try{
        const brands = await firestore.collection('Brands');
        const data = await brands.get();
        let brandsArray = [];
        if(data.empty) {
            return res.status(404).send('getBrands() => No Brands');
        } else {
            data.forEach( doc =>{
                let brand = new Brand(
                    doc.id,
                    doc.data().name
                );
                brandsArray.push(brand);
            });
            return res.json(brandsArray);
        }
    }catch (error) {
        return res.status(400).send(error.message);
    }
};

/**
 * Completa esta función para poner un producto disponible o no disponible
 */
const cambiarEstadoProducto = async (req, res, next) => {
    try {
        let id = req.params.id;
        let user = await firestore.collection('Users').doc(id).delete();
        return res.send(`Eliminando`)
    } catch (error) {
        return res.status(400).send(error.message);
    }
};


module.exports = {
    createProduct,
    getProducts,
    getProductById,
    getProductsByCategory,
    updateProduct,
    getBrands
}
