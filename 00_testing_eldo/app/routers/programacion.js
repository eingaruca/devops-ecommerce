const express = require('express');
const app = express();

const {programacion} = require('../datos/cursos.js').infoCursos;

// Routers
const routerProgramacion = express.Router();
app.use('/api/cursos/programacion', routerProgramacion);



routerProgramacion.get('/', (req, res) =>{
    res.send(JSON.stringify(programacion));
} );

//Parámetro URL
routerProgramacion.get('/:lenguaje', (req, res) =>{
    const lenguaje = req.params.lenguaje;

    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje);

    if ( resultados.length === 0 ){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    } else {
        if ( req.query.ordenar === 'vistas' ) {
            res.send(JSON.stringify(resultados.sort((a,b) => b.vistas - a.vistas )));
        } else {
            res.send(JSON.stringify(resultados));
        }
    }
    
} );

routerProgramacion.get('/lenguaje/:nivel', (req, res) =>{
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;

    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

    if ( resultados.length === 0 ){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} y de nivel ${nivel}`);
    } else {
            res.send(JSON.stringify(resultados));
    }
    
} );

module.exports = routerProgramacion;