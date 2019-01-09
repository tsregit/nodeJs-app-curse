require('./config/config');

const express = require('express')
    // Using Node.js `require()`
const mongoose = require('mongoose');
const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
//cada use es una MDW que siempre pasa por estas lineas

app.use(bodyParser.urlencoded({ extended: false }))
app.use(require('./routes/usuario'));

mongoose.connect(process.env.URL_DB, (err, res) => {
    // Este callback si no logra abrir la coneccion
    if (err) throw err;
    console.log('Base de datos online');
});

app.listen(process.env.PORT, () => console.log('Escuchando puerto 3000'));