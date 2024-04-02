const express = require('express');
const app = express();
app.use(express.json());



const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));



const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));



const session = require('express-session');
app.use(session({
  secret: 'secreto que tiene que ser largo y aleatorio',
  resave: false, //la sesion no se guarda en cada peticion, sino solo si algo cambio
  saveUninitialized: false //para que no se guarde una sesion hasta que tengamos datos
}));



const cookieParser = require('cookie-parser');
app.use(cookieParser());

//Proteccion contra ataques CSRF
const csrf = require('csurf');
const csrfProtection = csrf();
app.use(csrfProtection);


const rutasUsuarios = require('./routes/users.routes');
app.use('/users', rutasUsuarios);


const misRutas = require('./routes/gatos.routes');
app.use('/', misRutas);



app.set('view engine', 'ejs');
app.set('views', 'views');


app.use((request, response, next) => {
  response.status(404);
  response.sendFile(path.join(__dirname, 'views', '404.html')); //Manda la respuesta
});


app.listen(3000, () => {
  console.log('Servidor en el puerto 3000');
});