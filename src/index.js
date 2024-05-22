import express from 'express';
import categoriasRoute from './routes/categorias.routes.js'
import indexRoute from './routes/index.routes.js'

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(categoriasRoute);
app.use(indexRoute);

app.listen(3001);
console.log("Server running on port 3001");