const express = require('express');
const app = express();
const config = require('./config.js');
const apiRouter = require('./routes');

app.use(express.json());

app.get('/prueba', (req, res) => {
    res.send('funciona la preuba ');
})


apiRouter(app);

app.listen(config.api.port, () => {
    console.log('Corriendo por el puerto: ' + config.api.port);
})

