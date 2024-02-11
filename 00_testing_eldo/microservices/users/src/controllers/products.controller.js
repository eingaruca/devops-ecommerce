
const createProduct = (req, res) => {
    console.log(req.body)
    res.json(`Create products - Controller ${req.body.name}`);
};

const getProducts = (req, res) => {
    res.json('Get products - Controller');
};

const getProductsById = (req, res) => {
    res.json(`Get products by ID - Controller`);
};

const updateProduct = (req, res) => {
    res.json(`Update products - Controller`);
};

const deleteProduct = (req, res) => {
    res.json(`Delete products - Controller`);
};

module.exports = {
    createProduct,
    getProducts,
    getProductsById,
    updateProduct,
    deleteProduct
}
