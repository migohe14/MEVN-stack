const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/mevn-database')
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));
//Settings
//*process.env.PORT  Esta cogiendo el puerto que te da el sistema operativo
app.set('port', process.env.PORT || 3000);
//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/tasks', require('./routes/tasks'));


//Static Files
//Enviamos carpeta public al navegador
app.use(express.static(__dirname + '/public'))


//Server is listenning
app.listen(app.get('port'), () => {
    console.log("Server en puerto", app.get('port'))
})