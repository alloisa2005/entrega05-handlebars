const express = require('express');
const productsRouter = require('./routes/products');

const app = express();

app.listen(8080, () => console.log('Server Up!!'));

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {  
  res.render('home');
})

app.use('/api/productos', productsRouter);

app.get('/*', (req, res) => {
  res.status(404).send({status: 'ERROR', result: 'Path not defined'});
});