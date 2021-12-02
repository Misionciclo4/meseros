const {Router} = require('express');
const router = Router();

const {getProductos, createProducto, getProducto, deleteProducto, updateProducto} = require('../controllers/productos.controller')


router.route('/')
    //.get((req, res) => res.send('Productos Routes'))    
    .get(getProductos)
    //.post((req, res) => res.send('POST_Users Routes'))
    .post(createProducto);


router.route('/:id') 
    .get(getProducto)
    .put(updateProducto)
    .delete(deleteProducto)


module.exports = router;