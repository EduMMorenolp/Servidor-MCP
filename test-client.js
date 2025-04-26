import fetch from 'node-fetch';

const BASE_URL = 'http://localhost:3000';

async function probarMCP() {
  const headers = {
    'Authorization': 'Bearer mipassword123'
  };

  const lista = await fetch(`${BASE_URL}/contexts`, { headers });
  const contextos = await lista.json();
  console.log('Contextos disponibles:', contextos);

  const calendario = await fetch(`${BASE_URL}/contexts/calendario`, { headers });
  const eventos = await calendario.json();
  console.log('Contenido del contexto calendario:', eventos);
}

probarMCP();
