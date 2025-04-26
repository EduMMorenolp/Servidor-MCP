import eventos from '../data/eventos.json' assert { type: 'json' };

export default function calendario() {
  return {
    title: 'Calendario del usuario',
    updated_at: new Date().toISOString(),
    items: eventos
  };
}
