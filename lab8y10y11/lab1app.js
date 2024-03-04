const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const misRutas = require('./routes/gatos.routes.js');

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/modulo', misRutas);



app.listen(3000, () => {
  console.log('Servidor en el puerto 3000');
});