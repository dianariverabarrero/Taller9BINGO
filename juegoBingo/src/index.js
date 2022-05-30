const express = require('express');
//usar motor plantillas para vistas
const engine = require('ejs-mate');
const path = require('path');
const morgan = require('morgan');

const app = express();

//configuraciones, Utiliza el puerto de servicio que de el sistema operativo 
//sino al 3000
app.set('views', path.join(__dirname, 'views')); //dando ubicacion de views a nodejs
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); //recibir datos desde formulario


//Routes
app.use('/', require('./routes/index'));


//starting server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});

