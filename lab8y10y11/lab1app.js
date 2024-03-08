const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

const session = require('express-session');
const cookieParser = require('cookie-parser');

app.use(session({
  secret: 'secreto que tiene que ser largo y aleatorio',
  resave: false, //la sesion no se guarda en cada peticion, sino solo si algo cambio
  saveUninitialized: false //para que no se guarde una sesion hasta que tengamos datos
}));

app.use(cookieParser());

const rutasUsuarios = require('./routes/users.routes');
app.use('/users', rutasUsuarios);


const misRutas = require('./routes/gatos.routes');

//Middleware
app.use('/', misRutas);

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');




app.listen(3000, () => {
  console.log('Servidor en el puerto 3000');
});