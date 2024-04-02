const express = require('express');
const app = express();
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'views');

const session = require('express-session');
app.use(session({
  secret: 'secreto que tiene que ser largo y aleatorio',
  resave: false, //la sesion no se guarda en cada peticion, sino solo si algo cambio
  saveUninitialized: false //para que no se guarde una sesion hasta que tengamos datos
}));

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const multer = require('multer');

//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'public/uploads');
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, Number(new Date()).toString() + file.originalname);
    },
});

app.use(multer({ storage: fileStorage }).single('imagen')); 

//Proteccion contra ataques CSRF
const csrf = require('csurf');
const csrfProtection = csrf();
app.use(csrfProtection);


const rutasUsuarios = require('./routes/users.routes');
app.use('/users', rutasUsuarios);


const misRutas = require('./routes/gatos.routes');
app.use('/', misRutas);



app.use((req, res, next) => {
  res.status(404).send('No pudimos encontrar lo que estabas buscando.');
});


app.listen(3000, () => {
  console.log('Servidor en el puerto 3000');
});