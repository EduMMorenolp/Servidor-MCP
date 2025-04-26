import express from 'express';
import calendario from './contexts/calendario.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Listar todos los contextos disponibles
app.get('/contexts', (req, res) => {
  res.json([
    {
      id: 'calendario',
      name: 'Calendario',
      description: 'Eventos del calendario personal'
    }
  ]);
});

// Devolver el contenido del contexto calendario
app.get('/contexts/calendario', (req, res) => {
  const data = calendario();
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Servidor MCP activo en http://localhost:${PORT}`);
});
