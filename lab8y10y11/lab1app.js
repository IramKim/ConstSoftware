const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

const misRutas = require('./routes/gatos.routes');
app.use('/', misRutas);

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');


app.listen(3000, () => {
  console.log('Servidor en el puerto 3000');
});