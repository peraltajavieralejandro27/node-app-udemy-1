const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

const options = {
  nombre: 'Alicia',
  titulo: ' Odiotodo'
}

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// Ejecutar middleware para servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', options);
});

app.get('/generic', (req, res) => {
  res.render('generic', options);
});

app.get('/elements', (req, res) => {
  res.render('elements', options);
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
});

app.listen(port, () => {
  console.log('App listening on port ' + port)
});
