import express from 'express';
import calendario from './contexts/calendario.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware de autenticación (simple, por header)
app.use((req, res, next) => {
  const token = req.headers['authorization'];
  if (token !== 'Bearer mipassword123') {
    return res.status(401).json({ error: 'No autorizado' });
  }
  next();
});

// Endpoint: lista de contextos
app.get('/contexts', (req, res) => {
  res.json([
    {
      id: 'calendario',
      name: 'Calendario',
      description: 'Eventos programados del usuario'
    }
  ]);
});

// Endpoint: obtener un contexto
app.get('/contexts/calendario', (req, res) => {
  const data = calendario();
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`🧠 MCP Server listo en http://localhost:${PORT}`);
});
