//configurar express
const express = require('express');
const app = express();
const port = 3000;

//configurar template engine
app.set('view engine', 'ejs');
app.set('views', './views');

//Ejemplo ruta raiz
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

app.get('/crear', (req, res) => {
    res.render('crear');
    });