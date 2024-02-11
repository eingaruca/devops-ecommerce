const express = require('express');
const app = express();
const {matematicas} = require('../datos/cursos.js').infoCursos;
// Routers
const routerMatematicas = express.Router();
app.use('/api/cursos/matematicas', routerMatematicas);



routerMatematicas.get('/', (req, res) =>{
    res.send(JSON.stringify(matematicas));
} );



routerMatematicas.get('/:tema', (req, res) =>{
    const tema = req.params.tema;

    const resultados = matematicas.filter(curso => curso.tema === tema);

    if ( resultados.length === 0 ){
        return res.status(404).send(`No se encontraron cursos de ${tema}`);
    } else {
        res.send(JSON.stringify(resultados));
    }
    
} );


module.exports = routerMatematicas;