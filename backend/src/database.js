const mongoose = require('mongoose');



console.log(process.env.MONGODB_URI)
const URI = process.env.MONGODB_URI;

mongoose.connect(URI,{
 useNewUrlparser: true,

});

const connection = mongoose.connection;

connection.once('open', () => {

    console.log('DB conectada');
});



