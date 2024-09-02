// const express = require('express');
// const jsonServer = require('json-server');

// const app = express();
// const router = jsonServer.router('db.json'); // Archivo JSON que actúa como base de datos
// const middlewares = jsonServer.defaults();

// app.use(middlewares);
// app.use('/api', router);

// // Configuración del puerto
// const port = process.env.PORT || 3001;
// app.listen(port, () => {
//   console.log(`Servidor corriendo en el puerto ${port}`);
// });

const express = require('express');
const jsonServer = require('json-server');

const app = express();
const router = jsonServer.router({ mensajes: [] }); // Inicia con datos vacíos en memoria
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use('/api', router);

// Configuración del puerto
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

