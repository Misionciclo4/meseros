const express = require('express');
const cors = require('cors');

const app =  express();


//CONFIGURACION
app.set('port', process.env.PORT || 4000);



//MIDDLEWARES
app.use(cors());
app.use(express.json());


//ROUTES

//app.get('/api/users',(req, res) => res.send('User Routes'))
//app.get('/api/productos',(req, res) => res.send('Productos Routes'))
app.use('/api/users',require('./routes/users'))
app.use('/api/productos',require('./routes/productos'))




module.exports = app;
