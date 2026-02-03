import { withCors } from './lib/cors.js';

const handler = async (req, res) => {
  // Endpoint de salud de la API
  if (req.method === 'GET') {
    return res.status(200).json({
      message: 'API Onboarding funcionando 🚀',
    });
  }

  return res.status(404).json({
    message: 'Ruta no encontrada',
  });
};

export default withCors(handler);
