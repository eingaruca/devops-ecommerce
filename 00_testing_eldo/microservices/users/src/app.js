const express = require('express');
const morgan = require('morgan');

const app = express();

//Products
const productRoutes = require('./routes/product.routes');

app.use(express.json());
app.use(morgan('dev')); // Para poder ver logs del uso en la consola

app.get('/', (req, res) => {
    // res.send('Inicio');
    res.json('Inicio');
});

app.use('/products', productRoutes);


module.exports = app;
