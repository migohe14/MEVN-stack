const express = require('express');
const app = express();

//Settings
//*process.env.PORT  Esta cogiendo el puerto que te da el sistema operativo
app.set('port', process.env.PORT || 3000);
//Middlewares


//Routes

//Static Files
//Enviamos carpeta public al navegador
app.use(express.static(__dirname + '/public'))


//Server is listenning
app.listen(app.get('port'), () => {
    console.log("Server en puerto", app.get('port'))
})