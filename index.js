const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const router = jsonServer.router('db.json'); // Archivo JSON que actúa como base de datos
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use('/api', router);

// Si tienes un front-end, sirve los archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Maneja todas las demás rutas con un archivo de front-end
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Configuración del puerto
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
